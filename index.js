function scuberGreetingForFeet(distance){
  if(distance <= 400){
    return 'This one is on me!'
  }else if(distance > 400 && distance < 2000){
    return 'That will be twenty bucks.'
  }else if(distance > 2000 && distance < 2500){
    return 'I will gladly take your thirty bucks.'
  }else{
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
 if(tip === "generous"){
  return 'Thank you so much.'
 }else if(tip === "not as generous"){
  return 'Thank you.'
 }else{
  return 'Bye.'
 }
}