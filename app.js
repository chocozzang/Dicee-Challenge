// 이미지 1 태그를 선택
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');
// img1.setAttribute('src', 'images/dice6.png');
// img2.setAttribute('src', 'images/dice6.png');

// 랜덤 번호
const num1 = Math.floor(Math.random() * 6) + 1;
const num2 = Math.floor(Math.random() * 6) + 1;

img1.setAttribute('src', 'images/dice' + num1 + '.png');
img2.setAttribute('src', 'images/dice' + num2 + '.png');


if (num1 == num2) {
    h1.innerText = "!!!! DRAW !!!!";
} else if (num1 > num2) {
    h1.innerText = "👍!!!! Player 1 win !!!!👍";
} else {
    h1.innerText = "👍!!!! Player 2 win !!!!👍";
}

// console.log(num1)
// console.log(num2)
// alert('하이')