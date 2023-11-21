// Initialize the global variables
let numPeople =  readInt("How many people are voting?: ");
let numVotes = 0;

function main() {
  
  getVotes();
 // checkVotes();
}

function getVotes(){
    var votePie = readInt("How many people voted for cherry pie: "); 
  var votePump = readInt("How many people voted for pumpkin pie: ");
  var voteApple = readInt("How many people voted for apple pie: ");
  
  println("votes for cherry pie" + votePie);
  println("votes for cherry pie" + votePump);
  println("votes for cherry pie" + voteApple);
  
  
  var totalVotes = votePie + votePump + voteApple;
  println("Total votes: " + totalVotes);
  
  var noVote= numPeople - totalVotes;
  if(totalVotes < numPeople){
      println(noVote + "people did not vote: ");
  }
}

function checkVotes(){
    while(true){
        if(numPeople == totalVotes){
        console.log("is valid");
        
        } else {
       console.log("not valid");  
        }
    }
}