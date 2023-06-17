---
nav_title: Architecture
---

# Components architecture

## Overview

TDP is an open-source data management platform that provides a comprehensive set of tools and services for storing, processing, and analyzing large datasets. It is built on top of the Apache Hadoop ecosystem and other open-source projects, and it enables organizations to effectively manage their big data workloads.

![TDP architecture schema](https://raw.githubusercontent.com/TOSIT-IO/tdp-website/feat/david-page-architecture/content/assets/architecture.png)

## Key components

### HDFS

Apache HDFS (Hadoop Distributed File System) is a distributed storage system that provides a reliable and scalable way to store and manage large amounts of data across multiple machines in a Hadoop cluster. It breaks down data into blocks and replicates them across different nodes for fault tolerance and efficient data processing.

### YARN

Apache YARN (Yet Another Resource Negotiator) is a cluster resource management system that allows for efficient utilization of resources in a Hadoop cluster. It acts as the central component responsible for managing and allocating resources to various data processing frameworks, such as Apache Spark, Apache Hive, and Apache Flink, enabling them to run concurrently and effectively utilize the available cluster resources for executing data processing tasks.

### Hive

Hive is a data warehouse infrastructure built on top of Hadoop. It provides a SQL-like query language (HiveQL) and allows users to perform ad-hoc queries and analysis on the data stored in Hadoop.

### Spark

Apache Spark is a distributed, fast and general-purpose cluster computing engine that provides in-memory data processing capabilities. It supports various data processing tasks such as batch processing, real-time streaming, machine learning, and graph processing.

### HBase

Apache HBase is a distributed, scalable, and consistent NoSQL database that handle large amounts of structured data. It provides random read and write access to data stored in HDFS.

### Airflow

Apache Airflow is a powerful open-source platform designed for programmatically creating, scheduling, and monitoring workflows. With Airflow, users can define complex workflows as code, set task dependencies, and automate the execution of tasks. It offers a web-based user interface that allows easy management and visualization of workflows. Airflow is widely used for data pipeline orchestration, ETL processes, and workflow automation in the data engineering and data science domains.

## Security components

### Knox

Apache Knox serves as a secure gateway for Apache Hadoop clusters and other big data systems. It acts as a reverse proxy, providing a unified entry point for accessing cluster resources. It offers features like identity federation, SSL/TLS encryption, authentication, and authorization mechanisms to safeguard the cluster from unauthorized access.

### Ranger

Apache Ranger is a comprehensive security framework designed for Apache Hadoop and other big data ecosystems. It provides centralized security administration and fine-grained access control to ensure data protection and privacy. With Ranger, administrators define and manage security policies, access control lists (ACLs), and role-based access control (RBAC). It offers advanced features like row-level filtering and dynamic data masking based on user permissions. Additionally, Ranger provides auditing and monitoring capabilities, enabling organizations to track user activities and maintain regulatory compliance.
