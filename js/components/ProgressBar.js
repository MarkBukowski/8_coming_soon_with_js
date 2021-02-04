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

    generateProgressBar(barData) {
        return `<div class="progress-bar">
                    <div class="texts">
                        <div class="label">${barData.label}</div>
                        <div class="value">${barData.value}%</div>
                    </div>
                    <div class="bar">
                        <div class="progress" style="width: ${barData.value}%;">
                            <div class="loading"></div>
                        </div>
                    </div>
                </div>`;
    }

    render() {
        let HTML = '';

        for (const progress of this.data) {
            HTML += this.generateProgressBar(progress);
        }

        this.DOM.innerHTML += HTML;
    }
}

export { ProgressBar }