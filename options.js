const fadeCheckbox = document.getElementById('fade');
const saveButton = document.getElementById('save');
const status = document.getElementById('status');

// Display current preference when returning to options:
document.addEventListener('DOMContentLoaded', event => {
  chrome.storage.sync.get({ fadeSetting: true }, ({ fadeSetting }) => {
    fadeCheckbox.checked = fadeSetting;
  });
});

// Save preference to chrome.storage when hitting 'Save':
saveButton.addEventListener('click', event => {
  chrome.storage.sync.set({ fadeSetting: fadeCheckbox.checked }, () => {
    status.textContent = 'Your preference has been saved.';
    setTimeout(() => status.textContent = '', 2000);
  });
});
