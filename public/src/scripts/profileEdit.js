window.addEventListener('load', async () => {
  const base_url =
    'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/';

  const user_id = localStorage.getItem('user_id');

  const user_req = await fetch(`${base_url}/getUserInfo.php`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ user_id }),
  });

  const user_info = await user_req.json();

  const { firstname, lastname, birthdate, gender, email } = user_info;

  const save_changes = document.getElementById('save-changes');
  const editName = document.getElementById('edit-name');
  const editLastName = document.getElementById('edit-last-name');

  const birthday = document.getElementById('birthday');
  const first_name_input = document.getElementById('first-name');
  const last_name_input = document.getElementById('last-name');
  const female = document.getElementById('female');
  const male = document.getElementById('male');
  const date = document.getElementById('date');
  const passwordText = document.getElementById('password');
  const emailText = document.getElementById('email');

  const error = document.getElementById('error');
  //fill out the page
  first_name_input.innerText = firstname;
  last_name_input.innerText = lastname;
  emailText.innerText = email;
  date.value = birthdate;

  gender === 'male' ? (male.checked = true) : (female.checked = true);

  //regex validation
  const firstname_validation = /^[^\d\s]{2,}$/.test(
    first_name_input.innerText.toString()
  );
  // const lastname_validation = /^[^\d\s]{2,}$/.test(
  //   last_name_input.innerText
  // );

  editName.addEventListener('click', () => {
    first_name_input.contentEditable = true;
    first_name_input.classList.toggle('new-value');
    editName.classList.toggle('save');
  });

  editLastName.addEventListener('click', () => {
    last_name_input.contentEditable = true;
    last_name_input.classList.toggle('new-value');
    editName.classList.toggle('save');
  });

  const editEmail = document.getElementById('edit-email');
  editEmail.addEventListener('click', () => {
    emailText.contentEditable = true;
    emailText.classList.toggle('new-value');
    editEmail.classList.toggle('save');
  });

  const editPassword = document.getElementById('edit-password');
  editPassword.addEventListener('click', () => {
    passwordText.contentEditable = true;
    passwordText.classList.toggle('new-value');
    editPassword.classList.toggle('save');
  });

  save_changes.addEventListener('click', async () => {
    if (!firstname_validation) {
      error.textContent = 'Please provide a valid first name';
      return;
    }
    // if (!lastname_validation) {
    //   error.textContent = "Please provide a valid last name";
    //   return;
    // }

    if (!date.value) {
      error.textContent = 'Please provide a date';
      return;
    }
    let user_gender;
    if (male.checked) {
      user_gender = 'male';
    } else {
      user_gender = 'female';
    }

    try {
      if (emailText.innerText.toString() != email) {
        const email_res = await fetch(`${base_url}validateEmail.php`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ email: emailText.innerText.toString() }),
        });
        const email_isValid = await email_res.json();
        if (email_isValid.status === 'Wrong email format') {
          error.textContent = 'Invalid format';
          return;
        } else if (email_isValid.status === 'Email already exists') {
          error.textContent = email_isValid.status;
          return;
        } else {
          error.textContent = '';
        }
      }
      const pass_isValid = await fetch(`${base_url}validatePassword.php`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ password: passwordText.innerText.toString() }),
      });

      const pass = await pass_isValid.json();

      if (pass.status === 'Invalid Password') {
        error.textContent = 'Invalid password pattern';
        return;
      }

      const update = {
        user_id: user_id,
        email: emailText.innerText.toString(),
        password: passwordText.innerText.toString(),
        firstname: first_name_input.innerText.toString(),
        lastname: last_name_input.innerText.toString(),
        birthdate: date.value,
        gender: user_gender,
      };

      const update_user = await fetch(`${base_url}editProfile.php`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(update),
      });
      const result = await update_user.json();
      if (result.status === 'update successfull') {
        window.location.href = 'classes-page.html';
      }
    } catch (error) {
      console.log(error);
    }
  });
});
