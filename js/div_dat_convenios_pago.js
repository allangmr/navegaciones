//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	

function fn_setea_convenios_pago(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
    var data = [
        { c1:'1',c2:'Activo',c3:'Hoy',c4:'Mañana',c5:'20.00',c6:'40.00',c7:'60.00',c8:'50.00',c9:'10',
        c10:'20',c11:'250.00',c12:'20',c13:'Allan',c14:'2',c15:'11',c16:'266589',c17:'amontilla@tivit.com',c18:'Allan',c19:'Allan'
}
    ];
        var obj3 = {
            width:'100%',
            height:400,
            title: "Detalles de Convenios ",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Opción", width: 110, dataType: "string", dataIndx: "c1", halign:"center", align:"left"},
                { title: "Estado", width: 110, dataType: "string", dataIndx: "c2", halign:"center", align:"left"},
                { title: "Creacion", width: 110, dataType: "string", dataIndx: "c3", halign:"center", align:"left"},
                { title: "Fecha Fin", width: 110, dataType: "string", dataIndx: "c4", halign:"center", align:"left"},
                { title: "Deuda Inicial", width: 120, dataType: "string", dataIndx: "c5", halign:"center", align:"right"},
                { title: "Antig. Inicial", width: 120, dataType: "string",  dataIndx: "c6", halign:"center", align:"right"},
                { title: "Abono Inicial", width: 120, dataType: "string", dataIndx: "c7", halign:"center", align:"right"},
                { title: "Valor Cuota", width: 120, dataType: "string", dataIndx: "c8", halign:"center", align:"right"},
                { title: "N° de Cuotas", width: 120, dataType: "string", dataIndx: "c9", halign:"center", align:"right"},
                { title: "Cuotas Fact.", width: 120, dataType: "string", dataIndx: "c10", halign:"center", align:"right"},
                { title: "Deuda Actual", width: 120, dataType: "string", dataIndx: "c11", halign:"center", align:"right"},
                { title: "Nom. Contacto", width: 120, dataType: "string", dataIndx: "c12", halign:"center", align:"right"},  
                { title: "Tipo id", width: 120, dataType: "string", dataIndx: "c13", halign:"center", align:"right"},
                { title: "Id. Contacto", width: 120, dataType: "string",  dataIndx: "c14", halign:"center", align:"right"},
                { title: "Tel. Contacto", width: 120, dataType: "string", dataIndx: "c15", halign:"center", align:"right"},
                { title: "Email Contacto", width: 120, dataType: "string", dataIndx: "c16", halign:"center", align:"right"},
                { title: "N° de Atención", width: 120, dataType: "string", dataIndx: "c17", halign:"center", align:"right"},
                { title: "Creado Por", width: 120, dataType: "string", dataIndx: "c18", halign:"center", align:"right"},
                { title: "Finalizado por", width: 120, dataType: "string", dataIndx: "c19", halign:"center", align:"right"}  
            ],
            dataModel: {
                data: data,
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
                    { type: "button",attr:'id=convenio_excel_fac', cls:"btn btn-primary"}
                ]
            }
        };
        
        $grid_convenios_pago =$("#grid_convenios_pago").pqGrid(obj3);
        //EVENTO DBL_CLICK DE LA GRILLA
        $grid_convenios_pago.pqGrid({
        rowDblClick: function( event, ui ) {
        if (ui.rowData)
        {
        var dataCell = ui.rowData;
        $("#div_convenios_pago_detalle").load("div_dat_convenios_pago_detalle.htm",fn_convenios_pago_detalle);
        console.log(fn_convenios_pago_detalle)
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
   $("#frm_convenios_pago_detalle").hide();
   $("#frm_volver").show();
   $("#div_convenios_pago").show();
   fn_setea_convenios_pago();
   $("#convenio_excel_fac").html("<span class='glyphicon glyphicon-save'></span> Excel");
}