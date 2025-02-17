<script setup>

</script>

<template>
    <div class="pet-container">
        <div class="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/194/194279.png" alt="logo">
            <span>MY PET</span>
        </div>

        <div class="pet-card">
            <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="pet">
            <div class="pet-info">
                <h3>나냥</h3>
                <p><strong>종류:</strong> 고양이</p>
                <p><strong>나이:</strong> 3살</p>
            </div>
        </div> 

        <div class="pet-card">
            <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="pet">
            <div class="pet-info">
                <h3>강아지예용</h3>
                <p><strong>종류:</strong> 강아지</p>
                <p><strong>나이:</strong> 5살</p>
            </div>
        </div>

        <div class="pet-card">
            <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="pet">
            <div class="pet-info">
                <h3>sfd</h3>
                <p><strong>종류:</strong> 고양이</p>
                <p><strong>나이:</strong> 0살</p>
            </div>
        </div>

        <button class="btn">펫 등록하기</button>
        <button class="btn">뒤로가기</button>
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
        .pet-container {
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
        .pet-card {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 10px;
            text-align: left;
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
        }
        .pet-card img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #ddd;
        }
        .pet-info h3 {
            margin: 0;
            font-size: 18px;
        }
        .pet-info p {
            margin: 5px 0;
            font-size: 14px;
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
            background-color: #F8C8DC;
            color: black;
        }
        .btn:hover {
            opacity: 0.8;
        }

</style>
