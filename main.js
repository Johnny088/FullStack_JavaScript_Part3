//task1
function totalCheck() {
  const tempSum = prompt(`type your check amount:`);
  if (tempSum === null) {
    alert(`canceled`);
  } else {
    let checkSum = Number(tempSum);
    let tips;
    if (isNaN(checkSum) || checkSum < 0) {
      alert('invalid input data');
    } else {
      tips = Number(prompt(`type your tip amount:`));
      if (isNaN(tips) || tips < 0 || tips > 100) {
        alert('invalid input data');
      } else {
        const persentage = (tips * checkSum) / 100;
        alert(
          `Check summ ${checkSum} \nTip amount: ${tips}% \nTotal sum to pay: ${
            checkSum + persentage
          }`
        );
      }
    }
  }
}

//totalCheck();

// -------------------------------task2
function checkMiddle() {
  const yourWord = prompt(`type the word`);
  let check;
  let countLength;
  let middle;
  if (yourWord === null) {
    alert('canceled');
  } else if (yourWord.trim() === '') {
    alert('invalid input data');
  } else {
    check = yourWord.trim();
    if (check.includes(' ')) {
      alert('the word has space');
    } else {
      countLength = check.length;
      if (countLength % 2 == 0) {
        middle = countLength / 2 - 1;
        alert(`Word: ${check} \nResult: ${check.slice(middle, middle + 2)}`);
      } else {
        middle = Math.floor(countLength / 2);
        alert(`Word: ${check} \nResult: ${check[middle]}`);
      }
    }
  }
}
checkMiddle();
