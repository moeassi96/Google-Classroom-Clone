window.addEventListener('load',()=>{

    const signinbtn = document.getElementById("sign-in-btn")

    signinbtn.addEventListener("click",()=>{

        const email = document.getElementById("email-input").value
        const password = document.getElementById("password-input").value

        const user = {
            email,
            password,
          }


          fetch("http://localhost/google-clone/Google-Classroom-Clone/api/controllers/signIn.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
          })
          .then(response => response.json())
          
          .then(data => {
            console.log(data.status)
    
            if (data.status === "user not found") {
                document.getElementById("invalid-email").innerText = "invalid-email";
                
            } else if(data.status === "logged in") {
                // localStorage.setItem('user_id', user_id);
                console.log(data.user_id)
                window.location.href = "classes-page.html";
                
            }else{
              document.getElementById("invalid-email").innerText = "";
              document.getElementById("invalid-password").innerText = "Wrong password";
            }
        })
        .catch(error => console.log(error));
        

    })


    const signupbtn = document.getElementById("sign-up-btn")
    signupbtn.addEventListener("click",()=>{

      window.location.href = "sign-up.html";

    })
})
