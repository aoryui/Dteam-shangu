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
        window.location.href = 'post.html';
    } else {
        // ログイン失敗時の処理
        loginResult.textContent = 'メールアドレスまたはパスワードが間違っています。';
    }
});
