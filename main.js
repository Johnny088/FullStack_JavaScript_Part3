//task1
function totalCheck() {
  let checkSum = Number(prompt(`type your check amount:`));
  let tips;
  if (checkSum === 0) {
    console.log(`canceled`);
  } else if (isNaN(checkSum) || checkSum < 0) {
    alert('invalid input data');
    checkSum = 0;
  }
  //   --------------------------------
  if (checkSum != 0) {
    tips = Number(prompt(`type your tip amount:`));
    if (tips === 0) {
      console.log(`tips were canceled`);
    } else if (Number(tips == NaN) || tips < 0 || tips > 100) {
      alert('invalid input data');
    } else {
      const persentage = (tips * checkSum) / 100;
      alert(
        `Check summ ${checkSum} \nTip amount: ${tips} \nTotal sum to pay: ${
          checkSum + persentage
        }`
      );
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
    countLength = check.length;
    if (countLength % 2 == 0) {
      middle = countLength / 2 - 1;
      console.log(check);
      alert(check.slice(middle, middle + 2));
    } else {
      middle = Math.floor(countLength / 2);
      console.log(check);
      alert(check[middle]);
    }
  }
}
checkMiddle();
