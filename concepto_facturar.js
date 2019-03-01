console.log("Concepto_facturar.js");
function fn_setea_concepto_facturar(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            width:'100%',
            height:400,
            title: "Conceptos Pendientes por Facturar [Cliente: 697588 – TORRE GLOBAL BANK]",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Nº", width: 80, align: "center",dataIndx:"c1", editable: false},
                { title: "Concepto", width: 80, align: "left" ,dataIndx:"c2", editable: false},
                { title: "Ingreso", width: 120, align: "center" ,dataIndx:"c3", editable: false},
                { title: "Cuotas", width: 80, align: "left" ,dataIndx:"c4", editable: false},
                { title: "Valor Cuota", width: 100, align: "left" ,dataIndx:"c5", editable: false},
                { title: "Valor Ult. Cuota", width: 120, align: "left" ,dataIndx:"c6", editable: false},
                { title: "Pend. Facturar", width: 140, align: "left" ,dataIndx:"c7", editable: false},
                { title: "Valor Total Inicial", width: 80, align: "center" ,dataIndx:"c8", editable: false},
                { title: "Tipo Medida", width: 140, align: "left" ,dataIndx:"c9", editable: false},
                { title: "Origen", width: 80, align: "center" ,dataIndx:"c10", editable: false},
                { title: "Observacion", width: 120, align: "center" ,dataIndx:"c11", editable: false}
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
                    { type: "button",attr:'id=co_excel_concepto_facturar', cls:"btn btn-primary"}
                ]
            }
        };
        
        $grid_concepto_facturar =$("#grid_concepto_facturar").pqGrid(obj3);
        $grid_concepto_facturar.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_concepto_facturar.pqGrid("option", "pageModel.type", {checked:false});
        $( "#grid_concepto_facturar" ).pqGrid( "option", "showBottom", false );
            
        
    }

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_concepto_facturar()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_suministro").hide();	
   $("#div_propietario").hide();
   $("#div_abastece").hide();
   $("#div_deuda").hide();
   $("#div_historico_medidores").hide();
   $("#div_audi_mod").hide();
   $("#div_concepto_facturar").show();
   $("#div_historial_aseo").hide();
   $("#div_contrato_show").hide();
   $("#div_informacion_factura").hide();
   fn_setea_concepto_facturar();
   $("#co_excel_concepto_facturar").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}
