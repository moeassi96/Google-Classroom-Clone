function displayAssignment(assignments) {
	const assignmentsList = document.getElementById('assignments-container');
	assignmentsList.innerHTML = '';

	//Looping over assignments, then appending to assignments-container
	assignments.forEach((assignment, index) => {
		assignmentsList.innerHTML += `<div class="assignment flex flex-col border" id="assignment-${index}">
        <div
            class="assignment-title color-black-light flex justify-center items-center justify-between"
            tabindex="1"
            id="assignment-title"
        >
            <div class="assignment-icon flex justify-center">
                <img
                    class="icon-assignment"
                    src="src/assets/images/square-logo/assignment.svg"
                    alt="assignment-icon"
                />
            </div>

            <div class="assignment-name-date flex justify-between">
                <div
                    class="assignment-name"
                    id="assignment-name"
                >
                    ${assignment.name}
                </div>

                <div
                    class="assignment-date"
                    id="assignment-date"
                >
                    ${assignment.date}
                </div>
            </div>

            <div class="vertical-dots-toggle flex justify-center">
                <img
                    class="icon-vertical-dots"
                    src="src/assets/images/square-logo/dots-v.svg"
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
                        ${assignment.description}
                    </div>

                    <div
                        class="assignment-attachment flex justify-start gap-10"
                    >
                        <a
                            href="#"
                            class="attachment gap-9 justify-center items-center"
                        >
                            <div class="attachment-drive-icon flex justify-center">
                            <img src="src/assets/images/square-logo/google-drive-colored.svg" alt="drive-icon-colored" class="drive-icon-colored">
                            </div>

                            <div class="attachment-description color-black-light flex justify-self-start" id="attachment-description">
                            ${assignment.attachmentCaption}
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







window.addEventListener("load", async()=>{
    displayAssignment([
        {
            name: 'uncle bob',
            date: 'Monday',
            description: 'hello brother',
            attachmentCaption:
                'Awesome Awesome Awesome Awesome Awesome Awesome Awesome Awesome Awesome Awesome Awesome Awesome',
        },
        {
            name: 'uncle bob',
            date: 'Monday',
            description: 'hello brother',
            attachmentCaption: 'Awesome',
        },
    ]);
})







const urlParams = new URLSearchParams(window.location.search);
const class_id = urlParams.get('class_id');

const streambtn = document.getElementById("stream")
const peoplebtn = document.getElementById("people")

streambtn.addEventListener("click",()=>{
    window.location.href = `class.html?class_id=${class_id}`
})
peoplebtn.addEventListener("click",()=>{
    window.location.href = `people.html?class_id=${class_id}`
})


