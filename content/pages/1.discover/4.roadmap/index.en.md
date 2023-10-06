
# Roadmap

Present the current work in progress (WIP) and ongoing discussion about the current and futures actions engaged by the community.

## TDP Website

The website was published with a new design recently. The current efforts includes the redaction of documentation to support administrators and developers who wish to evaluate the platform. Improved [installation instructions](https://github.com/TOSIT-IO/TDP/pull/88) are being prepared. Once the documentation reaches a higher level of maturity, additional information will address production environments to operate and leverage the platform.

## TDP Stack

The stack refers to a specific combination of software components, their versions, and their configurations that are tested and certified to work together as a unified platform. Each release of TDP is associated with a particular stack version, which specifies the exact versions of individual components included in that release. This ensures compatibility and stability, making it easier for organizations to deploy and manage their big data infrastructure without worrying about potential conflicts or issues that can arise from mixing and matching different component versions.

Version 1.1 is currently in active development. We are targeting an overall version upgrade of all the components shipped in TDP with a focus on stability and smooth integration.

The work on the next release (maybe version 2) will start once 1.1 is available. Historically, version 1.0 was aligned with the versions present inside the Hortonworks/Cloudera HDP distribution. Version 1.1 introduces some minor upgrades. With version 2, the aim is to integrate the latest major versions and features of the supported components. 

## TDP Lib

TDP lib is the orchestration tools used to deploy and operate the TDP platform. It is a low level component driven by TDP UI and TDP CLI.

Current work includes features for [operating a running cluster](https://github.com/TOSIT-IO/tdp-lib/issues/308) such as:

- Deployment plan should be desynchronized from the actual deployment
- TDP Lib execution is limited to reading a deployment plan and executes declared operations
- Deployments can be limited to a single host or a group of host
- Operations can be launched one host at a time in rolling fashion
- State of a configuration on a host is stored in a database, whether it's synchronized or stale.

## TDP Server

TDP server exposes TDP Lib as a REST service over the HTTP protocol. Work on TDP server is pending on TDP Lib work.

## TDP UI

TDP UI exposes all the features of the Lib on a Web UI (through TDP Server). Work on TDP UI is pending on TDP Lib and TDP Server.

Ergonomics and accessibility of the UI will follow [RGAA 4.1 guidelines](https://accessibilite.numerique.gouv.fr/doc/RGAA-v4.1.pdf).
## TDP Collection

TDP collection follows the stack definition and reflects the supported components and features of TDP. TDP collection also improves on new functionnalities such as the support of heterogeneous infrastructures.

## TDP Observability

TDP Observability is a monitoring stack that gravitates around the platform. Current work includes developing new ansible roles for installing software instead of relying on community's that doesn't suit our needs.
