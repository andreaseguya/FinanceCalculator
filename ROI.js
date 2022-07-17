function ROI(cost,profit){

   var ROI= (profit - cost) / cost * 100;
   return ROI;
    
    }
    function getROI(){
    var cost=parseFloat(document.getElementById("cost").value);
    var profit=parseFloat(document.getElementById("profit").value);
  //  var num=parseInt(document.getElementById("c").value);
    var rvalue=ROI(cost,profit);
    var ROI=rvalue.toFixed(2);
    document.getElementById('ROIans').textContent="The ROI is: "+ROI;
    }