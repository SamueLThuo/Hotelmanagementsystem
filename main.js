// Function to load external HTML files into the current page
function loadHeaderFooter() {
  // Fetch and insert the header
  fetch('header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Header file not found');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading header:', error);
    });

  // Fetch and insert the footer
  fetch('footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Footer file not found');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading footer:', error);
    });
}

// Call the function to load header and footer when the page loads
window.onload = loadHeaderFooter;
