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

    // 指定した条件をチェック
    const isKdAccount = email.includes('kd');
    const isValidPassword = password === 'pass'; // パスワードの条件を指定

    if (isKdAccount && isValidPassword) {
        // ログイン成功時の処理

        // メイン画面への遷移
        // メイン画面のURLを指定して画面遷移
        window.location.href = 'file:///C:/Users/%E6%98%A5%E6%9C%A8%E3%80%80%E6%B5%B7%E6%96%97/OneDrive/%E3%83%87%E3%82%B9%E3%82%AF%E3%83%88%E3%83%83%E3%83%97/Dteam-shangu-2/post.html';
    } else {
        // ログイン失敗時の処理
        loginResult.textContent = 'メールアドレスまたはパスワードが間違っています。';
    }
});
