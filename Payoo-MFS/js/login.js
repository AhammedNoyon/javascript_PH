document
  .querySelector("#login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("btn clicked");
    const mobileNumber = document.querySelector("#mobile-number").value;
    // console.log(mobileNumber);
    const pinNumber = document.querySelector("#pin-number").value;
    // console.log(pinNumber);
    if (mobileNumber === "01888" && pinNumber === "333") {
      //   console.log("yes this right information");
      window.location.href = "/home.html";
    } else {
      alert("Invalid Input");
    }
  });
