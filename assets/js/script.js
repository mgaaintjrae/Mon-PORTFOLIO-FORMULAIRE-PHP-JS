console.log("coucou");

form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', function () {
    console.log("je suis dans la fonction");
	elements = form.elements; //sélectionne tous les éléments de formulaire y compris le button

    // attention for(of) [ou for(in)] fonctionne avec des collections d'objets mais pas avec des array de base
	for (let item of elements) { //Pour chaque élèment j'ajoute l'évènement :
		if (!item.validity.valid) { //Si l'élèment (le champ) n'est pas valide
            item.classList.add('error'); //on ajoute la classe .error
            // on chope le spanError contenu dans le label correspondant à l'input dont on parle
			spanMsg = document.querySelector('label[for="' + item.getAttribute('id') + '"] span.msg-error');
			spanMsg.classList.add('msg-error--show');
			event.preventDefault();
		}
	}
});

//blur
elements = form.elements; //sélectionne tous les éléments de formulaire y compris le button

for (let item of elements) { //Pour chaque élèment j'ajoute l'évènement :
	item.addEventListener('blur', function () {

		this.classList.remove('error');
		spanMsg = document.querySelector('label[for="' + this.getAttribute('id') + '"] span.msg-error');
		spanMsg.classList.remove('msg-error--show');

		if (!this.validity.valid) { //Si l'élèment n'est pas valide
			this.classList.add('error');
            spanMsg.classList.add('msg-error--show');
            event.preventDefault();
		}

	});
}