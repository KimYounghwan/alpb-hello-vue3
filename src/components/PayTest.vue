<template>
    <div>
      <button @click="handlePayment">
        결제하기
      </button>
    </div>
  </template>
  
  <script setup>
  // 결제 설정
  const MERCHANT_ID = 'INIpayTest'
  const PAYMENT_CONFIG = {
    pg: 'html5_inicis',
    pay_method: 'card',
    amount: 1000,
    name: '아임포트 결제 데이터 분석',
    buyer_name: '홍길동',
    buyer_tel: '01012341234',
    buyer_email: 'example@example',
    buyer_addr: '신사동 661-16',
    buyer_postcode: '06018'
  }
  
  // 결제 처리 함수
  const handlePayment = () => {
    const { IMP } = window
    IMP.init(MERCHANT_ID)
  
    const paymentData = {
      ...PAYMENT_CONFIG,
      merchant_uid: `mid_${new Date().getTime()}`
    }
  
    IMP.request_pay(paymentData, handlePaymentCallback)
  }
  
  // 결제 콜백 함수
  const handlePaymentCallback = ({ success, error_msg }) => {
    if (success) {
      alert('결제 성공')
      return
    }
    alert(`결제 실패: ${error_msg}`)
  }
  </script>
  