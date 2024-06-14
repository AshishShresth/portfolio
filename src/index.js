import './style/main.scss';
import navigationToggle from './js/navigationToggle';
import scrollTrigger from './js/animation';

function isDOMReady(fn) {
    if (typeof fn !== 'function') return;

    if (document.readyState === 'complete') {
        return fn();
    }

    document.addEventListener('DOMContentLoaded', fn, false);
}

const animationClasses = ['[class*="animations"]', ".clipIn"];

isDOMReady(function () {
    navigationToggle();
    scrollTrigger(animationClasses, {
        rootMargin: "0px"
    });
})