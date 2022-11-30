import throttle from 'lodash.throttle';

const throttled = throttle(onInputFn, 500);

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name=email]'),
  message: document.querySelector('[name=message]'),
};

refs.form.addEventListener('input', throttled);
refs.form.addEventListener('submit', onFormSubmit);

populateInputs();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  const savedInputs = localStorage.getItem('feedback-form-state');
  const parsedObj = JSON.parse(savedInputs);
  console.log(parsedObj);

  localStorage.removeItem('feedback-form-state');
}

function onInputFn() {
  const email = refs.email.value;
  const message = refs.message.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email, message })
  );
}

function populateInputs() {
  const savedInputs = localStorage.getItem('feedback-form-state');

  if (savedInputs) {
    const parsedObj = JSON.parse(savedInputs);
    refs.email.value = parsedObj.email;
    refs.message.value = parsedObj.message;
  }
}
