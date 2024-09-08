document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    var password = document.getElementById('password').value;
    if (password === 'Gold29@30') {
        window.location.href = 'home.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
});


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


