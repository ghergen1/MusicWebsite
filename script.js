// Get the form element
const form = document.querySelector('.calendar-form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form fields
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const duration = document.getElementById('duration').value;

  // Construct the redirect URL with query parameters
  const redirectURL = `checkout/public/checkout.html?hours=${duration}`;

  // Redirect the user to the checkout page
  window.location.href = redirectURL;
});
