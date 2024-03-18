const btnSubmit = document.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", () => {
  const pass = document.querySelectorAll("input[type=password");
  if (pass[0].value != pass[1].value) {
    pass.forEach((element) => {
      element.setAttribute("class", "error");
    });
    const liPass = document.querySelector("#listPass");
    let spanError = document.createElement("span");
    spanError.textContent = "* Passwords do not match";
    spanError.className = "errorText";
    liPass.append(spanError);
  }
});
