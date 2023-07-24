const create_files=document.getElementById("add");
const info_input=document.getElementById("inputs");
create_files.addEventListener('click',()=>{
  info_input.classList.toggle("inputs");
});