const magics=document.querySelectorAll('.magic');
const body=document.querySelector('body');
magics.forEach(function(magic){
    magic.addEventListener('click',function(e){
        if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
       
    })
    
})

