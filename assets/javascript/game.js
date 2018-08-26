window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var categories;         
    var chosenCategory;    
    var getHint ;          
    var word ;              
    var guess ;             
    var guesses = [ ];      
    var lives ;           
    var counter ;        
    var space;  
    var getReset;            
  

    var showLives = document.getElementById("mylives");
    var showCategory = document.getElementById("category");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
    var getReset = document.getElementById("reset");
  

    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    var selectCat = function () {
      if (chosenCategory === categories[0]) {
        categoryName.innerHTML = "The Chosen Category Is Films";
      } else if (chosenCategory === categories[1]) {
        categoryName.innerHTML = "The Chosen Category Is Cities";
      }
    }
  
     result = function () {
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
    
     comments = function () {
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    }
  
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
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }
    }
    
    play = function () {
      categories = [
          ["deadpool", "inception", "gladiator", "finding-nemo", "shrek"],
          ["paris", "london", "madrid", "amsterdam", "prague"]
      ];
  
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      guesses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
    }
  
    play();
    
  
      hint.onclick = function() {
  
        hint = [
          ["Action film with Ryan Reynolds", "A dream within a dream", "Historical drama", "Animated Fish", "Just a big, stupid ogre"],
          ["Eiffel Tower", "God save the queen", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
      ];
  
      var categoryIndex = categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Clue: - " +  hint [categoryIndex][hintIndex];
    };
  

    reset.onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      play ();
    }
}
