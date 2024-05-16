// DOM要素を取得
const loginForm = document.getElementById('loginForm');
const loginResult = document.getElementById('loginResult');

// フォームの送信イベントリスナーを設定
loginForm.addEventListener('submit', (event) => {
    // フォームの送信を防ぐ
    event.preventDefault();

    // フォームの入力データを取得
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // emailに対応するemaildicのkeyを探す
    let result = "なし"; // resultに初期値を「なし」を設定
    for (const key in emaildic) {
        if (emaildic[key] === email) {
            result = key; // keyをresultに代入
            break; // 探索を停止
        }
    }
    console.log('アカウント' + result);
    if (passdic[result] === password){
        window.location.href = 'profile.html?user=' + result; // ユーザーナンバーを送信
    }else{
        loginResult.textContent = 'メールアドレスまたはパスワードが間違っています。';
    }

});
