

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



      classworkbtn = document.getElementById("classwork")
      peopleBtn = document.getElementById("people")

      classworkbtn.addEventListener('click',()=>{

        window.location.href = `classwork.html?class_id=${class_id}`;

      })

      peopleBtn.addEventListener('click',()=>{

        window.location.href = `people.html?class_id=${class_id}`;

      })


          
})




