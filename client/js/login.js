import {auth} from "./firebase-config.js";
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const inpEmail = document.querySelector(".inp-email");
const inpPwd = document.querySelector(".inp-pwd");
const loginForm = document.querySelector("#login-form");

const handleLogin = (event) => {
    event.preventDefault();

    let email = inpEmail.value;
    let password = inpPwd.value;

    if (!email || !password) {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    const userSession = {
        user: {
            email: user.email
        },
        expiry: new Date().getTime() + 3*60*60*1000
    }
    localStorage.setItem('user_session',JSON.stringify(userSession));
    alert("Đăng nhập thành công!");
    window.location.href = "index.html";
    })
    .catch((error) => {
        alert("Lỗi: " + error.message);
    });
}

loginForm.addEventListener('submit',handleLogin);