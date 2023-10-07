const login = async (event) => {
    
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && password) {
      
      const response = await fetch('/api/teacher/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in'); //TODO: need to replace alert with a modal
      }
    }
  };
  
  document.querySelector('#login-btn').addEventListener('submit', login);
  