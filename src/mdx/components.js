import { Code } from './components/Code.js'

const Components = {
  h1: () => (
    <div>
      WARNING: heading 1 are handled by the template, only one is accepted at
      the begining of a page.
    </div>
  ),
  code: Code,
}

export default Components
