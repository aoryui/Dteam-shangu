const Post_Text = document.getElementById('post_text');
const Post_Title = document.getElementById('post_title');
const Post_Tag = document.getElementById('post_tag');
const Result1 = document.getElementById('result1');
const Result2 = document.getElementById('result2');
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
    const title = Post_Title.value;
    const tag = Post_Tag.value;
    const text = Post_Text.value;


    // 改行を `<br>` タグに変換
    const convertedTitle = title.replace(/\r\n|\r|\n/g, '<br>');
    const convertedTag = tag.replace(/\r\n|\r|\n/g, '<br>');
    const convertedText = text.replace(/\r\n|\r|\n/g, '<br>');

    const currentDate = new Date();
    
    // 時間をフォーマット
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // 月は0から始まるため、1を加える
    const day = currentDate.getDate();


    // 結果表示エリアにテキストを表示
    Result1.innerHTML = convertedTitle;
    Result2.innerHTML = convertedTag;
    Result.innerHTML = convertedText;


    //日時標示
    timeDisplay.textContent = year + '年' + month + '月' + day + '日';
    // フォームとボタンを非表示
    document.getElementById('post-container').style.display = 'none';
};