const userInput = document.getElementById("text-input");
const checkPalindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const historySection = document.getElementById("history");
const historyList = document.getElementById("history-list");
const themeToggle = document.getElementById("toggle-theme");

const checkForPalindrome = (input) => {
  const originalInput = input.trim();

  if (originalInput === "") {
    alert("Please input a value");
    return;
  }

  const processedInput = originalInput.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  const isPalindrome = processedInput === [...processedInput].reverse().join("");

  // Show the result
  const resultText = `${originalInput} is ${isPalindrome ? "" : "not "}a palindrome.`;
  resultDiv.textContent = resultText;
  resultDiv.className = isPalindrome ? "success" : "error";
  resultDiv.classList.remove("hidden");

  // Save to history
  const listItem = document.createElement("li");
  listItem.textContent = resultText;
  historyList.appendChild(listItem);
  historySection.classList.remove("hidden");
};

checkPalindromeBtn.addEventListener("click", () => checkForPalindrome(userInput.value));
themeToggle.addEventListener("click", () => {
  document.body.dataset.theme = document.body.dataset.theme === "dark" ? "" : "dark";
});
