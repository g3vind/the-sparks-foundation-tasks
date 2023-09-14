document.addEventListener("DOMContentLoaded", function () {
    const balanceElement = document.getElementById("balance");
    const depositedAmountElement = document.getElementById("depositedAmount");
    const withdrawnAmountElement = document.getElementById("withdrawnAmount");
    const amountInput = document.getElementById("amount");
    const depositBtn = document.getElementById("depositBtn");
    const withdrawBtn = document.getElementById("withdrawBtn");

    depositBtn.addEventListener("click", function () {
        const amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }
        const currentBalance = parseFloat(balanceElement.textContent);
        const newBalance = currentBalance + amount;
        balanceElement.textContent = newBalance.toFixed(2);
        depositedAmountElement.textContent = (parseFloat(depositedAmountElement.textContent) + amount).toFixed(2);
        amountInput.value = "";
    });

    withdrawBtn.addEventListener("click", function () {
        const amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }
        const currentBalance = parseFloat(balanceElement.textContent);
        if (amount > currentBalance) {
            alert("Insufficient funds.");
            return;
        }
        const newBalance = currentBalance - amount;
        balanceElement.textContent = newBalance.toFixed(2);
        withdrawnAmountElement.textContent = (parseFloat(withdrawnAmountElement.textContent) + amount).toFixed(2);
        amountInput.value = "";
    });
});
