const { mergeSort } = require('./mergeSort.js');

require('./mergeSort.js')

const mainContent= function(){
    let origin=[0,0,0,0,0,0,0,0,0,0];
    let result=[];
    let resultString="Result=[]"

    function generating(){        
        let content=document.getElementById("innerPlace")        
        let contentMessage=document.createElement('div')
        contentMessage.className="message";
        let message=document.createElement('p')
        message.innerText="Please insert elements values of the array to be sortered, then press execute"
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

        //executing button
        let divButton=document.createElement('div')
        divButton.className="divButton";

        let executeButton=document.createElement('button')
        executeButton.className="executeButton";
        executeButton.id="executeButton";
        executeButton.innerText="Execute"
        divButton.appendChild(executeButton);
        content.appendChild(divButton);

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

        let executeButtonL=document.getElementById("executeButton")
        executeButtonL.addEventListener("click",function(){
            result=mergeSort(origin)
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
        })

        for (let d=0;d<10;d++){            
            let inputListener=document.getElementById("arrayElement_"+d);
            inputListener.addEventListener("change",function(){
                 console.log("change");
                console.log(inputListener.value)
                if (isNaN(inputListener.value)){
                    inputListener.value=0
                    window.alert("only works with numbers!")
                }
                origin[d]=parseInt(inputListener.value)
            })
        }
        
        return content;
    }

    return {
        generating,
        result
    }
}

module.exports={mainContent};