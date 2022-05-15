/* eslint-disable no-undef */
const initMask = () => {
  const phoneMask = IMask(
      document.querySelector('.js-phone'), {
        mask: '+{7}(000)000-00-00',
      });
// console.log(document.querySelector('.js-phone-modal'))
  const phoneMaskmodal = IMask(
      document.querySelector('.js-phone-modal'), {
        mask: '+{7}(000)000-00-00',
      });
};

export default initMask;
