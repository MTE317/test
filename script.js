// 投票結果を格納するオブジェクト
let votes = {
  Red: 0,
  Blue: 0,
  Green: 0
};

// 投票ボタンを押したときの処理
function vote(color) {
  votes[color] += 1; // 投票を加算
  updateResults();   // 結果を更新
}

// 結果を表示
function updateResults() {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <p>赤: ${votes.Red}票</p>
    <p>青: ${votes.Blue}票</p>
    <p>緑: ${votes.Green}票</p>
  `;
}
