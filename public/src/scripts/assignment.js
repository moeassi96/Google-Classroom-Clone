const urlParams = new URLSearchParams(window.location.search);
const assignment_id = urlParams.get("assignment_id");
const class_id = urlParams.get("class_id");

const assignment_status = document.getElementById("assignment-status")
const create_files=document.getElementById("add");
const inputs_form=document.getElementById("inputs-form");
const info_input=document.getElementById("inputs");
const submit_button=document.getElementById("done");
const link=document.getElementById("url-link");
const submission_attachment = document.getElementById("submission_attachment");

window.addEventListener("load",async()=>{

  const check_status = {
    user_id,
    assignment_id
  }

  const status_response = await fetch (
    'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/getSubmissionsStatus.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(check_status),
    }
  )

  const assignment_current_status = await status_response.json();
  if(assignment_current_status[0].status === "Turned in" || assignment_current_status[0].status === "Turned in Late" || assignment_current_status[0].status === "Missing"){
    create_files.disabled = true
    submit_button.disabled = true
    submit_button.innerText = "Turned in"
    assignment_status.innerText = assignment_current_status[0].status
  }else{

  }

  const formData = new FormData();
  formData.append('assignment_id', assignment_id);

  const response = await fetch(
    'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/assignmentDetails.php',
    {
      method: 'POST',
      body: formData,
    }
  );

  const assignment = await response.json();
  
  document.getElementById("assignment-title").innerText= assignment.assignment_name
  document.getElementById("teacher-date").innerText=`${assignment.user_firstname} ${assignment.user_lastname} • ${assignment.assignment_date}`
  document.getElementById("grade").innerText= `Points: ${assignment.assignment_points}`
  document.getElementById("duedate").innerText= `Due: ${assignment.assignment_duedate}`
  document.getElementById("assignment_paragraph").innerText= assignment.assignment_paragraph
  

})

function getCurrentDate() {
  let currentDate = new Date();
  const hoursDiff = currentDate.getHours() - currentDate.getTimezoneOffset() / 60;
  const minutesDiff = (currentDate.getHours() - currentDate.getTimezoneOffset()) % 60;
  currentDate.setHours(hoursDiff);
  currentDate.setMinutes(minutesDiff);

  return currentDate.toISOString();
}

link.addEventListener("input", () => {
  if(link.value.length > 0){
    submit_button.innerText = "Turn in"
    submission_attachment.disabled = true
  }
  else{
    submit_button.innerText = "Mark as done"
    submission_attachment.disabled = false
  }
})


submission_attachment.addEventListener("input", () => {
  if(submission_attachment.files.length > 0){
    link.disabled = true
    submit_button.innerText = "Turn in"
  }
  else{
    link.disabled = false
    submit_button.innerText = "Mark as done"
  }
})

create_files.addEventListener('click',()=>{
  info_input.classList.toggle("inputs");
});



inputs_form.addEventListener("submit", async (e) => {

  e.preventDefault();

  if(submit_button.innerText === "Turn in"){

    const formData = new FormData();
    formData.append("fileInput", submission_attachment.files[0])
    formData.append("class_id", class_id)
    formData.append("user_id", user_id)
    formData.append("assignment_id", assignment_id)
    formData.append("submission_date", getCurrentDate())

    
    try {
      const response = await fetch(
        'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/turnIn.php',
        {
          method: 'POST',
          body: formData,
        }
      );
      const responseDetails = await response.json();
      console.log(responseDetails)

      if(responseDetails['status'] = "success"){
        submit_button.innerText = "Turned in"
      }

    } catch (error) {
      console.log(error)
    }

  }
  else if(submit_button.innerText === "Mark as done"){


    const formData = new FormData();
    formData.append("class_id", class_id)
    formData.append("user_id", user_id)
    formData.append("assignment_id", assignment_id)
    formData.append("assignment_status",  "Missing")
    formData.append("submission_date", getCurrentDate())
    
    try {
      const response = await fetch(
        'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/turnIn.php',
        {
          method: 'POST',
          body: formData,
        }
      );
      const responseDetails = await response.json();
      
      if(responseDetails['status'] = "success"){
        info_input.classList.add("inputs");
        submit_button.innerText = "Turned in"
      }

    } catch (error) {
      console.log(error)
    }
  }

})
