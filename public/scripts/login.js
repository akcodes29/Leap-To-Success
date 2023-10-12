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
        alert('Failed to log in THIS ERROR'); //TODO: need to replace alert with a modal
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
        alert('Failed to log in THIS ERROR'); //TODO: need to replace alert with a modal
      }
    }
  };

  
  
  // document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

 //Event listener v2 - removes console error
  $(document).on('submit', '.login-form', function (event) {
    loginFormHandler(event)
  });
  