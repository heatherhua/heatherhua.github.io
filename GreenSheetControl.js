    var serviceRows = 0;
    var fellowshipRows = 0;
    var fundraisingRows = 0;
    var rushRows = 0;
    var famEventRows = 0;
    var icEventRows = 0;
    var chairRows = 0;
    var makeUpRows = 0;

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
    
    var makeUpHash = {
      2 : {
        "name" : "entry.1361134239",
        "id" : "entry_1361134239" ,
        "title" : "Dates"
      },
      3 : {
        "name" : "entry.2018420655",
        "id" : "entry_2018420655" ,
        "title" : "Make Up Events"
      },
      4 : {
        "name" : "entry.2021743540",
        "id" : "entry_2021743540" ,
        "title" : "Chairs"
      }
    }
    
    var fundraisingHash = {
      2 : {
        "name" : "entry.996818722",
        "id" : "entry_996818722" ,
        "title" : "Fundraising Dates"
      },
      3 : {
        "name" : "entry.1411973316",
        "id" : "entry_1411973316" ,
        "title" : "Fundraising Events"
      },
      4 : {
        "name" : "entry.1806781626",
        "id" : "entry_1806781626" ,
        "title" : "Fundraising Credits"
      },
      5 : {
        "name" : "entry.1533769780",
        "id" : "entry_1533769780",
        "title" : "Fundraising Chairs" 
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
        case "fundraising_table":
        	hash = fundraisingHash;
        	row = table.insertRow(++fundraisingRows);
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
        case "fundraising_table":
        	cell1.innerHTML = fundraisingRows;
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


    // For rush, family events, ic events, makeup events
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
        case "makeup_table":
        	hash = makeUpHash;
        	row = table.insertRow(++makeUpRows);
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
        case "makeup_table" :
          cell1.innerHTML = makeUpRows;
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
    
    function addChairedEventRow() {
      var table = document.getElementById("chair_table");
      
      var row = table.insertRow(++chairRows);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      
      cell1.innerHTML = chairRows;

      // Date
      var when = document.createElement("input");
        when.setAttribute("type", "date");
        // Replace name and entry with array of ids
        when.setAttribute("name", "entry.1770132735");
        when.setAttribute("id", "entry_1770132735");
        when.setAttribute("aria-label", "Chair Event Dates");
        when.setAttribute("aria-required", "true");
        when.setAttribute("class", "ss-q-date");
        when.setAttribute("dir", "auto");

      cell2.appendChild(when);

        var data = document.createElement("input");
        data.setAttribute("type", "text");
        data.setAttribute("name", "entry.681174354");
        data.setAttribute("id", "entry_681174354");
        data.setAttribute("aria-label", "Chaired Events");
        data.setAttribute("aria-required", "true");
        data.setAttribute("class", "ss-q-short");
        data.setAttribute("dir", "auto");
        cell3.appendChild(data);
    }

    function loadChairTable() {
    	for(i = 0; i < 4; i++) {
    		addChairedEventRow();
    	}
    }
    
    function loadServiceTable() {
      for (i = 0; i < 7; i++) {
        addRow("service_table");
      }
    }

    function loadFellowshipTable() {
      for (i = 0; i < 7; i++) {
        addRow("fellowship_table");
      }
    }
    
    function loadMakeUpTable(type) {
    	
    	for(i = makeUpRows; i > 0; i--){
    		document.getElementById("makeup_table").deleteRow(i);
    	}
    	 
    	makeUpRows = 0;
    	if(type == '2ICs'){
    		for(i = 0; i < 2; i++){
    			addRowSmall("makeup_table");
    		}
    	} else {
    		for(i = 0; i < 3; i++){
    			addRowSmall("makeup_table");
    		}
    	}
    	
    }
    
    function loadFundraisingTable() {
    	for(i = 0; i < 4; i++) {
    		addFundraisingRow();
    	}
    }

    function loadRushTable() {
      for (i = 0; i < 4; i++) {
        addRushRow();
      }
    }

    function loadFamilyEventTable() {
      for(i = 0; i < 4; i++) {
        addFamEventRow();
      }
    }

    function loadIcEventTable() {
      for( i = 0; i < 5; i++) {
        addIcEventRow();
      }
    }

    function addFellowshipRow() {
        addRow("fellowship_table");
    }

    function addServiceRow() {
        addRow("service_table");
    }
    
    function addFundraisingRow() {
    	addRow("fundraising_table");
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
    
    function yesnoCheck() {
    	var standing = document.getElementById("entry_1693608535");
    	var selectedStanding = standing.options[standing.selectedIndex].value;
        if (selectedStanding == "MakeUps") {

            document.getElementById('ifYes').style.display = 'block';
            document.getElementById('ifYesHeading').style.display = 'block';
            document.getElementById('makeup_table').style.display = 'block';

            loadMakeUpTable();
        }
        else {
        	document.getElementById('ifYes').style.display = 'none';
            document.getElementById('ifYesHeading').style.display = 'none';
            document.getElementById('makeup_table').style.display = 'none';
        }
    }
    
    function makeupCheck() {
    	var makeup = document.getElementById("entry_488659576");
    	var selectedMakeup = makeup.options[makeup.selectedIndex].value;
    	loadMakeUpTable(selectedMakeup);
    }

    
    window.onload = function() {
      loadServiceTable();
      loadFellowshipTable();
      loadRushTable();
      loadFamilyEventTable();
      loadIcEventTable();
      loadChairTable();
      loadFundraisingTable();
    }