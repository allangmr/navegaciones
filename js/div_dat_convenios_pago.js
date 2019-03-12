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
                   { type: "button", label: " Excel", attr:"id=convenio_excel_fac", cls:"btn btn-primary"},
               ]
           }
        };
			
		obj.colModel = [            
            { title: "Opcion", width: 110, dataType: "string", dataIndx: "Opcion", halign:"center", align:"left"},
            { title: "Estado", width: 110, dataType: "string", dataIndx: "Estado", halign:"center", align:"left"},
            { title: "Creacion", width: 110, dataType: "string", dataIndx: "Creacion", halign:"center", align:"left"},
            { title: "Fecha Fin", width: 110, dataType: "string", dataIndx: "Fecha_Fin", halign:"center", align:"left"},
            { title: "Deuda Inicial", width: 120, dataType: "string", dataIndx: "Deuda_Inicial", halign:"center", align:"right"},
            { title: "Antig. Inicial", width: 120, dataType: "string",  dataIndx: "Antig_Inicial", halign:"center", align:"right"},
            { title: "Abono Inicial", width: 120, dataType: "string", dataIndx: "Abono_Inicial", halign:"center", align:"right"},
            { title: "Valor Cuota", width: 120, dataType: "string", dataIndx: "Valor_Cuota", halign:"center", align:"right"},
            { title: "N° de Cuotas", width: 120, dataType: "string", dataIndx: "N_Cuotas", halign:"center", align:"right"},
            { title: "Cuotas Fact.", width: 120, dataType: "string", dataIndx: "Cuotas_Fact", halign:"center", align:"right"},
            { title: "Deuda Actual", width: 120, dataType: "string", dataIndx: "Deuda_Actual", halign:"center", align:"right"},
            { title: "cor", width: 120, dataType: "string", dataIndx: "cor", halign:"center",hidden:true, align:"right"},
            { title: "Nom. Contacto", width: 120, dataType: "string", dataIndx: "Nom_Contacto", halign:"center", align:"right"},  
            { title: "Tipo id", width: 120, dataType: "string", dataIndx: "Tipo_id", halign:"center", align:"right"},
            { title: "Id. Contacto", width: 120, dataType: "string",  dataIndx: "Id_Contacto", halign:"center", align:"right"},
            { title: "Tel. Contacto", width: 120, dataType: "string", dataIndx: "Tel_Contacto", halign:"center", align:"right"},
            { title: "Email Contacto", width: 120, dataType: "string", dataIndx: "Email_Contacto", halign:"center", align:"right"},
            { title: "N° de Atención", width: 120, dataType: "string", dataIndx: "N_Atencion", halign:"center", align:"right"},
            { title: "Creado Por", width: 120, dataType: "string", dataIndx: "Creado_Por", halign:"center", align:"right"},
            { title: "Finalizado por", width: 120, dataType: "string", dataIndx: "Finalizado_Por", halign:"center", align:"right"}        ];
		
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
   //fn_setea_convenios_pago();
   $("#convenio_excel_fac").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}