"use strict";

var financejs = require("financejs");

var stock = require('finance.io');

stock.getInfo("GOOGL");

function Cal_NPV(){
    var initialCost=parseFloat(document.getElementById("d").value);
    var PMT=parseFloat(document.getElementById("e").value);
    var IR=parseInt(document.getElementById("f").value);
    var NP=parseInt(document.getElementById("g"));
    var npv=finance.NPV(IR,initialCost,PMT)
        document.getElementById('NPVFinal').textContent="The PV value is: "+npv;
    }