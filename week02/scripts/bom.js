const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const li = document.createElement('li');

const deleteButton = document.createElement('button')
deleteButton.textContent = 'X';

li.textContent = input.vaule;



li.append(deleteButton);

list.append(li);

if (input.value.trim() !== '') {button.addEventListener('click', function() {
})  }

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
  });

input.value = '';
input.focus();