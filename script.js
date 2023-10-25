"use strict";
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');
const submitButton = document.getElementById('submit');
const formSection = document.getElementById('form');
const successSection = document.getElementById('successMessage');
const successEmail = document.getElementById('successEmail');

submitButton.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Email validation
  if (!(regex.test(email))) {
    emailInput.classList.add('invalid-input-content');
    emailInput.classList.add('invalid-input');
    emailInput.classList.remove('border-[#b4b4b3]');
    errorMessage.classList.remove('hidden');
  } else {
    emailInput.classList.remove('invalid-input-content');
    emailInput.classList.remove('invalid-input');
    errorMessage.classList.add('hidden');
    successEmail.textContent = email;
    formSection.classList.add('hidden');
    successSection.classList.remove('hidden');
  }
});

// When the input is empty
emailInput.addEventListener('input', () => {
  if (emailInput.value.trim() === '') {
    emailInput.classList.remove('invalid-input');
    emailInput.classList.remove('invalid-input-content');
    errorMessage.classList.add('hidden');
  }
});

const dismissButton = document.getElementById('dismissButton');
dismissButton.addEventListener('click', () => {
  formSection.classList.remove('hidden');
  successSection.classList.add('hidden');
});