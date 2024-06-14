function accordion() {
    const accordions = document.querySelectorAll(".accordion");
    if (accordions.length === 0) return;

    accordions.forEach((accordion) => {

        const handleEvent = (e) => {
            const activePanel = e.target.closest(".accordion__panel");
            if (!activePanel) return;
            openAccordion(activePanel)
        }
        accordion.addEventListener("mouseover", handleEvent);
        accordion.addEventListener("click", handleEvent);
    })


    function openAccordion(panelToActivate) {
        const accordion = panelToActivate.parentElement;
        const buttons = accordion.querySelectorAll(".accordion__trigger");
        const contents = accordion.querySelectorAll(".accordion__content");

        buttons.forEach((button) => {
            button.setAttribute("aria-expanded", "false");
        })

        contents.forEach((content) => {
            content.setAttribute("aria-hidden", "true");
        })

        panelToActivate.querySelector(".accordion__trigger").setAttribute("aria-expanded", "true");
        panelToActivate.querySelector(".accordion__content").setAttribute("aria-hidden", "false");
    }

}

export default accordion;