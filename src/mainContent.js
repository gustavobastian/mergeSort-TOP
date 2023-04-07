const { mergeSort } = require('./mergeSort.js');
const { fibonacci } = require('./fibonacci.js');



const mainContent= function(){
    let origin=[0,0,0,0,0,0,0,0,0,0];
    let result=[];
    let resultString="Result=[]"
    let fibonacciInput=0;

    function generating(){  
              
        let content=document.getElementById("innerPlace")        

        let contentMessageFibo=document.createElement('div')
        contentMessageFibo.className="message";
        let messageFibo=document.createElement('p')
        messageFibo.innerText="Please insert Number for get the fibonacci value"
        contentMessageFibo.appendChild(messageFibo);
        content.appendChild(contentMessageFibo);

        let FiboElement=document.createElement('input')
        FiboElement.className="arrayElement";
        FiboElement.type="text";
        FiboElement.id="fiboNumber";
        FiboElement.value=0;
        content.appendChild(FiboElement);
        //executing button
        let divFiboButton=document.createElement('div')
        divFiboButton.className="divButton";

        let executeFiboButton=document.createElement('button')
        executeFiboButton.className="executeButton";
        executeFiboButton.id="executeFiboButton";
        executeFiboButton.innerText="Fibonacci"
        divFiboButton.appendChild(executeFiboButton);
        content.appendChild(divFiboButton);

        //Fibonacci result content

        let fiboResultbox=document.createElement('div')
        fiboResultbox.className="resultbox";

        let fiboResultText=document.createElement('div')
        fiboResultText.className="resultText";
        fiboResultText.id="fiboResultText";
        fiboResultText.innerText="Result = ";
        fiboResultbox.appendChild(fiboResultText);
        content.appendChild(fiboResultbox);


        let contentMessage=document.createElement('div')
        contentMessage.className="message";
        let message=document.createElement('p')
        message.innerText="Please insert elements values of the array, will be sorted automatically"
        contentMessage.appendChild(message);
        content.appendChild(contentMessage);

        //array elements
        let gridElements=document.createElement('div')
        gridElements.nameClass="gridElements";
        gridElements.id="gridElements";
        for (let i=0;i<10;i++)
        {
            let arrayElement=document.createElement('input')
            arrayElement.className="arrayElement";
            arrayElement.type="text";
            arrayElement.id="arrayElement_"+i;
            arrayElement.value=0;
            gridElements.appendChild(arrayElement)
        }
        content.appendChild(gridElements);

        

        //result content

        let resultbox=document.createElement('div')
        resultbox.className="resultbox";

        let resultText=document.createElement('div')
        resultText.className="resultText";
        resultText.id="resultText";
        resultText.innerText=resultString;
        resultbox.appendChild(resultText);
        content.appendChild(resultbox);



        /*****adding listeners*/


        //fibonacci
        let executeFiboButtonL=document.getElementById("executeFiboButton")
        executeFiboButtonL.addEventListener("click",function(){
            console.log("input "+fibonacciInput)
            let resultFibo=fibonacci(fibonacciInput);
            console.log(resultFibo);
            let resultElement=document.getElementById("fiboResultText");
            resultElement.innerText="Result:"+parseInt(resultFibo);
        })

        let inputListenerFibo=document.getElementById("fiboNumber");
        inputListenerFibo.addEventListener("change",function(){
            console.log("change");
            console.log(inputListenerFibo.value)
            if (isNaN(inputListenerFibo.value)){
                inputListenerFibo.value=0
                window.alert("only works with numbers!")
            }
            fibonacciInput = parseInt(inputListenerFibo.value)
            inputListenerFibo.value=parseInt(inputListenerFibo.value);
        })    


        //merge
        

        for (let d=0;d<10;d++){            
            let inputListener=document.getElementById("arrayElement_"+d);
            inputListener.addEventListener("change",async function(){
                console.log("change");
                console.log(inputListener.value)
                if (isNaN(inputListener.value)){
                    inputListener.value=0
                    window.alert("only works with numbers!")
                    return;
                }
                console.log("position "+d)
                origin[d]= parseInt(inputListener.value)
                inputListener.value=  parseInt(inputListener.value);
                console.log("origin "+origin)
                execute();
            })
        }

        async function execute(){
            let originLocal=[];
            origin.forEach(element => {
                originLocal.push(element)
            });
            console.log("origin:"+origin)
            result=await mergeSort(originLocal)
            console.log(result)
            resultString="[";
            let index=0;
            result.forEach(element => {
                if(index!=9)
                    resultString+=element+",";
                else    
                    resultString+=element;
                
                index++;    
            });
            resultString+="]"
            let resultElement=document.getElementById("resultText");
            resultElement.innerText=resultString;
        }
        
        return content;
    }

    return {
        generating,
        result
    }
}

module.exports={mainContent};