const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  
  const priceElements = document.querySelectorAll(".prices");
  
  // Calculate the total price
  let totalPrice = 0;
  priceElements.forEach(priceElement => {
    const price = parseFloat(priceElement.textContent);
    if (!isNaN(price)) {
      totalPrice += price;
    }
  });

  const table = document.querySelector("table"); 
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  
  totalCell.colSpan = table.rows[0].cells.length; 
  totalCell.textContent = `Total Price: ${totalPrice.toFixed(2)}`; 

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow); 
};

getSumBtn.addEventListener("click", getSum);
