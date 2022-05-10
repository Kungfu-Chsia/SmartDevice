const initShowMore = () => {
  const aboutWrapEl = document.querySelector('.about__wrap');

  if (aboutWrapEl) {
    const aboutBtn = aboutWrapEl.querySelector('.about__button');

    aboutBtn.addEventListener('click', function () {

      aboutWrapEl.classList.toggle('show');
    });

  }

};

export default initShowMore;
