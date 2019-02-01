// Step 2: Randomize a dice roll (make sure it's an integer number)
  //Start by creating a variable that hold a dice number (1, 2, 3, ...6)
let roll = Math.ceil(Math.random() * 6);

// Step 3: Update the user interface (document) to show the diceface (svg image)
let diceMsg = document.getElementById('msg');
let theDice = document.getElementById('dice');

  diceMsg.innerHTML = `You Rolled: ${roll}`;
  theDice.innerHTML = `<img src="img/dice${roll}.svg" alt="Dice" class="dice">`
}

}

// Step 4: Convert the roll number (for example: 3) to a word ("three")
