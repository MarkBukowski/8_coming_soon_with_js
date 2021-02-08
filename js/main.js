import { clock } from './components/clock.js';

import { Forms } from './components/forms/Forms.js';

import { progressBarData } from './data/progressBarData.js';
import { ProgressBar } from './components/ProgressBar.js';

import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/renderSocials.js';


clock('.clock', '01-04 14:00:00');

renderSocials('footer > .socials', socialsData);

const progress = new ProgressBar('.left-column', progressBarData);

progress.isValidSelector();
progress.render();

new Forms();