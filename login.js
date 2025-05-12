async function Login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorElement = document.getElementById("error-space");

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username) {
        FlashRed(usernameInput);
        errorElement.innerText = "Puste pole nazwa użytkownika";
        return;
    }
    if (!password) {
        FlashRed(passwordInput);
        errorElement.innerText = "Puste pole hasło";
        return;
    }
    if (username.length < 5) {
        FlashRed(usernameInput);
        errorElement.innerText = "Nazwa użytkownika nie może być krótsza niż 5 znaków";
        return;
    }
    if (password.length < 5) {
        FlashRed(passwordInput);
        errorElement.innerText = "Hasło nie może być krótsze niż 5 znaków";
        return;
    }
    errorElement.innerText = "";

    const encryptedPassword = await encryptPassword(password);

    try {
        const response = await fetch("https://127.0.0.1/post", {
            method: "POST",
            body: JSON.stringify({
                action: "login",
                username,
                password: encryptedPassword
            })
        });
        const responseData = await response.json();

        if (!responseData.IsUser) {
            errorElement.innerText = "Nieznana nazwa użytkownika";
            return;
        }
        if (!responseData.IsValid) {
            errorElement.innerText = "Błędne hasło";
            return;
        }
    } catch (error) {
        errorElement.innerText = "Błąd podczas logowania";
    }
}

async function encryptPassword(password) {
    const encryptedPasswordObj = new jsSHA("SHA-512", "TEXT", { numRounds: 1 });
    encryptedPasswordObj.update(password);
    return encryptedPasswordObj.getHash("HEX");
}

function FlashRed(obj) {
    obj.style.backgroundColor = "rgb(192, 30, 30)";
    setTimeout(() => obj.style.backgroundColor = "", 300);
}
