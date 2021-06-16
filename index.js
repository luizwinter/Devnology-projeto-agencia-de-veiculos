var fields = document.querySelectorAll("#form-purchase [name]");
var vehicle = {};

fields.forEach(function(field, index){
    
    vehicle[field.name] = field.value;
    
});


document.getElementById("form-purchase").addEventListener("submit", function(event){
    
    event.preventDefault();
    
    fields.forEach(function(field, index){
    
    vehicle[field.name] = field.value;
    
});
    console.log(vehicle);
});