let age = 80;
// const student =18;
const ticket = 800;
if (age < 10){
    console.log('Entry free')
}
else if(age >= 5 && age <= 18  ){
    discount = ticket*50/100;
    pay = ticket - discount;
     console.log(pay)
}
else if(age >= 60){   
   discount = ticket*15/100;
    pay = ticket - discount;
    console.log(pay)
}
else{
      console.log(ticket)
}
     



