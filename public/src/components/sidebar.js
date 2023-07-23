const sideBarClass = (element) => {
  return ` <div class="class-item sidebar-item flex items-center">
  <div class="side-icon-container">
    <div class="class-icon flex items-center justify-center br-50">
     ${element.title.char(0).upperCase()}
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
//Local storage an {enrolled:[{title,description}], teaching:[]}

function sideBar(classes) {
  return `<div id="sidebar" class="sidebar flex flex-col items-center">
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
   
   
    <div id="teaching" class="sidebar-section flex flex-col">
      <div class="sidebar-section-title color-grey-medium">Teaching</div>
      <div class="sidebar-item flex">
        <div class="side-icon-container todo flex justify-center">
          <img
            class="icon"
            src="./src/assets/images/icons/folder-with-lines.svg"
          />
        </div>
        <span class="color-grey-medium">To do</span>
      </div>
    <div id="enrolled" class="sidebar-section flex flex-col">
      <div class="sidebar-section-title color-grey-medium">Enrolled</div>
      <div class="sidebar-item flex">
        <div class="side-icon-container todo flex justify-center">
          <img
            class="icon"
            src="./src/assets/images/icons/fact_check.svg"
          />
        </div>
        <span class="color-grey-medium">To do</span>
      </div>

     
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
  </div>`;
}
