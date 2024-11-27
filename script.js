let targetNumber;
let attempts;

document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("submit-guess").addEventListener("click", makeGuess);

function startGame() {
    targetNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 5;

    document.getElementById("message").textContent = "Игра началась! Попробуйте угадать число.";
    document.getElementById("attempts").textContent = `Осталось попыток: ${attempts}`;
    document.getElementById("user-input").value = ""; // Очистить поле ввода

    document.getElementById("game").classList.remove("hidden"); // Показать поле ввода и кнопку "Отправить"
    document.getElementById("submit-guess").disabled = false; // Активировать кнопку отправки

    console.log(`Загаданное число: ${targetNumber}`); // Для отладки
}

function makeGuess() {
    const userInput = document.getElementById("user-input").value;
    const guess = Number(userInput);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        document.getElementById("message").textContent = "Введите число от 1 до 10.";
        return;
    }

    attempts--;
    document.getElementById("attempts").textContent = `Осталось попыток: ${attempts}`;

    if (guess === targetNumber) {
        document.getElementById("message").textContent = "Поздравляем! Вы угадали число!";
        document.getElementById("submit-guess").disabled = true;
    } else if (guess > targetNumber) {
        document.getElementById("message").textContent = "Загаданное число меньше.";
    } else {
        document.getElementById("message").textContent = "Загаданное число больше.";
    }

    if (attempts === 0 && guess !== targetNumber) {
        document.getElementById("message").textContent = `Вы проиграли. Загаданное число было ${targetNumber}.`;
        document.getElementById("submit-guess").disabled = true;
    }

    console.log(`Попытка: ${guess}, Осталось попыток: ${attempts}, Загаданное число: ${targetNumber}`);
}