// code your solution here

function saturdayFun(activity='roller-skate') {
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun("go to Disney World!");

function mondayWork(work='go to the office'){
    return(`This Monday, I will ${work}.`);
}
mondayWork('Complete my Flatiron work.');

//It should return a function. This "inner" function should:
//take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ...!" where ... should be the adjective this function received wrapped in visual flair.
//It should take as parameter a String that will be used to create visual flair.
//You may call the parameter whatever you like, but its default value should be "*".
// Call example: const encouragingPromptFunction = wrapAdjective("!!!")
//Thus a total call should be: wrapAdjective("%")("a dedicated programer") //=> "You are %a dedicated programmer%! "
function wrapAdjective(adj='*') {
    return function (adjective='special') {
            return(`You are ${adj}${adjective}${adj}!`)
        }
   }
//wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
