// DOM要素を取得
const inputField = document.getElementById('inputField');
const displayButton = document.getElementById('displayButton');
const outputDiv = document.getElementById('output');

// ボタンのクリックイベントリスナーを設定
displayButton.addEventListener('click', () => {
    // 入力フィールドから値を取得
    const inputValue = inputField.value;
    
    // 取得した値を表示エリアに表示
    outputDiv.textContent = inputValue;
});

button1.addEventListener('click', () => {
    // ページ1に遷移
    window.location.href = 'timeline.html';
});

button3.addEventListener('click', () => {
    // ページ2に遷移
    window.location.href = 'post.html';
});