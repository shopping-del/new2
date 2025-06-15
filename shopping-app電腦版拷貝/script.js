// 通用切畫面
function goToScreen(id) {
  document.querySelectorAll(".screen").forEach(el => {
    el.style.display = 'none'; // 👉 把所有畫面隱藏
    el.classList.remove("active");
  });
  document.getElementById(id).style.display = 'block'; // 👉 顯示目標畫面
  document.getElementById(id).classList.add("active");
}


// 隱藏 popup
function hideIntroPopup() {
  document.getElementById('introPopup').style.display = 'none';
}

// 點 popup 切換畫面＋顯示商品＋關閉 popup
function goToScreen3() {
  goToScreen('screen3');
  document.getElementById('productArea').style.display = 'block';
  hideIntroPopup();
}

// 點擊「今日特價」圖片 → 顯示彈窗
document.querySelector('.sale-header img').addEventListener('click', function() {
  document.getElementById('salePopup').style.display = 'block';
});

// 點擊彈出圖片後 → 自動關閉
document.getElementById('salePopup').addEventListener('click', function() {
  this.style.display = 'none';
});

// 點黑色皮衣 → 顯示 popup
document.getElementById('jacket').addEventListener('click', function () {
  const popup = document.getElementById('coatPopup');
  popup.style.display = 'block';

  // 加入 3 秒後自動關掉 popup
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000); // 3000 毫秒 = 3 秒
});

// 點圖片後自動關閉
document.getElementById('coatPopup').addEventListener('click', function () {
  this.style.display = 'none';
});

// 點詳情圖 => 顯示警告 popup
document.getElementById('jacketDetail').addEventListener('click', function () {
  document.getElementById('warningPopup').style.display = 'block';
});

// 點擊黑色皮衣警告 popup 
document.getElementById('warningPopup').addEventListener('click', function () {
  // 每次點擊都產生一個新的 img 元素
  const newWarning = document.createElement('img');
  newWarning.src = 'warning.png';
  newWarning.alt = '警告圖';
  
  // 加上樣式：位置亂跳、大小亂變
  newWarning.style.position = 'fixed';
  newWarning.style.top = Math.floor(Math.random() * 80) + '%';
  newWarning.style.left = Math.floor(Math.random() * 80) + '%';
  newWarning.style.width = Math.floor(Math.random() * 400 + 400) + 'px'; // 
  newWarning.style.zIndex = 9999;

  // 插入畫面
  document.body.appendChild(newWarning);
});


// 洋裝圖片點擊 → 顯示詳情 popup
document.getElementById('dress').addEventListener('click', function () {
  const popup = document.getElementById('dressPopup');
  popup.style.display = 'block';

  // 加入 3 秒後自動關掉 popup
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000); // 3000 毫秒 = 3 秒
});


// 點擊詳情 popup 自動關閉
document.getElementById('dressPopup').addEventListener('click', function () {
  this.style.display = 'none';
});

// 點擊詳情圖 → 顯示警告 popup
document.getElementById('dressDetail').addEventListener('click', function () {
  document.getElementById('dressWarningPopup').style.display = 'block';
});


// 點擊洋裝警告 popup 
document.getElementById('dressWarningPopup').addEventListener('click', function () {
  // 每次點擊都產生一個新的 img 元素
  const newWarning = document.createElement('img');
  newWarning.src = 'warning.png';
  newWarning.alt = '警告圖';
  
  // 加上樣式：位置亂跳、大小亂變
  newWarning.style.position = 'fixed';
  newWarning.style.top = Math.floor(Math.random() * 80) + '%';
  newWarning.style.left = Math.floor(Math.random() * 80) + '%';
  newWarning.style.width = Math.floor(Math.random() * 400 + 400) + 'px'; // 
  newWarning.style.zIndex = 9999;

  // 插入畫面
  document.body.appendChild(newWarning);
});

// 綠t圖片點擊 → 顯示詳情 popup
document.getElementById('mardi').addEventListener('click', function () {
  const popup = document.getElementById('mardiPopup');
  popup.style.display = 'block';

  // 加入 3 秒後自動關掉 popup
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000); // 3000 毫秒 = 3 秒
});


// 點擊詳情 popup 自動關閉
document.getElementById('mardiPopup').addEventListener('click', function () {
  this.style.display = 'none';
});

// 點擊詳情圖 → 顯示警告 popup
document.getElementById('mardiDetail').addEventListener('click', function () {
  document.getElementById('mardiWarningPopup').style.display = 'block';
});


// 點擊綠t警告 popup 
document.getElementById('mardiWarningPopup').addEventListener('click', function () {
  // 每次點擊都產生一個新的 img 元素
  const newWarning = document.createElement('img');
  newWarning.src = 'warning.png';
  newWarning.alt = '警告圖';
  
  // 加上樣式：位置亂跳、大小亂變
  newWarning.style.position = 'fixed';
  newWarning.style.top = Math.floor(Math.random() * 80) + '%';
  newWarning.style.left = Math.floor(Math.random() * 80) + '%';
  newWarning.style.width = Math.floor(Math.random() * 400 + 400) + 'px'; // 
  newWarning.style.zIndex = 9999;

  // 插入畫面
  document.body.appendChild(newWarning);
});

// 黑裙圖片點擊 → 顯示詳情 popup
document.getElementById('denim').addEventListener('click', function () {
  const popup = document.getElementById('denimPopup');
  popup.style.display = 'block';

  // 加入 3 秒後自動關掉 popup
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000); // 3000 毫秒 = 3 秒
});


// 點擊詳情 popup 自動關閉
document.getElementById('denimPopup').addEventListener('click', function () {
  this.style.display = 'none';
});

// 點擊詳情圖 → 顯示警告 popup
document.getElementById('denimDetail').addEventListener('click', function () {
  document.getElementById('denimWarningPopup').style.display = 'block';
});


// 點擊洋裝警告 popup 
document.getElementById('denimWarningPopup').addEventListener('click', function () {
  // 每次點擊都產生一個新的 img 元素
  const newWarning = document.createElement('img');
  newWarning.src = 'warning.png';
  newWarning.alt = '警告圖';
  
  // 加上樣式：位置亂跳、大小亂變
  newWarning.style.position = 'fixed';
  newWarning.style.top = Math.floor(Math.random() * 80) + '%';
  newWarning.style.left = Math.floor(Math.random() * 80) + '%';
  newWarning.style.width = Math.floor(Math.random() * 400 + 400) + 'px'; // 
  newWarning.style.zIndex = 9999;

  // 插入畫面
  document.body.appendChild(newWarning);
});

// 猛虎短T 點擊顯示 popup
document.getElementById('tiger').addEventListener('click', function () {
  const popup = document.getElementById('tigerPopup');
  popup.style.display = 'block';

  // 3 秒自動關閉
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
});

// 點擊詳情圖 → 彈出警告圖
document.getElementById('tigerDetail').addEventListener('click', function () {
  document.getElementById('tigerWarningPopup').style.display = 'block';
});

// 點擊警告圖 → 每次增加一張亂位置亂大小的 warning.png
document.getElementById('tigerWarningPopup').addEventListener('click', function () {
  const newWarning = document.createElement('img');
  newWarning.src = 'warning.png';
  newWarning.alt = '爆警告圖';

  // 設定亂位置
  newWarning.style.position = 'fixed';
  newWarning.style.top = Math.floor(Math.random() * 80) + '%';
  newWarning.style.left = Math.floor(Math.random() * 80) + '%';
  newWarning.style.width = Math.floor(Math.random() * 400 + 400) + 'px';
  newWarning.style.zIndex = 9999;

  document.body.appendChild(newWarning);
});

// 牛仔短褲 點擊顯示 popup
document.getElementById('shorts').addEventListener('click', function () {
  const popup = document.getElementById('shortsPopup');
  popup.style.display = 'block';

  // 3 秒自動關閉
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
});

// 點擊詳情圖 → 彈出警告圖
document.getElementById('shortsDetail').addEventListener('click', function () {
  document.getElementById('shortsWarningPopup').style.display = 'block';
});

// 點擊警告圖 → 每次增加一張亂位置亂大小的 warning.png
document.getElementById('shortsWarningPopup').addEventListener('click', function () {
  const newWarning = document.createElement('img');
  newWarning.src = 'warning.png';
  newWarning.alt = '爆警告圖';

  newWarning.style.position = 'fixed';
  newWarning.style.top = Math.floor(Math.random() * 80) + '%';
  newWarning.style.left = Math.floor(Math.random() * 80) + '%';
  newWarning.style.width = Math.floor(Math.random() * 400 + 400) + 'px';
  newWarning.style.zIndex = 9999;

  document.body.appendChild(newWarning);
});
