//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*   
function fn_setea_grilla_historico_pagos(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            width:'100%',
            height:400,
            title: "Histórico de pagos del suministro",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Nº Orden", width: 80, align: "center",dataIndx:"c1", editable: false},
                { title: "Tipo Acción", width: 100, align: "left" ,dataIndx:"c2", editable: false},
                { title: "Fecha Terreno", width: 120, align: "center" ,dataIndx:"c3", editable: false},
                { title: "Fecha Registro", width: 150, align: "left" ,dataIndx:"c4", editable: false},
                { title: "Medidor", width: 100, align: "left" ,dataIndx:"c5", editable: false},
                { title: "Marca", width: 120, align: "left" ,dataIndx:"c6", editable: false},
                { title: "Modelo", width: 140, align: "left" ,dataIndx:"c7", editable: false},
                { title: "Diámetro", width: 80, align: "center" ,dataIndx:"c8", editable: false},
                { title: "Tipo Medida", width: 140, align: "left" ,dataIndx:"c9", editable: false},
                { title: "Constante", width: 80, align: "center" ,dataIndx:"c10", editable: false},
                { title: "Enteros", width: 80, align: "center" ,dataIndx:"c11", editable: false},
                { title: "Decimales", width: 80, align: "center" ,dataIndx:"c12", editable: false}
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
                    { type: "button",attr:'id=co_excel', cls:"btn btn-primary"}
                ]
            }
        };
        
        $grid_historico_pagos =$("#grid_historico_pagos").pqGrid(obj3);
        $grid_historico_pagos.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_historico_pagos.pqGrid("option", "pageModel.type", {checked:false});
        $( "#grid_historico_pagos" ).pqGrid( "option", "showBottom", false );
            
        
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_historico_pagos_ver()	
{
    $("#frm_leer").hide();	
    $("#nav_ul_opc").hide();	
    $("#div_prin").hide("blind");	
    $("#frm_volver").show();	
    $("#div_historico_pagos").show();
    fn_setea_grilla_historico_pagos();
    $("#co_excel").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}
