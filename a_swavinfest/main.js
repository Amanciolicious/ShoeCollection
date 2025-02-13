const listOfJSON = [
    {
        Name: "Adidas Gazelle",
        Unit: "Authentic",
        Price: 90.00,
        Qty: 3,
        Paid: false
    },
    {
        Name: "Puma Speedcat",
        Unit: "Class A",
        Price: 1299.00,
        Qty: 10,
        Paid: false
    },
    {
        Name: "Nike Killshot",
        Unit: "Class A",
        Price: 999.00,
        Qty: 5,
        Paid: false
    }
];

// The Table Functions

const tableBody = document.querySelector("#table-body");

for (let i = 0; i < listOfJSON.length; i++) {
    // Create a new table row
    const newRow = document.createElement("tr");
    
    // Calculate the total price
    const totalPrice = (listOfJSON[i].Price * listOfJSON[i].Qty).toFixed(2);  // Round to 2 decimal places

    // Check if the Paid status is false, and add the 'table-danger' class if so
    if (!listOfJSON[i].Paid) {
        newRow.classList.add("table-danger");
    }

    // Populate the row with the data from the JSON
    newRow.innerHTML = 
    `
        <th scope="row">${listOfJSON[i].Name}</th>
        <td>${listOfJSON[i].Unit}</td>
        <td>${(listOfJSON[i].Price).toFixed(2)} PHP</td>
        <td>${listOfJSON[i].Qty}</td>
        <td>${totalPrice} PHP</td>
        <td>${listOfJSON[i].Paid ? 'Paid' : 'Unpaid'}</td>
    `;

    // Append the row to the table body
    tableBody.appendChild(newRow);
}

// End of Table functions