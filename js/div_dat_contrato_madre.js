//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	

function fn_setea_contrato_madre(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            width:'100%',
            height:400,
            title: "Clientes Asociados a Contrato Madre",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Nic", width: 60, align: "center",dataIndx:"Nic", editable: false},
                { title: "Ruta", width: 140, align: "left" ,dataIndx:"Ruta", editable: false},
                { title: "Nombre", width: 350, align: "center" ,dataIndx:"Nombre", editable: false},
                { title: "Tarifa", width: 350, align: "left" ,dataIndx:"Tarifa", editable: false},
                { title: "Actividad", width: 100, align: "left" ,dataIndx:"Actividad", editable: false},
                { title: "Sector", width: 120, align: "left" ,dataIndx:"Sector", editable: false},
                { title: "Finca", width: 240, align: "left" ,dataIndx:"Finca", editable: false},
                { title: "Medidor", width: 280, align: "center" ,dataIndx:"Medidor", editable: false}
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
                    { type: "button",attr:'id=co_excel_contrato_madre', cls:"btn btn-primary"}
                ]
            }
        };
        
        $grid_contrato_madre =$("#grid_contrato_madre").pqGrid(obj3);
        $grid_contrato_madre.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_contrato_madre.pqGrid("option", "pageModel.type", {checked:false});
        $("#grid_contrato_madre" ).pqGrid( "option", "showBottom", false );
            
        
    }


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_contrato_madre()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_contrato_madre").show();
   fn_setea_contrato_madre();
   $("#co_excel_contrato_madre").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}