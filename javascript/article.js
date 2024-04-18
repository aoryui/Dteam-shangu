function flexTextarea(el) { //テキストエリアのフレックス
    const dummy = el.querySelector('.FlexTextarea__dummy')
    el.querySelector('.FlexTextarea__textarea').addEventListener('input', e => {
      dummy.textContent = e.target.value + '\u200b'
    })
  }
  
document.querySelectorAll('.FlexTextarea').forEach(flexTextarea)
  
const Post_Text = document.getElementById('post_text');
const Result = document.getElementById('result');
const SubmitButton = document.querySelector('input[type="submit"]');

function reply(){
// 入力されたテキストを取得
const text = Post_Text.value;

// 改行を `<br>` タグに変換
const convertedText = text.replace(/\r\n|\r|\n/g, '<br>');

// 結果表示エリアにテキストを表示
Result.innerHTML = convertedText;
};
