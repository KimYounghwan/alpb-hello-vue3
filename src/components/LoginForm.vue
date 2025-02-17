<script setup>
</script>

<template>

    <div class="login-container">
        <div class="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/194/194279.png" alt="logo">
            <span>MY PET</span>
        </div>
        <h2>로그인</h2>
        <form>
            <div class="input-group">
                <input type="text" placeholder="아이디" required>
            </div>
            <div class="input-group">
                <input type="password" placeholder="비밀번호" required>
            </div>
            <button type="submit" class="login-button">로그인</button>
        </form>
        <div class="signup-link">
            계정이 없나요? <router-link to="/signupform">회원가입</router-link>
        </div>
    </div>


</template>

<style scoped>
    * {
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #f8f8f8;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .login-container {
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        width: 360px;
        text-align: center;
    }
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 24px;
        font-weight: bold;
    }
    .logo img {
        width: 30px;
    }
    h2 {
        margin: 20px 0;
    }
    .input-group {
        margin-bottom: 15px;
    }
    .input-group input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }
    .login-button {
        width: 100%;
        background-color: #40E0D0;
        color: white;
        padding: 12px;
        border: none;
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;
        margin-top: 10px;
    }
    .login-button:hover {
        background-color: #32c3b5;
    }
    .signup-link {
        margin-top: 15px;
        font-size: 14px;
    }
    .signup-link a {
        color: purple;
        text-decoration: none;
    }
    .signup-link a:hover {
        text-decoration: underline;
    }
</style>