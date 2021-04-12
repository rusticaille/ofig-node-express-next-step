# ofig-node-express-next-step
(mars 2021)
Projet un peu plus touffu réalisé en binôme. Travail avec une base de données en local et des sessions, un router, des controllers et un datamaper.

#Paquets utilisés
  - dotenv
  - express
  - ejs
  - express-session
  - pg
 
 #Description
 
    ##Setup
      - Création d'un fichier .env pour les données de connexion à la BDD, au port et la clé de hachage de la session.
      - setup d'express, d'ejs, de la session, fichiers statiques, views, router, port.
      - Création de la BDD en local en ligne de commande avec import du fichier fourni.
      - Création d'un fichier database pour connecter la BDD.
     
     ##Etapes
      - Création des views à partir d'une intégration html déjà prête et factorisation.
      - Implémentation du fichier datamapper.js avec différentes queries.
      - Création des controllers et des méthodes appelées par le router.
      - Création du router
     
     ##Routes
      - Récupération de toutes les figurines sur la page d'accueil avec leurs catégories associées
      - Récupération d'une seule figurine sur sa page dédiée avec ses avis et sa catégorie
      - filtrage des figurines par catégories
      - Affichage d'une page pour les favoris
      - Ajout d'un favoris sur cette page à l'aide des sessions
      - Supprimer une figurine des favoris
  
