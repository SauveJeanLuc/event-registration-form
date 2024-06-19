document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Reset error messages
    document.querySelectorAll('.error').forEach(function(error) {
      error.textContent = '';
    });
  
    // Validate name
    const nameRegex = /^[a-zA-Z\s]+$/;
    const name = document.getElementById('name').value.trim();
    if (!nameRegex.test(name)) {
      document.getElementById('nameError').textContent = 'Please enter a valid name (letters and spaces only)';
    }
  
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.getElementById('email').value.trim();
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address';
    }
  
    // Validate phone number
    const phoneRegex = /^\(?(\d{3})\)?[-\s]?(\d{3})[-\s]?(\d{4})$/;
    const phone = document.getElementById('phone').value.trim();
    if (!phoneRegex.test(phone)) {
      document.getElementById('phoneError').textContent = 'Please enter a valid phone number in the format (123) 456-7890';
    }
  
    // Validate event date
    const eventDateRegex = /^(0[1-9]|1[0-2])\/([0-2][0-9]|3[0-1])\/([0-9]{4})$/;
    const eventDate = document.getElementById('eventDate').value.trim();
    if (!eventDateRegex.test(eventDate)) {
      document.getElementById('eventDateError').textContent = 'Please enter a valid date in the format MM/DD/YYYY';
    }
  
    // Validate number of tickets
    const numTickets = document.getElementById('numTickets').value.trim();
    if (numTickets < 1 || numTickets > 10) {
      document.getElementById('numTicketsError').textContent = 'Please enter a number between 1 and 10';
    }
  
    // If all fields are valid, submit the form
    const errors = document.querySelectorAll('.error');
    const hasErrors = Array.from(errors).some(error => error.textContent !== '');
    if (!hasErrors) {
      // You can add your form submission logic here
      console.log('Form submitted successfully');
    }
  });