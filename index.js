// code your solution here
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

/*   function superbowlWin(record) {

    if (record.find(element => element.result === "w")) {
        return result.year
    } else {
        return undefined
    }
    } */


    function superbowlWin(record){
        const result = record.find(item => item.result === 'W')
    
       if (result){
            return result.year
        }else{
            return undefined
    }
    }
    
    
    