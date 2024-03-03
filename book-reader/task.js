    document.addEventListener('DOMContentLoaded', function() {
    const fontSizeLinks = document.querySelectorAll('.font-size');
    const book = document.getElementById('book');

    fontSizeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            document.querySelector('.font-size_active').classList.remove('font-size_active');
            book.classList.remove('book_fs-small', 'book_fs-big');

            this.classList.add('font-size_active');

            const size = this.dataset.size;
            if(size === 'small') {
                book.classList.add('book_fs-small');
            } else if(size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });
    });