import throttle from 'lodash.throttle';

const refs = {
  input: document.getElementsByName('email')[0],
  message: document.getElementsByName('message')[0],
  form: document.querySelector('form'),
};

saveinputsMsg();
saveTexteriaMsg();

let formData = {
  email: '',
  message: '',
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
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  if (formData.email === '' || formData.message === '') {
    return alert('Введіть дані!');
  } else {
    console.log(formData);
  }
}

function saveinputsMsg() {
  const inputMsg = localStorage.getItem('feedback-form-state');

  if (inputMsg) {
    refs.input.value = inputMsg;
  }
}

function saveTexteriaMsg() {
  const texteriaMsg = localStorage.getItem('feedback-form-state');

  if (texteriaMsg) {
    refs.input.value = texteriaMsg;
  }
}

function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
// kidsfi
