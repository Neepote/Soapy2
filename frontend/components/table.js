function adminCreateProductTable(list) {
	var cols = [];

	for (var i = 0; i < list.length; i++) {
		for (var k in list[i]) {
			if (cols.indexOf(k) === -1) {
				// Push all keys to the array
				cols.push(k);
			}
		}
	}

	// Create a table element
	var table = document.createElement("table");
	table.classList = "table";

	// Create table row tr element of a table
	var tr = table.insertRow(-1);

	for (var i = 0; i < cols.length; i++) {
		// Create the table header th element
		var theader = document.createElement("th");
		theader.attributes = { scope: "col" };
		theader.innerHTML = cols[i];

		// Append columnName to the table row
		tr.appendChild(theader);
	}
	var theaderUpdate = document.createElement("th");
	theaderUpdate.attributes = { scope: "col" };
	theaderUpdate.innerHTML = "Update";

	// Append columnName to the table row
	tr.appendChild(theaderUpdate);

	var theaderDelete = document.createElement("th");
	theaderDelete.attributes = { scope: "col" };
	theaderDelete.innerHTML = "Delete";

	// Append columnName to the table row
	tr.appendChild(theaderDelete);

	// Adding the data to the table
	for (var i = 0; i < list.length; i++) {
		// Create a new row
		trow = table.insertRow(-1);
		for (var j = 0; j < cols.length; j++) {
			var cell = trow.insertCell(-1);

			// Inserting the cell at particular place
			cell.innerHTML = list[i][cols[j]];
		}

		let updateButton = document.createElement("button");
		updateButton.innerHTML =
			'<i class="fa fa-cog" style="color:gray"> Update</i>';
		updateButton.classList = "btn btn-warning";
		updateButton.setAttribute(
			"onclick",
			`document
					.getElementById("productForm")
					.replaceChildren(
						createProductForm(
							${list[i]["id"]},
							'${list[i]["name"]}',
							'${list[i]["description"]}',
							'${list[i]["image"]}',
							${list[i]["price"]},
							${list[i]["quantity"]}
						)
					);`
		);
		let pageUp = document.createElement("a");
		pageUp.href = "#";
		var updateCell = trow.insertCell(-1);
		pageUp.appendChild(updateButton);
		updateCell.appendChild(pageUp);

		let deleteButton = document.createElement("button");
		deleteButton.innerHTML =
			'<i class="fa fa-trash-o" style="color:white"> Delete</i>';
		deleteButton.classList = "btn btn-danger";
		deleteButton.setAttribute("onclick", `deleteProduct(${list[i]["id"]})`);
		var deleteCell = trow.insertCell(-1);
		deleteCell.appendChild(deleteButton);
	}

	// Add the newly created table containing json data
	/* var el = document.getElementById("tabella");
	el.innerHTML = "";
	el.appendChild(table); */
	return table;
}
