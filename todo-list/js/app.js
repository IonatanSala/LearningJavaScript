// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById("new-task"); // new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); // incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); // completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
	//Create
	var listItem = document.createElement('li'); // list item
	var checkBox = document.createElement('input') //input (checkbox)
	var label = document.createElement('label'); //label
	var editInput = document.createElement('input'); // input (text)
	var editButton = document.createElement('button');	// button.edit
	var deleteButton = document.createElement('button')// button.delete

	// Each element needs modifying
	checkBox.type = "checkbox";
	editInput.type = "text";


	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;


	// Each element needs appending
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	

		return listItem;
} // end createNewTaskElement()


//Add a new task
var addTask = function() {
	console.log("Add task.....");

	//Create a new list item with the text from #new-task:
	var listItem = createNewTaskElement(taskInput.value);

	//Append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";
		
} // end addTask()



// Edit an existing task
var editTask = function() {

	console.log("Edit task.....");
	
	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");
	var containsClass = listItem.classList.contains("editMode");

	if(containsClass) {
		label.innerText = editInput.value;
	} else {
		editInput.value = label.innerText;
	}

	//Toggle .editMode on the list item
	listItem.classList.toggle("editMode");

} // end editTask()



//Delete an existing task
var deleteTask = function() {
	console.log("Delete task.....");

	
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//Remove the parent list item from ul
	ul.removeChild(listItem);

} // end deleteTask




// Mark a task as complete
var taskCompleted = function() {
	console.log("Completed task.....");
	//Append the task list item to the #completed-tasks
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);

	
} // end taskCompleted()
	





//Mark a task as incomplete
var taskIncomplete = function() {
	console.log("Incomplete task.....");

	//When the checkbox in unchecked
		//Append the task list item to the #incomplete-tasks
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);


} // end taskIncomplete

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	
	//select taskListItem's children
	var checkBox = taskListItem.querySelector('input[type=checkbox]');
	var editButton = taskListItem.querySelector('button.edit');
	var deleteButton = taskListItem.querySelector('button.delete');

		//bind editTask to edit button
		editButton.onclick = editTask;
		// bind deleteTask to the delete button
		deleteButton.onclick = deleteTask;
		//bind checkBoxEventHandler to checkbox
		checkBox.onchange = checkBoxEventHandler;

}	// end bindTAskEvents()


//Set the click handler to the addTask function
//When the addButton is clicked the addTask function is executed.
addButton.addEventListener("click", addTask);

//Cycle over incompleteTasksHolder ul list items
	//for each list item
for(var i = 0; i<incompleteTasksHolder.children.length; i++) {
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
		//bind events to list item's children (taskCompleted)

	
for(var i = 0; i<completedTasksHolder.children.length; i++) {
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
		//bind events to list item's children (taskIncompleted)




















