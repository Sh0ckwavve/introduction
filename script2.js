document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Display success message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Thank you for your feedback, ' + name + '!';
    responseMessage.style.color = 'green';

    // Clear form fields
    document.getElementById('feedbackForm').reset();
});
