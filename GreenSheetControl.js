    var rows = 0;

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

      // Add some text to the new cells:
      cell1.innerHTML = rows;
      var when = document.createElement("input");
        when.setAttribute("type", "date");
        when.setAttribute("name", "entry.479432008");
        when.setAttribute("id", "entry_479432008");
        when.setAttribute("aria-label", "Service #" +rows);
        when.setAttribute("aria-required", "true");
        when.setAttribute("class", "ss-q-date");
        when.setAttribute("dir", "auto");

      cell2.appendChild(when);

      cell3.innerHTML = "NEW CELL3";
      cell4.innerHTML = "NEW CELL4";
      cell5.innerHTML = "NEW CELL5";
    };

    function loadServiceTable() {
      for (i = 0; i < 5; i++) {
        addServiceRow();
      }
    }
    window.onload = loadServiceTable;