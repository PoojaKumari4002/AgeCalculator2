const date = document.querySelector(".input1");
const month = document.querySelector(".input2");
const year = document.querySelector(".input3");
const age = document.querySelector(".age");
const button = document.querySelector(".button")

button.addEventListener('click',function(){
    const date1 = parseInt(date.value);
    const month1 = parseInt(month.value);
    const year1 = parseInt(year.value);
    
    if(date1>31|| date1<0||month1>12||month1<0||year1>2024||year1<0){
        alert("Please enter valid date of birth.");
        age.innerText=`You've entered wrong information.`;
    }
    // if(){
    //     alert("Please enter valid month.");
    // }
    // if(){
    //     alert("Please enter valid year.");
    // }

    const d = new Date();
    const newDate=d.getDate();
    const newMonth=d.getMonth()+1;
    const newYear=d.getFullYear();

    let ageDate = newDate-date1;
    let ageMonth = newMonth-month1;
    let ageYear = newYear-year1;
    
    if(ageDate<0){
        ageMonth--;
        ageDate=ageDate+30;
    }
    if(ageMonth<0){
        ageYear--;
        ageMonth=ageMonth+30;
    }
    age.innerText=`You are ${ageYear} years ${ageMonth} months ${ageDate} days old.`;
});


