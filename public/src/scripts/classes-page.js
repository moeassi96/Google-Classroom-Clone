window.addEventListener('load', async () => {
  const user_id = localStorage.getItem('user_id');

  const user = {
    user_id: user_id,
  };
  sideBar({});
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
  let card_assignment = [];

  const getCardAssignments = async (id) => {
    let arr = [];
    const formData = new FormData();
    formData.append('class_id', id);

    let card_assignments = [];
    const assignment = await fetch(
      'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/cardAssignments.php',
      {
        method: 'POST',
        body: formData,
      }
    );
    const res = await assignment.json();
    res.forEach((element) => {
      arr.push(element);
    });
    return arr;
  };

  for (single_class of classes) {
    const classid = single_class.class_id;
    const classname = single_class.class_name;
    const class_section = single_class.class_section;
    const class_subject = single_class.class_subject;
    const assignments = await getCardAssignments(classid);
    const [task1, task2] = assignments;

    // Function to get the day of the week in text
    function getDayOfWeek(dayIndex) {
      const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      return daysOfWeek[dayIndex];
    }
    function getHour(date) {
      const dateObj = new Date(date);
      const formattedDate = `${dateObj.getHours()}:${(
        '0' + dateObj.getMinutes()
      ).slice(-2)} - ${getDayOfWeek(dateObj.getDay())}`;
      return formattedDate;
    }

    const date = (task) => {
      if (task) {
        return getHour(task.assignment_duedate);
      }
      return '';
    };
    const description = (task) => {
      if (task) {
        return task.assignment_name;
      }
      return '';
    };

    console.log(task1);
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
            <h3 class="card-duedate" id="">${date(task1)}</h3>
            <p class="card-time-name mb-10px">${description(task2)}</p>
            </div>
            <div class="card-assignment">
            <h3 class="card-duedate" id="">${date(task2)}</h3>
            <p class="card-time-name"> ${description(task1)}</p>
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

  // await getCardAssignments(classes);
});
