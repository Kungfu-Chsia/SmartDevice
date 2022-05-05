const createFormSuccessError = () => {
  const modalTemplate = document.querySelector('.questions-form-modal')
      .content
      // .querySelector('.questions-form-modal__wrapper');
      .querySelector('.overlay');

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
  const overlay = document.querySelector('.overlay');
  const btnCallback = document.querySelector('.page-header__button');
  const btnClosed = document.querySelector('.questions-form-modal__toggle');
  const body = document.body;

  btnCallback.addEventListener('click', function () {
    overlay.classList.toggle('hidden');
    modalForm.classList.toggle('active');
    body.classList.add('overflow-hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      hideModalForm(overlay, 'hidden');
      body.classList.remove('overflow-hidden');
    }
  });

  btnClosed.addEventListener('click', function () {
    overlay.classList.toggle('hidden');
    modalForm.classList.toggle('active');
    body.classList.remove('overflow-hidden');
  });

  overlay.addEventListener('click', function (e) {

    if (e.target.className === 'overlay') {

      modalForm.classList.remove('active');
      modalForm.classList.add('hidden');
      overlay.classList.add('hidden');
      overlay.classList.remove('active');
      body.classList.remove('overflow-hidden');
    }
  });

};

export default initModalWindow;
