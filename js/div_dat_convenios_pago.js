//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	

function fn_setea_convenios_pago(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
    var data = [
        { Opcion:'1',Estado:'Activo',Creacion:'Hoy',Fecha_Fin:'Mañana',Deuda_Inicial:'20.00',Antig_Inicial:'40.00',Abono_Inicial:'60.00',Valor_Cuota:'50.00',N_Cuotas:'10',
        Cuotas_Fact:'20',Deuda_Actual:'250.00',cor:'20',Nom_Contacto:'Allan',Tipo_id:'2',Id_Contacto:'11',Tel_Contacto:'266589',Email_Contacto:'amontilla@tivit.com',N_Atencion:'20',Creado_Por:'Allan',Finalizado_Por:'Allan'
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
                { title: "Opción", width: 110, dataType: "string", dataIndx: "Opcion", halign:"center", align:"left"},
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
                { title: "Finalizado por", width: 120, dataType: "string", dataIndx: "Finalizado_Por", halign:"center", align:"right"}  
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
   $("#frm_volver").show();
   $("#div_convenios_pago").show();
   fn_setea_convenios_pago();
   $("#convenio_excel_fac").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}