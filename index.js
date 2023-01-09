const div = document.querySelector('#vermelho')
document.body.onclick = () => {
   
   if(div.classList[0]=='vermelho'){
       div.classList.remove('vermelho')
       div.classList.add('azul')
       return
   }
   if(div.classList[0]=='azul'){
       div.classList.remove('azul')
       div.classList.add('vermelho')
       return
   }
  
   

 }
  document.addEventListener('click', (e) =>{
   // alert(`${e.screenY}, ${e.screenX}`)
    quadrado = document.createElement('div');
    quadrado.style.backgroundColor  = "#FFA500"
    //quadrado.style.padding ='60px';
    quadrado.style.marginTop = (e.screenY-80)+'px';
    quadrado.style.marginLeft = (e.screenX-20)+'px';
    quadrado.style.position='absolute'
    quadrado.style.height = "50px";
    quadrado.style.width = "50px";
    
    
    div.appendChild(quadrado)
    })

   
  