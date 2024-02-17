#!/usr/bin/env node

/**
 * This script automates the generation of meeting reports for TOSIT-IO's open pull requests.
 * It fetches pull request data from GitHub, formats it, and creates a Markdown report file in a new branch.
 */

import fs from 'node:fs/promises'
import { fileURLToPath } from 'url'
import { exec as execCallback } from 'node:child_process'
import { promisify } from 'node:util'

const exec = promisify(execCallback)

const reportsDirectory = 'content/reports'
const reportType = 'contributors'
const pullsURL =
  'https://api.github.com/search/issues?q=is:pr+user:TOSIT-IO+is:open+sort:created-asc'

const formatCurrentDate = (date) =>
  new Date(date)
    .toLocaleString('fr', { year: '2-digit', month: '2-digit', day: '2-digit' })
    .split('/')
    .reverse()
    .join('')

async function checkoutNewBranch(branchName) {
  try {
    const currentBranch = (
      await exec('git branch --show-current')
    ).stdout.trim()
    if (currentBranch !== branchName) {
      try {
        await exec(`git checkout ${branchName}`)
      } catch (error) {
        if (error.stderr.includes('did not match any file(s) known to git')) {
          await exec(`git checkout -b ${branchName}`)
        } else {
          throw error
        }
      }
    }
  } catch (error) {
    console.error('Failed to checkout new branch:')
    console.error(error.stderr)
  }
}

async function fetchPulls() {
  try {
    const pulls = await fetch(pullsURL)
    return pulls.json()
  } catch (error) {
    console.error('Failed to fetch pulls:', error)
    return []
  }
}

function formatPulls(pulls) {
  if (!pulls || pulls.total_count === 0) {
    return ''
  }
  return pulls
    .map((pull) => {
      const { number, title, html_url: url } = pull
      const repo = pull.repository_url.split('/').pop()
      return `- [${repo}#${number}](${url}): <!-- status of "${title}" -->`
    })
    .join('\n')
}

function generateReportContent(pullsDetails, currentDate, reportType) {
  return `---
type: ${reportType}
description: |
  <main topics of the meeting>
---

# Notes from <month> <day>, <year>

<!-- general notes, includes the most relevant discussed topics -->

## Pull Requests

Weekly review of open PRs (in chronological order):

${pullsDetails}

## Open topics

<!-- open topics -->
`
}

try {
  const rootDirURL = new URL('..', import.meta.url)
  const repoPath = fileURLToPath(rootDirURL)
  const currentDate = new Date()
  const dateStr = formatCurrentDate(currentDate)
  // Change directory to the root of the repo
  try {
    process.chdir(repoPath)
  } catch (error) {
    console.error('Failed to change directory:', error)
  }
  // Checkout a new branch for the report
  await checkoutNewBranch(`${dateStr}-${reportType}-report`)
  // Fetch and format the pull requests
  const pulls = await fetchPulls()
  if (!pulls || pulls.total_count === 0) {
    console.log('No pull requests to report')
  }
  const pullsDetails = formatPulls(pulls.items)
  // Generate and write the report
  const reportContent = generateReportContent(
    pullsDetails,
    currentDate,
    reportType
  )
  const reportBaseName = `${dateStr}-${reportType}.md`
  const reportBaseDirURL = new URL(reportsDirectory, rootDirURL)
  const reportBaseDirPath = fileURLToPath(reportBaseDirURL)
  const reportPath = `${reportBaseDirPath}/${reportBaseName}`
  try {
    await fs.writeFile(reportPath, reportContent)
    console.log(
      `${reportsDirectory}/${reportBaseName} has been created with ${pulls.total_count} pending PRs`
    )
  } catch (error) {
    console.error('Failed to write report:', error)
  }
} catch (error) {
  console.error('Unexpected error:', error)
}
