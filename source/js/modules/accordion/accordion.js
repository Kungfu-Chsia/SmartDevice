const initAccordion = function () {
  const accordionEls = document.querySelectorAll('.accordion');

  const closeAccordion = function () {
    accordionEls.forEach(function (accordionEl) {
      accordionEl.classList.remove('accordion--show');
    });
  };

  closeAccordion();

  accordionEls.forEach(function (accordionEl) {
    const togglewrapperEl = accordionEl.querySelector('.accordion__toggle-wrapper');

    togglewrapperEl.addEventListener('click', function () {

      if (accordionEl.classList.contains('accordion--show')) {
        closeAccordion();
      } else {
        closeAccordion();
        accordionEl.classList.add('accordion--show');
      }


    });
  });

};

export default initAccordion;
