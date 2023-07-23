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
    <a href='assignment.html?assignment_id=${assign_id}'>
        <div class="stream-assignment-box flex">
            <div class="stream-assignment-icon flex items-center justify-center">
                <img src="src/assets/images/icons/assignment-white.svg" alt="">
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

window.addEventListener('load', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const class_id = urlParams.get('class_id');
  const user_id = localStorage.getItem('user_id');

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
  console.log(role.role);

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
