const Post_Text = document.getElementById('post_text');
const Result = document.getElementById('result');
const SubmitButton = document.querySelector('input[type="submit"]');
const button1 = document.getElementById('timeline');
const button2 = document.getElementById('question');
const button3 = document.getElementById('post');
const timeDisplay = document.getElementById('time');

button1.addEventListener('click', () => {
    // ページ1に遷移
    window.location.href = 'timeline.html';
});


button2.addEventListener('click', () => {
    // ページ3に遷移
    window.location.href = 'question.html';
});


function post(){

    // 入力されたテキストを取得
    const text = Post_Text.value;

    // 改行を `<br>` タグに変換
    const convertedText = text.replace(/\r\n|\r|\n/g, '<br>');

    const now = new Date();
    
    // 時間をフォーマット
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // 結果表示エリアにテキストを表示
    Result.innerHTML = convertedText;

    const formattedTime = `${hours}:${minutes}:${seconds}`;
    timeDisplay.textContent = formattedTime;
    // フォームとボタンを非表示
    document.getElementById('post-container').style.display = 'none';
};