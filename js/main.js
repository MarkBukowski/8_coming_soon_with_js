import { clock } from './components/clock.js';
import { ProgressBar } from './components/ProgressBar.js';
import { progressBarData } from './data/progressBarData.js';

import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/renderSocials.js';
import { Forms } from './components/forms/Forms.js';


clock('.clock');
renderSocials('footer > .socials', socialsData);

const progress = new ProgressBar('.left-column', progressBarData);

progress.isValidSelector();
progress.render();

console.clear();

new Forms();