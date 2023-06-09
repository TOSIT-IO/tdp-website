# Build and release

## TDP Components release

Every TDP initial release is built from a reference branch on the Apache Git repository according to the above tables. The main change from the original branches is the version declaration in the pom.xml files.

## Building / Testing environment

The builds / unit testing of the Maven Java projects of each component above can be run in Kubernetes pods which are scheduled by a Jenkins installation also running on Kubernetes.
Kubernetes pods scheduling allows for **truly** reproducible and isolated builds. Jenkins' strong integration with the Java ecosystem is a perfect match to build the components of the distribution.

### Build order

- hadoop
- tez
- hive1
- spark
- hive2
- spark3
- hive
- hbase
- ranger
- phoenix
- phoenix-queryserver
- knox

### Kubernetes

Kubernetes was installed on Ubuntu 20.04 Virtual Machines with [kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/).

**Note:** It is strongly recommended to deploy a Storage Class in order to have persistence on the Kubernetes cluster (useful for Jenkins among others). In our case, we are using [Rook](https://rook.io/) on physical drives attached to the Kubernetes cluster's VMs.

### Jenkins

Jenkins is used to trigger the builds which is the same process for every component of the stack:

- Git clone the sources
- Build the project
- Run the unit tests
- Publish the artifacts to a remote repository

Jenkins was installed on the Kubernetes cluster with the official [jenkinsci Helm chart](https://github.com/jenkinsci/helm-charts).

### Nexus / Docker registry

The building environment needs multiple registries:

- Maven to host the compiled Jars
- Docker to host the images that we use to build the projects
- File registry to host the .tar.gz files with the binaries and jars for every compiled projects.

Nexus Repository OSS can assume all three roles, is free and open source.

Nexus OSS was install on the Kubernetes cluster with the [helm chart](https://github.com/Oteemo/charts/tree/master/charts/sonatype-nexus) provided by [Oteemo](https://github.com/Oteemo).

## Local build environment

It is possible to run a local environment for building / small scale testing.

Prerequisite:

- Docker installed and available to your local user

You can start a local building environment with the `bin/start-build-env.sh` script.

**Note:** See `build-env/README.md` for details.

To build TDP component binaries, attach to the running `tdp-builder` container and `git clone` the TDP component repository to it. Each TDP component's `tdp/README.md` has custom instructions to launch the build process.
Assign a directory path to the `TDP_HOME` variable in the `bin/start-build-env.sh` to control the local path of built TDP binaries.
