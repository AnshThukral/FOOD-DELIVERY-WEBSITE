const allStar = document.querySelectorAll('.star');
const ratingValue = document.querySelector('.rating input');

allStar.forEach((item, idx) => {
    item.addEventListener('click', function() {
        let click = 0;
        ratingValue.value = idx + 1; // Set value of the input element
        allStar.forEach((star, i) => {
            if (i <= idx) {
                star.classList.replace('bx-star', 'bxs-star');
                star.classList.add('active');
            } else if (i > idx) {
                star.classList.replace('bxs-star', 'bx-star');
                star.classList.remove('active');
            } else {
                star.style.setProperty('--i', click);
                click++;
            }
        });
    });
});




