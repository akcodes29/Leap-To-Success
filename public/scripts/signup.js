// Function to handle sign up
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
        signupError();
      }
    }
  };

  // Function to display signup error message 
  function signupError() {
    document.querySelector('#error').innerHTML= 
    '<div class="alert alert-danger text-center m-3 p-3" role="alert">Failed to register :-( <br> Hint: Password must be at least 8 characters! </div>';
    return('Failed to signup');
  };

 //Event listener v2 - removes console error
$(document).on('submit', '.signup-form', function (event) {
  signUp(event)
});