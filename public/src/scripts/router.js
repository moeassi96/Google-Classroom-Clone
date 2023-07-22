const pages = {};

pages.base_url = 'http://localhost/Google-Classroom-Clone/backend/';

pages.load_page = (page) => {
  switch (page) {
    case 'sign-up': {
      console.log('hello im on page 1');
      const container = document.getElementById('container');
      container.innerHTML = '<h1>Hi assi</h1>';
      console.log(body);
    }
  }
};
