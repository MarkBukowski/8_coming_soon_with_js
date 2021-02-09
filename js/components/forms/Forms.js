import { Validation } from './Validation.js';

class Forms {
    constructor() {
        this.forms = [];

        this.init();
    }

    init() {     // put this one init inside constructor for more convenience
        this.findAllForms();
        this.addEvents();
    }

    findAllForms() {
        const forms = document.querySelectorAll('.form');
        this.forms = [...forms];
    }

    addEvents() {
        for (const form of this.forms) {
            const allEntries = form.querySelectorAll('input, textarea');

            const submit = form.querySelector('.btn');          // create button variable

            submit.addEventListener('click', (event) => {          // create event for button
                event.preventDefault();

                for (const input of allEntries) {
                    const rule = input.dataset.validationRule;
                    const text = input.value;

                    switch (rule) {
                        case 'name':
                            console.log(Validation.isValidName(text));
                            break;
                        case 'email':
                            console.log(Validation.isValidEmail(text));
                            break;
                        case 'text':
                            console.log(Validation.isValidText(text));
                            break;

                        default:
                            break;
                    }
                }
            })
        }
    }
}

export { Forms }


/*
ka reik padaryt:
pasikurt klase, idet konstruktoriu,
susikurt init metoda (per ji inicijuot kitus metodus, o pati init() iskviest konstruktoriuje),
susikurt metoda kad surast visas formas ir sugrust jas i array, priskirt globaliam variablui su this. ... (galima spread naudot),
susikurt metoda kuris pridetu eventus (prasukt loopa, kiekvienam rastam iterablui is arrayjaus, variablui priskirt klase kuriai bus eventListerner'is, padaryt kad neperkrautu puslapio paspaudus knopke. )

*/