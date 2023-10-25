let money;
let playAgain = true;
let numberSelected;

const PLENO = 36;

const wheel = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];

function defineStartMoney() {
  money = Number(prompt("Cuanto dinero tiene?"));
  return money;
}

function selectNumber() {
  numberSelected = Number(
    prompt("Seleccione un numero del 0 al " + (wheel.length - 1))
  );
  return numberSelected;
}

function spinWheel() {
  const randomIndex = Math.floor(Math.random() * wheel.length);
  return wheel[randomIndex];
}

function startBetting(quantity) {
  if (quantity <= 0 || quantity > money) {
    console.log("Apuesta inválida. Debes apostar una cantidad válida.");
  } else {
    bet(quantity);
  }
}

function bet(quantity) {
  console.log("Apostarás: $" + quantity);
  const numberSelected = selectNumber();
  money -= quantity;
  const spinResult = spinWheel();
  console.log("Número seleccionado: " + numberSelected);
  console.log("Resultado del giro: " + spinResult);

  if (spinResult === numberSelected) {
    money += quantity * PLENO;
    console.log("¡Felicidades! Ganaste una ronda. Dinero actual: $" + money);
  } else {
    console.log("Perdiste esta ronda, sigue intentando");
    console.log("Dinero actual: $" + money);
  }
}

function main() {
  defineStartMoney();
  let i = 1;
  while (playAgain && money > 0) {
    console.log("---------Ronda: " + i + "------------");
    console.log("Dinero actual: $" + money);
    startBetting(Number(prompt("Dinero a apostar")));
    i += 1;
    playAgain = confirm("¿Quieres jugar otra ronda?");
  }
  console.log("Gracias por jugar. Dinero final: $" + money);
}

main();
