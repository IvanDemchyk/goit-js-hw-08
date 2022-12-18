import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(formInput, 500));

const formData = {};

function formInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', formSubmit);

function formSubmit(evt) {
  const output = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(output);
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataShow() {
  try {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (data) {
      email.value = data.email;
      message.value = data.message;
    }
  } catch (error) {
    console.log('Form was empty!!!');
  }
})();
