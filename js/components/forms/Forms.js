class Forms {
    constructor() {
        this.forms = [];

        this.init();
    }

    init() {
        this.findAllForms();
        this.addEvents();
    }

    findAllForms() {
        const forms = document.querySelectorAll('.form');
        this.forms = [...forms];
    }

    addEvents() {
        for (const form of this.forms) {
            console.log(form);
            const submit = form.querySelector('.btn');

            submit.addEventListener('click', (event) => {
                event.preventDefault();
                console.log(event);
            })
        }
    }
}

export { Forms }