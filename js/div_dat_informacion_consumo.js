console.log("div_dat_informacion_consumo.js");
function fn_setea_informacion_consumo(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            width:'100%',
            height:400,
            title: "Informacion de Consumos [Cliente: 697588 – TORRE GLOBAL BANK]",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Nº", width: 80, align: "center",dataIndx:"c1", editable: false},
                { title: "Evento", width: 80, align: "left" ,dataIndx:"c2", editable: false},
                { title: "Fecha", width: 120, align: "center" ,dataIndx:"c3", editable: false},
                { title: "Lector", width: 80, align: "left" ,dataIndx:"c4", editable: false},
                { title: "N° Medidor", width: 100, align: "left" ,dataIndx:"c5", editable: false},
                { title: "Marca", width: 120, align: "left" ,dataIndx:"c6", editable: false},
                { title: "Diámetro", width: 140, align: "left" ,dataIndx:"c7", editable: false},
                { title: "Lectura Terreno", width: 80, align: "center" ,dataIndx:"c8", editable: false},
                { title: "Lectura Facturación", width: 140, align: "left" ,dataIndx:"c9", editable: false},
                { title: "Consumo", width: 80, align: "center" ,dataIndx:"c10", editable: false},
                { title: "Medida", width: 120, align: "center" ,dataIndx:"c11", editable: false},
                { title: "Clave de Lectura", width: 120, align: "center" ,dataIndx:"c12", editable: false},
                { title: "Irregularidad", width: 120, align: "center" ,dataIndx:"c13", editable: false},
                { title: "Observacion", width: 120, align: "center" ,dataIndx:"c14", editable: false}
            ],
            dataModel: {
                paging: "local",
                location: "local",
                sorting: "local",
                sortDir: "up"
            },
            collapsible: { on : false,toggle:true },
            selectionModel: { type: 'row',mode:'single'},
            filterModel: { on: true, mode: "OR" },
            toolbar: {
                cls: 'pq-toolbar-export', 
                items: [			
                    { type: "button",attr:'id=co_excel_informacion_consumo', cls:"btn btn-primary"}
                ]
            }
        };
        
        $grid_informacion_consumo =$("#grid_informacion_consumo").pqGrid(obj3);
        $grid_informacion_consumo.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_informacion_consumo.pqGrid("option", "pageModel.type", {checked:false});
        $( "#grid_informacion_consumo" ).pqGrid( "option", "showBottom", false );
            
        
    }

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_informacion_consumo()	
{	
     	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_informacion_consumo").show();   
   fn_setea_informacion_consumo();
   $("#co_excel_informacion_consumo").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}