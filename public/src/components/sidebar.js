const sideBarClass = (element) => {
  return ` <div class="class-item sidebar-item flex items-center">
  <div class="side-icon-container">
    <div class="class-icon flex items-center justify-center br-50">
     ${element.title.charAt(0).toUpperCase()}
    </div>
  </div>
  <div class="class-details flex flex-col">
    <span class="class-title color-grey-medium">${element.title}</span>
    <div class="class-description">
     ${element.description}
    </div>
  </div>
</div>
 `;
};
//Local storage, expecting: {enrolled:[{title,description}], teaching:[]}


  // const user_id = localStorage.getItem('user_id');
  // console.log(user_id);
  


 
async function sideBar() {
    const user_id = 16;
  const user = {
    user_id: user_id,
  };
  const response = await fetch(
  'http:\\localhost\Google-Classroom-Clone\api\controllers\myclasses.php',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }
  );  
  const classes = await response.json();
  const sideBar = document.getElementById("sidebar");
  const button = document.getElementById("hamburger");
  console.log(button)
  if (!sideBar) return;
  sideBar.innerHTML = `<div id="close-sidebar" class="close-sidebar"></div>
  <div class="sidebar-section">
      <div class="sidebar-item flex items-center">
        <div class="side-icon-container">
          <img class="icon" src="./src/assets/images/icons/home.svg" />
        </div>
        <span class="color-grey-medium">Classes</span>
      </div>
  
      <div class="sidebar-item flex items-center">
        <div class="side-icon-container">
          <img
            class="icon"
            src="./src/assets/images/icons/calendar_today_grey.svg"
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
          <img class="icon" src="./src/assets/images/icons/archive.svg" />
        </div>
        <span class="color-grey-medium">Archive</span>
      </div>
  
      <div class="sidebar-item flex items-center">
        <div class="side-icon-container">
          <img class="icon" src="./src/assets/images/icons/settings.svg" />
        </div>
        <span class="color-grey-medium">Settings</span>
      </div>
    </div>
  `;
  const close_sidebar = document.getElementById("close-sidebar");
  button.addEventListener("click", () => {
    console.log("clicked");
    sideBar.classList.add("show-sidebar");
    close_sidebar.style.width = "100vw";
  });
  close_sidebar.addEventListener("click", () => {
    sideBar.classList.remove("show-sidebar");
    close_sidebar.style.width = "0";
  });

  const teaching = document.getElementById("teaching");
  const enrolled = document.getElementById("enrolled");
  console.log(classes);
  classes.forEach(element => {
    console.log(element);
  });
  if(classes.role=="teacher"){
    teaching.innerHTML += sideBarClass(classes.class_name);
  };
  if(classes.role=="student"){
    enrolled.innerHTML += sideBarClass(classes.class_name);
  };
  // if (!classes.enrolled) return;
  // classes.enrolled.forEach((element) => {
  //   // const enrolled = document.getElementById("enrolled");
  //   enrolled.innerHTML += sideBarClass(element);
  // });
  // if (!classes.teaching) return;
  // classes.teaching.forEach((element) => {
  //   teaching.innerHTML += sideBarClass(element);
  // });
}
