// obtengo ids del html
let cardNumber = document.getElementById("inputCard");
let cvc = document.getElementById("inputCVC");
let amount = document.getElementById("inputAmount");
let firstName = document.getElementById("inputFirstName");
let lastName = document.getElementById("inputLastName");
let city = document.getElementById("inputCity");
let state = document.getElementById("inputState");
let postal = document.getElementById("inputPostalCode");
let message = document.getElementById("msg");
let alert = document.getElementById("alert");
let accept = document.querySelectorAll("input[name='inlineRadioOptions']");
console.log(accept);

window.onload = function formValidation(event) {
  //para no recargar la página
  event.preventDefault();
  //mostrar alerta
  function displayAlert() {
    alert.className = "alert alert-danger fw-bold";
  }
  //esconder alerta
  function hideAlert() {
    alert.className = "alert alert-danger fw-bold visually-hidden";
  }
  let enviar = document.getElementById("send");
  enviar.addEventListener("click", chequeo);

  function chequeo() {
    hideAlert();
    if (cardNumber.value == "") {
      console.log("Tarjeta vacía");
      cardNumber.className = "form-control bg-danger bg-opacity-25";
      displayAlert();
    } else {
      cardNumber.className = "form-control";
    }

    if (cvc.value == "") {
      console.log("cvc vacío");
      cvc.className = "form-control bg-danger bg-opacity-25";
      displayAlert();
    } else {
      cvc.className = "form-control";
    }

    if (amount.value == "") {
      console.log("amount vacío");
      amount.className = "form-control bg-danger bg-opacity-25";
      displayAlert();
    } else {
      amount.className = "form-control";
    }

    if (firstName.value == "") {
      console.log("firstName vacío");
      firstName.className = "form-control bg-danger bg-opacity-25";
      displayAlert();
    } else {
      firstName.className = "form-control";
    }

    if (lastName.value == "") {
      console.log("lastName vacío");
      lastName.className = "form-control bg-danger bg-opacity-25";
      displayAlert();
    } else {
      lastName.className = "form-control";
    }

    if (city.value == "") {
      console.log("city vacío");
      city.className = "form-control bg-danger bg-opacity-25";
      displayAlert();
    } else {
      city.className = "form-control";
    }

    if (state.value == "Pick a state") {
      console.log("state vacío");
      state.className = "form-control bg-danger bg-opacity-25";
      displayAlert();
    } else {
      state.className = "form-control";
    }

    if (postal.value == "") {
      console.log("postal vacío");
      postal.className = "form-control bg-danger bg-opacity-25";
      displayAlert();
    } else {
      postal.className = "form-control";
    }

    let radioContainer = document.querySelector(".bg-secondary");
    if (
      !accept[0].checked &&
      !accept[1].checked &&
      !accept[2].checked &&
      !accept[3].checked
    ) {
      console.log("radio vacío");
      radioContainer.classList.add("bg-danger", "bg-opacity-25");
      displayAlert();
    } else {
      radioContainer.classList.remove("bg-danger", "bg-opacity-25");
    }

    // Controla message
    if (message.value == "") {
      console.log("msj vacío");
      message.classList.add("bg-danger", "bg-opacity-25");
      displayAlert();
    } else {
      message.classList.remove("bg-danger", "bg-opacity-25");
    }
  }
};
