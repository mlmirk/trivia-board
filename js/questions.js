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
    { question:'What is the capital of Washington state?',
      rightAnswer:'Olympia',
      answers:["Olympia","Seattle","Tacoma","Renton"],
  }
  ,
  { question:'What is the only state flag that is two-sided?',
      rightAnswer:'Oregon',
      answers:["Oregon","Texas","New Jersey","North Dakota"],
  }
  ,
  { question:'Which state is known as the “granite state”?',
      rightAnswer:'New Hampshire',
      answers:["New Hampshire","Montana","Oklohoma","Wisconsin"],
  }
  ,
  { question:'Which U.S. state is nicknamed both the “Constitution State” and the “Nutmeg State”?',
      rightAnswer:'Connecticut',
      answers:["Connecticut","Massachesets","Delaware","Vermont"],
  }
  ,
  { question:'What state has the longest freshwater shoreline?',
      rightAnswer:'Michigan',
      answers:["Michigan","Florida","Maine","Minnisota"],
  }
  ,
  { question:'What is the biggest US state in terms of land area?',
      rightAnswer:'Alaska',
      answers:["Alaska","Texas","Ohio","Canada"],
  }
  
    ]
    const Potter2=[
      { question:'Who won the quidditch world cup in Goblet of Fire?',
        rightAnswer:'Bulgaria',
        answers:["Gryffindor","Ireland","Bulgaria","Chuddley Cannons"],
    }
    ,
    { question:'What magical item contains white and red smoke and reacts to a user if they forget something',
        rightAnswer:'Remembrall',
        answers:["Remembrall","Forget-me-not","Snitch","Pensieve"],
    }
    ,
    { question:'What are the names of the three Peverell brothers?',
        rightAnswer:'Antioch, Cadmus and Ignotus',
        answers:["Antioch, Cadmus and Ignotus","Remus, Sirius and James","Alastor, Romulus and Wulfric","Asmodayis, Sybil and Nymphadora"],
    }
    ,
    { question:'How much does a ticket on the Knight Bus cost if it includes hot chocolate?',
        rightAnswer:'14 Sickles',
        answers:["14 Sickles","10 Sickles, 3 Knuts","1 Galleon","7 Sickles"],
    }
    ,
    { question:'What is Rita Skeeter’s animagus form?',
        rightAnswer:'A beetle',
        answers:["A beetle","A Bumblebee","A cat","A mouse"],
    }
    ,
    { question:'Who is the Slytherin house ghost?',
        rightAnswer:'Bloody Baron',
        answers:["Bloody Baron","Peeves","Nearly-Headless Nick","They Grey Lady"],
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