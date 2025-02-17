<script setup>
</script>

<template>

<div class="profile-container">
        <div class="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/194/194279.png" alt="logo">
            <span>MY PET</span>
        </div>

        <div class="profile-card">
            <h3>내 프로필</h3>
            <p><strong>아이디:</strong> sdcsdfs</p>
            <p><strong>이름:</strong> 권유진</p>
            <p><strong>이메일:</strong> smdlknl@naver.com</p>
        </div>

        <button class="btn">회원 정보 수정</button>
        <button class="btn">비밀번호 변경</button>
        <button class="btn">회원 탈퇴</button>
        <button class="btn">로그아웃</button>
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
        .profile-container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            width: 400px;
            text-align: center;
        }
        .logo {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .logo img {
            width: 30px;
            margin-right: 10px;
        }
        .profile-card {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 10px;
            text-align: left;
            margin-bottom: 20px;
        }
        .profile-card h3 {
            margin-bottom: 10px;
        }
        .profile-card p {
            margin: 5px 0;
        }
        .btn {
            display: block;
            width: 100%;
            padding: 15px;
            margin: 10px 0;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;
            background-color: #40E0D0;
            color: white;
        }
        .btn:hover {
            opacity: 0.8;
        }
</style>
