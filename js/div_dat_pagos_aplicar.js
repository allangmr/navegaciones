
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*   
function fn_setea_grilla_pagos_aplicar(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            width:'100%',
            height:400,
            title: "Pagos por Aplicar [Cliente: 697588 – TORRE GLOBAL BANK]",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Oficina", width: 200, align: "left",dataIndx:"c1", editable: false},
                { title: "Cajero/Canal", width: 180, align: "left" ,dataIndx:"c2", editable: false},
                //{ title: "N° Lote", width: 100, align: "right" ,dataIndx:"c3", editable: false},
                { title: "Fecha", width: 180, align: "center" ,dataIndx:"c3", editable: false, halign:"center"},
                //{ title: "N° Pago", width: 100, align: "right" ,dataIndx:"c5", editable: false},
                { title: "Monto", width: 110, align: "right" ,dataIndx:"c6", editable: false},
                { title: "Concepto", width: 300, align: "left" ,dataIndx:"c4", editable: false},
                { title: "N° Documento", width: 150, align: "right" ,dataIndx:"c5", editable: false}
            ],
            dataModel: {
                paging: "local",
                location: "local",
                sorting: "local",
                sortDir: "up"
            },
            collapsible: { on : false,toggle:true },
            selectionModel: { type: 'row',mode:'single'},
            filterModel: { on: true, mode: "OR" }
        };
        
        $grid_aplicar_pagos =$("#grid_pagos_aplicar").pqGrid(obj3);
        $grid_aplicar_pagos.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_aplicar_pagos.pqGrid("option", "pageModel.type", {checked:false});
        $( "#grid_pagos_aplicar" ).pqGrid( "option", "showBottom", false );
                    
    }
    //~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_pagos_aplicar()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   fn_setea_grilla_pagos_aplicar();
   $("#div_pagos_aplicar").show();

       	
}