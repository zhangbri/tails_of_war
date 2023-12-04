const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const cardsets = document.querySelectorAll('.card_container');

const changePositions = (e, cardset) => {
    const clickedCard = e.currentTarget;
    if (clickedCard.classList.contains('active')) return;

    const activeCard = cardset.querySelector('.cards.active');

    const clickedImg = clickedCard.querySelector('img');
    const activeImg = activeCard.querySelector('img');

    const tempSrc = clickedImg.src;
    clickedImg.src = activeImg.src;
    activeImg.src = tempSrc;

    clickedCard.classList.remove('right');
    clickedCard.classList.add('active');

    activeCard.classList.remove('active');
    activeCard.classList.add('right');
};

cardsets.forEach((cardset) => {
    if (prefersReducedMotion.matches) return;

    const cards = cardset.querySelectorAll('.cards');
    const classes = ['active', 'right'];

    cards.forEach((card, index) => {
        card.classList.add(classes[index]);

        const img = card.querySelector('img');
        const cardType = card.getAttribute('data-type');
    });
});

cardsets.forEach((cardset) => {
    if (prefersReducedMotion.matches) return;

    const cards = cardset.querySelectorAll('.cards');

    cards.forEach((card) => {
        ['click', 'keypress'].forEach(ev => {
            card.addEventListener(ev, function (ev) {
                changePositions(ev, cardset);
            });
        });
    });
});