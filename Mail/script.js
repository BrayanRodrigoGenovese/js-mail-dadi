// Lista di email
const guestEmails = [
  "alessandro.q@boolean.com",
  "anna.d.g@boolean.com",
  "diego.i@boolean.com",
  "diego.t@boolean.com",
];
console.table(guestEmails);
// Inserimento della email da parte dell'utente
const userEmail = prompt("Inserisci la tua email").toLowerCase();
console.log(`userEmail = ${userEmail}`);
