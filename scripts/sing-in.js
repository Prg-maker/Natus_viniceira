const filds = document.querySelectorAll("[required]")


function validateFild(fild) {
    function verifyErros(){
        let foundErros = false;

        for (let erro in fild.validity){
            // se nao for custError
            // entao verifica se tem erro
            if(fild.validity[erro] && !fild.validity.valid){
                foundErros = erro 
            }
        }

        return foundErros;
    }

    console.log(fild.validity)

    function customMessage(typeError){
        const messages = {
            

            text:{
                valueMissing:"Por favor, Preecha esse campo"
            },
            email:{
                valueMissing:"Email é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            } 
            
        }



        return messages[typeError]
    }


    function setCustomMessage(message){
        const spanErro = fild.parentNode.querySelector("span.erro")



        if(message){
            
            spanErro.classList.add("active")
            spanErro.innerHTML = message

        }else{

            spanErro.classList.remove("active")
            spanErro.innerHTML = ""
    

        }
    }

    return function(){

        const erro = verifyErros();


        if(erro){

            const message = customMessage(erro);

            fild.style.borderColor = "red" 
            
            setCustomMessage(message)
        
        }else{
            fild.style.borderColor = "green" 

            
            setCustomMessage()
        }

    }

}


function customValitade(event){





    
    const fild = event.target
    const validate = validateFild(fild)


    validate()
    

    ///logica para verificar se há erros 
    


    
    


    
    


     
}

for ( fild of filds){
    fild.addEventListener("invalid", event =>{


         // elimiinar o bubble
        
         event.preventDefault()
        customValitade(event)
       

    })
    fild.addEventListener("blur", customValitade)
}


















document.querySelector("form")
.addEventListener("submit", event =>{
    console.log("enviar o formulario")


    //nao vai enviar o formulario
    event.preventDefault()
})

