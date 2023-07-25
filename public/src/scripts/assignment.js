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
}