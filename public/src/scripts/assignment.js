function getCurrentDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
  const day = String(today.getDate()).padStart(2, '0');

  const currentDate = `${year}-${month}-${day}`;

  return currentDate;
}
window.onload=()=>{
// sideBar({})

const create_files=document.getElementById("add");
const info_input=document.getElementById("inputs");
const turn_files=document.getElementById("done");
const link=document.getElementById("url-link");
create_files.addEventListener('click',()=>{
  info_input.classList.toggle("inputs");
});

turn_files.addEventListener('click',async()=>{
  
  const url={
    link,
    date:getCurrentDate()
  };
  try {
    
    const roleresponse = await fetch(
      '',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(url),
      }
    );
  
    const role = await roleresponse.json();
  } catch (error) {
    console.log(error)
  }
})



// dynamically display assignment details


window.addEventListener("load",async()=>{

  const urlParams = new URLSearchParams(window.location.search);
  const assignment_id = urlParams.get("assignment_id");
  

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

