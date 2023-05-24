import throttle from 'lodash.throttle';

const refs = {
  input: document.getElementsByName('email')[0],
  message: document.getElementsByName('message')[0],
  form: document.querySelector('form'),
};

let formData = {
  email: refs.input.value,
  message: refs.message.value,
};

refs.input.addEventListener('input', throttle(inputChange, 500));

refs.message.addEventListener('input', throttle(massageTexteria, 500));

refs.form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', () => {
  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    refs.input.value = email;
    refs.message.value = message;
    formData.email = email;
    formData.message = message;
  }
});

function massageTexteria(evt) {
  const targetMassage = evt.target.value;
  formData.message = targetMassage;
  saveFormData();
}

function inputChange(evt) {
  const targetInput = evt.target.value;
  formData.email = targetInput;
  saveFormData();
}

function handleSubmit(evt) {
  evt.preventDefault();
  const formData = {
    email: refs.input.value,
    message: refs.message.value,
  };
  if (refs.input.value.trim() === '' || refs.message.value.trim() === '')
    return alert('Введіть дані!');
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  refs.form.reset();
}

function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
