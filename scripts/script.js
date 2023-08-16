let done = document.getElementsByClassName('done');
let list = document.getElementsByClassName('get-title')[0];
let input=document.getElementById('title');
const tbody = document.querySelector('tbody');
let actions=document.getElementsByClassName('action')[0];
let btn=document.getElementsByClassName('btn')[0];
let notification=document.getElementsByClassName('notification')[0];
let notMessage=document.getElementsByClassName('not-message')[0];
let close=document.getElementsByClassName('close')[0];
const listAdded=document.getElementsByClassName('list-added')[0];
btn.addEventListener('click',()=>{
    
    if(input.value==''){
        notification.style.display="block";
        notMessage.innerHTML="Enter something,You can't leave title empty"
        close.addEventListener('click',()=> notification.style.display="none")
    }
    else{
        const newRow = document.createElement('li');
        const newdel=document.createElement('h3');
        // newdiv.classList.add("small-col action");
        newRow.innerHTML=input.value;
        newdel.innerHTML='<i class="fa-solid fa-trash"></i>';
        list.appendChild(newRow);
        actions.appendChild(newdel);
        newdel.addEventListener('click',()=>{
            newRow.remove();
            newdel.remove();
        })
    }
    input.value="";
    })
    
    
    

    



// for(let i=0;i<done.length;i++) {
//     let listHTML=list.innerHTML;
//     done[i].addEventListener('click', () => {
//         // console.log("clicked")

//         if (done[i].innerHTML == '<i class="fa-regular fa-square-check"></i>') {
//             done[i].innerHTML = '<i class="fa-solid fa-square-check"></i>';
//             list.style.textDecorationLine = "line-through";
            
//             setTimeout(() => {    
//                 list.style.textDecoration = "none";
//                 list.innerHTML = '<i>Glad!you did this</i> <i class="fa-solid fa-check"></i> ';

//             }, 1000)
//         }
//         else {
//             done[i].innerHTML = '<i class="fa-regular fa-square-check"></i>';
//             DisplayMessage=(message,callback)=>{
//                 setTimeout(()=>{
//                     list.innerHTML=message;

//                 },500)
                
//             }
//             restoreHTML=()=>{
//                 setTimeout(() => {
//                     list.innerHTML=listHTML;
//                 }, 2000);
//             }
            
//             DisplayMessage('Awww! Don\'t worry, You can do it <i class="fa-regular fa-face-smile"></i>', restoreHTML());
            
            
            
//         }
//     })

// };