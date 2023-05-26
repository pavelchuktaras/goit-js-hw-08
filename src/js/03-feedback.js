import throttle from 'lodash.throttle';

const refs = {
  input: document.getElementsByName('email')[0],
  message: document.getElementsByName('message')[0],
  form: document.querySelector('form'),
};

function saveFormData() {
  let formData = {
    email: refs.input.value,
    message: refs.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    refs.input.value = email;
    refs.message.value = message;
  } else {
    refs.input.value = '';
    refs.message.value = '';
  }
});

function handleSubmit(evt) {
  evt.preventDefault();
  let formData = {
    email: refs.input.value,
    message: refs.message.value,
  };
  if (refs.input.value.trim() === '' || refs.message.value.trim() === '') {
    return alert('Введіть дані!');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    refs.form.reset();
  }
}

const throttledSaveFormData = throttle(saveFormData, 500);
refs.input.addEventListener('input', throttledSaveFormData);
refs.message.addEventListener('input', throttledSaveFormData);
refs.form.addEventListener('submit', handleSubmit);
