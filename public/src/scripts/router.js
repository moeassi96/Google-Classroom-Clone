const pages = {};

pages.base_url = 'http://localhost/Google-Classroom-Clone/backend/';

pages.load_page = (page) => {
  switch (page) {
    case 'sign-up': {
      let step = 0;

      const content = document.getElementById('sign-in-wrapper');
      //   signUpForm(step, content);
      content.innerHTML = signUpForm(step);
      const next = document.getElementById('sign-up-next');
      const first_name = document.getElementById('first-name');
      const last_name = document.getElementById('last-name');

      next.addEventListener('click', () => {
        console.log('clicked');
        if (step === 0) {
          if (first_name.value === '') {
            first_name.nextElementSibling.innerHTML =
              'First name cannot be empty';
            return;
          } else if (last_name.value === '') {
            last_name.nextElementSibling.innerHTML =
              'Last name cannot be empty';
            return;
          }
        }
        step++;
        content.innerHTML = signUpForm(step);
      });
    }
  }
};
