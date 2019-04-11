
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*   
function fn_setea_grill_resumen_deuda(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj0 = {
            width:'100%',
            height:250,
            title: "Resumen de la Deuda por Cargo [Cliente: 697588 – TORRE GLOBAL BANK]",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Descripci&#243;n", width: "53%", align: "center", dataIndx:"C3"},
                { title: "Convenido", width: "23%", align: "center", dataIndx:"C2"},
                { title: "Monto", width: "23%", align: "center", dataIndx:"C4"}
            ],
            dataModel: {
                paging: "local",
                location: "local",
                sorting: "local",
                sortDir: "up"
            },
            collapsible: false,
            selectionModel: { type: 'row',mode:'single'},
            filterModel: { on: true, mode: "OR" },
            toolbar: {
                cls: 'pq-toolbar-export',
                items: [
                    { type: 'button', attr:'id=co_deuda', cls:"btn btn-primary" },
                    { type: 'button', attr:'id=co_estado', cls:"btn btn-primary" },				
                    { type: "button",attr:'id=co_excel', cls:"btn btn-primary"}
                ]
            }
        };
        
        $grid_deudatotal =$("#grid_deudatotal").pqGrid(obj0);
        $grid_deudatotal.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_deudatotal.pqGrid("option", "pageModel.type", {checked:false});
        $( "#grid_deudatotal" ).pqGrid( "option", "showBottom", false );
            
        
    }
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*   
function fn_setea_grilla_corte_y_reposicion(){
	
    var obj = {
        width:'100%',
		height:200,
        rowBorders:true,
        title:"Corte y Reposición",
        editable: false,
        colModel:
        [
            { title: "Solicitud", width: 130, align: "left", dataIndx:"C1"},
            { title: "Generaci&#243;n", width: 130, align: "left", dataIndx:"C2"},
			{ title: "Ejecuci&#243;n", width: 130, align: "left", dataIndx:"C3"},
			{ title: "Cierre", width: 130, align: "left", dataIndx:"C4"},
            { title: "Evento", width: 120, align: "left", dataIndx:"C5"},
            { title: "Motivo", width: 120, dataIndx:"C6"},
            { title: "Instancia", width: 150, align: "left", dataIndx:"C7"},
			{ title: "Sit. Encontrada", width: 150, align: "left", dataIndx:"C8"},
			{ title: "Acci&#243;n Realizada", width: 170, align: "center", dataIndx:"C9"},
            { title: "Fun", width: 100, align: "left", dataIndx:"C10"},
            { title: "Corte &#201;xito", width: 100, dataIndx:"C11"},
            { title: "Ejecutor", width: 100, align: "left", dataIndx:"C12" },
			{ title: "Nombre Ejecutor", width: 150, align: "left", dataIndx:"C13"},
			{ title: "Lectura", width: 100, align: "center", dataIndx:"C14"},
            { title: "Sello Inst.", width: 100, align: "center", dataIndx:"C15"},
            { title: "Sello Ret.", width: 100, align: "center", dataIndx:"C16"}
        ],
        dataModel: {
			paging: "local",
            location: "local",
            sorting: "local",
            sortDir: "up"
        },
        collapsible: false,
        selectionModel: { type: 'row',mode:'single'},
    };
	
    $gridCorte =$("#grid_corte").pqGrid(obj);
    $gridCorte.pqGrid( "option", "scrollModel", {horizontal: true} );

		
	
}
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*   

function fn_setea_grilla_deuda_por_cargo(){
    
    var obj2 = {
        width:'100%',
        height:270,
        title:"Detalle de la Deuda por Cargo",
		rowBorders:true,
        editable: false,
        colModel:
        [           
            { title: "Código", width: 0, dataIndx:"rank",hidden: true},
            { title: "Descripción", width: "40%", align: "left", dataIndx:"C3" },
			{ title: "Monto", width: "11%", align: "right", dataIndx:"C4"},
			{ title: "Fecha", width: "11%", align: "center", dataIndx:"C5"},
            { title: "Periodo", width: "11%", align: "center", dataIndx:"C6"},
            { title: "Convenido", width: "11%", align: "center", dataIndx:"C7"}
        ],
        dataModel: {
			paging: "local",
            location: "local",
            sorting: "local",
            sortDir: "up"
        },
        collapsible: false,
        selectionModel: { type: 'row',mode:'single'},
		filterModel: { mode: 'OR' },
		toolbar: {
            cls: 'pq-toolbar-export',
            items: [
				{ type: "<span style='margin:5px;'>Buscar   :</span>" },
                { type: "select", style: "margin:0px 5px;", cls: "filterCondition",
                    options: [
						{"*** TODOS ***":"*** TODOS ***"},
						{"1":"IDAAN"},
						{"2":"ASEO"}						
                    ]
                }
            ]
        }
    };
	
	
	$grid_selector_deuda = $("#grid_selection_checkbox").pqGrid(obj2);
	
	$grid_selector_deuda.pqGrid( "option", "scrollModel", {horizontal: true} );
}


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_deuda_ver()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_deuda").show();
   fn_setea_grill_resumen_deuda();
   fn_setea_grilla_corte_y_reposicion();
   fn_setea_grilla_deuda_por_cargo();
   $("#co_deuda").html("<span class='glyphicon glyphicon-file'></span>&#218;lt. Deuda H2O ");
   $("#co_estado").html("<span class='glyphicon glyphicon-duplicate'></span> Estado de Cuenta"); 
   $("#co_excel").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
 	
}