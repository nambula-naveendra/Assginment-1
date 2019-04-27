document.getElementById("rupee").style.backgroundColor="#5588a3";
document.getElementById("USD").style.backgroundColor="#E8E8E8";
document.getElementById('rupee').addEventListener('click',function(){
  var arr1 = document.getElementsByClassName('required');
  for(var i=0;i<arr1.length;i++)
  {
    arr1[i].textContent = Math.round(arr1[i].textContent*67.462);    
  }
  document.getElementById("currency-type").textContent = "Currency is in Rupee";
  document.getElementById("rupee").disabled=true;   
  document.getElementById("USD").disabled=false;
  document.getElementById("rupee").style.backgroundColor="#5588a3";
  document.getElementById("USD").style.backgroundColor="#E8E8E8";
  console.log(arr1[0].textContent); 
  
});

document.getElementById('USD').addEventListener('click',function(){
  var arr2 = document.getElementsByClassName('required');
  //console.log(arr2[0].textContent);
  for(var i=0;i<arr2.length;i++)
  {
    arr2[i].textContent = Math.round(arr2[i].textContent*0.014823238);
  }
  document.getElementById("currency-type").textContent = "Currency is in USD";
  document.getElementById("USD").disabled=true;  
  document.getElementById("rupee").disabled=false;
  document.getElementById("rupee").style.backgroundColor="#E8E8E8";
  document.getElementById("USD").style.backgroundColor="#5588A3";
  
});