    var rows = 0;
    var serviceHash = {
    	2 : {
    		"name" : "entry.479432008",
    		"id" : "entry_479432008" ,
        "title" : "Service Dates"
    	},
   		3 : {
    		"name" : "entry.277624700",
    		"id" : "entry_277624700" ,
        "title" : "Service Events"
    	},
    	4 : {
    		"name" : "entry.259088472",
    		"id" : "entry_259088472" ,
        "title" : "Service Hours"
    	},
    	5 : {
    		"name" : "entry.1538896044",
    		"id" : "entry_1538896044",
        "title" : "Service Chairs" 
    	}    	
    }

    // When rows > 5 we will convert the data to strings and send to paragraph for extra services.

    function addServiceRow() {
      // Find a <table> element with id="myTable":
      var table = document.getElementById("service_table");
      // Create an empty <tr> element and add it to the 1st position of the table:
      var row = table.insertRow(++rows);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);

      // Number
      cell1.innerHTML = rows;
      
      // Date
      var when = document.createElement("input");
        when.setAttribute("type", "date");
        // Replace name and entry with array of ids
        when.setAttribute("name", serviceHash[2].name);
        when.setAttribute("id", serviceHash[2].id);
        when.setAttribute("aria-label", serviceHash[2].title);
        when.setAttribute("aria-required", "true");
        when.setAttribute("class", "ss-q-date");
        when.setAttribute("dir", "auto");

      cell2.appendChild(when);

      var text_cells = [cell3, cell4, cell5];

      for (j = 0; j < text_cells.length; j++) {
        var cell = j + 3;
      	var data = document.createElement("input");
      	data.setAttribute("type", "text");
        data.setAttribute("name", serviceHash[cell].name);
        data.setAttribute("id", serviceHash[cell].id);
        data.setAttribute("aria-label", serviceHash[cell].title);
        data.setAttribute("aria-required", "true");
        data.setAttribute("class", "ss-q-short");
        data.setAttribute("dir", "auto");
      	text_cells[j].appendChild(data);
      }
    };

    function loadServiceTable() {
      for (i = 0; i < 5; i++) {
        addServiceRow();
      }
    }
    window.onload = loadServiceTable;