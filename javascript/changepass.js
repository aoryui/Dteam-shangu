// ユーザーナンバーをuserに代入
const urlParams = new URLSearchParams(window.location.search);
let user = urlParams.get('user');
let pass = passdic[user]

const loginForm = document.getElementById('loginForm');

// フォームの送信イベントリスナーを設定
loginForm.addEventListener('submit', (event) => {
    // フォームの送信を防ぐ
    event.preventDefault();

    // フォームの入力データを取得
    const nowpass = document.getElementById('now-password').value;
    const newpass = document.getElementById('new-password').value;
    const newpass2 = document.getElementById('new-password2').value;

    if(pass != nowpass){
        alert('現在のパスワードが違います')
        return
    }

    if(newpass != newpass2){
        alert('新規パスワードの確認が一致しません')
        return
    }
    alert('パスワードを変更しました');
    window.location.href = 'profile.html?user=' + user;
});
