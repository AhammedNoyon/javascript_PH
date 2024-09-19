document
  .querySelector("#add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("Add money btn is clicked");
    const addMoneyPin = document.querySelector("#add-money-pin").value;
    const addAmount = document.querySelector("#add-amount").value;
    // console.log(addMoneyPin);

    if (addMoneyPin === "333") {
      const currentAmount = document.querySelector("#current-amount").innerText;
      //   console.log(currentAmount);

      const currentAmountNumber = parseFloat(currentAmount);
      //   console.log(currentAmountNumber);

      const addAmountNumber = parseFloat(addAmount);
      //   console.log(addAmountNumber);

      const updateBalance = currentAmountNumber + addAmountNumber;
      //   console.log(updateBalance);
      document.querySelector("#current-amount").innerText = updateBalance;
    } else {
      alert("Invalid Input");
    }
    // addAmount.value = "";
    // addMoneyPin.value = "";
  });

//   withdraw money
document
  .querySelector("#cash-out-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutPin = document.querySelector("#cash-out-pin").value;
    const cashOutAmount = document.querySelector("#cash-out-amount").value;
    const currentAmount = document.querySelector("#current-amount").innerText;
    // console.log(cashOutPin, cashOutAmount, currentAmount);
    if (cashOutPin === "333") {
      const newBalance = currentAmount - cashOutAmount;
      //   console.log(newBalance);
      document.querySelector("#current-amount").innerText = newBalance;
    } else {
      alert("Invalid Input");
    }
  });

document
  .querySelector("#main-cash-out-btn")
  .addEventListener("click", function () {
    document.querySelector("#cash-out-input").classList.remove("hidden");
    document.querySelector("#add-money-input").classList.add("hidden");
  });

document
  .querySelector("#main-add-money-btn")
  .addEventListener("click", function () {
    document.querySelector("#cash-out-input").classList.add("hidden");
    document.querySelector("#add-money-input").classList.remove("hidden");
  });

// const mainAddMoneyBtn = document
//   .querySelector("#main-add-money-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     // console.log("mainAddMoneyBtn is clicked");
//     const enableAddMoneyInputContainer = document.querySelector(".hero");
//     if (mainAddMoneyBtn === "click") {
//       enableAddMoneyInputContainer.classList.remove("hidden");
//     }
//   });
