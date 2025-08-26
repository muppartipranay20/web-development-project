const buttonsE1 =Document.querySelectorAll("button");
for(let i =0;i<buttonsE1.length;i++){
    buttonsE1[i].addEventListener("click",()=>{
         const buttonValue =buttonsE1[i].textContent;
        if(buttonValue==='c'){
            ClearResult()
        }else if(buttonValue==="="){
            calculateResult()
        }else{
            appendValue(buttonValue);
        }
        
    });

}
function ClearResult(){}
function calculateResult(){
    inputField1.value += eval(2*5)
}


function appendValue(buttonValue){
    inputField1.value+=buttonValue;

}