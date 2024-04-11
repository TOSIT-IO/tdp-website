
# Fonctionnalités

Déploiement automatique : déploiement automatique avec des standards DevOps accessibles à la fois pour l’utilisation et la contribution en se basant principalement sur des collections Ansible.

Maîtrise du cycle de Build : nous proposons une image docker avec toutes les dépendances et commandes requises afin de lancer des builds automatiques sur toutes les technologies de TDP Core.

Gestion de cycle de vie des composants : grâce à TDP Manager, vous aurez une gestion complète de tous les services et composants de TDP Core en prenant en compte leurs dépendances sur l’ensemble des opérations telles que la gestion de la configuration, l'arrêt et le démarrage des services, ...

Intégration : une fois TDP installé, vous aurez une intégration native entre tous les composants et la possibilité de connecter la plateforme au système d'information en place.

Multi Tenancy : tous les services et composants de TDP sont intégrés avec une configuration permettant l’hébergement de plusieurs applications, utilisateurs et projets sur le même cluster avec une forte segmentation en termes de sécurité et de gestion des ressources.

Gestion des ressources statiques et dynamiques : une centralisation et une unification de la gestion de toutes les ressources (mémoire, cpu, disques, ports, ...) entre les composants.

Haute disponibilité : TDP offre un mode de déploiement en haute disponibilité permettant d’avoir une forte résilience suite à la perte d’un équipement physique (e.g. disque, machine, rack, équipement réseau, ...).

Sécurité : TDP suit le principe que toute fonctionnalité est sécurisée par default. Les accès sont sécurisés avec Kerberos et LDAP. Les données en transfert sont chiffrées avec SSL/TLS. Les données au repos sont chiffrées grâce à l'intégration de Ranger KMS.

Monitoring : toutes les métriques applicatives sont exposées à travers des ports JMX permettant une intégration simplifiée avec votre système de monitoring ou par le projet [tdp-observability](https://github.com/TOSIT-IO/tdp-observability).

Logs Management : une standardisation de la gestion des logs sur l’ensemble des technologies de la stack avec une rotation automatique et des options avancées afin de simplifier leur intégration avec votre système de gestion des logs ou le projet [tdp-observability](https://github.com/TOSIT-IO/tdp-observability). 
