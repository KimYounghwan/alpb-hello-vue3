<script setup>
</script>

<template>
    <div class="mypage-container">
        <div class="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/194/194279.png" alt="logo">
            <span>MY PET</span>
        </div>
        <button class="btn btn-profile">내 프로필 보기</button>
        <button class="btn btn-pet-list">내 펫 목록 보기</button>
        <button class="btn btn-shop">쇼핑몰</button>
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
        .mypage-container {
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
        .btn {
            display: block;
            width: 100%;
            padding: 15px;
            margin: 10px 0;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;
        }
        .btn-profile {
            background-color: #40E0D0;
            color: white;
        }
        .btn-pet-list {
            background-color: #F8C8DC;
            color: black;
        }
        .btn-shop {
            background-color: #FFB86C;
            color: black;
        }
        .btn:hover {
            opacity: 0.8;
        }
</style>
