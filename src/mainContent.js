require('./mergeSort.js')

const mainContent= function(){
    let data;

    function generating(){
        console.log("here")
        let content=document.getElementById("innerPlace")        
        let contentMessage=document.createElement('div')
        contentMessage.className="message";
        let message=document.createElement('p')
        message.innerText="Please insert elements of the array, then press execute"
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





        
        return content;
    }

    return {
        generating,
        data
    }
}

module.exports={mainContent};