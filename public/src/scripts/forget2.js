
window.addEventListener("load", () => {
    const recoveryEmail = localStorage.getItem('recoveryEmail');
  
    const formData = new FormData();
    formData.append("recoveryEmail", recoveryEmail);
  
    fetch('http://localhost/google-clone/Google-Classroom-Clone/api/controllers/generateCode_email.php', {
      method: 'POST',
      body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));



    // 

    const recoveryBtn = document.getElementById("recover")

    recoveryBtn.addEventListener("click",()=>{

        const recoveryCode = document.getElementById("code-input").value

        const formData = new FormData();

        formData.append("recoveryEmail", recoveryEmail);
        formData.append("recoveryCode",recoveryCode);
        
        fetch('http://localhost/google-clone/Google-Classroom-Clone/api/controllers/checkCode.php', {
        method: 'POST',
        body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
        if(data.status === "No Match"){
            document.getElementById("invalid-code").innerText = "Invalid code"
        }else{
            window.location.href ="forgetpassword3.html" 
        }

        })
        .catch((error) => console.log(error));

    })

  });






