function navigationToggle() {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.getElementById('primary-navigation');

    // Clear existing click and keydown listeners before adding new ones
    function clearPreviousListeners() {
        document.removeEventListener('click', outsideClickListener);
        document.removeEventListener('keydown', escapeKeyListener);
    }

    const toggleNav = () => {
        const isVisible = nav.dataset.visible === 'true';
        nav.dataset.visible = !isVisible;
        navToggle.setAttribute('aria-expanded', !isVisible);

        if (isVisible) {
            clearPreviousListeners();
        } else {
            document.addEventListener('click', outsideClickListener);
            document.addEventListener('keydown', escapeKeyListener);
        }
    };

    navToggle.addEventListener('click', toggleNav);

    const outsideClickListener = (event) => {
        if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
            toggleNav();
        }
    };

    const escapeKeyListener = (event) => {
        if (event.key === 'Escape') {
            toggleNav();
        }
    };
}

export default navigationToggle;
