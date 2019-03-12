//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*   
function fn_setea_grilla_pagos_otros(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            title:"Pagos por Aplicar",
            width:'100%',
            height:200,
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Fecha Ingreso", width: 80, align: "center",dataIndx:"c1", editable: false},
                { title: "Fecha Recauda", width: 100, align: "left" ,dataIndx:"c2", editable: false},
                { title: "Concepto", width: 120, align: "center" ,dataIndx:"c3", editable: false},
                { title: "Descripción", width: 150, align: "left" ,dataIndx:"c4", editable: false},
                { title: "N° Cliente", width: 100, align: "left" ,dataIndx:"c5", editable: false},
                { title: "N° Doc.", width: 120, align: "left" ,dataIndx:"c6", editable: false},
                { title: "Monto Pago", width: 140, align: "left" ,dataIndx:"c7", editable: false},
                { title: "Oficina", width: 80, align: "center" ,dataIndx:"c8", editable: false},
                { title: "Cajero", width: 140, align: "left" ,dataIndx:"c9", editable: false},
                { title: "Observación", width: 80, align: "center" ,dataIndx:"c10", editable: false},
                { title: "N° Lote", width: 80, align: "center" ,dataIndx:"c11", editable: false}
            ],
            dataModel: {
                paging: "local",
                location: "local",
                sorting: "local",
                sortDir: "up"
            },
            collapsible: false,
            selectionModel: { type: 'row',mode:'single'}
        };
        
        $grid_pagos_otros = $("#grid_pagos_otros").pqGrid(obj3);
        $grid_pagos_otros.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_pagos_otros.pqGrid("option", "pageModel.type", {checked:false});
        $( "#grid_pagos_otros" ).pqGrid( "option", "showBottom", false );
                    
    }


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_pagos_otros()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   fn_setea_grilla_pagos_otros();
   $("#div_pagos_otros").show();

       	
}

