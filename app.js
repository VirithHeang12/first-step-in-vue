const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const ulEl = document.querySelector('ul');

buttonEl.addEventListener('click', () => {
  const liEl = document.createElement('li');
  liEl.textContent = inputEl.value;
  ulEl.appendChild(liEl);
  inputEl.value = '';
});