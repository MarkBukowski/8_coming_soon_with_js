function clock(selector) {
    // 


    const DOM = document.querySelector(selector);
    let allValuesDOM = null;
    const deadline = '01-04 14:00:00';
    let numbers = calcTime(deadline);
    const labels = ['days', 'hours', 'minutes', 'seconds'];
    let HTML = '';

    for (let i = 0; i < 4; i++) {
        HTML += `<div class="time">
                    <div class="value">${numberFormat(numbers[i])}</div>
                    <div class="label">${labels[i]}</div>
                 </div>`;
    }

    DOM.innerHTML = HTML;
    allValuesDOM = document.querySelectorAll(`${selector} .value`);

    setInterval(function () {
        numbers = calcTime(deadline);
        for (let i = 0; i < 4; i++) {
            allValuesDOM[i].innerText = numberFormat(numbers[i]);
        }
    }, 1000)
}


function numberFormat(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}


function calcTime(deadline) {
    const date = new Date();
    const now = Date.now();
    let year = date.getFullYear();
    let fullDeadline = `${year}-${deadline}`;
    let fullDlMs = (new Date(fullDeadline)).getTime();

    if (fullDlMs < now) {
        year++;
        fullDeadline = `${year}-${deadline}`;
        fullDlMs = (new Date(fullDeadline)).getTime();
    }

    const diff = fullDlMs - now;
    const seconds = Math.round(diff / 1000);

    const days = Math.floor(seconds / 60 / 60 / 24);
    let unusedSec = (seconds - days * 60 * 60 * 24);
    const hours = Math.floor(unusedSec / 60 / 60);
    unusedSec -= hours * 60 * 60;

    const minutes = Math.floor(unusedSec / 60);
    unusedSec -= minutes * 60;

    return [days, hours, minutes, unusedSec];
}


export { clock }




// Reikalavimai:
// - rasti vieta
// - istraukti skaiciu
// - mazint kas sekunde iki 0
// - pasiekus 0 rasyt finish


// function counter(selector) {
//     const DOM = document.querySelector(selector);
//     const number = parseInt(DOM.innterText);

//     const timer = setInterval(function () {
//         DOM.innterText = number;
//         number--;
//         if (number < 0) {
//             clearInterval(timer);
//             DOM.innterText = 'finish';
//         }
//     }, 1000);

// }


// export { counter }