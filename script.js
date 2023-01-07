// // Mengambil element yang akan dikontrol oleh JavaScript
// const team1Score = document.getElementById('team1');
// const team2Score = document.getElementById('team2');

// // Menetapkan event listener untuk swipe kebawah pada element team1Score
// team1Score.addEventListener('swipedown', () => {
//   // Mengurangi nilai integer dari element team1Score sebesar 1
//   team1Score.innerText = Math.max(parseInt(team1Score.innerText, 10) - 1, 0);
// });

// // Menetapkan event listener untuk swipe ke atas pada element team1Score
// team1Score.addEventListener('swipeup', () => {
//   // Menambah nilai integer dari element team1Score sebesar 1
//   team1Score.innerText = parseInt(team1Score.innerText, 10) + 1;
// });

// // Menetapkan event listener untuk swipe kebawah pada element team2Score
// team2Score.addEventListener('swipedown', () => {
//   // Mengurangi nilai integer dari element team2Score sebesar 1
//   team2Score.innerText = Math.max(parseInt(team2Score.innerText, 10) - 1, 0);
// });

// // Menetapkan event listener untuk swipe ke atas pada element team2Score
// team2Score.addEventListener('swipeup', () => {
//   // Menambah nilai integer dari element team2Score sebesar 1
//   team2Score.innerText = parseInt(team2Score.innerText, 10) + 1;
// });

// const team1Btn = document.getElementById('team1');
// const team2Btn = document.getElementById('team2');

// function increaseScore(team) {
//   if (team === 'team1') {
//     const currentScore = parseInt(team1Btn.innerHTML);
//     if (currentScore < 21) {
//       team1Btn.innerHTML = currentScore + 1;
//     }
//   } else if (team === 'team2') {
//     const currentScore = parseInt(team2Btn.innerHTML);
//     if (currentScore < 21) {
//       team2Btn.innerHTML = currentScore + 1;
//     }
//   }
// }

// function decreaseScore(team) {
//   if (team === 'team1') {
//     const currentScore = parseInt(team1Btn.innerHTML);
//     if (currentScore > 0) {
//       team1Btn.innerHTML = currentScore - 1;
//     }
//   } else if (team === 'team2') {
//     const currentScore = parseInt(team2Btn.innerHTML);
//     if (currentScore > 0) {
//       team2Btn.innerHTML = currentScore - 1;
//     }
//   }
// }

// team1Btn.addEventListener('mouseup', () => increaseScore('team1'));
// team1Btn.addEventListener('touchend', () => increaseScore('team1'));
// team1Btn.addEventListener('pointerup', () => increaseScore('team1'));
// team1Btn.addEventListener('mousedown', () => decreaseScore('team1'));
// team1Btn.addEventListener('touchstart', () => decreaseScore('team1'));
// team1Btn.addEventListener('pointerdown', () => decreaseScore('team1'));

// team2Btn.addEventListener('mouseup', () => increaseScore('team2'));
// team2Btn.addEventListener('touchend', () => increaseScore('team2'));
// team2Btn.addEventListener('pointerup', () => increaseScore('team2'));
// team2Btn.addEventListener('mousedown', () => decreaseScore('team2'));
// team2Btn.addEventListener('touchstart', () => decreaseScore('team2'));
// team2Btn.addEventListener('pointerdown', () => decreaseScore('team2'));

// const team1Score = document.getElementById("team1");
// const team2Score = document.getElementById("team2");

// // Menambah skor tim 1
// team1Score.addEventListener("wheel", (event) => {
//   if (event.deltaY < 0) {
//     // Swipe down
//     if (team1Score.innerHTML > 0) {
//       team1Score.innerHTML = parseInt(team1Score.innerHTML) - 1;
//     }
//   } else {
//     // Swipe up
//     if (team1Score.innerHTML < 21) {
//       team1Score.innerHTML = parseInt(team1Score.innerHTML) + 1;
//     }
//   }
// });

// // Menambah skor tim 2
// team2Score.addEventListener("wheel", (event) => {
//   if (event.deltaY < 0) {
//     // Swipe down
//     if (team2Score.innerHTML > 0) {
//       team2Score.innerHTML = parseInt(team2Score.innerHTML) - 1;
//     }
//   } else {
//     // Swipe up
//     if (team2Score.innerHTML < 21) {
//       team2Score.innerHTML = parseInt(team2Score.innerHTML) + 1;
//     }
//   }
// });


const team1Score = document.getElementById('team1');
const team2Score = document.getElementById('team2');

// Menambahkan event listener untuk scrolling up pada skor tim 1
team1Score.addEventListener('wheel', (event) => {
  let currentScore = parseInt(team1Score.textContent, 10);
  if (event.deltaY < 0 && currentScore < 21) {
    currentScore++;
    team1Score.textContent = currentScore;
  } else if (event.deltaY > 0 && currentScore > 0) {
    currentScore--;
    team1Score.textContent = currentScore;
  }
});

// Menambahkan event listener untuk scrolling up pada skor tim 2
team2Score.addEventListener('wheel', (event) => {
  let currentScore = parseInt(team2Score.textContent, 10);
  if (event.deltaY < 0 && currentScore < 21) {
    currentScore++;
    team2Score.textContent = currentScore;
  } else if (event.deltaY > 0 && currentScore > 0) {
    currentScore--;
    team2Score.textContent = currentScore;
  }
});
