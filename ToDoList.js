function Task(name, notes) {
	this.name = name;
	this.notes = notes;
	//this.week = week;
};

function ToDoList() {
	this.taskList = [];
 
	this.addTask = function(string, string2) {
        var myTask = new Task(string, string2);
		this.taskList.push(myTask);
	};
	
	this.display = function() {
		$("#listoftasks").html("");
		for (var i = 0; i < this.taskList.length; i++) {
			$("#listoftasks").append(
				'<li>' + this.taskList[i].name + " : " + this.taskList[i].notes + '</li>'
				);
		}
	};
	
};

