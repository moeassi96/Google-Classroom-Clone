window.addEventListener("load", async()=>{

    const urlParams = new URLSearchParams(window.location.search);
    const class_id = urlParams.get('class_id');
    const user_id = urlParams.get('user_id');
    const role = urlParams.get('role');

    console.log(class_id,user_id,role)


    // fetching classname
    const formData = new FormData();
    formData.append('class_id', class_id);
  
    const response = await fetch(
      'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/joinclass/getclassname.php',
      {
        method: 'POST',
        body: formData,
      }
    );
  
    const name = await response.json();

    const classname = name[0].class_name

    document.getElementById("class-name").innerText = `${classname} as ${role}`


    //adding user to class
    const joinBtn = document.getElementById("join-class")

    joinBtn.addEventListener("click",async()=>{

        const formData = new FormData();
        formData.append('class_id', class_id);
        formData.append('user_id', user_id);
        formData.append('role', role);
    
        const response = await fetch(
        'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/joinclass/addtoclass.php',
        {
            method: 'POST',
            body: formData,
      }
    );
    const message = await response.json();
    
    if(message === "User already in class"){
        document.getElementById("error").innerText = "already in class"
        console.log("hi")
    } else{
        window.location.href = `class.html?class_id=${class_id}`
    }
    })

})