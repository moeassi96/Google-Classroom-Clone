
window.addEventListener("load",()=>{


    const recoverBtn = document.getElementById("recover")

    recoverBtn.addEventListener("click",()=>{

        const recoveryEmail = document.getElementById("email-input").value

        const user = {
            recoveryEmail,
          };
        
        fetch(
            'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/validateEmail.php',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(user),
            }
          )
            .then((response) => response.json())
      
            .then((data) => {
                
              if (data.status === 'Email already exists') {

                localStorage.setItem('recoveryEmail', recoveryEmail);

                window.location.href = 'forgetpassword2.html';
              } 
              else {
                
                document.getElementById('invalid-email').innerText = 'No user with this Email Address';
              }
            })
            .catch((error) => console.log(error));

    })





})