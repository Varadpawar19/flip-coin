const button = document.getElementById("flip-button");
const coin = document.getElementById("coin");
const result = document.getElementById("result");
const count = document.getElementById("count");
let cnt = 0
button.addEventListener("click", flipCoin);

function flipCoin() {
  coin.classList.add("spin"); // Start spinning animation (moved inside function)

  setTimeout(() => {
    const random = Math.random(); // Generate random number
    cnt++;

    if (random < 0.5) {
      coin.classList.remove("spin"); // Stop animation
      coin.classList.add("tails"); // Apply Tails styling
      result.textContent = "Tails";
      count.textContent = `Flip Number ${cnt}`;
    } else {
      coin.classList.remove("spin"); // Stop animation
      result.textContent = "Heads";
      count.textContent = `Flip Number ${cnt}`;
    }

    result.style.display = "block"; // Show result
  }, 1000); // Simulate flip duration (1 second)
}
