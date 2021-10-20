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


  const States1=[
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
    const Potter2=[
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

    const Avatar3=[
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
      const Naruto4=[
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
        const TV5=[
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
      

// this function takes in the catagory number and the question number and return the object within the array
function getQuestionsAndAnswers(cat,qNumber){
  if(cat === 0){
    shuffle(Food0[qNumber].answers)
    return Food0[qNumber]
  }else if(cat === 1){
    shuffle(States1[qNumber].answers)
    return States1[qNumber]
  }else if(cat === 2){
    shuffle(Potter2[qNumber].answers)
    return Potter2[qNumber]
  }else if(cat === 3){
    shuffle(Avatar3[qNumber].answers)
    return Avatar3[qNumber]
  }else if(cat === 4){
    shuffle(Naruto4[qNumber].answers)
    return Naruto4[qNumber]
  }else if(cat === 5){
    shuffle(TV5[qNumber].answers)
    return TV5[qNumber]
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