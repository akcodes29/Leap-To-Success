const signUp = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#firstName-signup').value.trim();
    const lastName = document.querySelector('#lastName-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (firstName && lastName && email && password) {
      
      const response = await fetch('/api/teacher/', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to log in'); //TODO: need to replace alert with a modal
      }
    }
  };

 //Event listener v2 - removes console error
$(document).on('submit', '.signup-form', function (event) {
  signUp(event)
});