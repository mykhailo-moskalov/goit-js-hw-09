const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const input = form.elements.email;
const textarea = form.elements.message;

form.addEventListener('input', e => {
  formData.email = input.value;
  formData.message = textarea.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

input.value =
  JSON.parse(localStorage.getItem('feedback-form-state')).email ?? '';
textarea.value =
  JSON.parse(localStorage.getItem('feedback-form-state')).message ?? '';

form.addEventListener('submit', e => {
  e.preventDefault();

  if (input.value === '' || textarea.value === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
