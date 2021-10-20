const Food0=[
  { question:'What is the main ingredient used to make hummus?',
    rightAnswer:'Chickpeas',
    answers:["Tahini","Humms","Chickpeas","Navy Beans"],
}
,
{ question:'Which famous soft drink was invented in 1892?',
    rightAnswer:'Coca Cola',
    answers:["Coca Cola","Pepsi","Surge","Fanta"],
}
,
{ question:'Which is the only food that can never go off or go bad?',
    rightAnswer:'Honey',
    answers:["Honey","Twinkies","Peanuts","Canned Tuna"],
}
,
{ question:'What popular Mexican dish literally translates as ‘little donkey’?',
    rightAnswer:'Burrito',
    answers:["Burrito","Enchilladas","Frijoles","Taco"],
}
,
{ question:'How many herbs and spices make up the KFC spice blend?',
    rightAnswer:'11',
    answers:["7","9","11","15"],
}
,
{ question:'What is Japanese Sake made from?',
    rightAnswer:'Rice',
    answers:["Rice","Barley","Wheat","Wasabi"],
}

  ]


  const Question1=[
    { question:'1',
      rightAnswer:'2',
      wrongAnswer1:'3',
      wrongAnswer2:'e',
      wrongAnswer3:'r',
      isActive:true, 
  
    },
    {question:'',
    rightAnswer:'',
    wrongAnswer1:'',
    wrongAnswer2:'',
    wrongAnswer3:'',
    isActive:true, 
  
  
    },
    {question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
  
    },
    {question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
  
    },
    {question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
  
    },
    {question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
    }]

  const Question2=[
    { question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
    },
    {question:'',
    rightAnswer:'',
    wrongAnswer1:'',
    wrongAnswer2:'',
    wrongAnswer3:'',
    isActive:true, 
  
  
    },
    {question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
  
    },
    {question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
  
    },
    {question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
  
    },
    {question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
    }]

  const Question3=[
    { question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
    },
    {question:'',
    rightAnswer:'',
    wrongAnswer1:'',
    wrongAnswer2:'',
    wrongAnswer3:'',
    isActive:true, 
  
  
    },
    {question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
  
    },
    {question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
  
    },
    {question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
  
    },
    {question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
  
    }]

    const Question4=[
      { question:'',
        rightAnswer:'',
        wrongAnswer1:'',
        wrongAnswer2:'',
        wrongAnswer3:'',
        isActive:true, 
    
      },
      {question:'',
      rightAnswer:'',
      wrongAnswer1:'',
      wrongAnswer2:'',
      wrongAnswer3:'',
      isActive:true, 
    
    
      },
      {question:'',
        rightAnswer:'',
        wrongAnswer1:'',
        wrongAnswer2:'',
        wrongAnswer3:'',
        isActive:true, 
    
    
      },
      {question:'',
        rightAnswer:'',
        wrongAnswer1:'',
        wrongAnswer2:'',
        wrongAnswer3:'',
        isActive:true, 
    
    
      },
      {question:'',
        rightAnswer:'',
        wrongAnswer1:'',
        wrongAnswer2:'',
        wrongAnswer3:'',
        isActive:true, 
    
    
      },
      {question:'',
        rightAnswer:'',
        wrongAnswer1:'',
        wrongAnswer2:'',
        wrongAnswer3:'',
        isActive:true, 
    
      }]
      const Question5=[
        { question:'',
          rightAnswer:'',
          wrongAnswer1:'',
          wrongAnswer2:'',
          wrongAnswer3:'',
          isActive:true, 
      
        },
        {question:'',
        rightAnswer:'',
        wrongAnswer1:'',
        wrongAnswer2:'',
        wrongAnswer3:'',
        isActive:true, 
      
      
        },
        {question:'',
          rightAnswer:'',
          wrongAnswer1:'',
          wrongAnswer2:'',
          wrongAnswer3:'',
          isActive:true, 
      
      
        },
        {question:'',
          rightAnswer:'',
          wrongAnswer1:'',
          wrongAnswer2:'',
          wrongAnswer3:'',
          isActive:true, 
      
      
        },
        {question:'',
          rightAnswer:'',
          wrongAnswer1:'',
          wrongAnswer2:'',
          wrongAnswer3:'',
          isActive:true, 
      
      
        },
        {question:'',
          rightAnswer:'',
          wrongAnswer1:'',
          wrongAnswer2:'',
          wrongAnswer3:'',
          isActive:true, 
      
        }]
      

// this function takes in the catagory number and the question number and return the object within the array
function getQuestionsAndAnswers(cat,qNumber){
  if(cat === 0){
    shuffle(Food0[qNumber].answers)
    return Food0[qNumber]
  }else if(cat === 1){
    return Question1[qNumber]
  }else if(cat === 2){
    return Question2[qNumber]
  }else if(cat === 3){
    return Question3[qNumber]
  }else if(cat === 4){
    return Question4[qNumber]
  }else if(cat === 5){
    return Question5[qNumber]
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    //console.log(array)
  }

//shuffle(Question0.answers)

}
export{
  getQuestionsAndAnswers
}