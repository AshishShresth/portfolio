import './style/main.scss';
import navigationToggle from './js/navigationToggle';

function isDOMReady(fn) {
    if (typeof fn !== 'function') return;

    if (document.readyState === 'complete') {
        return fn();
    }

    document.addEventListener('DOMContentLoaded', fn, false);
}

isDOMReady(function () {
    navigationToggle()
})