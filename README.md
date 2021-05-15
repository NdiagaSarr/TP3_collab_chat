# TP3_collab_chat By Papa Ndiaga SARR

## TIW8 - TP3 Collaboration temps-réel

### Encadrants M. Aurélien Tabard (responsable)

***
L’objectif du TP est de mettre en place une Single Page Application (SPA) permettant à deux navigateurs de commencer une conversation de chat en p2p.


- L'historique des **push** montrent l'évolution du programme en fonction du temps
- Le code a été déployé sur heroku [Cliquez ici](https://ndiagadroid-tp3-chat.herokuapp.com/) 

### Proccess de build

Cet application web peut être téléchargé par:

- Clonage: En initialisant le git sur son dossier de destination puis en exécutant la commande:
  > $ git clone https://github.com/NdiagaSarr/TP3_collab_chat.git

- Download: Telecharger et extraire le fichier zip

Pour executer le code, il faut générer le node_module car il n'a pas été push dans le git, il faut donc executer la commande:

>  $ npm install

Pour lancer le projet, il faut exécuter la commande

> $ npm run dev

Ce projet n'utilise qu'un seule composant **DataChat** qui rassemble toutes les fonctions necessaires.

nous avons mis en place le *chatroom* en localhost avec la possibilité de choisir les *id* des différents interlocuteur, l'option communication se fait via ces parties de codes avec comme sortie la console.

- Reception de message
```
peer.on('connection', (conn) => {
    conn.on('Message', (msg) => {
        console.log('message', msg);
    });
});
```
- Envoi de message
```
peer.on('connection', (conn) => {
    conn.send(msg);
  });
});
```
