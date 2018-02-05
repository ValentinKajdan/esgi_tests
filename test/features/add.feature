Feature: Scenarios ADD CRUD


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
