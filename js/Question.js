class Question {

  constructor() {
    this.title = createElement('h1')
    // this.input1 = createInput("Enter Your Name Here....");
    this.input1=createInput().attribute("placeholder", "Enter your name ")
    this.input2 = createInput().attribute("placeholder","Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h1');
    this.option1 = createElement('h2');
    this.option2 = createElement('h2');
    this.option3 = createElement('h2');
    this.option4 = createElement('h2');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){

    this.title.html("MyQuiz Game");
    this.title.position(650,0);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(300, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(300, 140);
    this.option2.html("2: Envelope" );
    this.option2.position(300, 170);
    this.option3.html("3: Estimate " );
    this.option3.position(300, 200);
    this.option4.html("4: Example" );
    this.option4.position(300, 230);

    this.input1.position(300, 500);
    this.input2.position(700, 500);
    this.button.position(550, 600);

    this.button.mousePressed(()=>{
  
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
      

    });

  }
}
