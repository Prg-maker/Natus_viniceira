
function Sing(){

    let name = document.getElementById('name')
    let password = document.getElementById('password')
    let repeat = document.getElementById('repeat')
    let email = document.getElementById('email')

    

   const validateName = function validate(){
       let erro_name = document.querySelector('#erro-name') 
    
       if(name.value === ""){
        name.classList.add("active")
        name.classList.remove("true")


        





       }else{
        
        name.classList.remove("active")
        name.classList.add("true")

        erro_name.innerHTML = "";
       }

      

    }


   

    const validareEmail = function validate(){

        let erro_email = document.querySelector("#erro-email")

        
        

        if(email.value === ""){
            email.classList.add("active")
            email.classList.remove("true")
            
        
           }else if(email.value === `${email.value}`){
           
                
           
            email.classList.remove("active")
            email.classList.add("true")
            erro_email.innerHTML = ""
            
        
           
        }
        if(email.value <= 10){
            email.classList.add("active")
            email.classList.remove("true")
           }
    }

    const validatePassword = function validate () {

        let erro_password = document.querySelector('#erro-password') 


        if(password.value.length <= 5){


            password.classList.add("active")
            password.classList.remove("true")

            
            
        }else{
            password.classList.remove("active")
            password.classList.add("true")

            erro_password.innerHTML=""
            
            
        }


    }
    

    const validareRepeat = function validate () {
        
        let erro_repeat = document.querySelector("#erro-repeat")
        

        if(repeat.value === password.value){
            /*repeat.classList.remove("active")
            repeat.classList.add("true")*/

            repeat.classList.add("active")
            repeat.classList.remove("true")




           
            if(repeat.value.length <= 5){
                repeat.classList.add("active")
                repeat.classList.remove("true")
            }else{
                repeat.classList.remove("active")
                repeat.classList.add("true")
                erro_repeat.innerHTML=""
            }
        }else{
            repeat.classList.add("active")
            repeat.classList.remove("true")

        }

        
      
        
        
         
           

            
            
    
            
        
           
           
        
    }





    validareEmail()
    validareRepeat()
    validatePassword()
    validateName()

}

/*
*/
