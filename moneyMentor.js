document.addEventListener("DOMContentLoaded", () => {
  
  const sendSalary = document.getElementById('send-salary');
  const sendAccount = document.getElementById('send-account');
  

  const perMonthSalary = document.querySelector('.month-salary')
 
  
  const mercadoButao = document.querySelector(".button-mercado")
const purchaseButton = document.getElementById('purchase-value-send');
  
  
const mercadoMessage = document.querySelector(".mercado-message");
const mercadoValue = document.querySelector(".mercado-value");


  
  sendSalary.addEventListener("click", () => {
    console.log("send salary working")
     const fullSalary = document.querySelector('.input-salary-style')
    
     const Salary = fullSalary.value;
     console.log(Salary);
    
    
      perMonthSalary.textContent = Salary;
    
  
  })
  
  sendAccount.addEventListener("click", () => {
    console.log("send account working")
  })

  mercadoButao.addEventListener("click", () => {
    console.log("mercado buttao working")
    let message = document.querySelector(".selected-message");
    message.textContent = "Você selecionou mercado";

});

purchaseButton.addEventListener("click", () => {
  console.log("send purchase butto working")
  
  let mercadoCollectedValue = document.querySelector(".input-purchase-style");
  mercadoMessage.textContent = "Total money spent on Mercado"
 
  let mercadoPure = mercadoCollectedValue.value;
  
  mercadoValue.textContent = mercadoPure;
  
  
})
  
  
})
