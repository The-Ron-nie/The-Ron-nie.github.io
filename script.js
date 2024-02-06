document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
  
    // Check if the user has a preference stored, if not, set it to light mode
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
      enableDarkMode();
      darkModeToggle.checked = true;
    }
  
    // Toggle dark mode on switch change
    darkModeToggle.addEventListener('change', function () {
      if (darkModeToggle.checked) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  
    // Functions to enable and disable dark mode
    function enableDarkMode() {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    }
  
    function disableDarkMode() {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', null);
    }
  });
  
  // Function to handle the like button click
  function toggleLike(likesId, button) {
    const likesElement = document.getElementById(likesId);
    const isLiked = button.classList.toggle('liked');
    let currentLikes = parseInt(likesElement.textContent);

    if (isLiked) {
      likesElement.textContent = currentLikes + 1;
    } else {
      likesElement.textContent = currentLikes - 1;
    }
  }

  // Function to toggle the content visibility on button click
  document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
    });
  });