class Quiz{
    constructor(){}

    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
     }
    update(state){
         database.ref('/').update({
          gameState:state
            });
        }
    async start(){
        if(gameState===0){
            contestant=new Contestant();
            var contestantCountRef=await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount=contestantCountRef.val();
                contestant.getCount();
            }
            question=new Question();
            question.display();
        }
     }
     play(){
        question.hide();
        background("yellow");
        fill(0);
        textSize(30);
        text("THE CORRECT ANSWER IS:",120,100);
        Contestant.getContestantInfo();
    
        if(allContestant!==undefined){
          var displayPosition=130;
          
          for(var cont in allContestant){
            var rightAnsw="2";
            if(rightAnsw===allContestant[plr].answer){
              fill("green");
            }else{
              fill("red");
            }
            displayPosition+=20;
            textSize(15);
            text(allContestant[plr].name+":"+allContestant[plr].answer,120,displayPosition)
    
    
          }
        }
    }
    }