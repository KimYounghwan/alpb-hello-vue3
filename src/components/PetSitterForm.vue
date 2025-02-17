<script setup>
</script>

<template>
<div class="profile-container">
    <div class="header">내 펫시터 프로필</div>

    <form>
        <div class="form-group">
            <label for="nickname">닉네임</label>
            <input type="text" id="nickname">
        </div>

        <div class="form-group">
            <label for="location">근무 위치</label>
            <input type="text" id="location">
        </div>

        <div class="form-group">
            <label>돌봄 가능 반려동물</label>
            <div class="checkbox-group">
                <input type="checkbox" id="dog" checked> <label for="dog">강아지</label>
                <input type="checkbox" id="cat" checked> <label for="cat">고양이</label>
                <input type="checkbox" id="small-pet"> <label for="small-pet">기타</label>
            </div>
        </div>

        <div class="form-group">
            <label>돌봄 가능 일시</label>
            <div class="date-range">
                <input type="date">
                <span>~</span>
                <input type="date">
            </div>
        </div>

        <div class="form-group">
            <label for="wage">시급 (원)</label>
            <input type="number" id="wage">
        </div>

        <div class="btn-group">
            <button type="submit" class="btn btn-update">프로필 수정</button>
            <button type="button" class="btn btn-cancel">펫시터 등록 취소</button>
        </div>
    </form>
    </div>
    </template>

<style scoped>
        .profile-container {
            width: 400px;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
            color: #4a3aff;
            margin-bottom: 20px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .form-group input[type="text"],
        .form-group input[type="number"],
        .form-group input[type="date"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
        }

        .checkbox-group {
            display: flex;
            gap: 10px;
        }

        .date-range {
            display: flex;
            justify-content: space-between;
        }

        .date-range input {
            width: 48%;
        }

        .btn-group {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }

        .btn {
            width: 48%;
            padding: 10px;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .btn-update {
            background-color: #4a3aff;
            color: white;
        }

        .btn-cancel {
            background-color: #d9534f;
            color: white;
        }
</style>