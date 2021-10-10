function getWord() {
    //access the webpage  and gets the value from the inputs
    let word = document.getElementById("word").value;

    //takes away capitilization, special characters and spaces from the word
    let modifiedWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    //takes the word and flips it and sets it to a value
    let revWord = flipWord(modifiedWord);

    //setting up boolean and an empty string for error codes
    let errorState = false;
    let errorMsg = "";

    //this becomes true if the word and it's palindrome doesn't equal
    if (revWord != modifiedWord) {
       return Swal.fire({
           icon: 'error',
           title: `Oops... ${word} is not a palindrome`,
           text: "Your word reversed is " + revWord,
           footer: '<a target="_blank" href="https://en.wikipedia.org/wiki/Palindrome">Why not?</a>'
       })
       

    }

    //this becomes true if they didn't put enough letters to have a palindrome
    if (modifiedWord.length < 2) {
       return Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: "You didn't add enough letters for this.",
           footer: '<a target="_blank" href="https://en.wikipedia.org/wiki/Palindrome">Why not?</a>'
       })
       
    }

    //if any of the previous becomes true, a SweetAlert will fire and exit the function
  

    //take the word and it's plaindrome and pass it to a function that will display it
    displayResults(word, revWord);
}

//function that takes the value and make a string that is the word reversed
function flipWord(word) {

    //creates an empty string
    let revWord = "";

    //for every letter in the word, create a word with the letters in reverse
    for (let index = word.length - 1; index >= 0; index--) {
        let letter = word[index];

        revWord += letter;
    }

    return revWord;
}

//take the words and display the words to the webpage
function displayResults(word, revWord) {
   
    return Swal.fire({
        icon: 'success',
        title: 'Congrats!',
        text: ` ${word} is a palindrome!
            ${word} Reversed is ${revWord}.`
        
    })
}