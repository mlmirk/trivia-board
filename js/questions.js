const Question0=[
  { question:'2+2 is equal to? ',
    rightAnswer:'2',
    wrongAnswer1:'22',
    wrongAnswer2:'3',
    wrongAnswer3:'quick maths',
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
    return Question0[qNumber]
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

}
export{
  getQuestionsAndAnswers
}