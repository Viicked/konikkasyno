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
            errorElement.innerText = "nieznana nazwa użytkownika";
            return;
        }
        if (!responseData.IsValid) {
            errorElement.innerText = "błędne hasło";
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
    setTimeout(() => obj.style.backgroundColor = "rgb(216, 216, 216)", 300);
}async function Login() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let error = document.getElementById("error-space");

    if(username.value == "") {
        FlashRed(username);
        error.innerText = "Puste pole nazwa użytkownika";
        return;
    }
    if(password.value == "") {
        FlashRed(password);
        error.innerText = "Puste pole hasło";
        return;
    }
    if(username.value.length < 5) {
        FlashRed(username)
        error.innerText = "Nazwa użytkownika nie może być krótsza niż 5 znaków";
        return;
    }
    if(password.value.length < 5) {
        FlashRed(password)
        error.innerText = "Hasło nie może być krótsze niż 5 znaków";
        return;
    }
    error.innerText = "";

    let encrypted_password_obj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
    encrypted_password_obj.update(password.value);
    let encrypted_password = encrypted_password_obj.getHash("HEX");

    const response_text = await fetch("https://127.0.0.1/post", {
        method: "POST",
        body: JSON.stringify({
            action: "login",
            username: username.value,
            password: encrypted_password
        })
    });

    let response = JSON.parse(response_text);
    if(!response.IsUser) {
        error.innerText = "nieznana nazwa użytkownika";
        return;
    } 
    if(!response.IsValid) {
        error.innerText = "błędne hasło";
        return;
    }
    
    // coś dalej
}

function FlashRed(obj) {
    obj.style.backgroundColor = "rgb(192, 30, 30)";
    setTimeout(() => obj.style.backgroundColor = "rgb(216, 216, 216)", 300);
}
