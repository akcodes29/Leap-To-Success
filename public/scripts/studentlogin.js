var studentloginFormHandler = async (event) => {
    event.preventDefault();

    var userName = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password-login').value.trim();

if (userName && password) {
      
    const response = await fetch('/api/student/login', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } 
  } else {
    alert('Failed to log in THIS ERROR'); //TODO: need to replace alert with a modal
  }

};

document.querySelector('.studentlogin-form').addEventListener('submit', studentloginFormHandler);
