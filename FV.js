function FV(PV,i,n){
    var x=(1+i/100)
    var FV=PV*(Math.pow(x,n))
    return FV;
    }
    function PV(PMT, IR, NP) {
        var PV = PMT * (1 - Math.pow(1 + IR, -NP)) / IR
  
        return PV;
    }
    function NPV(Cost, PMT, IR, NP = 1) {
        return Math.abs(Cost - this.PV(PMT, IR, NP));
    }
    function getNPV(rate, initialCost, cashFlows) {
        var npv = initialCost;
      
        for (var i = 0; i < cashFlows.length; i++) {
          npv += cashFlows[i] / Math.pow(rate / 100 + 1, i + 1);
        }
      
        return npv;
      }
    function Cal_FV(){
    var pvalue=parseFloat(document.getElementById("a").value);
    var interest=parseFloat(document.getElementById("b").value);
    var num=parseInt(document.getElementById("c").value);
    var fvalue=FV(pvalue, interest, num);
    var fv=fvalue.toFixed(2);
    document.getElementById('ans').textContent="The future value is: "+fv;
    }

   

       