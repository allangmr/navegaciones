function fn_setea_convenios_pago()
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
		
    $grid_convenios_pago = $("#div_convenios_pago").pqGrid(obj);

    //EVENTO DBL_CLICK DE LA GRILLA
    $grid_convenios_pago.pqGrid({
    rowDblClick: function( event, ui ) {
    if (ui.rowData)
    {
    var dataCell = ui.rowData;
    $("#div_convenios_pago").load("div_dat_convenios_pago.htm",fn_convenios_pago(dataCell.cor), fn_carga_grids);
    $(window).scrollTop(0);
    }
    }
    });
}


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~* 
    	
function fn_convenios_pago()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_convenios_pago").show();
   fn_setea_convenios_pago();
   $("#co_excel_historial_aseo").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}