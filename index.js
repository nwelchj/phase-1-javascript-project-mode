
document.querySelector('form').addEventListener("submit",handleSubmit) 

function handleSubmit(e){                                              
    e.preventDefault()
    let computerObj = {
        part: e.target.part.value,
        price: e.target.price.value,   
        year: e.target.year.value,
        
    }
    
    postComputers(computerObj)}

function renderComputerPart (computer){            
   
    let item = document.createElement("li")

    item.className ="item"
    item.innerHTML =`
    <div class ="content">
        <h3>${computer.part}</h3>
            <p href="#">Year:${computer.year}</p>
            <p href="#">$${computer.price}</p>
            </div>
        </div>
    </div>
        
    </div>
        <div class='buttons'>
            <button id='Remove-item' class="button"> x</button>
        </div>`
    

document.querySelector("#Computer-parts-list").appendChild(item)
     
item.querySelector('#Remove-item').addEventListener ("click", () => {
    item.remove()
    removeSubmit(computer.id)
    

console.log("click")  

        
})}

function getComputers(){

    fetch( " http://localhost:3000/Computer")
    .then (res => res.json())                                    
    .then (computerData =>computerData.forEach(computer =>  renderComputerPart (computer))) 
}
function postComputers(computerObj){                        

    fetch(" http://localhost:3000/Computer",{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(computerObj)
    })
    .then(res => res.json())
    .then (newpartObj => renderComputerPart(newpartObj))
}


function removeSubmit (id){                          
    
    fetch(`http://localhost:3000/Computer/${id}`,{
        method: `DELETE`,
        headers:{
            'content-type': 'application/json'
        }
    })

.then(res=> res.json())
.then (computer=> console.log(computer))
alert("Are you sure you want to Remove this item?")     

}

let modeSwitch = document.getElementById('modeSwitch');
modeSwitch.addEventListener('change', function() {
   
    if (this.checked) {
        document.body.classList.add('dark-mode'); 
    } else {
        document.body.classList.remove('dark-mode'); 
    }
});

function initzile (){
   
   getComputers()
}
initzile()