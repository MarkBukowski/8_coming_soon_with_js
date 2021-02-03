class ProgressBar {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (this.isValidSelector()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' || this.selector === '') {
            console.error('Error, invalid format selector.');
            return false;
        }

        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error(); ('no such element regarding selector');
            return false;
        }
        this.DOM = DOM;

        return true;
    }

    render() {
        let HTML = 'DEMO';

        this.DOM.innerHTML += HTML;
    }
}

export { ProgressBar }