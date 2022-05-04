const createFormSuccessError = () => {
  const modalTemplate = document.querySelector('.questions-form-modal')
      .content
      .querySelector('.questions-form-modal__wrapper');

  const modalFormCreated = modalTemplate.cloneNode(true);
  document.body.appendChild(modalFormCreated);
  modalFormCreated.classList.add('hidden');
};

const hideModalForm = (modalForm, classHide) => {
  if (modalForm !== null && !modalForm.classList.contains(classHide)) {
    modalForm.classList.add(classHide);
  }
};

const initModalWindow = () => {
  createFormSuccessError();

  const modalForm = document.querySelector('.questions-form-modal__wrapper');
  const btnCallback = document.querySelector('.page-header__button');

  btnCallback.addEventListener('click', function () {
    modalForm.classList.toggle('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      hideModalForm(modalForm, 'hidden');
    }
  });

  // document.addEventListener('click', (event) => {
  //   if (event.target.className != '.questions-form-modal__wrapper' ) {
  //     hideModalForm(modalForm, 'hidden');
  //   }
  // });


};

export default initModalWindow;
