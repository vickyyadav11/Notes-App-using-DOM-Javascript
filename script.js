const rightSide = document.querySelector('.right')
const addButton = document.querySelector('#btnSubmit');
var task = document.querySelector('.task')
var notes=[];
addButton.addEventListener('click',
function(e){
    e.preventDefault();
    addNote();
    
})
const addNote = ()=>{
    var inputValue = document.querySelector('#title').value;
    if(!inputValue)return;
    var  inputDetail = document.querySelector('#description').value;
     if(!inputDetail) return;
     notes.push({
        title:inputValue,
        detail:inputDetail,
    
     })
     document.querySelector('#title').value = "";
     document.querySelector('#description').value=""
   
     render();
}
const render = ()=>{
     task.innerHTML = null;
     console.log(notes)
    for(let i=0;i<notes.length;i++)
    {
    const div = document.createElement('div');
    const title = document.createElement('h3');
    title.innerText = notes[i].title;
    
    const detail = document.createElement('p');
    detail.innerText  = notes[i].detail;
 
    const delButton = document.createElement('button')
    delButton.innerText = "X";
    delButton.addEventListener("click",function(e){
        notes.splice(i,1)
        render();

    })
    
    div.appendChild(title);
    title.id="noteTitle"
   
    div.appendChild(detail)
    detail.id="noteDetail"
    
    div.appendChild(delButton)
    delButton.id="delButton";
    task.appendChild(div);
    div.className ="note"
   
     }
}