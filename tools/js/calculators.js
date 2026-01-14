document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("calculateBtn");
  const result = document.getElementById("result");
  
  button.addEventListener("click", function() {
    
    const salary = Number(document.getElementById("salary").value) || 0;
    
    const rent = Number(document.getElementById("rent").value) || 0;
    const food = Number(document.getElementById("food").value) || 0;
    const transport = Number(document.getElementById("transport").value) || 0;
    const electricity = Number(document.getElementById("electricity").value) || 0;
    const water = Number(document.getElementById("water").value) || 0;
    const internet = Number(document.getElementById("internet").value) || 0;
    const others = Number(document.getElementById("others").value) || 0;
    
    if (salary <= 0) {
      result.textContent = "Please enter a valid monthly income.";
      result.style.color = "#DC2626";
      return;
    }
    
    const totalExpenses =
      rent + food + transport + electricity + water + internet + others;
    
    const balance = salary - totalExpenses;
    
    if (balance < 0) {
      result.textContent =
        `You are overspending by ₦${Math.abs(balance).toLocaleString()}`;
      result.style.color = "#DC2626";
    } else {
      result.textContent =
        `You have ₦${balance.toLocaleString()} remaining this month.`;
      result.style.color = "#16A34A";
    }
  });
});