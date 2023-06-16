---
description: |
  Notes de réunion autour des PRs ouvertes, Hive et un projet de setup.
---

# Notes de réunions du 16 juin 2023

## Pull Requests

- [hadoop-old#4](https://github.com/TOSIT-IO/hadoop-old/pull/4): @rpignolet doit commenter à la PR.
incubator-livy-fork#1: Discussion ouverte sur la version de Livy à utiliser. Spark3 n'est supporté par Livy qu'à partir de la 0.8, qui n'est pas releasé (SNAPCHOT).
- [TDP#77](https://github.com/TOSIT-IO/TDP/pull/77): À corriger.
- [TDP#78](https://github.com/TOSIT-IO/TDP/pull/78): Mergée.
- [tdp-collections-extras#124](https://github.com/TOSIT-IO/tdp-collection-extras/pull/124): PR à review.
- [tdp-collection-prerequisites#76](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/76): Beaucoup de débats sur l'utilisation ou non de `alternatives`. Revient sur la philosophie de ne pas toucher au système hote mais peut être mergé comme dans `tdp-collection-prerequisites`.
- [tdp-lib#321](https://github.com/TOSIT-IO/tdp-lib/pull/321): Première feature de l'issue [#308](https://github.com/TOSIT-IO/tdp-lib/issues/308) implémentée, sur la dissociation de la planification et de l'exécution. PR à review.
- [tdp-getting-started#275](https://github.com/TOSIT-IO/tdp-getting-started/pull/275): Modifications apportées, à review à nouveau.
- [TDP#80](https://github.com/TOSIT-IO/TDP/pull/80): À review.
- [TDP#81](https://github.com/TOSIT-IO/TDP/pull/81): À review par une seconde personne.
- [TDP#82](https://github.com/TOSIT-IO/TDP/pull/82): Mergée.
- [tdp-lib#326](https://github.com/TOSIT-IO/tdp-lib/pull/326): À review.
- [tdp-lib#327](https://github.com/TOSIT-IO/tdp-lib/pull/327): À adapter après le merge de tdp-lib#318
- [tdp-collection-extras#128](https://github.com/TOSIT-IO/tdp-collection-extras/pull/128): Draf, les participants sont ok pour ajouter Nifi à `tdp-collection-extras`.
- [tdp-collection-extras#130](https://github.com/TOSIT-IO/tdp-collection-extras/pull/130): À review.

## Sujets libres

- @kpgtek Bug de Hive: Suite à la pr [hive-old#5](https://github.com/TOSIT-IO/hive-old/pull/5), toutes les tables de Hive sont passées en majuscules. Cependant, Hive v3.x utilise encore un certain nombre de tables en minuscules. Le binaire releasé avec la 1.0 (`apache-hive-3.1.3-1.0-bin.tar.gz`) intègre cette PR, ce build n'a pas été testé dans tous les environnements. Un bug est apparu mais n'a pas pu être reproduit par certains participants en utilisant `tdp-getting-started` (cf [hive#7](https://github.com/TOSIT-IO/hive/issues/7)). @Pierrotws va tester Hive 3.1.4 et éventuellement réaliser des patchs incrémentaux.
- @Pierrotws Version de Hadoop: Utiliser dès maintenant `3.1.4-1.0` pour Hadoop 3.1.4 sur tdp 1.1.
- @PACordonnier tdp-setup: Besoin d'avoir un projet pour aider à la création d'un environnement TDP en s'appuyant sur le système de releases. Le setup doit faire un check des prérequis du TDP manager mais ne pas les installer (Python et Ansible nottament), télécharger les releases (à la place des Git submodules), générer les configurations etc.

  Propositions:

  - Faire un script
  - Écrire une doc
  - Faire un projet dédié au déploiement de tdp en mode utilisateur, avec une version stable. `tdp-getting-started` deviendrait un environnement de développement uniquement.
  - Proposer une VM

  @PACordonnier va proposer un script dans un premier temps. La question se posera de le publier ou non car étant trop spécifique aux organisations du TOSIT.
