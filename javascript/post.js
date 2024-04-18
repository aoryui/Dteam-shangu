const Post_Text = document.getElementById('post_text');
const Result = document.getElementById('result');
const SubmitButton = document.querySelector('input[type="submit"]');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');


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

// 結果表示エリアにテキストを表示
Result.innerHTML = convertedText;

// フォームとボタンを非表示
document.getElementById('post-container').style.display = 'none';
};
