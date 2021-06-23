var fields = document.querySelectorAll("#form-purchase [name]");
var fields_sale = document.querySelectorAll("#form-sale [name]");
var vehicle = {};
var sale = {};

var home_page = document.querySelectorAll("#register_entry, #vehicle_list");
var historic_page = document.getElementById("historic_article");


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
                          <td class="name_h">${dataSale.seller}</td>
                          <td>${dataSale.value}</td>
                          <td>${dataSale.bonus}</td>
                          <td class="data_h" >${dataSale.date}</td>
                        </tr>
`
    document.getElementById("historic_list").appendChild(tr);
    
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


    searchInput.addEventListener('keyup', function(event){
        

        const q = event.target.value.toLowerCase();

        document.getElementById("historic_list").querySelectorAll('tr').forEach((row) =>{
            
            
            
            if(q.startsWith("compra") || q.startsWith("venda")){
                
                   console.log("pesquisar por compra/venda");
                  row.style.display = "table-row";

                
                 row.querySelector('td').textContent.toLowerCase().startsWith(q) ? null : row.style.display = 'none';
                
                
            }else if(q.substr(5,1) == "/" || q.substr(2,1) == "/" || q >= 1900){
                
                
                    row.querySelector('td.data_h').innerHTML.includes(q) ? (row.style.display = "table-row") : row.style.display = 'none';
                
            }else{
                
                    row.querySelector('td.name_h').textContent.toLowerCase().startsWith(q)? (row.style.display = "table-row") : row.style.display = 'none';
            
            };
            
                
        
        });
        
        
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
    
    
    
//