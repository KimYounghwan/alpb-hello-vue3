<template>
  <div class="code-management">
    <!-- Hello World를 상단에 배치 -->
    <div class="hello-world">
      <h1>Hello World</h1>
    </div>

    <div class="code-container">
      <!-- 왼쪽: 코드 그룹 -->
      <div class="code-groups">
        <h3>코드그룹 
          <button class="action-button add-button" @click="addGroup">+추가</button> 
          <button class="action-button remove-button" @click="removeGroup">-삭제</button>
        </h3>
        
        <div v-if="showGroupForm" class="group-form">
          <div class="form-group">
            <label for="newGroupName">그룹명</label>
            <input id="newGroupName" v-model="newGroup.groupName" />
          </div>
          <div class="form-group">
            <label for="newGroupId">그룹ID</label>
            <input id="newGroupId" v-model="newGroup.groupId" />
          </div>
          <button class="save-button" @click="saveGroup">그룹저장</button>
          <button class="cancel-button" @click="cancelGroup">취소</button>
        </div>

        <table class="group-table">
          <thead>
            <tr>
              <th>그룹명</th>
              <th>그룹ID</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(group, index) in codeGroups" :key="index" @click="showGroupPopup(group)" :class="{ 'selected-row': selectedGroupIndex === index }">
              <td>{{ group.groupId }}</td>
              <td>{{ group.groupName }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 오른쪽: 코드 상세 -->
      <div class="code-details" v-if="selectedGroup">
        <h3>코드 상세 - {{ selectedGroup.groupName }}</h3>
        
        <!-- 코드 상세 입력 폼 -->
        <div class="detail-form">
          <div class="form-group">
            <label for="groupId">그룹 ID</label>
            <input 
              id="groupId" 
              class="disabled-input"
              :value="selectedGroup ? selectedGroup.groupId : ''"
              placeholder="그룹을 선택해주세요"
              disabled
            />
          </div>
          <div class="form-group">
            <label for="codeId">코드ID</label>
            <input id="codeId" v-model="newDetail.codeId" />
          </div>
          <div class="form-group">
            <label for="codeName">코드명</label>
            <input id="codeName" v-model="newDetail.codeName" />
          </div>
          <div class="form-group">
            <label for="codeValue">코드값</label>
            <input id="codeValue" v-model="newDetail.codeValue" />
          </div>
          <div class="form-group">
            <label for="codeDesc">코드설명</label>
            <input id="codeDesc" v-model="newDetail.description" />
          </div>
          <div class="form-group">
            <label for="codeOrder">순서</label>
            <input id="codeOrder" v-model="newDetail.sortOrder" type="number" />
          </div>
          <button class="save-button" @click="save">저장</button>
        </div>

        <!-- 코드 상세 목록 -->
        <table class="detail-table">
          <thead>
            <tr>
              <th>순서</th>
              <th>코드명</th>
              <th>코드ID</th>
              <th>코드설명</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in codeDetails" :key="index">
              <td>{{ detail.sortOrder }}</td>
              <td>{{ detail.codeName }}</td>
              <td>{{ detail.codeValue }}</td>
              <td>{{ detail.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const codeGroups = ref([]);
const codeDetails = ref([]);
const newDetail = ref({
  name: '',
  id: '',
  description: '',
  order: ''
});
const selectedGroupIndex = ref(null);
const showPopup = ref(false);
const selectedGroup = ref(null);
const showGroupForm = ref(false);
const newGroup = ref({
  groupName: '',
  groupId: ''
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/codegroups');
    codeGroups.value = response.data;
    console.log(codeGroups.value);
  } catch (error) {
    console.error('코드 그룹 조회 중 오류 발생:', error);
    alert('코드 그룹을 불러오는데 실패했습니다.');
  }
});

const addGroup = () => {
  showGroupForm.value = true;
};

const removeGroup = () => {
  codeGroups.value.pop();
};

const addDetail = () => {
  codeDetails.value.push({
    order: codeDetails.value.length + 1,
    name: '',
    id: '',
    description: ''
  });
};

const removeDetail = () => {
  codeDetails.value.pop();
};

const save = async () => {
  if (!selectedGroup.value) {
    alert('그룹을 먼저 선택해주세요.');
    return;
  }

  if (newDetail.value.codeName && newDetail.value.codeId) {
    try {
      const saveData = {
        ...newDetail.value,
        groupId: selectedGroup.value.groupId
      };
      
      await axios.post('/api/code-details', saveData);
      
      // 저장 성공 후 목록 새로고침
      const response = await axios.get(`/api/code-details/group/${selectedGroup.value.groupId}`);
      codeDetails.value = response.data;
      
      // 입력 폼 초기화
      newDetail.value = {
        groupId: '',
        codeId: '',
        codeName: '',
        codeValue: '',
        description: '',
        sortOrder: ''
      };
      
      alert('저장되었습니다.');
    } catch (error) {
      console.error('코드 상세 정보 저장 중 오류 발생:', error);
      alert('저장에 실패했습니다.');
    }
  } else {
    alert('코드명과 코드 ID를 입력하세요.');
  }
};

const showGroupPopup = async (group) => {
  selectedGroup.value = group;
  showPopup.value = true;
  
  try {
    const response = await axios.get(`/api/code-details/group/${group.groupId}`);
    codeDetails.value = response.data;
    
    // 마지막 순서값 + 1을 신규 입력폼의 기본값으로 설정
    const lastOrder = codeDetails.value.length > 0 
      ? Math.max(...codeDetails.value.map(detail => detail.sortOrder))
      : 0;
    newDetail.value.sortOrder = lastOrder + 1;
    
  } catch (error) {
    console.error('코드 상세 정보 조회 중 오류 발생:', error);
    alert('코드 상세 정보를 불러오는데 실패했습니다.');
  }
};

const closePopup = () => {
  showPopup.value = false;
  selectedGroup.value = null;
};

const cancelGroup = () => {
  showGroupForm.value = false;
  newGroup.value = {
    groupName: '',
    groupId: ''
  };
};

const saveGroup = async () => {
  if (!newGroup.value.groupName || !newGroup.value.groupId) {
    alert('그룹명과 그룹ID를 모두 입력해주세요.');
    return;
  }

  try {
    await axios.post('/api/codegroups', newGroup.value);
    
    // 저장 성공 후 목록 새로고침
    const response = await axios.get('/api/codegroups');
    codeGroups.value = response.data;
    
    // 입력 폼 초기화 및 숨기기
    cancelGroup();
    alert('그룹이 저장되었습니다.');
  } catch (error) {
    console.error('코드 그룹 저장 중 오류 발생:', error);
    alert('그룹 저장에 실패했습니다.');
  }
};
</script>

<style scoped>
.code-management {
  padding: 20px;
}

.code-container {
  display: flex;
  gap: 30px;
}

.code-groups {
  flex: 0 0 40%;  /* 왼쪽 영역 40% 차지 */
}

.code-details {
  flex: 0 0 55%;  /* 오른쪽 영역 55% 차지 */
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
button {
  margin-left: 5px;
  cursor: pointer;
}
.form-container {
  max-width: 500px;
  margin: 20px 0;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 5px rgba(76,175,80,0.2);
}

.save-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.save-button:hover {
  background-color: #45a049;
}

.code-details {
  margin: 20px 0;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.code-details h3 {
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.action-button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-button {
  background-color: #4CAF50;
  color: white;
}

.add-button:hover {
  background-color: #45a049;
}

.remove-button {
  background-color: #f44336;
  color: white;
}

.remove-button:hover {
  background-color: #da190b;
}

.detail-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.detail-table th {
  background-color: #f8f9fa;
  color: #333;
  font-weight: bold;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ddd;
}

.detail-table td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

.table-input {
  width: 100%;
  padding: 6px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.table-input:focus {
  border-color: #4CAF50;
  outline: none;
  box-shadow: 0 0 5px rgba(76,175,80,0.2);
}

.number-input {
  width: 70px;
}

.detail-table tr:hover {
  background-color: #f5f5f5;
}

.code-groups {
  margin: 20px 0;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.code-groups h3 {
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.group-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.group-table th {
  background-color: #f8f9fa;
  color: #333;
  font-weight: bold;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ddd;
}

.group-table td {
  padding: 10px 12px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.group-table tbody tr {
  transition: background-color 0.2s ease;
}

.group-table tbody tr:hover {
  background-color: #f5f5f5;
}

.selected-row {
  background-color: #e8f5e9;
}

.selected-row:hover {
  background-color: #c8e6c9 !important;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 300px;
}

.popup-content h4 {
  color: #333;
  margin: 0 0 15px 0;
}

.popup-content p {
  margin: 10px 0;
  color: #666;
}

.popup-content button {
  margin-top: 15px;
  background-color: #666;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.popup-content button:hover {
  background-color: #555;
}

.selected-group-info {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.info-header h4 {
  color: #2c3e50;
  margin: 0 0 15px 0;
  font-size: 1.1em;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 8px;
  display: inline-block;
}

.info-content {
  display: flex;
  gap: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-label {
  font-weight: 600;
  color: #495057;
}

.info-value {
  color: #2c3e50;
  background-color: white;
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
}

.disabled-input {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  color: #666;
  cursor: not-allowed;
  padding: 8px;
  width: 100%;
  border-radius: 4px;
}

.group-form {
  margin: 15px 0;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.cancel-button {
  background-color: #6c757d;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
  transition: background-color 0.3s;
}

.cancel-button:hover {
  background-color: #5a6268;
}

.detail-form {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.hello-world {
  text-align: center;
  margin-bottom: 30px;
}

.hello-world h1 {
  color: #333;
  font-size: 2em;
  margin: 0;
  padding: 20px 0;
}
</style>
  