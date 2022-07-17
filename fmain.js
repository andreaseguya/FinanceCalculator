import { Finance } from 'financejs'
let finance = new Finance();

function Cal_NPV(){
    var initialCost=parseFloat(document.getElementById("d").value);
    var rate=parseFloat(document.getElementById("e").value);
    var years=parseInt(document.getElementById("f").value);
    
    var npv=finance.NPV(rate,initialCost,years)
        document.getElementById('NPVFinal').textContent="The PV value is: "+npv;
    }