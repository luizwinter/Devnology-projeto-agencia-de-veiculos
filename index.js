var fields = document.querySelectorAll("#form-purchase [name]");
var vehicle = {};


function addLine(dataCar){
    
    var tr = document.createElement("tr");
    
    tr.innerHTML = `
                        <tr>
                          <td>${dataCar.model}</td>
                          <td>${dataCar.brand}</td>
                          <td>${dataCar.plate}</td>
                          <td>${dataCar.color}</td>
                          <td>${dataCar.chassi}</td>
                        </tr>
`
    document.getElementById("table-car-list").appendChild(tr);


}


fields.forEach(function(field, index){
    
    vehicle[field.name] = field.value;
    
});


document.getElementById("form-purchase").addEventListener("submit", function(event){
    
    event.preventDefault();
    
    fields.forEach(function(field, index){
    
    vehicle[field.name] = field.value;
    
});
    addLine(vehicle);
});