const urlParams = new URLSearchParams(window.location.search);
const class_id = urlParams.get('class_id');

function displaystream(assignments) {
  const assignmentsList = document.getElementById('streamFeed');
  assignmentsList.innerHTML = '';

  //Looping over assignments, then appending to assignments-container
  assignments.forEach((assignment, index) => {
    assign_id = assignment.assignment_id;
    creator =
      assignment.user_firstname +
      ' ' +
      assignment.user_lastname +
      ' posted a new assignment:';
    title = creator + assignment.assignment_name;
    date = assignment.assignment_date;
    description = assignment.assignment_description;
    (attachmentCaption = 'Awesome'),
      (assignmentsList.innerHTML += `<div class="stream-content-box cursor-pointer">
    <a href='assignment.html?class_id=${class_id}&assignment_id=${assign_id}'>
        <div class="stream-assignment-box flex">
            <div class="stream-assignment-icon flex items-center justify-center">
                <img src="../src/assets/images/icons/assignment-white.svg" alt="">
            </div>
            <div class="stream-assignment-details">
                <div class="stream-assignment-title">
                    ${title}
                </div>
                <div class="stream-assignment-date">
                    ${date}
                </div>
            </div>
        </div>
    </a>
</div>`);
  });
}

async function getClassDetails() {
  const response = await fetch(
    'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/getSingleClass.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ class_id }),
    }
  );

  const result = await response.json();
  classDetails = result[0];

  displayClassDetails(classDetails);
}

function displayClassDetails(classDetails) {
  const navbar_class_title = document.getElementById('navbar-class-title');
  const hero_class_title = document.getElementById('hero-class-title');
  const class_google_meet_link = document.getElementById(
    'class-google-meet-link'
  );

  navbar_class_title.innerHTML = `<p>${classDetails.class_name}<br><span class="section">${classDetails.class_subject}</span></p>`;
  hero_class_title.innerHTML = `${classDetails.class_name}<br /> <span class="stream-class-section">${classDetails.class_subject}</span>`;
  class_google_meet_link.href = classDetails.meeting_link;
}

window.addEventListener('load', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const class_id = urlParams.get('class_id');
  const user_id = localStorage.getItem('user_id');
  sideBar({});
  getClassDetails();

  const user = {
    user_id,
    class_id,
  };

  // getting role of user in this class
  const roleresponse = await fetch(
    'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/role.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }
  );

  const role = await roleresponse.json();

  classworkbtn = document.getElementById('classwork');
  peopleBtn = document.getElementById('people');

  classworkbtn.addEventListener('click', () => {
    window.location.href = `classwork.html?class_id=${class_id}`;
  });

  peopleBtn.addEventListener('click', () => {
    window.location.href = `people.html?class_id=${class_id}`;
  });

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

  displaystream(assignments);
});
