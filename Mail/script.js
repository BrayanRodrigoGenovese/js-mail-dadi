const guestsList = [
  "Alessandro.Q@gmail",
  "Ann.D.G@icloud",
  "Diego.I@gmail",
  "Diego.T@icloud",
];
const userName = prompt("Qual è la tua email?");
let isEnlisted = false;

for (let i = 0; i < guestsList.length && !isEnlisted; i++) {
  const guest = guestsList[i];
  if (guest === userName) {
    isEnlisted = true;
  }
}

if (isEnlisted) {
  console.log("sei nella lista");
} else {
  console.log("non sei nella lista");
}
