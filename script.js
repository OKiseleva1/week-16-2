const form= document.querySelector("form");
const result =document.querySelector(".result");

form.addEventListener("submit", function (event){
event.preventDefault();

    


let sum =0;
const Acura=[2000, 3000];
const Alfa=[4000, 5000];
const Aston=[6000, 7000];
const Audi=[8000, 9000];
const Bentley=[10000, 11000];
const BMW=[12000, 13000];
const Brilliance=[14000, 15000];




const autoSelect=document.querySelector("select[name ='auto']");

const autoModel=document.querySelector("select[name ='model']");

if (autoSelect.value ==="Acura"){   
    sum=Acura[autoModel.value];
} else if (autoSelect.value === "Alfa"){
    sum=Alfa[autoModel.value];
} else if (autoSelect.value ==="Aston"){
    sum=Aston[autoModel.value];
}else if (autoSelect.value ==="Audi"){
    sum=Audi[autoModel.value];
}else if (autoSelect.value ==="Bentley"){
    sum=Bentley[autoModel.value];
}else if (autoSelect.value ==="BMW"){
    sum=BMW[autoModel.value];
}else if (autoSelect.value ==="Brilliance"){
    sum=Brilliance[autoModel.value];
}


const fuelRadios=document.querySelectorAll("input[name ='fuel']");
console.log(fuelRadios);
if (fuelRadios[0].checked){
    sum=  sum *1.2;
} else if (fuelRadios[1].checked) {
    sum= sum * 1.3;
}
else if (fuelRadios[2].checked) {
    sum= sum * 1.4;
}

const yearRadios=document.querySelectorAll("input[name ='year']");
console.log(yearRadios);
if (yearRadios[0].checked){
    sum=  sum *1.1;
} else if (yearRadios[1].checked) {
    sum= sum * 1.2;
}
else if (yearRadios[2].checked) {
    sum= sum * 1.3;
}
else if (yearRadios[3].checked) {
    sum= sum * 1.4;
}

result.textContent= "Стоимость: "+ sum + " $"

})