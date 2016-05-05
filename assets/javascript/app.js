var stopwatch = {
	number: 31,
	run: function () {
		counter = setInterval(stopwatch.increment, 1000);
	},
	increment: function() {
		stopwatch.number--;
      	$('#show-number').html('<h2>' + stopwatch.number + '</h2>');
      	if (stopwatch.number === 0){
        	stopwatch.stop();
		}
	},
	stop: function() {
		clearInterval(counter);
	}
};


var quiz = [ {
		question: "Who's this character?",
		picture: "assets/images/key.jpg",
		choices: ['Keymaker','Agent Smith','Seraph','Lock'],
		correct: 0,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/architect.jpg',
		choices: ['The Oracle','The Architect','Trinity','Neo'],
		correct: 1,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/oracle.jpg',
		choices: ['Trinity','Morpheus','The Oracle','Cypher'],
		correct: 2,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/twins.jpg',
		choices: ['Twins','Charme','Koffing','Snorlax'],
		correct: 0,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/cypher.jpg',
		choices: ['The architect','Keymaker','Morpheus','Cypher'],
		correct: 3,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/neo.jpg',
		choices: ['Seraph','Agent Smith','Neo','Cypher'],
		correct: 2,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/trinity.jpg',
		choices: ['Keymaker','Trinity','Lock','Morpheus'],
		correct: 1,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/seraph.jpg',
		choices: ['Seraph','The architect','Twins','Trinity'],
		correct: 0,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/agentsmith.jpg',
		choices: ['Cypher','The Oracle','Lock','Agent Smith'],
		correct: 3,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/morph.jpg',
		choices: ['Morpheus','Neo','Trinity','Twins'],
		correct: 0,
	},
	{	question: "Who's this character?",
		picture: 'assets/images/lock.jpg',
		choices: ['Seraph','Lock','The Oracle','Agent Smith'],
		correct: 1,
}];

var numQuestions = quiz.length;
var numCorrect = 0;
var counter = 0;

var pokePic = $('<img>');



$('input[name="choice"]').hide;

// display question function
function nextQuest(){

	$('#questions').text(quiz[counter].question);
	pokePic.attr('src', quiz[counter].picture)
	$('#pokes').append(pokePic)
	$('#answer0').text(quiz[counter].choices[0]);
	$('#answer1').text(quiz[counter].choices[1]);
	$('#answer2').text(quiz[counter].choices[2]);
	$('#answer3').text(quiz[counter].choices[3]);
}


// client-sided validation
function validate() {
	if ($('input').is(':checked')) {

		nextQuest(); // display next question
	}
	else {
		alert("Please make a selection.");
		counter--;
	}
}

// display first question
nextQuest();


// next button function
$('#nextBtn').on('click', function() {
	var answer = ($('input[name="choice"]:checked').val());

	// increment score if answer is correct
	if (answer == quiz[counter].correct) {
		numCorrect++;
	}

	counter++;


	// display score screen
	if (counter >= numQuestions) {
		$('#main').hide().fadeIn("slow");
		document.getElementById('main').innerHTML="Quiz Complete! You scored " + numCorrect + " out of " + numQuestions + "!";
		return; // returns false *(there has to be a better way! figure it out.)*
	}

	validate();

	// fade in new question
	$('.card').hide().fadeIn("slow");
	
	// clear previous selection
	$('input[name="choice"]').prop('checked', false);
});


// back button function
$('#backBtn').on('click', function() {
	if (quiz[counter] == 0) {
		$('.card').hide().fadeIn("slow");

	} else {
		// fade out current question and fade in previous question
		$('.card').hide().fadeIn("slow");
		numCorrect--;
		counter--;
	}

	
	
	// display previous question
	nextQuest();	
});

