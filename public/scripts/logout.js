// Create a fetch for the logout button
const logout = async () => {
    const response = await fetch('/api/teacher/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  // document.querySelector('#logout').addEventListener('click', logout);

 //Event listener v2 - removes console error
  $(document).on('click', '#logout',function(){
    logout()
});