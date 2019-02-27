
$( document ).ready(function(){
//Global Variables
//--------------------------------
//Crystl Variables
var crystal ={
    blue:
    {
        name: "Blue",
        value: 0,
    },
    green:
    {
            name: "Green",
            value: 0,
    },
    red:
    {
            name: "Red",
            value:0,
    },
    yellow: 
    {
            name: "Yellow",
            value:0,
    },
};

//Score (Target and Player)
var targetScore = 0;
var playerScore = 0;

//Wins and Losses
var winCount   = 0;
var lossCount   = 0;

//Functions
//-------------------------------------------------
var getRandom = function(min,max){
        return Math.floor(Math.random() * (max - min +1)) + min;
}

var startGame = function(){
        //Reset the player Score
         playerScore = 0;

        //Set a new target score (between 19-120)

        targetScore = getRandom(19, 120);
        //Set different values for each of the crystals(between1-12)
        crystal.blue.value = getRandom(1, 12);
        crystal.green.value = getRandom(1, 12);
        crystal.red.value = getRandom(1, 12);
        crystal.yellow.value = getRandom(1, 12);
        //Change the HTML to reflect all of  changes
        $("#playerScore").text(playerScore);
        $("#targetScore").text(targetScore);

        //Testing for the all random values
        console.log(".....................")
        console.log("Target Score:"+ targetScore);
        console.log("Blue:" + crystal.blue.value + "| Green :" + crystal.green.value + " | Red: " + crystal.red.value + "| Yellow: " + crystal.yellow.value);
        console.log(".....................")

}

//here is the crystals return value
var addValues = function(crystal){

        //player score calculation
        playerScore = playerScore + crystal.value;

        //showing the Html to reflect changes in playerScore
        $("#playerScore").text(playerScore);

        //call teh checkWin function
        checkWin();


       // testing for player score
       console.log("playerScore" + playerScore);
}

//Check if player won or lost and reset the game
var checkWin = function(){

        //Check if player score is bigger than targetscore
        if(playerScore === targetScore){
                alert("Congratulations! You Won!");
                console.log("You Won");
                
                //here is the Win Counter increase
                winCount++

                //Change loss count in html
                $("#winCount").text(winCount);

                //Restart the game
                startGame();

        }
        else if(playerScore > targetScore){
                alert("You Lost!Try Again!");
                console.log("You Lost");

                //here is the loss counter increase
                lossCount++;

                //Change loss count in html
                $("#lossCount").text(lossCount)

                 //Restart the game
                 startGame();
        
        }

}

//Main Process
//--------------------------------------------------

//Starts the game
startGame()
$("#blue").click(function() {
    addValues(crystal.blue);
});
$("#green").click(function() {
        addValues(crystal.green);
});
$("#red").click(function() {
        addValues(crystal.red);       
});
$("#yellow").click(function() {
        addValues(crystal.yellow); 
});       
});
