function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
}

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    for (const reveal of reveals) {
        if (isInViewport(reveal)) {
            reveal.classList.add('reveal_active');
        } else {
        }
    }
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();
