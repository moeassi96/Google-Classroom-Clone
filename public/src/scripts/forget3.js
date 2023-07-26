window.addEventListener('load', () => {
  const recoveryEmail = localStorage.getItem('recoveryEmail');

  const updateBtn = document.getElementById('confirm');

  updateBtn.addEventListener('click', async () => {
    const password = document.getElementById('password-input');
    const password2 = document.getElementById('password-input2');

    if (password.value !== password2.value) {
      document.getElementById('invalid-code2').innerHTML =
        'Unmatching passwords';
    } else {
      const password_regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@#$%^&*!])[A-Za-z\d\-_@#$%^&*!]{8,}$/;

      if (!password_regex.test(password.value)) {
        document.getElementById('invalid-code2').innerHTML =
          'Password should be 8 characters long, and contains atleast 1 capital, 1 small, 1 digit and 1 special character';
        return;
      } else {
        const newPassword = password.value;

        const formData = new FormData();

        formData.append('recoveryEmail', recoveryEmail);
        formData.append('newPassword', newPassword);

        const res = await fetch(
          'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/updatePassword.php',
          {
            method: 'POST',
            body: formData,
          }
        );

        const json = await res.json();

        window.location.href = 'signin.html';
      }
    }
  });
});
