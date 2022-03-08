 function getDayInfo (){
    let a = new Date()
    let options1 = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day:"numeric"
    }
    for(let keys in options1.weekday){
        if(options1.weekday > '7'){
          options1.weekday[keys] === `${'2-я неделя'}`;
          return a.toLocaleDateString('ru',options1,)
        }
    }
    

    }
    
    
    
   console.log(getDayInfo());