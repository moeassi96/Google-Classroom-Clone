add_button = document.getElementById('add-icon');
add_class_dropdown = document.getElementById('add-class-dropdown');

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
const class_room_input = document.getElementById('create-class-room');

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
inputAnimation(class_room_input);

function emptyCreateClassInputs() {
  class_name_input.value = '';
  class_section_input.value = '';
  class_subject_input.value = '';
  class_room_input.value = '';
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
  class_room_input.parentElement.parentElement
    .querySelector('.create-class-placeholder')
    .classList.remove('create-class-placeholder-enabled');
}
