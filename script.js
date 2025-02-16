const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'Pandi'; // Replace with your secret code
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (userInput === secretCode) {
		resultDiv.innerHTML = 'waste fellow loves you Pandi❤️😘';
		window.location.href = nextPageUrl; // Redirect to new page
	} else {
		resultDiv.innerHTML = 'Nuvu na pandi pella kadhu -vellu vellu pandi pella ni ra manu : go fast';
	}
});
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let username = document.getElementById("urname").value.trim();
    let password = document.getElementById("code").value.trim();
    let resultDiv = document.getElementById("result");

    const secretCode = "Pandi"; // Correct password
    const nextPageUrl = "main.html"; // Redirect page

    if (username !== "" && password === secretCode) {
        localStorage.setItem("storedUsername", username); // Store username
        resultDiv.innerHTML = "Waste fellow loves you Pandi❤️😘"; 
        setTimeout(() => { window.location.href = nextPageUrl; }, 1500); // Redirect after 1.5s
    } else {
        resultDiv.innerHTML = "Nuvu na pandi pella kadhu -vellu vellu pandi pella ni ra manu : go fast";
    }
});
