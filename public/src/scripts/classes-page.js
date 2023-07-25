window.addEventListener('load', async () => {

  const user_id = localStorage.getItem('user_id');

  const user = {
    user_id: user_id,
  };
  sideBar({})
  const response = await fetch(
    'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/myclasses.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }
  );

  const classes = await response.json();

  const cardscontainer = document.getElementById('cards-container');

  for (let i = 0; i < classes.length; i++) {
    const classid = classes[i].class_id;
    const classname = classes[i].class_name;
    const class_section = classes[i].class_section;
    const class_subject = classes[i].class_subject;

    cardscontainer.innerHTML += `
        <li class="card-body flex flex-col">
          <div class="card-header">
            <div class="card-header-content flex flex-col justify-between">
              <div class="card-title flex justify-between">
                <a class="flex-col underline" href="class.html?class_id=${classid}">
                  <h3 class="class-name">${classname}</h3>
                  <p class="class-subtitle">
                  ${class_section}
                  </p>
                </a>
                <div>
                  <a href=""
                    ><img src="src/assets/images/icons/dots-v white.svg" alt=""
                  /></a>
                </div>
              </div>
              <div class="card-sub-title">
                <p class="class-description">${class_subject}</p>
              </div>
            </div>
          </div>
          <div class="card-middle">
            <img
              class="card-profile-img"
              src="src/assets/images/blueman.png"
              alt=""
            />
            <div class="card-assignment">
              <h3 class="card-duedate">Due wednesday</h3>
              <p class="card-time-name">10:00 - Google Classroom-Clone</p>
            </div>
          </div>
          <div class="card-footer flex justify-end">
            <div class="card-icon-holder flex justify-center items-center">
              <img src="src/assets/images/icons/assignment_ind.svg" alt="" />
            </div>
            <div class="card-icon-holder flex justify-center items-center">
              <img src="src/assets/images/icons/folder.svg" alt="" />
            </div>
          </div>
        </li>
        
        `;
  }
});
