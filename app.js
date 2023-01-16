const { hash }=window.location
const message=(atob(hash.replace('#','')))
if(message){
    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#show-message').classList.remove('hide')

    document.querySelector('h1').innerHTML=message
}


document.querySelector('#form').addEventListener('submit',(event)=>{
event.preventDefault();
document.querySelector('#message-form').classList.add('hide')
document.querySelector('#link-form').classList.remove('hide')
const input=document.querySelector('#message-input');
const res=btoa(input.value);
// console.log(input.value)
// console.log(`${window.location}#${res}`)
//console.log(input.value)
const linkinput= document.querySelector('#link-input')
linkinput.value=`${window.location}#${res}`
linkinput.select()
})
   