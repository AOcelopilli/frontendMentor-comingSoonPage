const d = document, $email = d.getElementById("email"), $submit = d.getElementById("submit");

let $span = d.createElement("span");
    $span.textContent = $email.title;
    
    /* $span.style.display = "none";
    $span.style.fontSize = "0.8rem";
    $span.style.color = "rgb(235, 90, 90)" */
    $email.insertAdjacentElement("afterend",$span);

d.addEventListener("click", (e) => {
  e.preventDefault();

  let re = new RegExp($email.pattern);
  
  if (e.target == $submit) {
    
    if(re.test($email.value)){
      $email.classList.add("valid");
      $email.classList.remove("invalid")

      setTimeout(() => {
      $email.classList.remove("valid");
      $email.value = ""
      }, 3000);
    }else{
      $email.classList.add("invalid");
      $email.classList.remove("valid");
      setTimeout(() => {
      $email.classList.remove("invalid");
      }, 2000);
    }
  }
})

