    var serviceRows = 0;
    var fellowshipRows = 0;
    var rushRows = 0;
    var famEventRows = 0;
    var icEventRows = 0;

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
    };

    var fellowshipHash = {
      2 : {
        "name" : "entry.740205503",
        "id" : "entry_740205503" ,
        "title" : "Fellowship Dates"
      },
      3 : {
        "name" : "entry.1948446790",
        "id" : "entry_1948446790" ,
        "title" : "Fellowship Events"
      },
      4 : {
        "name" : "entry.166257851",
        "id" : "entry_166257851" ,
        "title" : "Fellowship Credits"
      },
      5 : {
        "name" : "entry.920951067",
        "id" : "entry_920951067",
        "title" : "Fellowship Chairs" 
      }  
    }

    var rushHash = {
      2 : {
        "name" : "entry.953406965",
        "id" : "entry_953406965" ,
        "title" : "Rush Dates"
      },
      3 : {
        "name" : "entry.1495623405",
        "id" : "entry_1495623405" ,
        "title" : "Rush Events"
      },

      4 : {
        "name" : "entry.1705649689",
        "id" : "entry_1705649689",
        "title" : "Rush Chairs" 
      }

    }

    var famEventHash = {
      2 : {
        "name" : "entry.1997032944",
        "id" : "entry_1997032944" ,
        "title" : "Family Event Dates"
      },
      3 : {
        "name" : "entry.564506775",
        "id" : "entry_564506775" ,
        "title" : "Family Events"
      },
      4 : {
        "name" : "entry.259764357",
        "id" : "entry_259764357",
        "title" : "Family Event Chairs" 
      }
    }

    var icEventHash = {
      2 : {
        "name" : "entry.1245868786",
        "id" : "entry_1245868786" ,
        "title" : "IC Event Dates"
      },
      3 : {
        "name" : "entry.388159601",
        "id" : "entry_388159601" ,
        "title" : "IC Events"
      },
      4 : {
        "name" : "entry.370256626",
        "id" : "entry_2370256626",
        "title" : "IC Event Chairs" 
      }
    }

    function addRow(tableName) {
      // Find a <table> element with id="myTable":
      var table = document.getElementById(tableName);
      
      var hash;
      var row;
      switch(tableName) {
        case "service_table":
          hash = serviceHash;
          row = table.insertRow(++serviceRows);
          break;
        case "fellowship_table":
          hash = fellowshipHash;
          row = table.insertRow(++fellowshipRows);
          break;
        default:
          hash = serviceHash;     
      }

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);

      switch(tableName){
        case "service_table":
          cell1.innerHTML = serviceRows;
          break;
        case "fellowship_table":
          cell1.innerHTML = fellowshipRows;
          break;
        default:
          cell1.innerHTML = 0;
      }

      // Date
      var when = document.createElement("input");
        when.setAttribute("type", "date");
        // Replace name and entry with array of ids
        when.setAttribute("name", hash[2].name);
        when.setAttribute("id", hash[2].id);
        when.setAttribute("aria-label", hash[2].title);
        when.setAttribute("aria-required", "true");
        when.setAttribute("class", "ss-q-date");
        when.setAttribute("dir", "auto");

      cell2.appendChild(when);

      var text_cells = [cell3, cell4, cell5];

      for (j = 0; j < text_cells.length; j++) {
        var cell = j + 3;
      	var data = document.createElement("input");
      	data.setAttribute("type", "text");
        data.setAttribute("name", hash[cell].name);
        data.setAttribute("id", hash[cell].id);
        data.setAttribute("aria-label", hash[cell].title);
        data.setAttribute("aria-required", "true");
        data.setAttribute("class", "ss-q-short");
        data.setAttribute("dir", "auto");
      	text_cells[j].appendChild(data);
      }
    };


    // For rush, family events, ic events ()
    function addRowSmall(tableName) {
      var table = document.getElementById(tableName);
      
      var hash;
      var row;
      switch(tableName) {
        case "rush_table":
          hash = rushHash;
          row = table.insertRow(++rushRows);
          break;
        case "fam_event_table":
          hash = famEventHash;
          row = table.insertRow(++famEventRows);
          break;
        case "ic_table":
          hash = icEventHash;
          row = table.insertRow(++icEventRows);
          break;
        default:
        //shouldn't happen
          hash = icEventHash;     
      }

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);

      switch(tableName){
        case "rush_table":
          cell1.innerHTML = rushRows;
          break;
        case "fam_event_table":
          cell1.innerHTML = famEventRows;
          break;
        case "ic_table" :
          cell1.innerHTML = icEventRows;
          break;
        default:
          cell1.innerHTML = 0;
      }

      // Date
      var when = document.createElement("input");
        when.setAttribute("type", "date");
        // Replace name and entry with array of ids
        when.setAttribute("name", hash[2].name);
        when.setAttribute("id", hash[2].id);
        when.setAttribute("aria-label", hash[2].title);
        when.setAttribute("aria-required", "true");
        when.setAttribute("class", "ss-q-date");
        when.setAttribute("dir", "auto");

      cell2.appendChild(when);

      var text_cells = [cell3, cell4];

      for (j = 0; j < text_cells.length; j++) {
        var cell = j + 3;
        var data = document.createElement("input");
        data.setAttribute("type", "text");
        data.setAttribute("name", hash[cell].name);
        data.setAttribute("id", hash[cell].id);
        data.setAttribute("aria-label", hash[cell].title);
        data.setAttribute("aria-required", "true");
        data.setAttribute("class", "ss-q-short");
        data.setAttribute("dir", "auto");
        text_cells[j].appendChild(data);
      }

    };

    function loadServiceTable() {
      for (i = 0; i < 5; i++) {
        addRow("service_table");
      }
    }

    function loadFellowshipTable() {
      for (i = 0; i < 4; i++) {
        addRow("fellowship_table");
      }
    }

    function loadRushTable() {
      for (i = 0; i < 2; i++) {
        addRushRow();
      }
    }

    function loadFamilyEventTable() {
      for(i = 0; i < 2; i++) {
        addFamEventRow();
      }
    }

    function loadIcEventTable() {
      for( i = 0; i < 2; i++) {
        addIcEventRow();
      }
    }

    function addFellowshipRow() {
        addRow("fellowship_table");
    }

    function addServiceRow() {
        addRow("service_table");
    }

    function addRushRow() {
      addRowSmall("rush_table");
    }

    function addFamEventRow() {
      addRowSmall("fam_event_table");
    }

    function addIcEventRow() {
      addRowSmall("ic_table");
    }

    window.onload = function() {
      loadServiceTable();
      loadFellowshipTable();
      loadRushTable();
      loadFamilyEventTable();
      loadIcEventTable();
    }