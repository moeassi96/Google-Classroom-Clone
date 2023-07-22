const pages = {};

pages.base_url = 'http://localhost/Google-Classroom-Clone/backend/';

pages.load_page = (page) => {
  switch (page) {
    case 'sign-up': {
      let step = 0

      const content = document.querySelector(".input-wrapper")
      content.innerHTML = signUpForm(step)

      const next = document.getElementById("sign-up-next")
      next.addEventListener("click", ()=>{
        step++
        content.innerHTML = signUpForm(step)
        

      })

    }

  }
};
