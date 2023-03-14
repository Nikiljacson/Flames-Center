const name1=document.querySelector('#name1');
const name2=document.querySelector('#name2');
const result=document.getElementById('box');
const sub=document.getElementById('submit1');
const rst=document.getElementById('rst');
     

init();
function init() {
    sub.addEventListener('click',NameValidation);
    rst.addEventListener('click',resetPage);
}
function resetPage(){
    name1.value="";
    name2.value="";
    result.innerHTML="welcome to flames center";
}





function NameValidation() {
    const nameA=name1.value;
    const nameB=name2.value;
    
    if(nameA=="" || nameB==""){
        alert("Enter any Name");
        return;
    }
    else if(nameA==nameB){
        alert("Enter Different Names");
        return;
    }
   var numCheck1=/[0-9]/.test(nameA);
   var numCheck2=/[0-9]/.test(nameB);
   if(numCheck1 || numCheck2){
    alert("Remove Numbers in Name..!");
        return;
   }
   NameCal();
}   


function NameCal(){
    const nameA=name1.value;
    const nameB=name2.value;
    let capsA=nameA.toUpperCase();
    let capsB=nameB.toUpperCase();
    const arr1=capsA.split("");
    const arr2=capsB.split("");
     
    let uniqueCharsA = [...new Set(arr1)];
    let uniqueCharsB = [...new Set(arr2)];

    let farr1=[];
    for(var i=0;i<uniqueCharsA.length;i++){
        if(uniqueCharsA[i]!=' '){
            farr1.push(uniqueCharsA[i]);
        }
    }
    let farr2=[];
    for(var i=0;i<uniqueCharsB.length;i++){
        if(uniqueCharsB[i]!=' '){
            farr2.push(uniqueCharsB[i]);      
        }                                   
    }            
    const nameArr=farr1.concat(farr2);
    let jointNameArr=[...new Set(nameArr)];
    let nameLength=jointNameArr.length;
    return flamesCal(nameLength);
    
 }
 
 function flamesCal(nameLen){
    var num=nameLen%6;
    var flameSheet=["Friends Forever","You guys are Loving eachother","You guys are very Affectionate","Soon you guys will get Married","Enemies..!","She is your Sister, Dood.!"];
    result.textContent= flameSheet[num];

 }


