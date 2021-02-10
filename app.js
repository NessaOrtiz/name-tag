const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('name-change-button');
const nameDisplay = document.getElementById('name-display');

const pronounInput = document.getElementById('pronoun-input');
const pronounChangeButton = document.getElementById('pronoun-change-button');
const pronounDisplay = document.getElementById('pronoun');

changeButton.addEventListener('click', () =>{
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
})
pronounChangeButton.addEventListener('click', () =>{
    pronounDisplay.textContent = pronounInput.value;
    pronounInput.value = '';
})
