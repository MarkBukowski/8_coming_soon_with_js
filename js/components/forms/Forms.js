class Forms {
    constructor() {
        this.forms = [];

        this.init();
    }

    init() {                       // put this one init inside constructor for more convenience
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

            const submit = form.querySelector('.btn');            // create button cariable

            submit.addEventListener('click', (event) => {          // create event for button
                event.preventDefault();

                for (const input of allEntries) {
                    console.log(input.value);
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