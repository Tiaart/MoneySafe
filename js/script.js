import { convertStringNumber } from "./convertStringNumber.js";

const financeForm = document.querySelector('.finance__form');
const financeAmound = document.querySelector('.finance__amount');
const financeReport = document.querySelector('.finance__report');
const Report = document.querySelector('.report');
const reportClose = document.querySelector('.report__close');




let amount = 0;

financeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const typeOperation = e.submitter.dataset.typeOperation;
    
    const changeAmound = Math.abs(convertStringNumber(financeForm.amount.value));

    if (typeOperation === 'income') {
        amount += changeAmound;
    }

    if (typeOperation === 'expenses') {
        amount -= changeAmound;
    }

    financeAmound.textContent = `${amount.toLocaleString()}₽`;

});


financeReport.addEventListener('click', (e) => {
    e.preventDefault();
    Report.classList.toggle('report__open');
});

reportClose.addEventListener('click', (e) => {
    e.preventDefault();
    Report.classList.toggle('report__open');
});