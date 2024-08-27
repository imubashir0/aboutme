document.addEventListener('DOMContentLoaded', async () => {
    // Ensure OpenPGP is loaded
    if (typeof openpgp === 'undefined') {
        console.error('OpenPGP.js is not loaded!');
        return;
    }

    const publicKeyArmored = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
9fPPMVLWcscllU/ogT1L01L0OopzobF3
=VgTY
-----END PGP PUBLIC KEY BLOCK-----`; 

    document.getElementById('public-key').textContent = publicKeyArmored;

    // Function to encrypt a message
    async function encryptMessage(message) {
        const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });
        const encrypted = await openpgp.encrypt({
            message: await openpgp.createMessage({ text: message }),
            encryptionKeys: publicKey
        });
        return encrypted;
    }

    // Handle the Encrypt button click
    document.getElementById('encrypt-btn').addEventListener('click', async function () {
        try {
            // Fetch the user's input
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Encrypt each field
            const encryptedName = await encryptMessage(name);
            const encryptedEmail = await encryptMessage(email);
            const encryptedSubject = await encryptMessage(subject);
            const encryptedMessage = await encryptMessage(message);

            // Update the form fields with the encrypted values
            document.getElementById('name').value = encryptedName;
            document.getElementById('email').value = encryptedEmail;
            document.getElementById('subject').value = encryptedSubject;
            document.getElementById('message').value = encryptedMessage;
        } catch (error) {
            console.error('Encryption error:', error);
        }
    });

    // Handle the Copy Public Key button click
    document.getElementById('copy-key-btn').addEventListener('click', function () {
        const publicKeyTextarea = document.getElementById('public-key');
        publicKeyTextarea.select();
        document.execCommand('copy');
        alert('Public key copied to clipboard!');
    });

    // Handle the form submission
    document.getElementById('contact-form').addEventListener('submit', async function (event) {
        event.preventDefault();

        try {
            // Fetch the encrypted values from the form
            const encryptedName = document.getElementById('name').value;
            const encryptedEmail = document.getElementById('email').value;
            const encryptedSubject = document.getElementById('subject').value;
            const encryptedMessage = document.getElementById('message').value;

            // Send the encrypted data to Formspree
            fetch('https://formspree.io/f/manwokdq', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: encryptedName,
                    email: encryptedEmail,
                    subject: encryptedSubject,
                    message: encryptedMessage
                })
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
        } catch (error) {
            console.error('Submission error:', error);
            alert('Error submitting form.');
        }
    });
});
