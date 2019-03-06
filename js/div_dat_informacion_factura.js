function fn_setea_grid_fac()
{
    // HISTORIAL DE FACTURACIONES
    var data = [
        { Periodo: 11, Lectura: '14/03/18', Emision: '15/03/18', Vencimiento: '16/03/18', Agua: 5.68, Compensacion:0.00, Jubilado:0.00, Alcantarillado:0.00, Recargo:0.57, Saldo:0.00, Aseo:0.00, cor:11,Total:0.00 }
    ];
    var obj = {  
	        height: "100%",
            showTop: true,
			showBottom:true,
            showTitle : false,
            roundCorners: true,
            rowBorders: true,
            columnBorders: true,
            collapsible:false,
			editable:false,
            selectionModel: { type: 'row',mode:'single'},
            numberCell: { show: false},
			pageModel: { rPP: 20, type: "local", rPPOptions: [100, 200, 300]},
            scrollModel:{theme:true},
            dataModel: {
                data: data,
                paging: "local",
                location: "local",
                sorting: "local",
                sortDir: "up"
            },
			toolbar:
           {
               cls: "pq-toolbar-export",
               items:
               [
                   { type: "button", label: " Excel", attr:"id=co_excel_fac", cls:"btn btn-primary"},
               ]
           }
        };
			
		obj.colModel = [            
            { title: "Periodo", width: 110, dataType: "string", dataIndx: "Periodo", halign:"center", align:"left"},
            { title: "Lectura", width: 110, dataType: "string", dataIndx: "Lectura", halign:"center", align:"left"},
            { title: "Emisión", width: 110, dataType: "string", dataIndx: "Emision", halign:"center", align:"left"},
            { title: "Vencimiento", width: 110, dataType: "string", dataIndx: "Vencimiento", halign:"center", align:"left"},
            { title: "Agua", width: 120, dataType: "string", dataIndx: "Agua", halign:"center", align:"right"},
            { title: "Compensación y Subsidio", width: 120, dataType: "string",  dataIndx: "Compensacion", halign:"center", align:"right"},
            { title: "Descuento Jubilado", width: 120, dataType: "string", dataIndx: "Descuento", halign:"center", align:"right"},
            { title: "Alcantarillado", width: 120, dataType: "string", dataIndx: "Alcantarillado", halign:"center", align:"right"},
            { title: "Recargo", width: 120, dataType: "string", dataIndx: "Recargo", halign:"center", align:"right"},
            { title: "Saldo Anterior", width: 120, dataType: "string", dataIndx: "Saldo", halign:"center", align:"right"},
            { title: "Aseo", width: 120, dataType: "string", dataIndx: "Aseo", halign:"center", align:"right"},
            { title: "cor", width: 120, dataType: "string", dataIndx: "cor", halign:"center",hidden:true, align:"right"},
            { title: "Total Documento", width: 120, dataType: "string", dataIndx: "Total", halign:"center", align:"right"}  
        ];
		
    $grid_fac = $("#div_fac").pqGrid(obj);

    //EVENTO DBL_CLICK DE LA GRILLA
    $grid_fac.pqGrid({
    rowDblClick: function( event, ui ) {
    if (ui.rowData)
    {
    var dataCell = ui.rowData;
    $("#div_informacion_factura").load("div_dat_informacion_factura.htm",fn_informacion_factura(dataCell.cor), fn_carga_grids);
    $(window).scrollTop(0);
    }
    }
    });
}


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  

function fn_setea_conceptos_facturados_if()
// BÚSQUEDA DE CLIENTES

{  

    var obj0 = {
        width:'100%',
        height:250,
        title: "Detalle de los Conceptos Facturados",
        rowBorders: true,
        editable: false,
        scrollModel:{theme:true},
        colModel:
        [
            { title: "Periodo", width: "15%", dataType: "string", dataIndx: "medidor", halign:"center", align:"left"},
            { title: "Cargo", width: "15%", dataType: "string", dataIndx: "C2", halign:"center", align:"left"},
            { title: "Descripción", width: "35%", dataType: "string", dataIndx: "C3", halign:"center", align:"left"},
            { title: "Unidad", width: "15%", dataType: "string", dataIndx: "C4", halign:"center", align:"left"},
            { title: "Valor", width: "20%", dataType: "string", dataIndx: "C5", halign:"center", align:"left"}
        ],
        dataModel: {
            paging: "local",
            location: "local",
            sorting: "local",
            sortDir: "up"
        },
        collapsible: false,
        selectionModel: { type: 'row',mode:'single'},
        filterModel: { on: true, mode: "OR" }
    };
    
    $grid_conceptos_facturados =$("#grid_conceptos_facturados").pqGrid(obj0);
    $grid_conceptos_facturados.pqGrid( "option", "scrollModel", {horizontal: true} );
    $grid_conceptos_facturados.pqGrid("option", "pageModel.type", {checked:false});
    $( "#grid_conceptos_facturados" ).pqGrid( "option", "showBottom", false );

}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_setea_contador_agua_if()
// BÚSQUEDA DE CLIENTES

{  

    var obj = {
        width:'100%',
        height:250,
        title: "Información del Contador de Agua",
        rowBorders: true,
        editable: false,
        scrollModel:{theme:true},
        colModel:
        [
            { title: "N° Medidor", width: "20%", dataType: "string", dataIndx: "medidor", halign:"center", align:"left"},
            { title: "Marca", width: "20%", dataType: "string", dataIndx: "C2", halign:"center", align:"left"},
            { title: "Tipo Medida", width: "20%", dataType: "string", dataIndx: "C3", halign:"center", align:"left"},
            { title: "Modelo", width: "20%", dataType: "string", dataIndx: "C4", halign:"center", align:"left"},
            { title: "Diámetro", width: "20%", dataType: "string", dataIndx: "C5", halign:"center", align:"left"}
        ],
        dataModel: {
            paging: "local",
            location: "local",
            sorting: "local",
            sortDir: "up"
        },
        collapsible: false,
        selectionModel: { type: 'row',mode:'single'},
        filterModel: { on: true, mode: "OR" }
    };
    
    $grid_contador_agua =$("#grid_contador_agua").pqGrid(obj);
    $grid_contador_agua.pqGrid( "option", "scrollModel", {horizontal: true} );
    $grid_contador_agua.pqGrid("option", "pageModel.type", {checked:false});
    $( "#grid_contador_agua" ).pqGrid( "option", "showBottom", false );

}


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_informacion_factura(n)	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_informacion_factura").show();
   console.log(n);
}

function fn_carga_grids(){
    fn_setea_contador_agua_if();
    fn_setea_conceptos_facturados_if();  
}