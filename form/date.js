// 変数を定義
const yearSelect = document.querySelector('#yearForm');
const monthSelect = document.querySelector('#monthForm');
const daySelect = document.querySelector('#dayForm');

// 年と日を動的に生成する
populateDays(monthSelect.value);
populateYears();

function populateDays(month) {
  while (daySelect.firstChild) {
    daySelect.removeChild(daySelect.firstChild);
  }

  // 挿入する日数を保持する変数を作成
  let dayNum;

  // 31 日か 30 日か？
  if (month === '01' | month === '03' | month === '05' | month === '07' | month === '08' | month === '10' | month === '12') {
    dayNum = 31;
  } else if(month === '04' | month === '06' | month === '09' | month === '11') {
    dayNum = 30;
  } else {
    // 2 月の場合は、閏年かどうかを計算する
    const year = yearSelect.value;
    const isLeap = new Date(year, 1, 29).getMonth() === 1;
    dayNum = isLeap ? 29 : 28;
  }

  // <select> に正しい数の新しい <option> 要素を挿入
  for (let i = 1; i <= dayNum; i++) {
    const option = document.createElement('option');
    option.textContent = i;
    option.value = (i < 10) ? `0${i}` : i;
    daySelect.appendChild(option);
  }

  // 前回の日が既に設定されていたら、 daySelect の値を
  // 日に設定し、年を変えたときに1に戻ることを
  // 避ける
  if (previousDay) {
    daySelect.value = previousDay;

    // 前回設定されていた日が大きい数字、例えば31であり、
    // その後で日数が少ない月 (例えば2月) を選択した場合、
    // このコードで空欄の日選択を表示するのではなく、
    // 利用可能な最大の日を選択するように保証する
    if (daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if (daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if (daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // 今年を数値として取得
  const date = new Date();
  const year = date.getFullYear();

  // 今年から 100 年前までの年が <select> で選択できるようにする
  for (let i = 0; i <= 100; i++) {
    const option = document.createElement('option');
    option.textContent = year - i;
    option.value = year - i;
    yearSelect.appendChild(option);
  }
}

// 年や月の <select> 値が変更されたら、 populateDays() を
// 再実行して日数を調整する
yearSelect.onchange = () => {
  populateDays(monthSelect.value);
}

monthSelect.onchange = () => {
  populateDays(monthSelect.value);
}

// 日の選択を保存
var previousDay;

// 以前どの日が設定されていたかを保存する
// 使い方は populateDays() を参照
daySelect.onchange = () => {
  previousDay = daySelect.value;
}
