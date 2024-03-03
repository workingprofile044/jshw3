document.addEventListener('DOMContentLoaded', function() {
    function initRotator(rotator) {
        let current = 0; 
        const items = rotator.querySelectorAll('.rotator__case');

        function changeItem() {
            items[current].classList.remove('rotator__case_active');
            current = (current + 1) % items.length;
            items[current].classList.add('rotator__case_active');
        }

        setInterval(changeItem, 1000);
    }

    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(initRotator);
});
