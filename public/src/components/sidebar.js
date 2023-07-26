const sideBarClass = (element) => {
  return ` 
  <a href="../views/class.html?class_id=${element.class_id}">
  <div class="class-item sidebar-item flex items-center">
  <div class="side-icon-container">
    <div class="class-icon flex items-center justify-center br-50">
     ${element.class_name.charAt(0).toUpperCase()}
    </div>
  </div>
  <div class="class-details flex flex-col">
    <span class="class-title color-grey-medium">${element.class_name}</span>
    <div class="class-description">
     ${element.class_subject}
    </div>
  </div>
</div>
</a>
 `;
};

const user_id = localStorage.getItem('user_id');

async function sideBar() {
  const user = {
    user_id: user_id,
  };
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
  const sideBar = document.getElementById('sidebar');
  const button = document.getElementById('hamburger');
  //console.log(button)
  if (!sideBar) return;
  sideBar.innerHTML = `<div id="close-sidebar" class="close-sidebar"></div>
  <div class="sidebar-section">
  <a href="../views/classes-page.html">
      <div class="sidebar-item flex items-center">
        <div class="side-icon-container">
          <img class="icon" src="../src/assets/images/icons/home.svg" />
        </div>
        <span class="color-grey-medium">Classes</span>
      </div>
      </a>
      <div class="sidebar-item flex items-center">
        <div class="side-icon-container">
          <img
            class="icon"
            src="../src/assets/images/icons/calendar_today_grey.svg"
          />
        </div>
        <span class="color-grey-medium">Calendar</span>
      </div>
    </div>
    <div class="sidebar-section flex flex-col">
      <div class="sidebar-section-title color-grey-medium">Teaching</div>
      <div id="teaching"></div>
    </div>
    <div class="sidebar-section flex flex-col">
      <div class="sidebar-section-title color-grey-medium">Enrolled</div>
      <div id="enrolled"></div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-item flex items-center">
        <div class="side-icon-container">
          <img class="icon" src="../src/assets/images/icons/archive.svg" />
        </div>
        <span class="color-grey-medium">Archive</span>
      </div>
  
      <div class="sidebar-item flex items-center">
        <div class="side-icon-container">
          <img class="icon" src="../src/assets/images/icons/settings.svg" />
        </div>
        <span class="color-grey-medium">Settings</span>
      </div>
    </div>
  `;
  const close_sidebar = document.getElementById('close-sidebar');
  button.addEventListener('click', () => {
    //console.log("clicked");
    sideBar.classList.add('show-sidebar');
    close_sidebar.style.width = '100vw';
  });
  close_sidebar.addEventListener('click', () => {
    sideBar.classList.remove('show-sidebar');
    close_sidebar.style.width = '0';
  });

  const teaching = document.getElementById('teaching');
  const enrolled = document.getElementById('enrolled');
  //console.log(classes);
  classes.forEach((element) => {
    if (element.role == 'teacher') {
      teaching.innerHTML += sideBarClass(element);
    }
    if (element.role == 'student') {
      enrolled.innerHTML += sideBarClass(element);
    }
  });
}
