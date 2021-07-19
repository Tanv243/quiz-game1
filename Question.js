class Question {
    constructor() {
        this.title=createElement('h2');
        this.input1=createInput("name");
        this.input2=createInput("answer");
        this.button=createButton('play');
        this.option1=createElement('h3');
        this.option2=createElement('h3');
        this.option3=createElement('h3');
        this.option4=createElement('h3');
        this.question=createElement('h3');

    }
    hide(){
        this.input1.hide();
        this.input2.hide();
        this.title.hide();
        this.button.hide();
    }
    display(){
        
        this.title.html("My Interesting Quiz Game");
        this.title.position(350,0);

        
    
        this.question.html("Question: Which is the planet in our Solar system on which it rains of diamonds");
        this.question.position(150,80);



        this.option1.html("Neptune");
        this.option1.position(150,100);
        this.option2.html("Pluto");
        this.option2.position(150,120);
        this.option3.html("Jupitar");
        this.option3.position(150,140);
        this.option4.html("Mercury");
        this.option4.position(150,160);
        this.option5.html("Earth");
        this.option5.position(150,180);
        this.input1.position(150,230);
        this.input2.position(350,230);
        this.button.position(290,300);



        this.button.mousePressed(()=>{
            
            this.input1.hide();
        this.input2.hide();
        this.title.hide();
        this.button.hide();
        contestant.name=this.input1.value();
        contestant.answer=this.input2.value();
        contestantCount+=1;
        contestant.index=contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        });
    }
}