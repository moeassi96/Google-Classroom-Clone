const pages = {};

pages.base_url = 'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/';

pages.load_page = (page) => {
  switch (page) {
    case 'sign-up': {
      let step = 0;

      let user={}


      const content = document.getElementById('form-body');

      content.innerHTML = signUpForm(step);
      const next = document.getElementById('next-button');
      const first_name = document.getElementById('first-name');
      const last_name = document.getElementById('last-name');

      next.addEventListener('click', async () => {
        
        if (step === 0) {
          if (first_name.value === '') {
            first_name.nextElementSibling.innerHTML =
              'First name cannot be empty';
            return;
          } 
          else if (last_name.value === '') {
            first_name.nextElementSibling.innerHTML ='';
            last_name.nextElementSibling.innerHTML ='Last name cannot be empty';
            return;
          }else{
            user.firstname = first_name.value
            user.lastname = last_name.value
          }
        }
  
        else if(step === 1){
          user.birthday = document.getElementById('Day').value
          user.birthmonth = document.getElementById('Month').value
          user.birthyear = document.getElementById('Year').value
          user.birthdate = user.birthyear+"-"+user.birthmonth+"-"+user.birthday
          user.gender = document.getElementById("Gender").value
          user.phone = document.getElementById("phone").value
          console.log(user.firstname,user.lastname,user.birthdate,user.gender,user.phone)
        }
        else if(step ===2){
          const gmail = document.getElementById('Gmail')
          const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

          if(!email_regex.test(gmail.value)){
            gmail.nextElementSibling.innerHTML = "Invalid email format"
            return
          }else{
            user.email = gmail.value
            const res = await fetch(`${pages.base_url}/validateEmail.php`,
            {
                headers: {
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({email:user.email})

            })
            const json = await res.json()
          }
        }
        else if(step ===3){
          const password = document.getElementById('password')
          const password2 = document.getElementById('password2')

          if(password.value !== password2.value){
            password2.nextElementSibling.innerHTML = "Password should be 8 characters long, and contains atleast 1 capital, 1 small, 1 digit and 1 special character"
            return
          }else{
            const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@#$%^&*!])[A-Za-z\d\-_@#$%^&*!]{8,}$/

            if(!password_regex.test(password.value)){




          }
        }


          if(step == 4){
            window.location.href = 'index.html';
          }
        step++;
        content.innerHTML = signUpForm(step);
      });
    }
  }
};
