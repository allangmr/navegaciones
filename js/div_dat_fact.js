
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*   
function fn_setea_grilla_medidor_reg(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            title:"Contador de Agua",
            width:'100%',
            height:200,
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Medidor", width: 80, align: "center",dataIndx:"c1", editable: false},
                { title: "Marca", width: 100, align: "left" ,dataIndx:"c2", editable: false},
                { title: "Modelo", width: 120, align: "center" ,dataIndx:"c3", editable: false},
                { title: "Diámetro", width: 150, align: "left" ,dataIndx:"c4", editable: false},
                { title: "Medida", width: 100, align: "left" ,dataIndx:"c5", editable: false},
                { title: "Factor", width: 120, align: "left" ,dataIndx:"c6", editable: false},
                { title: "Enteros", width: 140, align: "left" ,dataIndx:"c7", editable: false},
                { title: "Decimales", width: 80, align: "center" ,dataIndx:"c8", editable: false},
                { title: "Instalación", width: 140, align: "left" ,dataIndx:"c9", editable: false},
                { title: "Lec. Instala", width: 80, align: "center" ,dataIndx:"c10", editable: false},
                { title: "Fec. Actualiza", width: 80, align: "center" ,dataIndx:"c11", editable: false},
                { title: "Propiedad", width: 80, align: "center" ,dataIndx:"c12", editable: false}
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
        
        $grid_medidor_reg =$("#grid_medidor_reg").pqGrid(obj3);
        $grid_medidor_reg.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_medidor_reg.pqGrid("option", "pageModel.type", {checked:false});
        $( "#grid_medidor_reg" ).pqGrid( "option", "showBottom", false );
            
        
    }
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*   
function fn_setea_grilla_cargo_fac(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            title:"Conceptos por Facturar",
            width:'100%',
            height:200,
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Descripción", width: 400, align: "center",dataIndx:"c1", editable: false},
                { title: "Valor Facturado", width: 400, align: "left" ,dataIndx:"c2", editable: false}
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
        
        $grid_cargo_fac =$("#grid_cargos_fac").pqGrid(obj3);
        $grid_cargo_fac.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_cargo_fac.pqGrid("option", "pageModel.type", {checked:false});
        $( "#grid_cargos_fac" ).pqGrid( "option", "showBottom", false );
            
        
    }

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_fac_cont()	
{
    $("#frm_leer").hide();	
    $("#nav_ul_opc").hide();	
    $("#div_prin").hide("blind");
    $("#frm_volver").show();
    $("#div_fact_cont").show();	
    fn_setea_grilla_medidor_reg();
    fn_setea_grilla_cargo_fac();
}