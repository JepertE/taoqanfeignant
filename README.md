# TaoqanFeignant

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

Bonjour, ce dépôt garde le code source du site web [Taoqan-Feignant](https://taoqan-feignant.pages.dev/), un site humoristique qui compte le nombre de jours écoulés depuis la dernière vidéo publiquement connue de [Taoqan](https://www.youtube.com/@taoqan).

Il s'agit d'un projet de fan non officiel, sans affiliation officielle à Taoqan. Le compteur est humoristique : il ne prétend pas décrire sa situation financière, sa vie privée ou ses motivations.

## Sommaire

* [Description](#description)
* [Quèsaco ???](#quèsaco-)
  * [Maintenance du site](#maintenance-du-site)
  * [Comment ne pas casser le site web ?](#comment-ne-pas-casser-le-site-web-)
  * [Téléchargement](#téléchargement)
  * [Édition du code](#édition-du-code)
  * [Exécution du programme](#exécution-du-programme)
  * [Aide](#aide)
  * [Versions](#versions)
* [Droits et licenses](#droits-et-licenses)
* [Participants](#participants)
* [Info](#info)

## Description

Le site calcule le nombre de jours depuis une date de référence correspondant à la dernière vidéo connue de Taoqan. Le résultat est affiché sur la page et dans l'aperçu affiché lorsqu'un lien est partagé.

Le site propose également une alarme sonore associée à l'événement d'une nouvelle vidéo. Le projet est humoristique et ne doit pas être pris comme une déclaration factuelle sur la vie personnelle ou la situation financière de Taoqan.

## Quèsaco ???

### Maintenance du site

- GitHub et Cloudflare Pages assurent le stockage du code et le déploiement du site.
- Le projet n'utilise pas de framework, de gestionnaire de paquets ni d'étape de compilation particulière.

### Comment ne pas casser le site web ?

- JavaScript doit être autorisé pour que les fonctions du site marchent.
- La lecture audio doit être autorisée ou déclenchée par une action de l'utilisateur, selon les règles du navigateur.
- Utilisez un navigateur à jour et, en cas de problème, essayez de vider le cache.
- En cas de difficulté, contactez le mainteneur (voir [Aide](#aide)).

### Téléchargement

- Le dépôt contient le code source et les fichiers nécessaires au projet. Certains fichiers d'illustration et d'audio sont soumis à des conditions de licence distinctes, décrites dans [`LICENSE.md`](LICENSE.md).
- Configuration indicative minimale : 512 Mo de RAM et 64 Mo d'espace disque libre (estimation non garantie).
- Une Cloudflare Pages Function (`functions/[[data]].js`) s'exécute lors d'un déploiement sur Cloudflare ; elle ne fonctionne pas en ouvrant directement les fichiers depuis l'explorateur (`file:///`).

### Édition du code

- Un éditeur permettant de modifier le HTML, le JavaScript et le CSS est suffisant.
- Des outils de débogage peuvent aider en cas de problème.
- Pour proposer une modification importante, contactez le mainteneur.
- Le mainteneur travaille principalement seul ; `this_is_not_a_trap` peut l'aider sur le JavaScript.

### Exécution du programme

- En local, un serveur web simple suffit ; l'extension Live Server de Visual Studio Code convient également.
- En production, un push vers la branche reliée à Cloudflare Pages déclenche normalement un déploiement automatique.

```bash
git status
git add .
git commit -m "test"
git push origin main
```

<details>
<summary>
<h3>Aide</h3>
</summary>

- Si le favicon ou le manifest ne se charge pas en local, évitez d'ouvrir directement `index.html` via `file:///`. Les chemins commençant par `/` supposent un serveur web. Utilisez Live Server ou un serveur similaire.
- Le compteur peut afficher une valeur différente en local : Cloudflare ne s'exécute pas en dehors d'un véritable déploiement Cloudflare. Le script client utilise alors un calcul de secours.

En message privé uniquement !
* https://x.com/VeryCursedMan
</details>

<details>
<summary>
<h3>Versions</h3>
</summary>

* Build 1 : Squelette du site web
* Build 2 : CSS
* Build 3 : Script pour compter
* Build 4 : Migration vers Cloudflare et ses Pages Functions
* Build 5 : Embed
* Build 6 : Icon
* Build 7 : Alerte vidéo
* Build 8 : Info bonus\
Les indications de build dans la page sont informatives et ne constituent pas un historique technique exhaustif.
</details>

## Droits et licences

Le code source et la documentation du projet sont proposés sous licence MIT, sous réserve des exceptions listées dans [`LICENSE.md`](LICENSE.md). **Le badge MIT ne signifie pas que tous les fichiers médias du dépôt sont eux aussi sous licence MIT.**

- `Slander.png` : illustration ou montage utilisé par le projet. Ce fichier est exclu de la licence MIT ; les droits applicables dépendent de son origine et des éventuels éléments qu'il contient. Aucune permission générale de réutilisation de ce fichier n'est accordée par la licence MIT.
- Les icônes (`favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`) : le mainteneur indique qu'elles ont été réalisées à partir de la photo de profil de Taoqan et que cette utilisation a son accord. Elles sont exclues de la licence MIT ; leur réutilisation nécessite de vérifier les droits sur la photo et les éléments incorporés.
- `alarme.mp3` : « Evacuation Alarm #3 », enregistré par Axeline T. et publié sur BigSoundBank. La fiche de la source indique une licence CC0, qui autorise notamment la redistribution. Source : [fiche du son](https://bigsoundbank.com/evacuation-alarm-3-s3413.html) ; [conditions de licence de BigSoundBank](https://bigsoundbank.com/licenses.html). Le fichier audio reste soumis à cette licence CC0, et non à la licence MIT du code.

Si vous êtes l'auteur ou l'ayant droit d'un élément et pensez qu'un crédit doit être ajusté ou qu'un retrait est nécessaire, contactez le mainteneur via la section [Aide](#aide).

## Participants

- [@VeryCursedMan](https://x.com/VeryCursedMan) — mainteneur, moi
- `this_is_not_a_trap` — `functions/[[data]].js`
- `ArtaFlame_` et `Qrinolia` — participation à la conception initiale

## Info

Site humoristique de fan, non officiel et sans affiliation à Taoqan. Il se réfère à des publications publiques et ne prétend pas révéler ou expliquer sa situation personnelle, financière ou ses motivations. L'image de Taoqan est indiquée par le mainteneur comme utilisée avec son consentement ; les droits sur les autres éléments restent soumis à leurs licences ou autorisations respectives.