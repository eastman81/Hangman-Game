window. onload = function() {

	// Variables
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var breeds = ["pit bull", "italian greyhound", "great dane", "labrador", "daschund", "pomeranian", "saint bernard", "azawakh"];
    var word;
    var guess;
    var guesses = [];
    var guessesLeft = 10;
    var counter = 0;
    var counterWrong;
    var space = 0;

    // Elements to linkt to HTML
    var showGuessesLeft = document.getElementById("myGuessesLeft");
    var showCatagory = document.getElementById("sCatagory");


    // create alphabet ul, remove once we figure out how to do it without it
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      // myButtons.appendChild(letters);
      // letters.appendChild(list);
    }
  }






    // Select a Catagory
    // var selectCatagory = catagoryName.innerHTML = "The catagory is Dog Breeds!";

    // Create guesses list
    result = function() {
    	wordHolder = document.getElementById('hold');
    	correct = document.createElement('ul');

    	for (var i = 0; i < word.length; i++) {
    		correct.setAttribute('id', 'my-word');
    		guess = document.createElement('li');
    		guess.setAttribute('class', 'guess');
    		if (word[i] === "-") {
    			guess.innerHTML = "-";
    			space = 1;
    		} else {
    			guess.innerHTML = "_";
    		}

    		guesses.push(guess);
    		wordHolder.appendChild(correct);
    		correct.appendChild(guess);
    	}
    }

    // Show guessesLeft
    comments = function() {
    	showGuessesLeft.innerHTML = "You have " + guessesLeft + " left.";
    	if (guessesLeft < 1) {
    		showGuessesLeft.innerHTML = "Game Over!";
    	}

    	for (var i = 0; i < guesses.length; i++) {
    		if (counter + space === guesses.length) {
    			showGuessesLeft.innerHTML = "You Win!!";
    		}
    	}
    }

    // Bringing in the Letter
    // OnClick Function
	check = function () {
	    list.onclick = function () {
	      var guess = (this.innerHTML);
	      this.setAttribute("class", "active");
	      this.onclick = null;
	      for (var i = 0; i < word.length; i++) {
	        if (word[i] === guess) {
	          guesses[i].innerHTML = guess;
	          counter += 1;
	        } 
	      }
	      var j = (word.indexOf(guess));
	      if (j === -1) {
	        guessesLeft -= 1;
	        comments();
	      } else {
	        comments();
	      }
	    }
	}

	// Making it work!
	play = function() {
		word = breeds[Math.floor(Math.random() * breeds.length)];
		word = word.replace(/\s/g, "-");
		console.log(word);
		buttons();

		guesses = [];
		result();
		comments();
		// selectCatagory();
	}

	play();

	// Reset
	document.getElementById('reset').onclick = function() {
		correct.parentNode.removeChild(correct);
		letters.parentNode.removeChild(letters);
		
		play();
	}
}