class VehicleController{
    
    constructor(){
        this.onSubmit();
        this.alert();
        
    }
    
    
    alert(){
        alert("12323");
    }
    
    onSubmit(){
        
        document.querySelector("#form-sale").addEventListener("submit", e=>{
            
            console.log("teste");
            
        })
                    
    }
    
    
    
}