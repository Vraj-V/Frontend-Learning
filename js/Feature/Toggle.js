const toggle = true;

const darkMode =()=>{
  
    body.document.style.backgroundColor = 'black',
    body.document.style.Color = 'white',
     body.document.style.fontWeight ='600' 
  }
  
const whiteMode =()=>{
    body.document.style.backgroundColor = 'white',
    body.document.style.Color = 'black',
     body.document.style.fontWeight ='600'
}

let btn = document.querySelector(".btn-toggle");
btn.addEventListener("click",function (){
  
  if(toggle ==='true;){
     darkMode();
     }else{
      whiteMode();
}
})
