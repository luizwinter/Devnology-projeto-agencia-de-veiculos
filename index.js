var fields = document.querySelectorAll("#form-purchase [name]");
var fields_sale = document.querySelectorAll("#form-sale [name]");
var vehicle = {};
var sale = {};


// fim das  variaveis


// inicio do cadastramento de veiculos
function addLine(dataCar){
        
    var tr = document.createElement("tr");
            
    tr.innerHTML = `
                        <tr class="carlist">
                          <td>${dataCar.model}</td>
                          <td>${dataCar.brand}</td>
                          <td>${dataCar.year}</td>
                          <td>${dataCar.plate}</td>
                          <td>${dataCar.color}</td>
                          <td class="car_id">${dataCar.chassi}</td>
                          <td>${dataCar.dateb}</td>
                          <td>${dataCar.valueb}</td>
                          <td>Disponível</td>

                        </tr>
`
    document.getElementById("table-car-list").appendChild(tr);
    

}


function addLinepurchese(dataCar){
    
        var tr = document.createElement("tr");
    
        tr.innerHTML = `
                        <tr>
                          <td>Compra</td>
                          <td>---</td>
                          <td>${dataCar.valueb}</td>
                          <td>---</td>
                          <td>${dataCar.dateb}</td>

                        </tr>
`
    document.getElementById("table-sale-list").appendChild(tr);
        
    
}


document.getElementById("form-purchase").addEventListener("submit", function(event){
    
    event.preventDefault();
    
    fields.forEach(function(field, index){
    
    vehicle[field.name] = field.value;
    
});
    addLine(vehicle);
    addLinepurchese(vehicle);
});

// fim do cadastramento de veiculos

// Preciso criar um metodo para as duas funcionalidades. por enquanto vou repetir.


//incio do cadastro de vendas

document.getElementById("form-sale").addEventListener("submit", function(event){
    
    event.preventDefault();
    
fields_sale.forEach(function(field, index){
    
    sale[field.name] = field.value;
    
});
    addLineSale(sale);
});




function addLineSale(dataSale){
    
    var tr = document.createElement("tr");
    
    tr.innerHTML = `
                        <tr>
                          <td>Venda</td>
                          <td>${dataSale.seller}</td>
                          <td>${dataSale.value}</td>
                          <td>${dataSale.bonus}</td>
                          <td>${dataSale.date}</td>

                        </tr>
`
    document.getElementById("table-sale-list").appendChild(tr);
    
    removeCar(dataSale.chassisale);


}

//fim do cadastro de vendas

function removeCar(dataChassi){
    

    var list = document.getElementById("car-list").querySelectorAll(".car_id");
    
    console.log(list);
    
}

 
//