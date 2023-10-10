var loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      
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
  };

  
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  