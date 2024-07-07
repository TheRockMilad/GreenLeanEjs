const $ = document;
const addModalElem = $.querySelector("#add-new-course-modal");
const showAddModalBtn = $.querySelector(".courses-btn-add-new-course");

const showAddModel = () => addModalElem.classList.add("visible");
const hideAddModel = () => addModalElem.classList.remove("visible");

showAddModalBtn.addEventListener("click", showAddModel);

window.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {
    hideAddModel();
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const editCourseButtons = document.querySelectorAll('.courses-btn-edit');
  const editCourseModal = document.getElementById('edit-course-modal');
  const editCourseTitleInput = document.querySelector('.edit-course-title');
  const editCourseIdInput = document.querySelector('.edit-course-id');

  editCourseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const courseItem = event.target.closest('.courses-item');
      const courseTitle = courseItem.querySelector('.courses-name').textContent;
      const courseId = event.target.getAttribute('href').split('/').pop();

      editCourseTitleInput.value = courseTitle;
      editCourseIdInput.value = courseId;

      editCourseModal.classList.add('visible');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const editCourseButtons = document.querySelectorAll('.courses-btn-edit');
  const editCourseModal = document.getElementById('edit-course-modal');
  const editCourseTitleInput = document.querySelector('.edit-course-title');
  const editCourseIdInput = document.querySelector('.edit-course-id');
  const editCourseForm = document.getElementById('edit-course-form');

  editCourseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const courseItem = event.target.closest('.courses-item');
      const courseTitle = courseItem.querySelector('.courses-name').textContent;
      const courseId = event.target.getAttribute('href').split('/').pop();

      editCourseTitleInput.value = courseTitle;
      editCourseIdInput.value = courseId;
      
      // Update the action attribute of the form
      editCourseForm.action = `/courses/edit/${courseId}`;

      editCourseModal.classList.add('visible');
    });
  });
});

