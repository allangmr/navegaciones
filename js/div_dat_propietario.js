//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_setea_grid_datos_propietarios()
// BÚSQUEDA DE CLIENTES

{  

    $("#div_datos_propietarios").addClass("gr-con");

    var obj = {  
            height: "100%",
            showTop: true,
            showBottom:true,
            showTitle : true,
            title: "Datos de Propietarios",
            roundCorners: true,
            rowBorders: true,
            columnBorders: true,
            collapsible:false,
            editable:false,
            selectionModel: { type: 'row',mode:'single'},
            numberCell: { show: true },
            pageModel: { rPP: 20, type: "local", rPPOptions: [100, 200, 300]},
            scrollModel:{theme:true},
            toolbar:
           {
               cls: "pq-toolbar-export",
               items:
               [
                   { type: "button", label: " Excel", attr:"id=co_excel_busq", cls:"btn btn-primary"},
               ]
           }
        };
            
        obj.colModel = [            
            { title: "Ruta", width: 140, dataType: "string", dataIndx: "C1", halign:"center", align:"left"},
            { title: "Nombre", width: 140, dataType: "string", dataIndx: "C2", halign:"center", align:"left"},
            { title: "No. Cliente", width: 110, dataType: "string", dataIndx: "C3", halign:"center", align:"left"},
            { title: "Provincia", width: 120, dataType: "string", dataIndx: "C4", halign:"center", align:"left"},
            { title: "Distrito", width: 180, dataType: "string", dataIndx: "C5", halign:"center", align:"left"},
            { title: "Corregimiento", width: 240, dataType: "string", dataIndx: "C6", halign:"center", align:"left"},
            { title: "Barrio", width: 200, dataType: "string",  dataIndx: "C7", halign:"center", align:"left"},
            { title: "Dirección", width: 200, dataType: "string", dataIndx: "C8", halign:"center", align:"left"},
            { title: "Finca", width: 180, dataType: "string", dataIndx: "C9", halign:"center", align:"left"},
            { title: "Tomo", width: 110, dataType: "string", dataIndx: "C10", halign:"center", align:"right"},
            { title: "Folio", width: 200, dataType: "string", dataIndx: "C11", halign:"center", align:"left"},
            { title: "Teléfono Fijo", width: 200, dataType: "string", dataIndx: "C12", halign:"center", align:"left"},
            { title: "Teléfono Celular", width: 200, dataType: "string", dataIndx: "C13", halign:"center", align:"left"},
            { title: "Correo", width: 200, dataType: "string", dataIndx: "C14", halign:"center", align:"left"},
            { title: "Unidades", width: 200, dataType: "string", dataIndx: "C15", halign:"center", align:"left"},
            { title: "Estado Cliente", width: 200, dataType: "string", dataIndx: "C16", halign:"center", align:"left"},
            { title: "Estado Conexión", width: 200, dataType: "string", dataIndx: "C17", halign:"center", align:"left"},
            { title: "Medidor", width: 200, dataType: "string", dataIndx: "C18", halign:"center", align:"left"},
            { title: "Marca", width: 200, dataType: "string", dataIndx: "C19", halign:"center", align:"left"},
            { title: "Fecha Instalación", width: 200, dataType: "string", dataIndx: "C20", halign:"center", align:"left"},
            { title: "Tarifa", width: 200, dataType: "string", dataIndx: "C21", halign:"center", align:"left"},
            { title: "Actividad Económica", width: 200, dataType: "string", dataIndx: "C22", halign:"center", align:"left"}
        ];
        
    $grid_datos_propietario = $("#div_datos_propietarios").pqGrid(obj);

     // SELECCIÓN DEL TIPO DE DOCUMENTO
     $("#cb_id_busq").click(function(e){
        e.preventDefault();
        fn_valida_doc();
    });  
    

}




//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_prop_ver()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();	
   $("#div_propietario").show();	
   fn_setea_grid_datos_propietarios();
       	
}