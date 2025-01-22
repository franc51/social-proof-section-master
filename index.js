document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('show-borders');
    let bordersVisible = false; // State to track if borders are shown
  
    button.addEventListener('click', () => {
      const allElements = document.querySelectorAll('*');
      bordersVisible = !bordersVisible; // Toggle the state
  
      allElements.forEach(element => {
        if (bordersVisible) {
          element.style.border = '1px solid red'; // Show borders
        } else {
          element.style.border = ''; // Hide borders
        }
      });
  
      // Optionally update button text
      button.textContent = bordersVisible ? 'Hide borders' : 'Show borders';
    });
  });
  