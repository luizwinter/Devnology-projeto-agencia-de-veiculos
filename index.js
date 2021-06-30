//Variaveis gerais
var fields = document.querySelectorAll("#form-purchase [name]");
var fields_sale = document.querySelectorAll("#form-sale [name]");
var vehicle = {};
var sale = {};


//Variaveis para troca de página

var home_page = document.getElementById("register_entry");
var historic_page = document.getElementById("historic_article");
var vehicle_page = document.getElementById("vehicle_list");



//Variaveis para calculo da comissão
var car_value = 0 ;
var seller_bonus = 0;

// Variaveis de calculo
var display_value = 0;
var display_bonus = 0;


// inicio do cadastro de veiculos
function addLine(dataCar){
        
    var tr = document.createElement("tr");
    
    
            
    tr.innerHTML = `
                        <tr>
                          <td>${dataCar.model.toUpperCase()}</td>
                          <td>${dataCar.brand.toUpperCase()}</td>
                          <td>${dataCar.year}</td>
                          <td>${dataCar.plate.toUpperCase()}</td>
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
                          <td class="type_h">Compra</td>
                          <td class="name_h">---</td>
                          <td class="value_h">${dataCar.valueb}</td>
                          <td class="bonus_h">0</td>
                          <td class="data_h">${dataCar.dateb}</td>
                        </tr>
`
    document.getElementById("historic_list").appendChild(tr);
        
    
}

// Registro de compra e validação do campo

document.getElementById("form-purchase").addEventListener("submit", function(event){
    
    let continue_register = 0;
    
    event.preventDefault();
    
    fields.forEach(function(field, index){

        if(field.value == "" || field.value.includes(" ") || field.value.length < 3 ){
                    
            if(field.type == "text" ){
                
            field.value = "Valor Invalido";

                
            }else {
                
                 field.value = "00000";

                
            };
                        
                       
           continue_register = 1;

                                   
           }else{
                   vehicle[field.name] = field.value;
           };    
            
});
    
    
    if(continue_register > 0)
        
        {
            alert('Registro de compra incompleto');
            
        } else {
            
            addLine(vehicle);
            addLinepurchese(vehicle);
        
            document.getElementById("form-purchase").reset();


        };
    

});


// Preciso criar um metodo para as duas funcionalidades. por enquanto vou repetir.


//incio do cadastro de vendas // validação

document.getElementById("form-sale").addEventListener("submit", function(event){
    
    let continue_register = 0;
    let continue_register2 = 0;
    

    event.preventDefault();
    
fields_sale.forEach(function(field, index){
    
    if(field.value == "" || field.value.length < 3 || field.value == "00000"){
        
        if(field.type == "text" ){
                
            field.value = "Valor Invalido";

                
            }else {
                
                 field.value = "00000";

                
            };
        
        
                       continue_register = 1;
        
        };
    
                     sale[field.name] = field.value;

    
});
    
    if(continue_register > 0){
            
        
        alert("Registro de venda incompleto");
    }else{
        
                let chassi_compare = document.querySelector('[name="chassisale"]').value;
                    
                    document.getElementById("table-car-list").querySelectorAll('.chassi').forEach(e => {
                        
                       //console.log(e.innerHTML);                 
                        //console.log(chassi_compare);
                        
                        if(e.innerHTML == chassi_compare){
                                                        
                            addLineSale(sale);
                    
                            document.getElementById("form-sale").reset();
                            
                            continue_register2 = 1;
                            
                            console.log(continue_register2);
                        
                            
                        }else{
                            
                            continue_register = 2;
                    
                        };
                        
                    });
                    
    };
    
            if(continue_register == 2 && continue_register2 != 1){
                
                alert("Chassi não encontrado");
            };
    
    
});


// Registro de vendas

function addLineSale(dataSale){
    
    removeCar(dataSale.chassisale, dataSale.value);

    
    var tr = document.createElement("tr");
    
    
    
    
    tr.innerHTML = `
                        <tr>
                          <td class="type_h">Venda</td>
                          <td class="name_h">${dataSale.seller.toUpperCase()}</td>
                          <td class="value_h">${dataSale.value}</td>
                          <td class="bonus_h">${seller_bonus}</td>
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
        let carname_field = list.querySelector(".carname").innerHTML;

        if(chassi_field == dataChassi){

            status_field.textContent = "Vendido";
            alert(carname_field + " " + status_field.textContent);

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

// Filtro por tipo Compra

    document.getElementById("btn_purche_historic").addEventListener('click', e=>{
        
        clear_all_filter();
        
        document.getElementById("historic_list").querySelectorAll('tr').forEach((row) =>{
            
            if(row.querySelector(".type_h").textContent != "Compra") row.style.display ="none";
            
            });
                    
    });


// Filtro por tipo venda

    document.getElementById("btn_sell_historic").addEventListener('click', e=>{
        
        clear_all_filter();
        
        document.getElementById("historic_list").querySelectorAll('tr').forEach((row) =>{
            
            if(row.querySelector(".type_h").textContent != "Venda") row.style.display ="none";
            
            });
                    
    });

// Filtro por tipo Tudo




document.getElementById("btn_all_historic").addEventListener('click', e=>{
        
    clear_all_filter();
                    
    });


    function clear_all_filter(){
        
                document.getElementById("historic_list").querySelectorAll('tr').forEach((row) =>{
            
                row.style.display = "table-row";
                    
            
            });
        

      };


// Calculo comissão



    document.getElementById("sellvalue").addEventListener('keyup', e=> {
        
        const sl = e.target.value;
        
        
    });



// Home page

    
    document.querySelectorAll(".home_btn").forEach(e =>{
                
        e.addEventListener('click', e=>{
        
        historic_page.style.display = "none";
        vehicle_page.style.display = "none";
        home_page.style.display = "block";
        
 });
        
        
    });
    



// Historic page


    document.getElementById("historic_btn").addEventListener('click', e=>{

        
        historic_page.style.display = "block";
        vehicle_page.style.display = "none";
        home_page.style.display = "none";        
        
    });



// Vehicle page

document.getElementById("vehicle_btn").addEventListener('click', e=>{
    

        historic_page.style.display = "none";
        vehicle_page.style.display = "block";
        home_page.style.display = "none";
    
    
});


// Calculo de valor


document.getElementById("calculate").addEventListener('click', e=>{
    

    document.getElementById("historic_list").querySelectorAll('tr').forEach((row) =>{
        

        
        if(row.style.display != "none"){
            
            let value_field = row.querySelector('.value_h').textContent;
            let bonus_field = row.querySelector('.bonus_h').textContent;
            
            let g = parseInt(value_field);
            let h = parseInt(bonus_field);
            
            display_value = display_value + g;
            display_bonus = display_bonus + h;    
            
            
            
        };
        
        document.getElementById("calculate_value").value = display_value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById("calculate_bonus").value = display_bonus.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        
    });
    
    display_value = 0;
    display_bonus = 0;
});

// 



















    
    