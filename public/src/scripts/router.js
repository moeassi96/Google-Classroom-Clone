const pages = {};

pages.base_url =
  'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/';

pages.load_page = async (page) => {
  switch (page) {
    case 'sign-up': {
      let step = 0;

      let user = {};

      const content = document.getElementById('form-body');

      content.innerHTML = signUpForm(step);
      const next = document.getElementById('next-button');
      const first_name = document.getElementById('first-name');
      const last_name = document.getElementById('last-name');

      next.addEventListener('click', async () => {
        if (step === 0) {
          const nameRegex = /^[^\d\s]{2,}$/;

          if (!nameRegex.test(first_name.value)) {
            first_name.nextElementSibling.innerHTML =
              'Please insert your real name';
            return;
          } else if (!nameRegex.test(last_name.value)) {
            first_name.nextElementSibling.innerHTML = '';
            last_name.nextElementSibling.innerHTML =
              'Please insert your real surname';
            return;
          } else {
            user.firstname = first_name.value;
            user.lastname = last_name.value;
          }
        } else if (step === 1) {
          user.birthday = document.getElementById('Day');
          user.birthmonth = document.getElementById('Month');
          user.birthyear = document.getElementById('Year');
          user.gender = document.getElementById('Gender').value;
          user.phone = document.getElementById('phone').value;
          user.birthdate =
            user.birthyear.value +
            '-' +
            user.birthmonth.value +
            '-' +
            user.birthday.value;

          const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
          const phoneNumberRegex = /^\d{8}$/;

          if (!birthdateRegex.test(user.birthdate)) {
            document.getElementById('wrongdate').innerHTML =
              'Invalid Date format';
            return;
          } else if (user.gender === '') {
            document.getElementById('emptygender').innerHTML =
              'please specify a gender';
            return;
          } else if (!phoneNumberRegex.test(user.phone)) {
            document.getElementById('wrongphone').innerHTML =
              'Invalid phone number';
            document.getElementById('emptygender').innerHTML = '';
            document.getElementById('wrongdate').innerHTML = '';
            return;
          }
        } else if (step === 2) {
          const gmail = document.getElementById('Gmail');
          const email_regex =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

          if (!email_regex.test(gmail.value)) {
            gmail.nextElementSibling.innerHTML = 'Invalid email format';
            return;
          } else {
            user.email = gmail.value;
            const res = await fetch(`${pages.base_url}/validateEmail.php`, {
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
              body: JSON.stringify({ email: user.email }),
            });
            const json = await res.json();
            console.log(json.status);
            if (json.status === 'Email already exists') {
              gmail.nextElementSibling.innerHTML =
                'Email already has an account';
              return;
            } else if (json.status === 'Wrong email format') {
              gmail.nextElementSibling.innerHTML = 'Invalid email format';
              return;
            }
          }
        } else if (step === 3) {
          const password = document.getElementById('password');
          const password2 = document.getElementById('password2');

          if (password.value !== password2.value) {
            password2.nextElementSibling.innerHTML = 'Unmatching passwords';
            return;
          } else {
            const password_regex =
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@#$%^&*!])[A-Za-z\d\-_@#$%^&*!]{8,}$/;

            if (!password_regex.test(password.value)) {
              password2.nextElementSibling.innerHTML =
                'Password should be 8 characters long, and contains atleast 1 capital, 1 small, 1 digit and 1 special character';
              return;
            } else {
              user.password = password.value;
              console.log(
                user.email,
                user.firstname,
                user.lastname,
                user.phone,
                user.gender,
                user.password,
                user.birthdate
              );
              const res = await fetch(
                `${pages.base_url}/validatePassword.php`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  method: 'POST',
                  body: JSON.stringify({ password: user.password }),
                }
              );
              const json = await res.json();
            }
          }
        }

        if (step === 4) {
          console.log(
            user.email,
            user.firstname,
            user.lastname,
            user.phone,
            user.gender,
            user.password,
            user.birthdate
          );
          const toadd = {
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            phone: user.phone,
            gender: user.gender,
            password: user.password,
            birthdate: user.birthdate,
          };
          console.log(JSON.stringify(toadd));
          const res = await fetch(`${pages.base_url}/signUp.php`, {
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(toadd),
          });
          const json = await res.json();
                
          window.location.href = "signin.html";

          console.log(json.status);
        }
        step++;
        content.innerHTML = signUpForm(step);
      });
    }
    case 'people': {
      
      const urlParams = new URLSearchParams(window.location.search);
      const class_id = urlParams.get('class_id');
      console.log(class_id)

      
    const res =  await fetch("http://localhost/google-clone/Google-Classroom-Clone/api/controllers/getteachers.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({class_id}),
          })
          const teachers = await res.json();
  

    const res_students =  await fetch("http://localhost/google-clone/Google-Classroom-Clone/api/controllers/getstudents.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({class_id}),
          })
          const students = await res_students.json();

          displayUser(
            students,
            teachers
           );



    const streambtn = document.getElementById("stream")
    const classworkbtn = document.getElementById("classwork")

    streambtn.addEventListener("click",()=>{
      window.location.href = `class.html?class_id=${class_id}`
    })
    classworkbtn.addEventListener("click",()=>{
      window.location.href = `classwork.html?class_id=${class_id}`
    })



      
    }
  }
};
