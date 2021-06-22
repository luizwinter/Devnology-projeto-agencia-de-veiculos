var fields = document.querySelectorAll("#form-purchase [name]");
var fields_sale = document.querySelectorAll("#form-sale [name]");
var vehicle = {};
var sale = {};


// fim das  variaveis


// inicio do cadastramento de veiculos
function addLine(dataCar){
        
    var tr = document.createElement("tr");
    
    
            
    tr.innerHTML = `
                        <tr>
                          <td>${dataCar.model}</td>
                          <td>${dataCar.brand}</td>
                          <td>${dataCar.year}</td>
                          <td>${dataCar.plate}</td>
                          <td>${dataCar.color}</td>
                          <td class="chassi">${dataCar.chassi}</td>
                          <td>${dataCar.dateb}</td>
                          <td>${dataCar.valueb}</td>
                          <td class="status">Disponível</td>

                        </tr>
`
    document.getElementById("car-list").appendChild(tr).className = "date-car";
    

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
                          <td class="historic_date" >${dataSale.date}</td>

                        </tr>
`
    document.getElementById("table-sale-list").appendChild(tr);
    
    removeCar(dataSale.chassisale);
    

}

//fim do cadastro de vendas

function removeCar(dataChassi){
    
    
    let list = document.querySelectorAll(".date-car");


    
    list.forEach(function(list, index){
        
        
       let chassi_field = list.querySelector(".chassi").innerHTML;
       let status_field = list.querySelector(".status");

        if(chassi_field == dataChassi){

            status_field.textContent = "Vendido";
            alert(status_field.textContent);
        
        }
        
    });
    
    
        
    };

    




    const searchInput = document.getElementById("search");
    const rows = document.getElementById("historic_list").querySelectorAll('tr')


    searchInput.addEventListener('keyup', function(event){
        

        const q = event.target.value.toLowerCase();

        rows.forEach((row) =>{
            
            if(isNaN(q)){
                
                row.querySelector('td').textContent.toLowerCase().startsWith(q) ? (row.style.display = "table-row") : row.style.display = 'none';
                
                
                
            }else{
                
                row.querySelector('td.data_h').innerHTML.includes(q) ? (row.style.display = "table-row") : row.style.display = 'none';
                
            }
            

            
            
        
        });
        
        
    });
    
    
    
//