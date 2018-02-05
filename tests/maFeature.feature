Feature: Scenarios CRUD


	Scenario 1 : Add quotes (Succes)

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la section "Ajouter une citation"
	Et que je rempli correctement tout les champs du formulaire, un nom et une citation
	Et que je valide le formulaire
	Alors ma citation est créer
	Et je peux la voir sur la "Liste des citations" 

	Scenario 2 : Add quotes (Error)

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la section "Ajouter une citation"
	Et que je ne rempli pas correctement les champs du formulaire
	Et que je valide le formulaire 
	Alors je reçois un message d'erreur
	Et ma citation n'est pas créer


	Scenario 3 : Update quotes

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la "Liste des citations"
	Et que je choisi une citation
	Et que je modifie le formulaire de modification
	Et que je valide le formaulaire
	Alors la citation est modifier
	Et je peux la voir sur la "Liste des citations"

	Scenario 4 : Delete quotes

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la "Liste des citations"
	Et que je choisi une citation
	Et que je clique sur le bouton "Supprimer"
	Alors la citation est supprimer
	Et je ne peux plus la voir sur la "Liste des citations" 





