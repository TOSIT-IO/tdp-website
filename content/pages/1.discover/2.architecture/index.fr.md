---
nav_title: Architecture
---

# Architecture et composants de la plateforme

TDP est une plate-forme de gestion de données open source qui fournit un ensemble complet d'outils et de services pour le stockage, le traitement et l'analyse de grands ensembles de données. Il est construit sur l'écosystème Apache Hadoop et d'autres projets open source, et il permet aux organisations de gérer efficacement leurs traitements Big Data.

## Composants du socle

### HDFS

Apache HDFS (Hadoop Distributed File System) est un système de stockage distribué qui fournit un moyen fiable et évolutif de stocker et de gérer de grandes quantités de données sur plusieurs machines dans un cluster Hadoop. Il décompose les données en blocs et les réplique sur différents nœuds pour assurer la tolérance aux pannes et optimiser les performances.

### YARN

Apache YARN (Yet Another Resource Negotiator) est un système de gestion des tâches qui permet une utilisation efficace des ressources dans un cluster Hadoop. Il agit en tant que composant central responsable de la gestion et de l'allocation des ressources à divers frameworks de traitement de données, tels qu'Apache Spark, Apache MapReduce et Apache Flink, leur permettant la distribution des traitements et l'utilisation efficace des ressources disponibles.

### Hive

Hive est une infrastructure d'entrepôt de données construite sur Hadoop. Il repose sur le langage de requête SQL (HiveQL) et permet aux utilisateurs d'effectuer des requêtes et des analyses ad hoc sur les données stockées dans Hadoop.

### Spark

Apache Spark est un moteur de calcul distribué, rapide et polyvalent qui fournit des capacités de traitement de données en mémoire. Il prend en charge différents cas d'usage telles que le traitement par batch, le streaming en temps réel, l'apprentissage automatique et le parcours de graphes.

### HBase

Apache HBase est une base de données NoSQL distribuée, évolutive et cohérente qui gère de grandes quantités de données structurées. Il permets des accès aléatoires en lecture et en écriture aux données stockées dans HDFS.

### Airflow

Apache Airflow est une plate-forme open source conçue pour créer, planifier et surveiller des tâches. Avec Airflow, les utilisateurs conçoivent des flux de travail complexes sous forme de code, définissent des dépendances de tâches et automatisent l'exécution des tâches. Il offre une interface Web conviviale de gestion et de visualisation. Airflow est largement utilisé pour l'orchestration des pipelines de données, les processus ETL et l'automatisation des flux de travail dans les domaines de l'ingénierie des données et de la science des données.

## Composants de sécurité

### Knox

Apache Knox sert de passerelle sécurisée pour les clusters Apache Hadoop et d'autres systèmes de Big Data. Il agit comme un reversed-proxy, fournissant un point d'entrée unifié pour accéder aux ressources du cluster. Il offre des fonctionnalités telles que la fédération d'identité, le chiffrement SSL/TLS, l'authentification et les mécanismes d'autorisation pour protéger le cluster contre tout accès non autorisé.

### Ranger

Apache Ranger est une infrastructure de sécurité complète conçue pour Apache Hadoop et d'autres écosystèmes Big Data. Il fournit une administration centralisée pour la gestion des règles de sécurité et un contrôle d'accès précis pour assurer la protection et la confidentialité des données. Avec Ranger, les administrateurs définissent et gèrent les politiques de sécurité, les listes de contrôle d'accès (ACL) et le contrôle d'accès basé sur les rôles (RBAC). Il offre des fonctionnalités avancées telles que le filtrage à l'échelle des lignes et le masquage dynamique des données en fonction des autorisations des utilisateurs. De plus, Ranger fournit des capacités d'audit et de surveillance, permettant aux organisations de suivre les activités des utilisateurs et de maintenir la conformité réglementaire.
