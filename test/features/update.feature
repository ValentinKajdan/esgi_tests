Feature: Scenario Update CRUD

	Scenario 1 : Update quotes

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la "Liste des citations"
	Et que je choisi une citation
	Et que je modifie correctement les champs du formulaire de modification
	Et que je valide le formaulaire
	Alors la citation est modifier
	Et je peux la voir sur la "Liste des citations"


	Scenario 2 : Update quotes (Error name)

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la "Liste descitations"
	Et que je choisi une citation
	Et que je laisse vide le champs "nom" du formulaire 
	Et que je valide le formulaire
	Alors je reçois un message d'erreur
	Et ma citation n'est pas modifier 

	Scenario 3 : Update quotes (Error quotes)

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la "Liste descitations"
	Et que je choisi une citation
	Et que je laisse vide le champs "Citations" du formulaire 
	Et que je valide le formulaire
	Alors je reçois un message d'erreur
	Et ma citation n'est pas modifier

	Scenario 4 : Update quotes (Error name + quotes)

	Etant donné que je suis un utilisateur
	Lorsque je me rend sur la "Liste descitations"
	Et que je choisi une citation
	Et que je laisse vide tous les champs du formulaire 
	Et que je valide le formulaire
	Alors je reçois un message d'erreur
	Et ma citation n'est pas modifier 
