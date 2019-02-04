
function getFirstSelector(selector){
 return document.querySelector(selector);
 }

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target");
}

function deepestChild(){
  var lis = document
   .getElementById("grand-node")
   .querySelectorAll("div");
   var test
   for (let i = 0; i < lis.length-1; i++) {
     test = lis[i].querySelector("div");
   }
   return test 
}
