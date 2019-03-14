
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	

function fn_setea_historial_eventos_terminados(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            width:'100%',
            height:400,
            title: "Eventos Terminados ",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Refa", width: 100, align: "center",dataIndx:"c1", editable: false},
                { title: "Subtipo", width: 100, align: "left" ,dataIndx:"c2", editable: false},
                { title: "Orden", width: 100, align: "center" ,dataIndx:"c3", editable: false},
                { title: "Referencia", width: 280, align: "left" ,dataIndx:"c4", editable: false},
                { title: "Etapa", width: 120, align: "left" ,dataIndx:"c5", editable: false},
                { title: "Iniciado Por", width: 100, align: "left" ,dataIndx:"c6", editable: false},
                { title: "Area", width: 100, align: "center" ,dataIndx:"c7", editable: false},
                { title: "Nro. Atencion", width: 140, align: "left" ,dataIndx:"c8", editable: false},
                { title: "Fecha Inicio Orden", width: 140, align: "left" ,dataIndx:"c9", editable: false},
                { title: "Fecha Fin Orden", width: 140, align: "center" ,dataIndx:"c10", editable: false},
                { title: "Rol Finaliza", width: 160, align: "left" ,dataIndx:"c6", editable: false},
                { title: "Accion Campo", width: 240, align: "center" ,dataIndx:"c7", editable: false},
                { title: "Inspector", width: 160, align: "left" ,dataIndx:"c8", editable: false},
                { title: "Observación", width: 240, align: "left" ,dataIndx:"c9", editable: false}
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
                    { type: "button",attr:'id=co_excel_historial_eventos_terminados', cls:"btn btn-primary"}
                ]
            }
        };
        
        $grid_historial_eventos_terminados =$("#grid_historial_eventos_terminados").pqGrid(obj3);
        $grid_historial_eventos_terminados.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_historial_eventos_terminados.pqGrid("option", "pageModel.type", {checked:false});
        $("#grid_historial_eventos_terminados" ).pqGrid( "option", "showBottom", false );
            
        
    }

    

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	

function fn_historial_eventos_terminados()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_historial_eventos_terminados").show();
   fn_setea_historial_eventos_terminados();
   $("#co_excel_historial_eventos_terminados").html("<span class='glyphicon glyphicon-save'></span>Excel");
}

