window.addEventListener("load",async()=>{

    const urlParams = new URLSearchParams(window.location.search);
    const class_id = urlParams.get("class_id");
    
    const inviteBtn = document.getElementById("invite-btn")
    inviteBtn.addEventListener("click",async()=>{

        const email = document.getElementById("email-input").value;
        const role = document.getElementById("role-input").value;


        const formData = new FormData();
        formData.append('email', email);
        
        const checkemail = await fetch(
            "http://localhost/google-clone/Google-Classroom-Clone/api/controllers/joinclass/checkemail.php",
            {
                method: 'POST',
                body: formData,
            }
          );
          const response = await checkemail.json();
          
          if(response.status == "User not found"){
            document.getElementById("invalid-email").innerText = "User not found"
          }else if(role !== "teacher" && role !== "student"){
            document.getElementById("invalid-role").innerText = "student or teacher ?"
          }else{

            const formData2 = new FormData();
            formData2.append('email', email);


            const getuserid = await fetch(
                "http://localhost/google-clone/Google-Classroom-Clone/api/controllers/joinclass/getuserid.php",
                {
                    method: 'POST',
                    body: formData2,
                }
              );
              const response2 = await getuserid.json();

            const user_id = response2[0].user_id




            const formDataemail = new FormData();
            console.log(email,role,class_id,user_id)
            formDataemail.append("email", email);
            formDataemail.append("role", role);
            formDataemail.append("class_id", class_id);
            formDataemail.append("user_id", user_id);

            const sendInviteEmail = await fetch(
                "http://localhost/google-clone/Google-Classroom-Clone/api/controllers/joinclass/sendinviteemail.php",
                {
                    method: 'POST',
                    body: formDataemail,
                }
              );
              const response3 = await sendInviteEmail.json();
              console.log(response3)

              window.location.href = `people.html?class_id=${class_id}`

          }


    })




})