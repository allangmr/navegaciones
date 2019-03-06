//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	

function fn_setea_historial_aseo(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            width:'100%',
            height:400,
            title: "Historial de Movimientos de Aseo",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Empresa", width: 180, align: "center",dataIndx:"empresa", editable: false},
                { title: "Fecha", width: 120, align: "left" ,dataIndx:"fecha", editable: false},
                { title: "Tipo Mov.", width: 150, align: "center" ,dataIndx:"tipo_mov", editable: false},
                { title: "Valor", width: 110, align: "left" ,dataIndx:"valor", editable: false},
                { title: "Cantidad", width: 100, align: "left" ,dataIndx:"cantidad", editable: false},
                { title: "Cargo", width: 120, align: "left" ,dataIndx:"cargo", editable: false},
                { title: "Observacion", width: 280, align: "center" ,dataIndx:"observacion", editable: false},
                { title: "Rol", width: 120, align: "left" ,dataIndx:"rol", editable: false},
                { title: "Nombre", width: 240, align: "left" ,dataIndx:"nombre", editable: false},
                { title: "Ip", width: 120, align: "center" ,dataIndx:"ip", editable: false}
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
                    { type: "button",attr:'id=co_excel_historial_aseo', cls:"btn btn-primary"}
                ]
            }
        };
        
        $grid_historial_aseo =$("#grid_historial_aseo").pqGrid(obj3);
        $grid_historial_aseo.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_historial_aseo.pqGrid("option", "pageModel.type", {checked:false});
        $("#grid_historial_aseo" ).pqGrid( "option", "showBottom", false );
            
        
    }


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_historial_aseo()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_historial_aseo").show();
   fn_setea_historial_aseo();
   $("#co_excel_historial_aseo").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}