window.onload = async function () {
    const currentDate = new Date();
    const dueDateInput = document.getElementById('due-date');
    const formattedCurrentDate = currentDate.toISOString().slice(0, 10); // Format the current date as YYYY-MM-DD
    dueDateInput.setAttribute('min', formattedCurrentDate);
    const fetchClasses = await fetch('http://localhost/google-clone/Google-Classroom-Clone/api/controllers/myclasses.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {user_id: 15} // insert user id here: const user_id = localStorage.getItem('user_id'); change below as well
        )
    })
    const classes = await fetchClasses.json();
    console.log(classes);

    addClassesToClassAssignDiv(classes);
};

async function handleAssignButton() {
    const assignment_name = document.getElementById('assignment-title').value;
    const class_id = document.getElementById('class-assign-select').value;
    const assignment_duedate = document.getElementById('due-date').value;

    

    document.getElementById('validation-message').innerText = '';

    if (assignment_name === '') {
        document.getElementById('validation-message').innerText = '*Please enter the assignment title.';
        return;
    }

    if (assignment_duedate === '') {
        document.getElementById('validation-message').innerText = '*Please select the due date for the assignment.';
        return;
    }

    const assignment_date = new Date();
    const assignment_description = document.getElementById('details').value;
    const attachments = document.getElementById('attachments-file').files;

    console.log('Title:', assignment_name);
    console.log('Instructions:', assignment_description);
    console.log('Class:', class_id);
    console.log('Due Date:', assignment_duedate);
    console.log('Attachments:', attachments);



    const assignment = {
        assignment_name,
        assignment_description,
        class_id,
        assignment_date,
        assignment_duedate,
        teacher_id: 15,
        // attachments,
    };

    const postAssignment = await fetch('http://localhost/google-clone/Google-Classroom-Clone/api/controllers/createAssignment.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(assignment)
    })
    
    const res = await postAssignment.json();
    console.log(res);
}

document.getElementById('assign-button').addEventListener('click', handleAssignButton);

function addClassesToClassAssignDiv(classes) {
    const classAssignSelect = document.getElementById('class-assign-select');


    while (classAssignSelect.firstChild) {
        classAssignSelect.removeChild(classAssignSelect.firstChild);
    }

    classes.forEach((className) => {
        const option = document.createElement('option');
        option.value = className.class_id;
        option.textContent = className.class_name;
        classAssignSelect.appendChild(option);
    });
}

// const classesToAdd = [8, 10, 9];


// async function fetchUserClasses(user_id) {
//     // Simulating the fetching process
//     // Replace this with your actual logic to fetch user classes from the server or database
//     const user_id = localStorage.getItem("user_id");
//     const response = await fetch(
//         'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/myclasses.php',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ class_id }),
//         }
//       );
// }
