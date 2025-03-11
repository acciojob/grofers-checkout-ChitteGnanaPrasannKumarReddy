const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll(".price");
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
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
