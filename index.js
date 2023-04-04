// fecth data from sever 

                                                                       //makes sure that Dom loads before anything else
document.querySelector('form').addEventListener("submit",handleSubmit) // prevent the web page to reload when pressed submit


function handleSubmit(e){                                              // write a fnction that creates a new oject  - uses .taget and the event
    e.preventDefault()
    let computerObj = {
        part: e.target.part.value,
        price: e.target.price.value,   
        year: e.target.year.value,
        
    }
    renderComputerPart(computerObj)
    postComputers(computerObj)

}
console.log(handleSubmit)


function renderComputerPart (computer){                             //write a function that handles the submision of infromation 

    let item = document.createElement("li")
    item.className ="item"
    item.innerHTML =`
    <div class ="content">
        
            <h3>${computer.part}</h3>
            <p> ${computer.year}</P>
            <p>$${computer.price}</P>
    </div>

        <div class='buttons'>
            <button id='Remove-item'>x</button>
        </div>`
    
//console.log (item)
    // POST TO DOM
document.querySelector("#Computer-parts-list").appendChild(item)
     // removes item from the DOM
item.querySelector('#Remove-item').addEventListener ("click", () => {
    item.remove()
    removeSubmit(computer.id)


console.log("click")  
})



}

function getComputers(){
    fetch( " http://localhost:3000/Computer")
    .then (res => res.json())                                    // use a fetch to retrive the data from the sever 
    .then (computerData =>computerData.forEach(computer =>  renderComputerPart (computer))) 
}

function postComputers(computerObj){                           //make a function that handels the post request 

    fetch(" http://localhost:3000/Computer",{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(computerObj)
    })
    .then(res => res.json())
    .then (postComputers => console.log(postComputers))
}


function removeSubmit (id){                                 // make  a function that removes the objects from the sever 
    
    fetch(`http://localhost:3000/Computer/${id}`,{
        method: `DELETE`,
        headers:{
            'content-type': 'application/json'
        }
    })

.then(res=> res.json())
.then (computer=> console.log(computer))
alert("Are you sure you want to Remove this item?")      //add alert to make sure its something ypu want to do

}

document.querySelector('form').addEventListener("mouseover", ()=>{ // an event lister that counts the mouseover 
    console.log("mouseover")
})
    

// take information from web page and send post it to the sever 

// render imformation to the dom 
function initzile (){
   // computerData.forEach(computer =>  renderComputerPart (computer));
   getComputers()
}
initzile()



