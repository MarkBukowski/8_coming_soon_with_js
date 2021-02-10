function renderSocials(selector, data) {
    // input validation
    if (typeof selector !== 'string' ||
        selector === '') {
        console.error('ERROR: invalid selector parameter');
        return false;
    }
    if (!Array.isArray(data) ||
        data.length === 0) {
        console.error('ERROR: invalid data parameter');
        return false;
    }

    // logic
    const DOM = document.querySelector(selector);
    if (!DOM /* arba DOM === null */) {
        console.error('ERROR: unable to find element after given selector');
        return false;
    }

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const socialObject = data[i];

        // duomenu objekto validacija
        if (typeof socialObject !== 'object' ||
            Array.isArray(socialObject) ||
            !socialObject.href ||
            typeof socialObject.href !== 'string' ||
            !socialObject.icon ||
            typeof socialObject.icon !== 'string') {
            console.warn('WARNING: incorrect object format', socialObject);
            continue;
        }

        HTML += `<a href="${socialObject.href}"
        target="_blank"
        class="fa fa-${socialObject.icon}"
        rel="noreferrer noopener">${socialObject.icon}</a>`;
    }

    // post logic validation
    if (HTML === '' /* arba !HTML */) {
        console.error('ERROR: no info given');
        return false;
    }
    // return result
    DOM.innerHTML = HTML;
}

export { renderSocials };