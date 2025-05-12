async function Login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorElement = document.getElementById("error-space");

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Walidacja pól
    if (!username || username.length < 5) {
        showError(usernameInput, "Nazwa użytkownika musi mieć co najmniej 5 znaków");
        return;
    }

    if (!password || password.length < 5) {
        showError(passwordInput, "Hasło musi mieć co najmniej 5 znaków");
        return;
    }

    errorElement.innerText = ""; // Czyść błędy

    const encryptedPassword = await encryptPassword(password);

    try {
        const response = await fetch("login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                action: "login",
                username,
                password: encryptedPassword,
            }),
        });

        if (!response.ok) {
            throw new Error("Błąd sieci lub serwera");
        }

        const responseData = await response.json();

        if (!responseData.IsUser) {
            errorElement.innerText = "Nieznana nazwa użytkownika";
            return;
        }

        if (!responseData.IsValid) {
            errorElement.innerText = "Błędne hasło";
            return;
        }

        // Sukces logowania
        errorElement.innerText = "Logowanie udane!";
        window.location.href = "/dashboard"; // Przekierowanie po sukcesie
    } catch (error) {
        errorElement.innerText = "Błąd: " + error.message;
    }
}

async function encryptPassword(password) {
    const encryptedPasswordObj = new jsSHA("SHA-512", "TEXT", { numRounds: 1 });
    encryptedPasswordObj.update(password);
    return encryptedPasswordObj.getHash("HEX");
}

function showError(inputElement, message) {
    const errorElement = document.getElementById("error-space");
    inputElement.style.backgroundColor = "rgb(192, 30, 30)";
    errorElement.innerText = message;
    setTimeout(() => {
        inputElement.style.backgroundColor = "";
    }, 300);
}
