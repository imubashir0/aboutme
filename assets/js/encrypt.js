document.addEventListener('DOMContentLoaded', () => {
    const publicKeyArmored = `<Your_Public_Key>`; // Replace with your actual public key
    document.getElementById('public-key').textContent = publicKeyArmored;

    // Handle the Encrypt button click
    document.getElementById('encrypt-btn').addEventListener('click', async function () {
        // Fetch the user's input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Combine all form data into a single string for encryption
        const formData = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

        // Encrypt the form data using the public key
        const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });
        const encrypted = await openpgp.encrypt({
            message: await openpgp.createMessage({ text: formData }),
            encryptionKeys: publicKey
        });

        // Replace the original message with the encrypted message
        document.getElementById('message').value = encrypted;
    });

    // Handle the Copy Public Key button click
    document.getElementById('copy-key-btn').addEventListener('click', function () {
        const publicKeyTextarea = document.getElementById('public-key');
        publicKeyTextarea.select();
        document.execCommand('copy');
        alert('Public key copied to clipboard!');
    });

    // Handle the form submission
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the encrypted message from the textarea
        const encryptedMessage = document.getElementById('message').value;

        // Send the encrypted data to your server
        fetch('https://yourserver.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ encryptedMessage })
        }).then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Error sending message.');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('Error sending message.');
        });
    });
});
