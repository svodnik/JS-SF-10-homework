/*
Create a customizable survey form.

The index.html file includes a form, which contains 2 sample questions as
illustrations.
A user should be able to type a survey question into the text box with the id
"question", click the Submit button, and the question
should be added to the survey.
When the user adds the question to the survey, it should be automatically
numbered and a text box should be added below it.
Each survey question should also include a "Remove question" button that a user
can click to remove the question from the survey.

1. Write jQuery code that uses DOM manipulation to add a new sample question
   to the DOM.
2. Create an event listener that executes this code when a user enters text
   in the Enter question box and clicks the Add to survey button.
3. Create an event listener for all Remove question buttons that removes the
   button's parent li element when the button is clicked.
   (Hint: Research the jQuery .remove() method.)
4. Create an event listener for all survey questions that adds the bg-warning
   class value to the element in response to the mouseenter event, and
   removes it in response to the mouseleave event. When the mouseenter event
   happens, the bg-warning class should also be removed from all sibling
   elements.
5. Once your code is complete, identify at least one instance of event
   delegation in your code and one instance of chaining at least 2 methods to
   a single selector. Add comments to your code identifying each of theses.

Note: This project uses Bootstrap, which is a CSS framework that provides
prebuilt styles using class names. Make sure the new questions you add to the
survey use the same class names as in the sample form questions to take
advantage of Bootstrap styles.
*/

//1.
let $userInput = $('#question');
let $addButton = $('#addQuestion');
let $organizedList = $('#surveyList');
let $removeButton = $('button');

$addButton.on('click', function(event){
  event.preventDefault();
  if ($userInput.val() === ''){
    alert('You must type in a value!');
  } else {
    var newTemplate = `
      <li class = "form-group padout">
        <label>${$userInput.val()}</label>
        <input type="text" class="form-control">
        <button>Remove question</button>
      </li>`;
//Chaining
    $organizedList.append(newTemplate);
    $userInput.val('');
  }
});

//Delegations
$organizedList.on('click', 'button', function(event){
  event.preventDefault();
//Chaining
  $(this).parent().remove()
});

//Delegations
$('ol').on('mouseenter mouseleave', 'li', function(event) {
  if (event.type === 'mouseenter'){
    $(this).addClass('bg-warning');
  } else if (event.type === 'mouseleave'){
    $(this).removeClass('bg-warning');
  }
});
