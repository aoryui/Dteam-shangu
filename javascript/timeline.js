const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', () => {
    // 投稿に遷移
    window.location.href = 'post.html';
});

button2.addEventListener('click', () => {
    // 質問に遷移
    window.location.href = 'question.html';
});
