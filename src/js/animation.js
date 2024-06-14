
function scrollTrigger(selector, options = {}) {
    const elements = [];
    selector.forEach((selector) => {
        const els = document.querySelectorAll(selector);
        elements.push(...Array.from(els));
    });

    elements.forEach((el) => {
        addObserver(el, options);
    });
}

function addObserver(el, options) {
    if (!("IntersectionObserver" in window)) {
        entry.target.classList.add("animate");
        return;
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("animate", entry.isIntersecting);
        });
    }, options);
    observer.observe(el);
}
export default scrollTrigger;

