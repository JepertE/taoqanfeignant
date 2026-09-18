# Taoqanfeignant

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

Bonjour, ce dépôt garde le code source du site web (https://taoqan-feignant.pages.dev/) qui compte le nombre de jours sans vidéo de la part de Taoqan (https://www.youtube.com/@taoqan).
Il sert principalement à mettre en valeur quand Tao manque de POGNON 🤑🤑🤑!

## Sommaire

* [Description](#description)
* [Quèsaco ???](#quèsaco-)
  * [Maintenance du site](#maintenance-du-site)
  * [Comment ne pas casser le site web ?](#comment-ne-pas-casser-le-site-web-)
  * [Téléchargement](#téléchargement)
  * [Édition du code](#édition-du-code)
  * [Exécution du programme](#exécution-du-programme)
* [Aide](#aide)
* [Participants](#participants)
* [Versions](#versions)
* [Droits](#droits)
* [Info](#info)

## Description

Le principe est simple, une date de référence qui est celle de la dernière vidéo connue de Taoqan est stockée dans le code. Le site calcule combien de jours entre cette date et maintenant. Il affiche le résultat bien en évidence en rouge.
Ce chiffre n'apparaît pas que sur la page elle-même, il est aussi dans l'aperçu qui s'affiche quand le lien est partagé sur Twitter, Discord, ou autre part. Partager le lien, c'est donc automatiquement partager le compteur à jour, sans rien faire de plus.
Le jour où une nouvelle vidéo sort enfin, le site s'en aperçoit tout seul et propose de déclencher une alarme pour l'événement comme il se doit.
Ce projet est né d'une famine de vidéo, il ne devrait pas être pris au sérieux.

## Quèsaco ???

### Maintenance du site

* Git, Github et Cloudflare assurent que le site est déployé.
* Moi-même, je n'ai pas d'héritier donc ce projet tombe avec moi !
* Rien d'autre car pas de framework, pas de gestionnaire de paquets, pas d'étape de build

### Comment ne pas casser le site web ?

* Autorisez le JavaScript, il est public donc normalement vous pouvez vérifier si je suis un méchant très méchant 😈...
* Autorisez la lecture automatique, comment je suis supposé briser vos oreilles quand Taoqan sort une vidéo si le lecteur du navigateur ne m'écoute pas.
* Mettez à jour votre navigateur.
* Nettoyez le cache.
* Demandez-moi directement de l'aide !

### Téléchargement

* Ce dépôt contient tous les fichiers, si je n'ai pas mal mis mes permissions alors il devrait être à votre disposition. Ce dépôt est censé être clonable.
* Ayez la mémoire et le stockage minimum ; 512MB DDR3 et 64MB libre HDD/SSD (estimation).
* Une Cloudflare Pages Function (functions/[[data]].js) est présente, qui ne s'exécute que sur un vrai déploiement Cloudflare, jamais en ouvrant les fichiers directement.

### Édition du code

* Avoir un programme qui permet de modifier ou observer le HTML, JS et CSS.
* Avoir un programme qui permet de débugger.
* Me demander le changement si c'est important.
Je travaille seul mais this_is_not_a_trap est libre de m'aider pour le JS.

### Exécution du programme

* En local, un serveur simple suffit mais l'extension Live Server de VS Code fonctionne
* En production, un simple push vers la branche connectée déclenche un déploiement automatique sur Cloudflare Pages

```bash
git status
git add .
git commit -m "skibidi"
git push origin main
```

<details>
<summary>

## Aide

</summary>

* Le favicon ou le manifest ne se chargent pas en local : ça arrive en ouvrant `index.html` directement depuis l'explorateur de fichiers (`file:///...`). Les chemins commençant par `/` supposent un vrai serveur web. Utiliser Live Server ou truc similaire règle le problème.

* Le compteur affiche un chiffre inattendu en local : Cloudflare ne tourne pas en dehors d'un vrai déploiement. Le script client bascule alors sur son propre calcul de secours mais indépendant de ce que la Function calculerait en production.

En message privé uniquement !
* https://x.com/VeryCursedMan

</details>

## Participants

* [@VeryCursedMan](https://twitter.com/VeryCursedMan) - Moi
* this_is_not_a_trap - `[[data]].js`
* ArtaFlame_ et Qrinolia - participation à la conception initiale

<details>
<summary>

## Versions

</summary>

* Build 1 : Squelette du site web
* Build 2 : CSS
* Build 3 : Script pour compter
* Build 4 : Migration vers Cloudflare et ses Pages Functions
* Build 5 : Embed
* Build 6 : Icon
* Build 7 : Alerte vidéo\
(C'est visible sur l'html, par contre les builds avant le 7 sont indisponibles car j'ai dû hard reset pour me préserver.)
</details>

## Droits

Le code de ce projet est public et librement réutilisable, sous licence MIT — voir [`LICENSE.md`](LICENSE.md) pour le texte complet.

L'image `Slander.png` fait exception : elle est utilisée avec l'autorisation de Taoqan, mais cette autorisation ne s'étend pas à d'autres usages. Pour la réutiliser en dehors de ce projet, l'autorisation doit être demandée directement à Taoqan, pas à moi.

## Info

Ce site se moque gentiment d'un créateur de contenu réel, dans un esprit de méchanceté amicale, le contexte est à garder. Merci.
