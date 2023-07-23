

window.addEventListener("load", async ()=>{


    const urlParams = new URLSearchParams(window.location.search);
    const class_id = urlParams.get('class_id');
    const user_id = localStorage.getItem('user_id');

    const user ={
        user_id,
        class_id,
    }
    

    // getting role of user in this class
    const roleresponse = await fetch("http://localhost/google-clone/Google-Classroom-Clone/api/controllers/role.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
          })
          
          const role = await roleresponse.json();
          console.log(role.role)
          
})




