const initAccordion = function () {
  const accordionEls = document.querySelectorAll('.accordion');

  const closeAccordion = function () {
    accordionEls.forEach(function (accordionEl) {
      accordionEl.classList.remove('show');
    });
  };

  closeAccordion();

  accordionEls.forEach(function (accordionEl) {
    const togglewrapperEl = accordionEl.querySelector('.accordion__toggle-wrapper');

    togglewrapperEl.addEventListener('click', function () {

      if (accordionEl.classList.contains('show')) {
        closeAccordion();
      } else {
        closeAccordion();
        accordionEl.classList.add('show');
      }


    });
  });

};

export default initAccordion;
