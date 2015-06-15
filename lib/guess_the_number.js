// Jojo and Jack C.  pair programming
//  Guess the Number

// 
// Generate a random number
// Get the user's name
// Ask the user to enter a number
// If the number equals the random number let the user know that they've won, other wise let them know that they lost
// 


function winner_loser( won, iterations) {
    if ( (won / iterations ) > 0.2 ) {
	return("You're really good at this!");
    } else {
	return("Wow. You're awful. You should stop playing this before you lose more street cred.");
    }
}


var guesser_name = prompt("Please enter your name");

alert("You're stuck playing this for 10 rounds.");

var games_won = 0

for( var i = 0 ; i < 10 ; ) {
    
    var r_num = Math.floor(Math.random() * 10) ;

    console.log(guesser_name);

    var guess = prompt("I'm thinking of a number.  What is your guess?");

    if (guess == r_num) {
	alert("Congratulations! "+ guesser_name +  ", you've guessed correctly!");
	games_won += 1;
    } else {
	alert("So sad.  Your guess was incorrect, "+ guesser_name +".  I was thinking of " + r_num);
    }

    i++ ;

    console.log("calling jquery, i = " + i);
    
    jQuery("h3").replaceWith("<h3>You've played " + i + " rounds of Guess the Number, and have a " + (games_won / i)*100 + "% winrate. " + winner_loser(games_won, i)+ " </h3>");

}

alert("Bye-bye.  I'm sick of playing....");


//$( "tr:first" ).css( "font-style", "italic" );
