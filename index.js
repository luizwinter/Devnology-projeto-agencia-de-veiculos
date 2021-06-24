//Variaveis gerais
var fields = document.querySelectorAll("#form-purchase [name]");
var fields_sale = document.querySelectorAll("#form-sale [name]");
var vehicle = {};
var sale = {};


//Variaveis para troca de página
var home_page = document.querySelectorAll("#register_entry, #vehicle_list");
var historic_page = document.getElementById("historic_article");


//Variaveis para calculo da comissão
var car_value = 0 ;
var seller_bonus = 0;



// inicio do cadastro de veiculos
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
                          <td class="carvalue">${dataCar.valueb}</td>
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
                          <td class="name_h">---</td>
                          <td>${dataCar.valueb}</td>
                          <td>---</td>
                          <td class="data_h">${dataCar.dateb}</td>
                        </tr>
`
    document.getElementById("historic_list").appendChild(tr);
        
    
}


document.getElementById("form-purchase").addEventListener("submit", function(event){
    
    event.preventDefault();
    
    fields.forEach(function(field, index){
    
    vehicle[field.name] = field.value;
    
});
    addLine(vehicle);
    addLinepurchese(vehicle);
    
    alert("Cadastro de compra realizado")
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


// Registro de vendas

function addLineSale(dataSale){
    
    removeCar(dataSale.chassisale, dataSale.value);

    
    var tr = document.createElement("tr");
    
    
    
    
    tr.innerHTML = `
                        <tr>
                          <td>Venda</td>
                          <td class="name_h">${dataSale.seller}</td>
                          <td>${dataSale.value}</td>
                          <td>${seller_bonus}</td>
                          <td class="data_h" >${dataSale.date}</td>
                        </tr>
`
    document.getElementById("historic_list").appendChild(tr);
    
    
}

// Alteraçao de status do carro

function removeCar(dataChassi, dataValue){
    
    
    let list = document.querySelectorAll(".date-car");


    
    list.forEach(function(list, index){
        

        
       let chassi_field = list.querySelector(".chassi").innerHTML;
       let status_field = list.querySelector(".status");

        if(chassi_field == dataChassi){

            status_field.textContent = "Vendido";
            alert(status_field.textContent);

            // Aproveitamento do codigo para calcular a comissão
            
            car_value =list.querySelector(".carvalue").innerHTML;
            
            let x = dataValue - car_value;
            let y = x * 10 / 100 ;
            seller_bonus = y;
                
        }
        
        
        
        
    });
    
    
        
    };

    


// Filtro do historico

    const searchInput = document.getElementById("search");


    searchInput.addEventListener('keyup', function(event){
        

        const q = event.target.value.toLowerCase();

        document.getElementById("historic_list").querySelectorAll('tr').forEach((row) =>{
            
            
            
            if(q.startsWith("compra") || q.startsWith("venda")){
                
                  row.style.display = "table-row";

                
                 row.querySelector('td').textContent.toLowerCase().startsWith(q) ? null : row.style.display = 'none';
                
                
            }else if(q.substr(5,1) == "/" || q.substr(2,1) == "/" || q >= 1900){
                
                                
                    row.querySelector('td.data_h').innerHTML.includes(q) ? (row.style.display = "table-row") : row.style.display = 'none';
                
            }else{
                
                    row.querySelector('td.name_h').textContent.toLowerCase().startsWith(q)? (row.style.display = "table-row") : row.style.display = 'none';
            
            };
            
                
        
        });
        
        
    });


// Calculo comissão



    document.getElementById("sellvalue").addEventListener('keyup', e=> {
        
        const sl = e.target.value;
        
        
    });



// Home page

    
    document.getElementById("home_btn").addEventListener('click', e=>{
       

        historic_page.style.display = "none";
        
        home_page.forEach(e=>{
            
            e.style.display = "block";
            
        })        
        
    });



// Historic page


    document.getElementById("historic_btn").addEventListener('click', e=>{
           
        historic_page.style.display = "block";
        
        home_page.forEach(e=>{
            
            e.style.display = "none";
            
        })
        
        
    });


//
    
    