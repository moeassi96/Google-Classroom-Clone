// id="assignment-${index}"

function displayAssignment(assignments) {
  const assignmentsList = document.getElementById('assignments-container');
  assignmentsList.innerHTML = '';

  //Looping over assignments, then appending to assignments-container
  assignments.forEach((assignment, index) => {
    assignmentsList.innerHTML += `<div class="assignment flex flex-col border" id="assignment-${index}">
        <div
            class="assignment-title flex justify-center items-center justify-between"
            tabindex="1"
            id="assignment-title"
        >
            <div class="assignment-icon flex justify-center">
                <img
                    class="icon-assignment"
                    src="./public/src/assets/images/square-logo/assignment.svg"
                    alt="assignment-icon"
                />
            </div>

            <div class="assignment-name-date flex justify-between">
                <div
                    class="assignment-name font-14px"
                    id="assignment-name"
                >
                    ${assignment.name}
                </div>

                <div
                    class="assignment-date font-12px"
                    id="assignment-date"
                >
                    ${assignment.date}
                </div>
            </div>

            <div class="vertical-dots-toggle flex justify-center">
                <img
                    class="icon-vertical-dots"
                    src="./public/src/assets/images/square-logo/dots-v.svg"
                    alt="vertical-dots"
                />
            </div>
        </div>
        <div class="assignment-hide" id="assignment-hide-${index}">
            <div class="assignment-content flex flex-col padding-lg">
                <div class="assignment-content-main flex flex-col gap-10">
                    <div
                        class="assignment-description"
                        id="assignment-description"
                    >
                        ${assignment.description}
                    </div>

                    <div
                        class="assignment-attachment flex justify-start gap-10"
                    >
                        <a
                            href="#"
                            class="attachment flex border gap-9 justify-center items-center justify-between"
                        >
                            <div class="attachment-drive-icon">
                            <img src="./public/src/assets/images/square-logo/google-drive-colored.svg" alt="drive-icon-colored" class="drive-icon-colored">
                            </div>

                            <div
                                class="attachment-description"
                                id="attachment-description"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="assignment-footer-container flex padding-lg">
                <a href="#" class="assignment-footer flex justify-start">
                    View assignment
                </a>
            </div>
        </div>
    </div>`;
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
displayAssignment([
  { name: 'uncle bob', date: 'blabla', description: 'hello brother' },
]);
