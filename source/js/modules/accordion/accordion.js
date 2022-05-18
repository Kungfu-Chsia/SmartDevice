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
    const togglegorizEl = accordionEl.querySelector('.accordion__toggle-gorizont');
    const togglevertEl = accordionEl.querySelector('.accordion__toggle-vert');


    togglegorizEl.classList.remove('hidden');
    togglegorizEl.classList.add('active');
    togglevertEl.classList.add('active');

    togglewrapperEl.addEventListener('click', function () {
      if (accordionEl.classList.contains('accordion--show')) {
        closeAccordion();
        togglevertEl.classList.toggle('active');
      } else {
        closeAccordion();
        accordionEl.classList.add('accordion--show');
        togglevertEl.classList.toggle('active');
      }


    });
  });

};

export default initAccordion;
