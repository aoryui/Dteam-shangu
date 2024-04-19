const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

<<<<<<< HEAD
button3.addEventListener('click', () => {
=======
button1.addEventListener('click', () => {
>>>>>>> 33af7c037d9c70aa3f212c341adab4ff45f6fef1
    // 投稿に遷移
    window.location.href = 'post.html';
});

button2.addEventListener('click', () => {
    // 質問に遷移
    window.location.href = 'question.html';
});

// script.jsファイルの内容

// タイムラインにイベントを追加する関数
function addEvent() {
    // イベントの時間と説明を入力から取得
    const eventTime = document.getElementById('eventTime').value;
    const eventDescription = document.getElementById('eventDescription').value;
    
    // タイムラインの要素を取得
    const timeline = document.getElementById('timeline');
    
    // タイムラインイベントの要素を作成
    const eventElement = document.createElement('div');
    eventElement.classList.add('timeline-event');
    
    // 時間と説明を表示するための要素を追加
    eventElement.innerHTML = `
        <div><strong>${eventTime}</strong></div>
        <div>${eventDescription}</div>
    `;
    
    // タイムラインにイベントを追加
    timeline.appendChild(eventElement);
    
    // 入力フォームをクリア
    document.getElementById('eventTime').value = '';
    document.getElementById('eventDescription').value = '';
}
