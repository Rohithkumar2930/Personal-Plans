function validatePassword() {
    // Get the password input field and its value
    const password = document.getElementById('password').value;

    // The correct password
    const correctPassword = 'Gold29@30';

    // Check if the entered password is correct
    if (password === correctPassword) {
        // Redirect to home.html
        window.location.href = 'home.html';
        return false; // Prevent the form from submitting
    } else {
        // Alert the user about incorrect password
        alert('Incorrect password. Please try again.');
        return false; // Prevent the form from submitting
    }
}




// script.js

<script>
    document.getElementById('expense-form').addEventListener('submit', function(event) {
        event.preventDefault();

    const formData = new FormData(event.target);
    const data = { };
        formData.forEach((value, key) => {
        data[key] = value;
        });

    fetch('https://script.google.com/macros/s/AKfycbymmfD_d5_X1Kix4YJixyFrcy8aULKKtJ-PPZT2rHtrDAJ6Y_6u83uADFb-3-NzGD3fgg/exec', { // Replace with your web app URL
        method: 'POST',
    headers: {
        'Content-Type': 'application/json'
            },
    body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(result => {
        alert('Form submitted successfully!');
    event.target.reset(); // Reset form fields
        })
        .catch(error => {
        console.error('Error:', error);
        });
    });
</script>


