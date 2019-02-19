var g_modulo="Módulo de Atención al Cliente";
var g_tit = "Consulta de Clientes";
var $grid;
var $grid_eve;
var $grid_fac;
var $grid_con;
var $grid_pag;
var $grid_cor;
var $grid_aju;
var $grid_busq;
var flag_dat_tec;

$(document).ready(function() {

    // SE INICIALIZAN LOS GRIDS
    fn_setea_grid_eve();
    fn_setea_grid_fac();
    fn_setea_grid_con();
    fn_setea_grid_pag();
    fn_setea_grid_cor();
    fn_setea_grid_aju();
    flag_dat_tec = false;
    // SE RECARGAN LOS GRIDS AL SELECCIONAR EL TAB CORRESPONDIENTE
    $(".nav-tabs a").on("shown.bs.tab", function(event){

        var x = $(event.target).prop("href");  // tab activada
        var dato_original = [];
		dato_original = x.split("#");
        x = dato_original[1];
        
        if(x == "tab_eve")
            $grid_eve.pqGrid( "refreshView" );

        if(x == "tab_fac")
            $grid_fac.pqGrid( "refreshView" );

        if(x == "tab_con")
            $grid_con.pqGrid( "refreshView" );

        if(x == "tab_pag")
            $grid_pag.pqGrid( "refreshView" );

        if(x == "tab_cor")
            $grid_cor.pqGrid( "refreshView" );

        if(x == "tab_aju")
            $grid_aju.pqGrid( "refreshView" );
	
    });
    
    // FUNCIONES PARA EL MENU
    (function($){
        $(document).ready(function(){
            $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
                event.preventDefault(); 
                event.stopPropagation(); 
                $(this).parent().siblings().removeClass('open');
                $(this).parent().toggleClass('open');
            });
        });
    })(jQuery);
    
    $('#dropdown').hover(function() {
        $(this).AddClass('open');
      })


    // SE CARGA EL HTML DE DIV DE BÚSQUEDA
    $("#div_busq").load("div_busq.htm",fn_setea_grid_busq);

    

    // SE CARGA EL PIE DE PÁGINA
    $("#div_footer").load("footer.htm");

    // BOTÓN BUSCAR
    $("#co_buscar").click(function(e){
        e.preventDefault();
        fn_show_buscar();
    });

    // OCULTA LA BUSQUEDA Y VUELVE A LA VENTANA PRINCIPAL
     $("#co_volver_bus").click(function(e){
        e.preventDefault();
        fn_hide_buscar();
    });

    $("#div_suministro").load("div_sum.htm");

    $("#btn_Dat_Tec").click(function(e){
        e.preventDefault();

        if(!flag_dat_tec)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_abastece").load("div_dat_tec.htm",fn_modal_ver);
            flag_dat_tec = true;
            console.log("Aqui");
        }
        else{
            fn_modal_ver();
        }
        
            
        });


    $("#btn_sum").on("click", fn_sum_ver);



    var colM =
    [
        { title: "Tipo Agrupación", width: 150, align: "left", dataIndx:"c1",editable: false},        
	
       { title: "Padre", width: 90, align: "center", dataIndx:"c2",editable: false},
	
       { title: "Ruta", width: 140, align: "left", dataIndx:"c3",editable: false},
	
       { title: "Nombre", width: 300, align: "left", dataIndx:"c4",editable: false},
	
       { title: "Tarifa", width: 300, align: "left", dataIndx:"c5",editable: false},
	
       { title: "Actividad",width: 200,align:"left",dataIndx:"c6",editable: false},
	
       { title: "Sector", width: 200, align: "left", dataIndx:"c7",editable: false},
	
       { title: "Finca", width: 200, align: "left", dataIndx:"c8",editable: false}
    
    ];



   var obj =

   {
	
           showTop: false,
	
           height: 100,
	
           showBottom: false,
	
           editable: false,
	
           pageModel: {type:"local", rPP: 500, rPPOptions: [10, 20, 50, 100]},
	
           colModel: colM,        
	
           hwrap:false,
	
           wrap:false,
	
           stripeRows : false,
	
           showHeader: true,
	
           collapsible: false,
	
           hoverMode: "row",
	
           selectionModel: { type: 'row',mode:'single'}
    	
       };  
    	
               
    	
       $grid = $("#grid1").pqGrid(obj);
    	
       $grid.pqGrid( "option", "dataModel", [] );                                
    
       $grid.pqGrid( "refreshDataAndView" );
    
    

   
})
;



//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	
function fn_show_buscar()
{
    // SE MUESTRAN LOS CRITERIOS DE BÚSQUEDA

    $("#frm_leer").hide();
    $("#nav_ul_opc").hide();
    $("#div_prin").hide("blind");
    $("#frm_busq").show();
    $("#div_busq").show();

    $grid_busq.pqGrid( "refreshView" );

}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_hide_buscar()
{
    // SE OCULTAN LOS CRITERIOS DE BÚSQUEDA
    
    $("#frm_busq").hide();
    $("#div_busq").hide();
    $("#div_abastece").hide();
    $("#div_suministro").hide();
    $("#frm_leer").show();
    $("#nav_ul_opc").show();
    $("#div_prin").show();
   

}


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_valida_doc()
{
 
    // SE OCULTAN LOS CRITERIOS DE BÚSQUEDA
    if($("#cb_id_busq").val()=="02")
    {
        $("#div_id_busq").hide();
        $("#div_ced_busq").show();
    }
    else
    {
        $("#div_id_busq").show();
        $("#div_ced_busq").hide();
   }

}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	
function fn_setea_grid_fac()
{
// HISTORIAL DE FACTURACIONES
    var obj = {  
	        height: "100%",
            showTop: true,
			showBottom:true,
            showTitle : false,
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
                   { type: "button", label: " Excel", attr:"id=co_excel_fac", cls:"btn btn-primary"},
               ]
           }
        };
			
		obj.colModel = [            
            { title: "Periodo", width: 110, dataType: "string", dataIndx: "C1", halign:"center", align:"left"},
            { title: "Lectura", width: 110, dataType: "string", dataIndx: "C2", halign:"center", align:"left"},
            { title: "Emisión", width: 110, dataType: "string", dataIndx: "C3", halign:"center", align:"left"},
            { title: "Vencimiento", width: 110, dataType: "string", dataIndx: "C4", halign:"center", align:"left"},
            { title: "Agua", width: 120, dataType: "string", dataIndx: "C5", halign:"center", align:"right"},
            { title: "Compensación y Subsidio", width: 120, dataType: "string",  dataIndx: "C6", halign:"center", align:"right"},
            { title: "Descuento Jubilado", width: 120, dataType: "string", dataIndx: "C7", halign:"center", align:"right"},
            { title: "Alcantarillado", width: 120, dataType: "string", dataIndx: "C8", halign:"center", align:"right"},
            { title: "Recargo", width: 120, dataType: "string", dataIndx: "C9", halign:"center", align:"right"},
            { title: "Saldo Anterior", width: 120, dataType: "string", dataIndx: "C10", halign:"center", align:"right"},
            { title: "Aseo", width: 120, dataType: "string", dataIndx: "C11", halign:"center", align:"right"},
            { title: "Total Documento", width: 120, dataType: "string", dataIndx: "C12", halign:"center", align:"right"}  
        ];
		
    $grid_fac = $("#div_fac").pqGrid(obj);
}


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_setea_grid_con()
{
//HISTORIAL DE CONSUMOS
    var obj = {  
            height: "100%",
            showTop: true,
            showBottom:true,
            showTitle : false,
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
                   { type: "button", label: " Excel", attr:"id=co_excel_con", cls:"btn btn-primary"},
               ]
           }
        };
            
        obj.colModel = [            
            { title: "Lectura", width: 110, dataType: "string", dataIndx: "C1", halign:"center", align:"left"},
            { title: "Facturación", width: 110, dataType: "string", dataIndx: "C2", halign:"center", align:"left"},
            { title: "Periodo", width: 110, dataType: "string", dataIndx: "C3", halign:"center", align:"left"},
            { title: "Clave Facturación", width: 110, dataType: "string", dataIndx: "C4", halign:"center", align:"left"},
            { title: "Medidor", width: 120, dataType: "string", dataIndx: "C5", halign:"center", align:"left"},
            { title: "Medida", width: 120, dataType: "string",  dataIndx: "C6", halign:"center", align:"center"},
            { title: "Lectura1", width: 120, dataType: "string", dataIndx: "C7", halign:"center", align:"right"},
            { title: "Consumo1", width: 120, dataType: "string", dataIndx: "C8", halign:"center", align:"right"},
            { title: "Consumo Facturado", width: 120, dataType: "string", dataIndx: "C9", halign:"center", align:"right"},
            { title: "Importe", width: 120, dataType: "string", dataIndx: "C10", halign:"center", align:"right"},
            { title: "Lectura2", width: 120, dataType: "string", dataIndx: "C11", halign:"center", align:"right"},
            { title: "Consumo2", width: 120, dataType: "string", dataIndx: "C12", halign:"center", align:"right"},
            { title: "Consumo Fijo", width: 120, dataType: "string", dataIndx: "C13", halign:"center", align:"right"},
            { title: "Consumo Remarcadores", width: 120, dataType: "string", dataIndx: "C14", halign:"center", align:"right"},
            { title: "Promedio", width: 120, dataType: "string", dataIndx: "C15", halign:"center", align:"right"},
            { title: "Correlativo", width: 120, dataType: "string", dataIndx: "C16", halign:"center", align:"right"}
        ];
        
    $grid_con = $("#div_con").pqGrid(obj);
}


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_setea_grid_pag()
{ 
// HISTORIAL DE PAGOS
    var obj = {  
            height: "100%",
            showTop: true,
            showBottom:true,
            showTitle : false,
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
                   { type: "button", label: " Excel", attr:"id=co_excel_pag", cls:"btn btn-primary"},
               ]
           }
        };
            
        obj.colModel = [            
            { title: "Fecha Pago", width: 110, dataType: "string", dataIndx: "C1", halign:"center", align:"left"},
            { title: "Fecha Proceso", width: 110, dataType: "string", dataIndx: "C2", halign:"center", align:"left"},
            { title: "Valor", width: 120, dataType: "string", dataIndx: "C3", halign:"center", align:"right"},
            { title: "Tipo Comprobante", width: 240, dataType: "string", dataIndx: "C4", halign:"center", align:"left"},
            { title: "Agencia de Pago", width: 240, dataType: "string", dataIndx: "C5", halign:"center", align:"right"},
            { title: "Cajero", width: 240, dataType: "string",  dataIndx: "C6", halign:"center", align:"left"}
        ];
    


    $grid_pag = $("#div_pag").pqGrid(obj);


    
}


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_setea_grid_cor()
// CORTE Y RESPOSICIÓN

{  
    var obj = {  
            height: "100%",
            showTop: true,
            showBottom:true,
            showTitle : false,
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
                   { type: "button", label: " Excel", attr:"id=co_excel_cor", cls:"btn btn-primary"},
               ]
           }
        };
            
        obj.colModel = [            
            { title: "No. Orden", width: 110, dataType: "string", dataIndx: "C1", halign:"center", align:"left"},
            { title: "Fecha Solicita", width: 110, dataType: "string", dataIndx: "C2", halign:"center", align:"left"},
            { title: "Rol Solicita", width: 200, dataType: "string", dataIndx: "C3", halign:"center", align:"left"},
            { title: "Fecha Genera", width: 110, dataType: "string", dataIndx: "C4", halign:"center", align:"left"},
            { title: "Rol Genera", width: 200, dataType: "string", dataIndx: "C5", halign:"center", align:"left"},
            { title: "Fecha Ejecuta", width: 110, dataType: "string",  dataIndx: "C6", halign:"center", align:"left"},
            { title: "Rol Ejecuta", width: 200, dataType: "string",  dataIndx: "C7", halign:"center", align:"left"},
            { title: "Fecha Cierre", width: 110, dataType: "string",  dataIndx: "C8", halign:"center", align:"left"},
            { title: "Rol Cierre", width: 200, dataType: "string",  dataIndx: "C9", halign:"center", align:"left"},
            { title: "Evento", width: 120, dataType: "string",  dataIndx: "C10", halign:"center", align:"left"},
            { title: "Motivo", width: 240, dataType: "string",  dataIndx: "C11", halign:"center", align:"left"},
            { title: "Instancia", width: 240, dataType: "string",  dataIndx: "C12", halign:"center", align:"left"},
            { title: "Situación Encontrada", width: 240, dataType: "string",  dataIndx: "C13", halign:"center", align:"left"},
            { title: "Acción Realizada", width: 240, dataType: "string",  dataIndx: "C14", halign:"center", align:"left"},
            { title: "Lectura", width: 110, dataType: "string",  dataIndx: "C15", halign:"center", align:"right"},
            { title: "Ejecutor", width: 240, dataType: "string",  dataIndx: "C16", halign:"center", align:"left"}
        ];
        
    $grid_cor = $("#div_cor").pqGrid(obj);
}


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_setea_grid_aju()
// AJUSTES

{  
    var obj = {  
            height: "100%",
            showTop: true,
            showBottom:true,
            showTitle : false,
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
                   { type: "button", label: " Excel", attr:"id=co_excel_aju", cls:"btn btn-primary"},
               ]
           }
        };
            
        obj.colModel = [            
            { title: "No. Ajuste", width: 110, dataType: "string", dataIndx: "C1", halign:"center", align:"left"},
            { title: "Fecha Ingreso", width: 110, dataType: "string", dataIndx: "C2", halign:"center", align:"left"},
            { title: "Fecha Aprobación", width: 110, dataType: "string", dataIndx: "C3", halign:"center", align:"left"},
            { title: "Rol Aprueba", width: 220, dataType: "string", dataIndx: "C4", halign:"center", align:"left"},
            { title: "Valor", width: 120, dataType: "string", dataIndx: "C5", halign:"center", align:"right"},
            { title: "Tipo Ajuste", width: 240, dataType: "string", dataIndx: "C6", halign:"center", align:"left"},
            { title: "Motivo", width: 240, dataType: "string",  dataIndx: "C7", halign:"center", align:"left"},
            { title: "Factura Original", width: 110, dataType: "string", dataIndx: "C8", halign:"center", align:"left"},
            { title: "Documento Original", width: 110, dataType: "string", dataIndx: "C9", halign:"center", align:"right"}
        ];
        
    $grid_aju = $("#div_aju").pqGrid(obj);
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_setea_grid_eve()
// EVENTOS

{  
    var obj = {  
            height: "100%",
            showTop: true,
            showBottom:true,
            showTitle : false,
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
                   { type: "button", label: " Excel", attr:"id=co_excel_eve", cls:"btn btn-primary"},
               ]
           }
        };
            
        obj.colModel = [            
            { title: "Tipo", width: 140, dataType: "string", dataIndx: "C1", halign:"center", align:"left"},
            { title: "SubTipo", width: 140, dataType: "string", dataIndx: "C2", halign:"center", align:"left"},
            { title: "No. Orden", width: 110, dataType: "string", dataIndx: "C3", halign:"center", align:"left"},
            { title: "Inicio", width: 120, dataType: "string", dataIndx: "C4", halign:"center", align:"left"},
            { title: "Referencia", width: 180, dataType: "string", dataIndx: "C5", halign:"center", align:"left"},
            { title: "Creador", width: 240, dataType: "string", dataIndx: "C6", halign:"center", align:"left"},
            { title: "Área", width: 200, dataType: "string",  dataIndx: "C7", halign:"center", align:"left"},
            { title: "Etapa", width: 200, dataType: "string", dataIndx: "C8", halign:"center", align:"left"},
            { title: "Receptor", width: 180, dataType: "string", dataIndx: "C9", halign:"center", align:"left"},
            { title: "Atención", width: 110, dataType: "string", dataIndx: "C10", halign:"center", align:"right"},
            { title: "Contratista", width: 200, dataType: "string", dataIndx: "C11", halign:"center", align:"left"},
            { title: "Ejecutor", width: 200, dataType: "string", dataIndx: "C12", halign:"center", align:"left"}
        ];
        
    $grid_eve = $("#div_eve").pqGrid(obj);
}


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_setea_grid_busq()
// BÚSQUEDA DE CLIENTES

{  

    $("#div_gr_busq").addClass("gr-con");

    var obj = {  
            height: "100%",
            showTop: true,
            showBottom:true,
            showTitle : true,
            title: "Resultado de la Consulta",
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
        
    $grid_busq = $("#div_gr_busq").pqGrid(obj);

     // SELECCIÓN DEL TIPO DE DOCUMENTO
     $("#cb_id_busq").click(function(e){
        e.preventDefault();
        fn_valida_doc();
    });  
    

}
	
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_modal_ver()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_busq").show();	
   $("#div_abastece").show();	
   $("#div_suministro").hide();	
       	
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_sum_ver()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_busq").show();	
   $("#div_abastece").hide();	
   $("#div_suministro").show();	
       	
}

