function fn_setea_grillaaudimod(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj0 = {
            width:'100%',
            height:250,
            title: "Auditoria de Modificaciones",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Funcionario", width: "53%", align: "center", dataIndx:"C1"},
                { title: "Fecha", width: "23%", align: "center", dataIndx:"C2"},
                { title: "Tipo", width: "23%", align: "center", dataIndx:"C3"},
                { title: "Dato Anterior", width: "23%", align: "center", dataIndx:"C4"},
                { title: "Dato Actual", width: "23%", align: "center", dataIndx:"C5"},
                { title: "Observación", width: "23%", align: "center", dataIndx:"C6"}
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
                        { type: "select", style: "margin:0px 5px;", cls: "filterCondition",
                        options: [
                            {"*** TODOS ***":"*** TODOS ***"},
                            {"1":"APARTAMENTO"},
                            {"2":"BARRIO"},
                            {"3":"CALLE SUMINISTRO"},
                            {"4":"CAMBIO EN EL CICLO"}
                        ]
                    },		
                    { type: "button",attr:'id=co_excel_audi', cls:"btn btn-primary"}
                ]
            }
        };
        
        $grid_audi_mod =$("#grid_audi_mod").pqGrid(obj0);
        $grid_audi_mod.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_audi_mod.pqGrid("option", "pageModel.type", {checked:false});
        $( "#grid_audi_mod" ).pqGrid( "option", "showBottom", false );
            
        
    }
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	
     	
function fn_audi_mod_ver()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_audi_mod").show();
   fn_setea_grillaaudimod();
   $("#co_excel_audi").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}