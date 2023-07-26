function displayAssignment(assignments) {
  const assignmentsList = document.getElementById('assignments-container');
  assignmentsList.innerHTML = '';

  //Looping over assignments, then appending to assignments-container
  assignments.forEach((assignment, index) => {
    assign_id = assignment.assignment_id;
    creator =
      assignment.user_firstname +
      ' ' +
      assignment.user_lastname +
      ' posted a new assignment:';
    title = assignment.assignment_name;
    date = assignment.assignment_date;
    description = assignment.assignment_description;
    (attachmentCaption = 'Awesome'),
      (assignmentsList.innerHTML += `<div class="assignment flex flex-col border" id="assignment-${index}">
        <div
            class="assignment-title color-black-light flex justify-center items-center justify-between"
            tabindex="1"
            id="assignment-title"
        >
            <div class="assignment-icon flex justify-center">
                <img
                    class="icon-assignment"
                    src="../src/assets/images/square-logo/assignment.svg"
                    alt="assignment-icon"
                />
            </div>

            <div class="assignment-name-date flex justify-between">
                <div
                    class="assignment-name"
                    id="assignment-name"
                >
                    ${title}
                </div>

                <div
                    class="assignment-date"
                    id="assignment-date"
                >
                    ${date}
                </div>
            </div>

            <div class="vertical-dots-toggle flex justify-center">
                <img
                    class="icon-vertical-dots"
                    src="../src/assets/images/square-logo/dots-v.svg"
                    alt="vertical-dots"
                />
            </div>
        </div>
        <div class="assignment-hide color-black-light" id="assignment-hide-${index}">
            <div class="assignment-content flex flex-col padding-lg">
                <div class="assignment-content-main flex flex-col gap-10">
                    <div
                        class="assignment-description"
                        id="assignment-description"
                    >
                        ${description}
                    </div>

                    <div
                        class="assignment-attachment flex justify-start gap-10"
                    >
                        <a
                            href="#"
                            class="attachment gap-9 justify-center items-center"
                        >
                            <div class="attachment-drive-icon flex justify-center">
                            <img src="../src/assets/images/square-logo/google-drive-colored.svg" alt="drive-icon-colored" class="drive-icon-colored">
                            </div>

                            <div class="attachment-description color-black-light flex justify-self-start" id="attachment-description">
                            ${attachmentCaption}
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="assignment-footer-container flex padding-lg">
                <a href="#" class="assignment-footer color-black-light flex justify-start">
                    View assignment
                </a>
            </div>
        </div>
    </div>`);
  });

  //Adding event listeners for description toggle
  const assignment_list = document.getElementsByClassName('assignment');
  const assignment_arr = Array.from(assignment_list);

  assignment_arr.forEach((element, index) => {
    const info = document.getElementById(`assignment-hide-${index}`);
    element.addEventListener('click', () => {
      info.classList.toggle('open-assignment');
    });
  });
}

window.addEventListener('load', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const class_id = urlParams.get('class_id');
  // sideBar({})
  const response = await fetch(
    'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/getassignments.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ class_id }),
    }
  );

  const assignments = await response.json();

  displayAssignment(assignments);

  const streambtn = document.getElementById('stream');
  const peoplebtn = document.getElementById('people');

  streambtn.addEventListener('click', () => {
    window.location.href = `class.html?class_id=${class_id}`;
  });
  peoplebtn.addEventListener('click', () => {
    window.location.href = `people.html?class_id=${class_id}`;
  });
});

async function modifyPersonalLinkDiv(){
  const urlParams = new URLSearchParams(window.location.search);
  const class_id = urlParams.get('class_id');
  const user_id = localStorage.getItem("user_id")
  
  const user = {
    class_id,
    user_id
  }
  const user_role = await fetch(
    "http://localhost/google-clone/Google-Classroom-Clone/api/controllers/role.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const role = await user_role.json();
  console.log(role.role)

  const PL = document.getElementById("personal-link");
  if (role.role == "teacher"){
    PL.innerHTML = '<div class="add-assignment flex justify-start gap-9" id="add-assignment"><label for="add-assignment-btn" class="add-assignment-btn-label" id="add-assignment-btn-label">Assign</label><button class="add-assignment-btn" id="add-assignment-btn"></button> </div>'
    const urlParams = new URLSearchParams(window.location.search);
    const class_id = urlParams.get('class_id');
    const addAssign = document.getElementById("add-assignment-btn-label");
    addAssign.addEventListener('click',() => {
      window.location.href = `createAssignment.html?class_id=${class_id}`;
    })
  }
  else{
    PL.innerHTML = '<img class="link-icon" src="src/assets/images/square-logo/assignment_ind.svg" alt="individual-icon" /><span class="view-work flex justify-center items-center">View your work</span>'
  }
}

window.onload = function () {
  modifyPersonalLinkDiv();
  }