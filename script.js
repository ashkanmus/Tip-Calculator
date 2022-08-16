const bill = document.getElementById("bill");
const numOfPeople = document.getElementById("numOfPeople");
const tipAmount = document.getElementById("tipAmount");
const tip = document.getElementById("tip"); 
const total = document.getElementById("total");
const tipPP = document.getElementById("tipPP");
const totalPP = document.getElementById("totalPP");



[ tipAmount, numOfPeople, bill ].forEach(function(element) {
    element.addEventListener("input", function() {
        let tipJS = bill.value * (tipAmount.value/100);
        let tipPPJS = tipJS / numOfPeople.value;
        let totalPPJS = bill.value / numOfPeople.value + tipPPJS;
        let totalJS = Number(bill.value) + tipJS;
        tip.innerHTML = `£${tipJS.toFixed(02)}`;
        total.innerHTML = `£${totalJS.toFixed(02)}`;
        tipPP.innerHTML = `£${tipPPJS.toFixed(02)}`;
        totalPP.innerHTML = `£${totalPPJS.toFixed(02)}`;
    });
});