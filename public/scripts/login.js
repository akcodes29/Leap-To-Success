//Function to handle login logic
var loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const isStudent = document.querySelector('#isStudent').checked;
    console.log(isStudent)

    if (email && password && !isStudent) {
      
      const response = await fetch('/api/teacher/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        loginError()
      }
    }
    if (email && password && isStudent) {
      
      const response = await fetch('/api/student/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/studentprofile');
      } else {
        loginError(); 
      }
    }
  };

// Function to display error message 
function loginError() {
  document.querySelector('#error').innerHTML= 
  '<div class="alert alert-danger text-center m-3 p-3" role="alert">Failed to login :-( <br> Try a different username or password ! </div>';
  return('Failed to log in')
};

 //Event listener v2 - removes console error
  $(document).on('submit', '.login-form', function (event) {
    loginFormHandler(event)
  });