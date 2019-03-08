//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	

function fn_setea_historial_subsidio(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            width:'100%',
            height:400,
            title: "Historial de Subsidio por Caso Social",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Evento", width: 60, align: "center",dataIndx:"evento", editable: false},
                { title: "Tipo", width: 140, align: "left" ,dataIndx:"tipo", editable: false},
                { title: "Subsidio", width: 350, align: "center" ,dataIndx:"subsidio", editable: false},
                { title: "Inicio", width: 350, align: "left" ,dataIndx:"inicio", editable: false},
                { title: "Aplicación", width: 100, align: "left" ,dataIndx:"aplicación", editable: false},
                { title: "Observación", width: 120, align: "left" ,dataIndx:"observacion", editable: false},
                { title: "Nombre", width: 240, align: "left" ,dataIndx:"nombre", editable: false},
                { title: "Identidad", width: 280, align: "center" ,dataIndx:"identidad", editable: false},
                { title: "Tarifa", width: 120, align: "left" ,dataIndx:"tarifa", editable: false},
                { title: "Rol", width: 240, align: "left" ,dataIndx:"rol", editable: false},
                { title: "Ip", width: 280, align: "center" ,dataIndx:"ip", editable: false}
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
                    { type: "button",attr:'id=co_excel_historial_subsidio', cls:"btn btn-primary"}
                ]
            }
        };
        
        $grid_historial_subsidio =$("#grid_historial_subsidio").pqGrid(obj3);
        $grid_historial_subsidio.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_historial_subsidio.pqGrid("option", "pageModel.type", {checked:false});
        $("#grid_historial_subsidio" ).pqGrid( "option", "showBottom", false );
            
        
    }



    //~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_historial_subsidio()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_historial_subsidio").show();

   fn_setea_historial_subsidio();
   $("#co_excel_historial_subsidio").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}