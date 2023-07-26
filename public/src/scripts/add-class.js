const add_button = document.getElementById('add-icon');
const add_class_dropdown = document.getElementById('add-class-dropdown');

add_button.addEventListener('click', () => {
  add_class_dropdown.classList.toggle('show');
});

const create_class_button = document.getElementById('create-class');
const create_class_close = document.getElementById('create-class-close');
const create_class_container = document.getElementById(
  'create-class-container'
);
const create_class_button_cancel = document.getElementById(
  'create-class-button-cancel'
);
const create_class_button_create = document.getElementById(
  'create-class-button-create'
);

create_class_button.addEventListener('click', () => {
  create_class_container.classList.add('create-class-container-show');
});

create_class_close.addEventListener('click', () => {
  create_class_container.classList.remove('create-class-container-show');
});

create_class_button_cancel.addEventListener('click', () => {
  create_class_container.classList.remove('create-class-container-show');
  resetCreateClassInputs();
});

const class_name_input = document.getElementById('create-class-name');
const class_section_input = document.getElementById('create-class-section');
const class_subject_input = document.getElementById('create-class-subject');
const class_meeting_link_input = document.getElementById(
  'class-meeting-link-input'
);

function inputAnimation(input) {
  input.addEventListener('click', () => {
    input.parentElement.parentElement
      .querySelector('.create-class-placeholder')
      .classList.add('create-class-placeholder-enabled');
  });
  input.addEventListener('blur', () => {
    if (input.value === '') {
      input.parentElement.parentElement
        .querySelector('.create-class-placeholder')
        .classList.remove('create-class-placeholder-enabled');
    }
  });
}

inputAnimation(class_name_input);
inputAnimation(class_section_input);
inputAnimation(class_subject_input);
inputAnimation(class_meeting_link_input);

function emptyCreateClassInputs() {
  class_name_input.value = '';
  class_section_input.value = '';
  class_subject_input.value = '';
  class_meeting_link_input.value = '';
}

function resetCreateClassInputs() {
  emptyCreateClassInputs();
  class_name_input.parentElement.parentElement
    .querySelector('.create-class-placeholder')
    .classList.remove('create-class-placeholder-enabled');
  class_section_input.parentElement.parentElement
    .querySelector('.create-class-placeholder')
    .classList.remove('create-class-placeholder-enabled');
  class_subject_input.parentElement.parentElement
    .querySelector('.create-class-placeholder')
    .classList.remove('create-class-placeholder-enabled');
  class_meeting_link_input.parentElement.parentElement
    .querySelector('.create-class-placeholder')
    .classList.remove('create-class-placeholder-enabled');
}

function manageCreateButton() {
  class_name_input.addEventListener('input', () => {
    if (class_name_input.value === '') {
      create_class_button_create.disabled = true;
    } else {
      create_class_button_create.disabled = false;
    }
  });
}

create_class_button_create.disabled = true;
addClass();

function addClass() {
  manageCreateButton();

  create_class_button_create.addEventListener('click', async () => {
    if (class_name_input.value === '') {
      class_name_input.classList.add('input-error');
      class_name_input.focus();
    } else {
      const user_id = localStorage.getItem('user_id');

      const new_class = {
        creator_id: user_id,
        class_name: class_name_input.value,
        class_section: class_section_input.value,
        class_subject: class_subject_input.value,
        meeting_link: class_meeting_link_input.value,
      };

      const response = await fetch(
        'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/createClass.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(new_class),
        }
      );

      const response_details = await response.json();
      if (response_details.status == 'Class Added Successfully') {
        resetCreateClassInputs();
        create_class_container.classList.remove('create-class-container-show');

        joinClass(response_details.insert_id, user_id);
      }
    }
  });
}

async function joinClass(class_id, user_id) {
  const new_enrollment = {
    class_id,
    user_id,
    role: 'teacher',
  };

  const response = await fetch(
    'http://localhost/google-clone/Google-Classroom-Clone/api/controllers/joinClass.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(new_enrollment),
    }
  );

  const response_details = await response.json();
  if (response_details.status == 'Joined Successfully') {
    window.location.reload();
  }
}
