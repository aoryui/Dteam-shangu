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

    if (!text) { // 入力値が空でない場合のみ処理を実行
        // 何も入力されていない場合の処理
        alert('記事を作成してください');
        return
    }else if (!title){
        alert('タイトルが入力されていません');
        return
    }else if (!tag){
        alert('タグが設定されていません');
        return
    }

    // 改行を `<br>` タグに変換
    const convertedTitle = title.replace(/\r\n|\r|\n/g, '<br>');
    const convertedTag = tag.replace(/\r\n|\r|\n/g, '<br>');
    const convertedText = text.replace(/\r\n|\r|\n/g, '<br>');

    // 日付をYYYYMMDD形式で取得
    var dt = new Date();
    var year = dt.getFullYear();
    var month = ("00" + (dt.getMonth()+1)).slice(-2);
    var day = ("00" + (dt.getDate())).slice(-2);
    var time = `${year}/${month}/${day}`

    // articleに入力をもってくよ！
    window.location.href = 'article.html?title=' + convertedTitle + '&tag=' + convertedTag + '&text=' + convertedText + '&time=' + time;
};
