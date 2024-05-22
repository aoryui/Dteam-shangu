//urlからuser取得
const urlParams = new URLSearchParams(window.location.search);
let titletext = urlParams.get('title');
let answertext = urlParams.get('answer');
let usernum = urlParams.get('user');
if (usernum == null) {
    usernum = 0;
};
// DOM要素を取得
const button1 = document.getElementById('timeline');
const button2 = document.getElementById('question');
const button3 = document.getElementById('postbtn');


button1.addEventListener('click', () => {
    // 投稿に遷移
    window.location.href = 'timeline.html?user=' + usernum;
});

button2.addEventListener('click', () => {
    // 質問に遷移
    window.location.href = 'question.html?user=' + usernum;
});

button3.addEventListener('click', () => {
    // 質問に遷移
    window.location.href = 'post.html?user=' + usernum;
});

if (titletext != null) { //question.jsが直接開かれた場合、要素の置き換えをしない
  const questionTextElement = document.getElementById('questiontext');
  questionTextElement.textContent = titletext;
}


document.getElementById('goodbtn').style.display = 'inline-block';
document.getElementById('good-count').style.display = 'inline-block';

// 日付表示
timedata = eval("AnswerTime" + 1);
const year = timedata[1];
const month = timedata[2];
const day = timedata[3];
let timetext = year + "/" + month + "/" + day;

time.textContent = timetext;
var answercontents = answertext;
answerDisplay.innerHTML = answercontents;

//アイコンからプロフィールに画面遷移
document.getElementById('userIcon').addEventListener('click', function () {
    window.location.href = 'profile.html?user=' + usernum;
});

//グッドボタン機能
const Gooddisplay = document.getElementById('good-count');
let goods = urlParams.get('good'); // URLからいいね数取得
Gooddisplay.textContent = goods;

// クリック回数をカウントする変数
let clickCount = 0;

// ボタンをクリックしたときの処理
document.getElementById("goodbtn").addEventListener("click", function () {
    // クリック回数が偶数の場合は1を加算し、奇数の場合は1を減算する
    if (clickCount % 2 === 0) {
        clickCount++;
    } else {
        clickCount--;
    }
    toggleIcon(); // アイコンを切り替える関数を呼び出す
    updateCount(); // カウントを更新する
});

// アイコンを切り替える関数
function toggleIcon() {
    // クリック回数が偶数の場合は上のアイコンを表示し、奇数の場合は下のアイコンを表示する
    if (clickCount % 2 === 0) {
        document.getElementById("iconPath").setAttribute("d", "M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z");
    } else {
        document.getElementById("iconPath").setAttribute("d", "M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z");
    }
}

if (!goods) {
    Gooddisplay.textContent = 0; // いいね数の初期値
}
// クリック回数を更新する関数
function updateCount() {
    // クリック回数が奇数の場合は+1を、偶数の場合は-1する
    if (clickCount % 2 == 1) {
        goods = ++goods;
        Gooddisplay.textContent = goods;
    } else {
        goods = --goods;
        Gooddisplay.textContent = goods;
    }
}
