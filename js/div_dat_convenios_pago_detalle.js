
function fn_setea_grid_principal()
{   
	grilla_prin = [
        { title: "Fecha", width: 120, dataType: "string", dataIndx: "c1", halign:"center", align:"center"},
        { title: "Evento", width: 150, dataType: "string", dataIndx: "c2", halign:"center", align:"left" },
        { title: "Rol", width: 300, dataType: "string", dataIndx: "c3", halign:"center", align:"left" },
        { title: "Observación", width: 470, dataType: "string", dataIndx: "c4", halign:"center", align:"left" },
        { title: "Área", width: 200, dataType: "string", dataIndx: "c5", halign:"center", align:"left" },
        { title: "Ip", width: 150, dataType: "string", dataIndx: "c6", halign:"center", align:"right" }
    ];
	
    var obj = {
        height: 350,
        showTop: true,
        showHeader: true,
        roundCorners: true,
        rowBorders: true,
		fillHandle: "",
        columnBorders: true,
        editable:false,
        selectionModel: { type: "row", mode:"single"},
        showTitle:true,
        collapsible:false,
        numberCell: { show: false },
        title: "Historial de Eventos",
		colModel: grilla_prin,
		pageModel: { rPP: 20, type: "local", rPPOptions: [20, 50, 100]},
        scrollModel:{theme:true},
        toolbar:
        {
            cls: "pq-toolbar-export",
            items:
            [
				{ type: "button", label: "Excel", attr:"id=co_excel", cls:"btn btn-primary btn-sm"}
            ]
        }
    };
		
	var data = [           
                    ];
    $grid = $("#div_grid").pqGrid(obj);
	$grid.pqGrid( "scrollRow", { rowIndxPage: 21 } );	
	
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	
function fn_setea_grid_pagos()
{   
	grilla_pago = [
        { title: "Fecha de Pago", width: 150, dataType: "string", dataIndx: "c1", halign:"center", align:"center"},
        { title: "Fecha de Proceso", width: 150, dataType: "string", dataIndx: "c2", halign:"center", align:"center" },
        { title: "Pago IDAAN", width: 120, dataType: "string", dataIndx: "c3", halign:"center", align:"right" },
        { title: "Pago Convenio", width: 120, dataType: "string", dataIndx: "c4", halign:"center", align:"right" },
        { title: "Tipo Documento", width: 300, dataType: "string", dataIndx: "c5", halign:"center", align:"left" },
        { title: "Agencia", width: 300, dataType: "string", dataIndx: "c6", halign:"center", align:"left" }
    ];
	
    var obj = {
        height: 300,
        showTop: true,
        showHeader: true,
        roundCorners: true,
        rowBorders: true,
		fillHandle: "",
        columnBorders: true,
        editable:false,
        selectionModel: { type: "row", mode:"single"},
        showTitle:true,
        collapsible:false,
        numberCell: { show: false },
        title: "Historial de Pagos",
		colModel: grilla_pago,
		pageModel: { rPP: 20, type: "local", rPPOptions: [20, 50, 100]},
        scrollModel:{theme:true},
        toolbar:
        {
            cls: "pq-toolbar-export",
            items:
            [
				{ type: "button", label: "Excel", attr:"id=co_excel_pago", cls:"btn btn-primary btn-sm"}
            ]
        }
    };
		
	var data = [           
                    ];
    $grid_pago = $("#div_grid_pago").pqGrid(obj);
	$grid_pago.pqGrid( "scrollRow", { rowIndxPage: 21 } );	
	
}

function fn_convenios_pago_detalle()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#div_convenios_pago").hide();
   $("#frm_volver").show();
   $("#div_convenios_pago_detalle").show();
   fn_setea_grid_principal();
   fn_setea_grid_pagos();
   $("#co_excel").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
   $("#co_excel_pago").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}
