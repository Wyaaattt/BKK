
  document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('basic-default-password');
    const toggleIcon = document.getElementById('basic-default-password-toggle');
    
    toggleIcon.addEventListener('click', function() {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.innerHTML = '<i class="bx bx-show"></i>';
      } else {
        passwordInput.type = 'password';
        toggleIcon.innerHTML = '<i class="bx bx-hide"></i>';
      }
    });
  });
