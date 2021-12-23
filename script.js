var arrayofquotes=[
    {
      "quote"  :"You have to run before you walk"
    },
    {
        "quote"  :"Genius billionier playboy piranthopist"
      },
      {
        "quote"  :"Now i want a american ceeese burger"
      },
      {
        "quote"  :"Jarvis activate destruction mood"
      },
      {
        "quote"  :"under roof"
      },
      {
        "quote"  :"Iam Iron man"
      },

]


function randomindex(arraylength){
    return Math.floor(Math.random()*arraylength)
}


function generator(){
    let index=randomindex(arrayofquotes.length)

    document.getElementById("quotesoutput").innerHTML=arrayofquotes[index].quote

}
