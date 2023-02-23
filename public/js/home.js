if ((document.getElementById("name_input").value == "") && (document.getElementById("pass_input").value == "") && (document.getElementById("pass2_input").value == "")) {
  document.getElementById('btn_insc').classList.add('disabled')
}
else{
  document.getElementById('btn_insc').classList.remove('disabled')
}

let verifyName = ()=>{
    let userInput = document.getElementById("name_input");
    if (userInput.value.length <=  3) {
        userInput.classList.add("input-control-error");
        document.getElementById("name_error").style.display="block";
        document.getElementById('name_error').style.color = "#ff3360"
        document.getElementById('name_error').innerHTML= "Votre nom doit depasser les 3 caractères"
        document.getElementById('btn_insc').classList.add('disabled')
      } else {
        userInput.classList.remove("input-control-error");
        userInput.classList.add("input-control-success");
        setTimeout(()=>{
            userInput.classList.remove("input-control-success"); 
        },1000)

        document.getElementById('name_error').style.display ="none"
        document.getElementById('btn_insc').classList.remove('disabled')
      }
}

// verify password

let verifyPassword = ()=>{
  let pass1 = document.getElementById('pass_input')
  if (pass1.value.length <= 8) {
    pass1.classList.add("input-control-error");
    document.getElementById("pass1_error").style.display="block";
    document.getElementById("pass1_error").innerHTML = "Votre mot de passe doit depasser les 8 caractères";
    document.getElementById("pass1_error").style.color= "#ff3360"
    document.getElementById('btn_insc').classList.add('disabled')
  } else {
    pass1.classList.remove("input-control-error");
    pass1.classList.add("input-control-success");
    setTimeout(()=>{
      pass1.classList.remove("input-control-success");
  },1000)
    document.getElementById("pass1_error").style.display="none";
    document.getElementById('btn_insc').classList.remove('disabled')
  }
}

let verifyMatchPassword = ()=>{
  let pass1 = document.getElementById('pass_input')
  let pass2 = document.getElementById('pass2_input')
  if (pass1.value != pass2.value) {
    pass2.classList.add("input-control-error");
    document.getElementById("pass2_error").style.display="block";
    document.getElementById("pass2_error").innerHTML = "Votre mot de passe ne correspond pas";
    document.getElementById("pass2_error").style.color= "#ff3360"
    document.getElementById('btn_insc').classList.add('disabled')
  } else {
    pass2.classList.remove("input-control-error");
    pass2.classList.add("input-control-success");
    setTimeout(()=>{
      pass2.classList.remove("input-control-success");
  },1000)
    document.getElementById("pass2_error").style.display="none";
    document.getElementById('btn_insc').classList.remove('disabled')
  }
}

document.getElementById('btn_insc').addEventListener('click',(e)=>{
  e.preventDefault()
  let username = document.getElementById("name_input").value
  let password = document.getElementById("pass_input").value
  console.log(username, password);
  fetch('/api/add_user',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username, password: password}),
  })
  .then((response) => response.json())
  .then(data => {
    window.location = "/"
  })
})