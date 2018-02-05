Feature: Scenarios CRUD


	Scenario 1 : Add quotes (Succes)

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la section "Ajouter une citation"
	Et que je rempli correctement tout les champs du formulaire, un nom et une citation
	Et que je valide le formulaire
	Alors ma citation est créer
	Et je peux la voir sur la "Liste des citations" 

	Scenario 2 : Add quotes (Error name)

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la section "Ajouter une citation"
	Et que je ne rempli pas correctement le champ "nom" du formulaire
	Et que je valide le formulaire 
	Alors je reçois un message d'erreur
	Et ma citation n'est pas créer

	Scenario 3 : Add quotes (Error quote)

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la section "Ajouter une citation"
	Et que je ne rempli pas correctement le champ "quote" du formulaire
	Et que je valide le formulaire 
	Alors je reçois un message d'erreur
	Et ma citation n'est pas créer

	Scenario 4 : Add quotes (Error name + quote)

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la section "Ajouter une citation"
	Et que je ne rempli aucun  champs du formulaire
	Et que je valide le formulaire 
	Alors je reçois un message d'erreur
	Et ma citation n'est pas créer

	Scenario 5 : Update quotes

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la "Liste des citations"
	Et que je choisi une citation
	Et que je modifie correctement les champs du formulaire de modification
	Et que je valide le formaulaire
	Alors la citation est modifier
	Et je peux la voir sur la "Liste des citations"


	Scenario 6 : Update quotes (Error name)

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la "Liste descitations"
	Et que je choisi une citation
	Et que je laisse vide le champs "nom" du formulaire 
	Et que je valide le formulaire
	Alors je reçois un message d'erreur
	Et ma citation n'est pas modifier 

	Scenario 7 : Update quotes (Error quotes)

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la "Liste descitations"
	Et que je choisi une citation
	Et que je laisse vide le champs "Citations" du formulaire 
	Et que je valide le formulaire
	Alors je reçois un message d'erreur
	Et ma citation n'est pas modifier

	Scenario 8 : Update quotes (Error name + quotes)

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la "Liste descitations"
	Et que je choisi une citation
	Et que je laisse vide tous les champs du formulaire 
	Et que je valide le formulaire
	Alors je reçois un message d'erreur
	Et ma citation n'est pas modifier 


	Scenario 7 : Delete quotes

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la "Liste des citations"
	Et que je choisi une citation
	Et que je clique sur le bouton "Supprimer"
	Alors la citation est supprimer
	Et je ne peux plus la voir sur la "Liste des citations" 





