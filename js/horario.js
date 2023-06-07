'use strict'


// var pegandovalor = function (e) {
//     myInput.value = e.target.value

//     console.log(myInput.value);
// }



export const btn = () => {

    const labelCalendar = document.getElementById("label_calendar");
    const myInput = document.getElementById("date_input");

    const myInput2 = document.querySelectorAll(".time_input");
    const labelTime = document.querySelectorAll(".label_time");

    labelCalendar.addEventListener('click', () => {
        myInput.showPicker();
    })

    myInput.addEventListener('blur', () => {
        const myInputValue = myInput.value;
        const myInputValueBR = myInput.value.substring(8, 10) + '/' + myInputValue.substring(5, 7);
        console.log(myInputValue);
        console.log(myInputValueBR);
    })

    labelTime.forEach((element, index) => {
        element.addEventListener('click', () => {
            myInput2[index].showPicker();
        });
    });

    myInput2.forEach((input) => {
        input.addEventListener('blur', () => {
            const myInputValue = input.value;
           console.log(myInputValue.substring(0, 2) + 'h' + myInputValue.substring(3, 5));
        });
    });
}


