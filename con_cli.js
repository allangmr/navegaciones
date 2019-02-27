var g_modulo="Módulo de Atención al Cliente";
var g_tit = "Consulta de Clientes";
var $grid;
var $grid_selector_deuda;
var $grid_eve;
var $grid_fac;
var $grid_madre;
var $contrato_madre =1;
var $grid_con;
var $grid_pag;
var $grid_cor;
var $grid_aju;
var $grid_busq;
var $grid_deudatotal;
var $grid_audi_mod;
var $grid_cargo_fac;
var $grid_contrato_madre;
var $grid_medidor_reg;
var $grid_historico_medidores;
var $grid_concepto_facturar;
var $grid_contrato_madre; 
var $grid_historial_subsidio;
var $grid_historial_aseo;
var $grid_contador_agua;
var $grid_conceptos_facturados;
var $gridCorte;
var opcion;
var flag_dat_tec =  false;
var flag_dat_sum = false;
var flag_dat_prop = false;
var flag_fac_cont = false;
var flag_med_prop = false;
var flag_deuda_prop = false;
var flag_audi_mod = false;
var flag_hist_med_prop = false;
var flag_concepto_facturar = false;
var flag_contrato_madre = false;
var flag_historial_subsidio = false;
var flag_historial_aseo = false;
var flag_informacion_factura = false;
$(document).ready(function() {

    // SE INICIALIZAN LOS GRIDS
    fn_setea_grid_eve();
    fn_setea_grid_fac();
    fn_setea_grid_con();
    fn_setea_grid_pag();
    fn_setea_grid_cor();
    fn_setea_grid_aju();
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

    $("#btn_concepto_facturar").click(function(e){
        e.preventDefault();

        if(!flag_concepto_facturar)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_concepto_facturar").load("div_dat_concepto_facturar.htm#top",fn_concepto_facturar);
            flag_concepto_facturar = true;
            console.log("Tag Concepto por facturar Cargado");
        }
        else{
            $("#div_concepto_facturar").load("div_dat_concepto_facturar.htm#top",fn_concepto_facturar);
        }
        
        
    });

    $("#btn_info_factura").click(function(e){
        e.preventDefault();

        if(!flag_informacion_factura)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_informacion_factura").load("div_dat_informacion_factura.htm",fn_informacion_factura);
            flag_informacion_factura = true;
            console.log("Tag Concepto por facturar Cargado");
        }
        else{
            $("#div_informacion_factura").load("div_dat_informacion_factura.htm",fn_informacion_factura);
        }
        
        
    });

    
    $("#btn_historial_subsidio").click(function(e){
        e.preventDefault();

        if(!flag_historial_subsidio)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_historial_subsidio").load("div_dat_historial_subsidio.htm",fn_historial_subsidio);
            flag_historial_subsidio = true;
            console.log("Tag Historial Subsidio Cargado");
        }
        else{
            $("#div_historial_subsidio").load("div_dat_historial_subsidio.htm",fn_historial_subsidio);
        }
        
        
    });


    $("#btn_Dat_Tec").click(function(e){
        e.preventDefault();

        if(!flag_dat_tec)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_abastece").load("div_dat_tec.htm",fn_modal_ver);
            flag_dat_tec = true;
            console.log("Tag Datos Tecnicos Cargado");
        }
        else{
            $("#div_abastece").load("div_dat_tec.htm",fn_modal_ver);
        }
        
        
    });

    $("#btn_contrato_madre").click(function(e){
        e.preventDefault();

        if(!flag_contrato_madre)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_contrato_madre").load("div_dat_contrato_madre.htm",fn_contrato_madre);
            flag_contrato_madre = true;
            console.log("Tag Contrato Madre Cargado");
        }
        else{
            $("#div_contrato_madre").load("div_dat_contrato_madre.htm",fn_contrato_madre);
        }
        
        
    });

    $("#btn_sum").click(function(e){
        e.preventDefault();

        if(!flag_dat_sum)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_suministro").load("div_dat_sum.htm",fn_sum_ver);
            flag_dat_sum = true;
            console.log("Tag Datos de Suministro");
        }
        else{
            $("#div_suministro").load("div_dat_sum.htm",fn_sum_ver);
        }
    
        
    });
    $("#btn_propietario").click(function(e){
        e.preventDefault();

        if(!flag_dat_prop)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_propietario").load("div_dat_propietario.htm",fn_prop_ver);
            flag_dat_prop= true;
            console.log("Propietario Tag Cargado");
        }
        else{
            $("#div_propietario").load("div_dat_propietario.htm",fn_prop_ver);
        }
        
            
    });


    $("#btn_medidor").click(function(e){
        e.preventDefault();

        if(!flag_med_prop)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_medidor").load("div_dat_med.htm",fn_med_ver);
            flag_med_prop= true;
            console.log("Medidor Tag Cargado");
        }
        else{
            $("#div_medidor").load("div_dat_medidor.htm",fn_med_ver);
        }
        
            
    });

    $("#btn_historico_medidores").click(function(e){
        e.preventDefault();

        if(!flag_hist_med_prop)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_historico_medidores").load("div_dat_historico_medidores.htm",fn_historico_medidores_ver);
            flag_hist_med_prop= true;
            console.log("Historico Medidores Tag Cargado");
        }
        else{
            $("#div_historico_medidores").load("div_dat_historico_medidores.htm",fn_historico_medidores_ver);
        }
        
            
    });

    $("#btn_historial_aseo").click(function(e){
        e.preventDefault();

        if(!flag_historial_aseo)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_historial_aseo").load("div_dat_historial_aseo.htm",fn_historial_aseo);
            flag_historial_aseo= true;
            console.log("Historial Aseo Tag Cargado");
        }
        else{
            $("#div_historial_aseo").load("div_dat_historial_aseo.htm",fn_historial_aseo);
        }
        
            
    });

    $("#btn_deuda").click(function(e){
        e.preventDefault();

        if(!flag_deuda_prop)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_deuda").load("div_dat_deuda.htm",fn_deuda_ver);
            flag_deuda_prop= true;
            console.log("Deuda Tag Cargado");
        }
        else{
            $("#div_deuda").load("div_dat_deuda.htm",fn_deuda_ver);
        }
        
            
    });

    $("#btn_audi_mod").click(function(e){
        e.preventDefault();

        if(!flag_audi_mod)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_audi_mod").load("div_audi_mod.htm",fn_audi_mod_ver);
            flag_audi_mod = true;
            console.log("Deuda Tag Cargado");
        }
        else{
            $("#div_audi_mod").load("div_audi_mod.htm",fn_audi_mod_ver);
        }
        
            
    });
    
        $("#btn_fact_cont").click(function(e){
            e.preventDefault();

            if(!flag_fac_cont)
            {
                // SE CARGA EL HTML DE DIV DE BÚSQUEDA
                $("#div_fact_cont").load("div_dat_fact.htm",fn_fac_cont);
                flag_fac_cont= true;
                console.log("Aqui");
            }
            else{
                $("#div_fact_cont").load("div_dat_fact.htm",fn_fac_cont);
            }
                            
        });
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
            title:"Agrupaciones",
	
           height: 150,
	
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
    $("#div_propietario").hide();
    $("#div_fact_cont").hide();
    $("#div_deuda").hide();
    $("#div_medidor").hide();
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
function fn_setea_grid_madre()
{

           // HISTORIAL DE FACTURACIONES
           var obj = {  
            height: "200",
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
        };
            
        obj.colModel = [            
            { title: "Tipo de Agrupacion", width: 110, dataType: "string", dataIndx: "C1", halign:"center", align:"left"},
            { title: "Padre", width: 110, dataType: "string", dataIndx: "C2", halign:"center", align:"left"},
            { title: "Ruta", width: 110, dataType: "string", dataIndx: "C3", halign:"center", align:"left"},
            { title: "Nombre", width: 110, dataType: "string", dataIndx: "C4", halign:"center", align:"left"},
            { title: "Tarifa", width: 120, dataType: "string", dataIndx: "C5", halign:"center", align:"right"}
        ];
        $grid_madre = $("#div_madre").pqGrid(obj);




}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	
function fn_setea_grid_fac()
{
    // HISTORIAL DE FACTURACIONES
    var data = [
        { Periodo: 1, Lectura: 'Exxon Mobil', Emisión: 339938.0, Vencimiento: 36130.0, Agua: 5.68, Compensacion:0.00, Jubilado:0.00, Alcantarillado:0.00, Recargo:0.57, Saldo:0.00, Aseo:0.00, Total:0.00 }
    ];
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
            dataModel: {
                data: data,
                paging: "local",
                location: "local",
                sorting: "local",
                sortDir: "up"
            },
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
            { title: "Periodo", width: 110, dataType: "string", dataIndx: "Periodo", halign:"center", align:"left"},
            { title: "Lectura", width: 110, dataType: "string", dataIndx: "Lectura", halign:"center", align:"left"},
            { title: "Emisión", width: 110, dataType: "string", dataIndx: "Emision", halign:"center", align:"left"},
            { title: "Vencimiento", width: 110, dataType: "string", dataIndx: "Vencimiento", halign:"center", align:"left"},
            { title: "Agua", width: 120, dataType: "string", dataIndx: "Agua", halign:"center", align:"right"},
            { title: "Compensación y Subsidio", width: 120, dataType: "string",  dataIndx: "Compensacion", halign:"center", align:"right"},
            { title: "Descuento Jubilado", width: 120, dataType: "string", dataIndx: "Descuento", halign:"center", align:"right"},
            { title: "Alcantarillado", width: 120, dataType: "string", dataIndx: "Alcantarillado", halign:"center", align:"right"},
            { title: "Recargo", width: 120, dataType: "string", dataIndx: "Recargo", halign:"center", align:"right"},
            { title: "Saldo Anterior", width: 120, dataType: "string", dataIndx: "Saldo", halign:"center", align:"right"},
            { title: "Aseo", width: 120, dataType: "string", dataIndx: "Aseo", halign:"center", align:"right"},
            { title: "Total Documento", width: 120, dataType: "string", dataIndx: "Total", halign:"center", align:"right"}  
        ];
		
    $grid_fac = $("#div_fac").pqGrid(obj);

    //EVENTO DBL_CLICK DE LA GRILLA
    $grid_fac.pqGrid({
    rowDblClick: function( event, ui ) {
    if (ui.rowData)
    {
    var dataCell = ui.rowData;
    $("#div_informacion_factura").load("div_dat_informacion_factura.htm",fn_informacion_factura);	
    $(window).scrollTop(0);
    }
    }
    });
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
function fn_setea_conceptos_facturados_if()
// BÚSQUEDA DE CLIENTES

{  

    var obj0 = {
        width:'100%',
        height:250,
        title: "Detalle de los Conceptos Facturados",
        rowBorders: true,
        editable: false,
        scrollModel:{theme:true},
        colModel:
        [
            { title: "Periodo", width: "15%", dataType: "string", dataIndx: "medidor", halign:"center", align:"left"},
            { title: "Cargo", width: "15%", dataType: "string", dataIndx: "C2", halign:"center", align:"left"},
            { title: "Descripción", width: "35%", dataType: "string", dataIndx: "C3", halign:"center", align:"left"},
            { title: "Unidad", width: "15%", dataType: "string", dataIndx: "C4", halign:"center", align:"left"},
            { title: "Valor", width: "20%", dataType: "string", dataIndx: "C5", halign:"center", align:"left"}
        ],
        dataModel: {
            paging: "local",
            location: "local",
            sorting: "local",
            sortDir: "up"
        },
        collapsible: false,
        selectionModel: { type: 'row',mode:'single'},
        filterModel: { on: true, mode: "OR" }
    };
    
    $grid_conceptos_facturados =$("#grid_conceptos_facturados").pqGrid(obj0);
    $grid_conceptos_facturados.pqGrid( "option", "scrollModel", {horizontal: true} );
    $grid_conceptos_facturados.pqGrid("option", "pageModel.type", {checked:false});
    $( "#grid_conceptos_facturados" ).pqGrid( "option", "showBottom", false );

}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_setea_contador_agua_if()
// BÚSQUEDA DE CLIENTES

{  

    var obj0 = {
        width:'100%',
        height:250,
        title: "Información del Contador de Agua",
        rowBorders: true,
        editable: false,
        scrollModel:{theme:true},
        colModel:
        [
            { title: "N° Medidor", width: "20%", dataType: "string", dataIndx: "medidor", halign:"center", align:"left"},
            { title: "Marca", width: "20%", dataType: "string", dataIndx: "C2", halign:"center", align:"left"},
            { title: "Tipo Medida", width: "20%", dataType: "string", dataIndx: "C3", halign:"center", align:"left"},
            { title: "Modelo", width: "20%", dataType: "string", dataIndx: "C4", halign:"center", align:"left"},
            { title: "Diámetro", width: "20%", dataType: "string", dataIndx: "C5", halign:"center", align:"left"}
        ],
        dataModel: {
            paging: "local",
            location: "local",
            sorting: "local",
            sortDir: "up"
        },
        collapsible: false,
        selectionModel: { type: 'row',mode:'single'},
        filterModel: { on: true, mode: "OR" }
    };
    
    $grid_contador_agua =$("#grid_contador_agua").pqGrid(obj0);
    $grid_contador_agua.pqGrid( "option", "scrollModel", {horizontal: true} );
    $grid_contador_agua.pqGrid("option", "pageModel.type", {checked:false});
    $( "#grid_contador_agua" ).pqGrid( "option", "showBottom", false );

}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*   
function fn_setea_grill_resumen_deuda(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj0 = {
            width:'100%',
            height:250,
            title: "Resumen de la Deuda por Cargo -  Cuenta # - USUARIO",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Descripci&#243;n", width: "53%", align: "center", dataIndx:"C3"},
                { title: "Convenido", width: "23%", align: "center", dataIndx:"C2"},
                { title: "Monto", width: "23%", align: "center", dataIndx:"C4"}
            ],
            dataModel: {
                paging: "local",
                location: "local",
                sorting: "local",
                sortDir: "up"
            },
            collapsible: false,
            selectionModel: { type: 'row',mode:'single'},
            filterModel: { on: true, mode: "OR" },
            toolbar: {
                cls: 'pq-toolbar-export',
                items: [
                    { type: 'button', attr:'id=co_deuda', cls:"btn btn-primary" },
                    { type: 'button', attr:'id=co_estado', cls:"btn btn-primary" },				
                    { type: "button",attr:'id=co_excel', cls:"btn btn-primary"}
                ]
            }
        };
        
        $grid_deudatotal =$("#grid_deudatotal").pqGrid(obj0);
        $grid_deudatotal.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_deudatotal.pqGrid("option", "pageModel.type", {checked:false});
        $( "#grid_deudatotal" ).pqGrid( "option", "showBottom", false );
            
        
    }
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*   
function fn_setea_grillaaudimod(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj0 = {
            width:'100%',
            height:250,
            title: "Auditoria de Modificaciones -  Cuenta # - USUARIO",
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
function fn_setea_grilla_corte_y_reposicion(){
	
    var obj = {
        width:'100%',
		height:200,
        rowBorders:true,
        title:"Corte y Reposición",
        editable: false,
        colModel:
        [
            { title: "Solicitud", width: 130, align: "left", dataIndx:"C1"},
            { title: "Generaci&#243;n", width: 130, align: "left", dataIndx:"C2"},
			{ title: "Ejecuci&#243;n", width: 130, align: "left", dataIndx:"C3"},
			{ title: "Cierre", width: 130, align: "left", dataIndx:"C4"},
            { title: "Evento", width: 120, align: "left", dataIndx:"C5"},
            { title: "Motivo", width: 120, dataIndx:"C6"},
            { title: "Instancia", width: 150, align: "left", dataIndx:"C7"},
			{ title: "Sit. Encontrada", width: 150, align: "left", dataIndx:"C8"},
			{ title: "Acci&#243;n Realizada", width: 170, align: "center", dataIndx:"C9"},
            { title: "Fun", width: 100, align: "left", dataIndx:"C10"},
            { title: "Corte &#201;xito", width: 100, dataIndx:"C11"},
            { title: "Ejecutor", width: 100, align: "left", dataIndx:"C12" },
			{ title: "Nombre Ejecutor", width: 150, align: "left", dataIndx:"C13"},
			{ title: "Lectura", width: 100, align: "center", dataIndx:"C14"},
            { title: "Sello Inst.", width: 100, align: "center", dataIndx:"C15"},
            { title: "Sello Ret.", width: 100, align: "center", dataIndx:"C16"}
        ],
        dataModel: {
			paging: "local",
            location: "local",
            sorting: "local",
            sortDir: "up"
        },
        collapsible: false,
        selectionModel: { type: 'row',mode:'single'},
    };
	
    $gridCorte =$("#grid_corte").pqGrid(obj);
    $gridCorte.pqGrid( "option", "scrollModel", {horizontal: true} );

		
	
}
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*   

function fn_setea_grilla_deuda_por_cargo(){
    
    var obj2 = {
        width:'100%',
        height:270,
        title:"Detalle de la Deuda por Cargo",
		rowBorders:true,
        editable: false,
        colModel:
        [           
            { title: "Código", width: 0, dataIndx:"rank",hidden: true},
            { title: "Descripción", width: "40%", align: "left", dataIndx:"C3" },
			{ title: "Monto", width: "11%", align: "right", dataIndx:"C4"},
			{ title: "Fecha", width: "11%", align: "center", dataIndx:"C5"},
            { title: "Periodo", width: "11%", align: "center", dataIndx:"C6"},
            { title: "Convenido", width: "11%", align: "center", dataIndx:"C7"}
        ],
        dataModel: {
			paging: "local",
            location: "local",
            sorting: "local",
            sortDir: "up"
        },
        collapsible: false,
        selectionModel: { type: 'row',mode:'single'},
		filterModel: { mode: 'OR' },
		toolbar: {
            cls: 'pq-toolbar-export',
            items: [
				{ type: "<span style='margin:5px;'>Buscar   :</span>" },
                { type: "select", style: "margin:0px 5px;", cls: "filterCondition",
                    options: [
						{"*** TODOS ***":"*** TODOS ***"},
						{"1":"IDAAN"},
						{"2":"ASEO"}						
                    ]
                }
            ]
        }
    };
	
	
	$grid_selector_deuda = $("#grid_selection_checkbox").pqGrid(obj2);
	
	$grid_selector_deuda.pqGrid( "option", "scrollModel", {horizontal: true} );
}

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
function fn_setea_grilla_historico_medidores(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            width:'100%',
            height:400,
            title: "Histórico de medidores del suministro Nº 11",
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
        
        $grid_historico_medidores =$("#grid_historico_medidores").pqGrid(obj3);
        $grid_historico_medidores.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_historico_medidores.pqGrid("option", "pageModel.type", {checked:false});
        $( "#grid_historico_medidores" ).pqGrid( "option", "showBottom", false );
            
        
    }

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	

function fn_setea_concepto_facturar(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            width:'100%',
            height:400,
            title: "Conceptos Pendientes por Facturar [Cliente: 697588 – TORRE GLOBAL BANK]",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Nº", width: 80, align: "center",dataIndx:"c1", editable: false},
                { title: "Concepto", width: 80, align: "left" ,dataIndx:"c2", editable: false},
                { title: "Ingreso", width: 120, align: "center" ,dataIndx:"c3", editable: false},
                { title: "Cuotas", width: 80, align: "left" ,dataIndx:"c4", editable: false},
                { title: "Valor Cuota", width: 100, align: "left" ,dataIndx:"c5", editable: false},
                { title: "Valor Ult. Cuota", width: 120, align: "left" ,dataIndx:"c6", editable: false},
                { title: "Pend. Facturar", width: 140, align: "left" ,dataIndx:"c7", editable: false},
                { title: "Valor Total Inicial", width: 80, align: "center" ,dataIndx:"c8", editable: false},
                { title: "Tipo Medida", width: 140, align: "left" ,dataIndx:"c9", editable: false},
                { title: "Origen", width: 80, align: "center" ,dataIndx:"c10", editable: false},
                { title: "Observacion", width: 120, align: "center" ,dataIndx:"c11", editable: false}
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
                    { type: "button",attr:'id=co_excel_concepto_facturar', cls:"btn btn-primary"}
                ]
            }
        };
        
        $grid_concepto_facturar =$("#grid_concepto_facturar").pqGrid(obj3);
        $grid_concepto_facturar.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_concepto_facturar.pqGrid("option", "pageModel.type", {checked:false});
        $( "#grid_concepto_facturar" ).pqGrid( "option", "showBottom", false );
            
        
    }

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	

function fn_setea_contrato_madre(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            width:'100%',
            height:400,
            title: "Clientes Asociados a Contrato Madre [Cliente: 697588 – TORRE GLOBAL BANK]",
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

    function fn_setea_historial_subsidio(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            width:'100%',
            height:400,
            title: "Historial de Subsidio por Caso Social [Cliente: 697588 – TORRE GLOBAL BANK]",
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

function fn_setea_historial_aseo(){
	
    /**- Cuenta N&#176;: <%=Request("Suministro")%> **/
        var obj3 = {
            width:'100%',
            height:400,
            title: "Historial de Movimientos de Aseo [Cliente: 697588 – TORRE GLOBAL BANK]",
            rowBorders: true,
            editable: false,
            scrollModel:{theme:true},
            colModel:
            [
                { title: "Empresa", width: 180, align: "center",dataIndx:"empresa", editable: false},
                { title: "Fecha", width: 120, align: "left" ,dataIndx:"fecha", editable: false},
                { title: "Tipo Mov.", width: 150, align: "center" ,dataIndx:"tipo_mov", editable: false},
                { title: "Valor", width: 110, align: "left" ,dataIndx:"valor", editable: false},
                { title: "Cantidad", width: 100, align: "left" ,dataIndx:"cantidad", editable: false},
                { title: "Cargo", width: 120, align: "left" ,dataIndx:"cargo", editable: false},
                { title: "Observacion", width: 280, align: "center" ,dataIndx:"observacion", editable: false},
                { title: "Rol", width: 120, align: "left" ,dataIndx:"rol", editable: false},
                { title: "Nombre", width: 240, align: "left" ,dataIndx:"nombre", editable: false},
                { title: "Ip", width: 120, align: "center" ,dataIndx:"ip", editable: false}
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
                    { type: "button",attr:'id=co_excel_historial_aseo', cls:"btn btn-primary"}
                ]
            }
        };
        
        $grid_historial_aseo =$("#grid_historial_aseo").pqGrid(obj3);
        $grid_historial_aseo.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_historial_aseo.pqGrid("option", "pageModel.type", {checked:false});
        $("#grid_historial_aseo" ).pqGrid( "option", "showBottom", false );
            
        
    }
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	
function fn_subir_body(){  //referimos el elemento ( clase o identificador de acción )
    $('html, body').animate({scrollTop:0}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
    return false;
};


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	
function fn_modal_ver()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();	
   $("#div_abastece").show();	
   $("#div_propietario").hide();
   $("#div_deuda").hide();
   $("#div_informacion_factura").hide();
   $("#div_suministro").hide();
   $("#div_historico_medidores").hide();
   $("#div_historial_aseo").hide();
   $("#div_concepto_facturar").hide();
   $("#div_contrato_show").hide();
   $("#div_historial_subsidio").hide();

       	
}


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_sum_ver()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_suministro").show();	
   $("#div_propietario").hide();
   $("#div_deuda").hide();
   $("#div_informacion_factura").hide();
   $("#div_abastece").hide();
   $("#div_historico_medidores").hide();
   $("#div_historial_aseo").hide();
   $("#div_concepto_facturar").hide();
   $("#div_contrato_show").hide();
   $("#div_historial_subsidio").hide();

   if($contrato_madre>=1)
   {
     fn_setea_grid_madre();
   }
 	
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_prop_ver()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();	
   $("#div_propietario").show();	
   $("#div_suministro").hide();
   $("#div_deuda").hide();
   $("#div_abastece").hide();
   $("#div_informacion_factura").hide();
   $("#div_historico_medidores").hide();
   $("#div_historial_aseo").hide();
   $("#div_concepto_facturar").hide();
   $("#div_contrato_show").hide();
   $("#div_historial_subsidio").hide();

       	
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_fac_cont()	
{
    $("#frm_leer").hide();	
    $("#nav_ul_opc").hide();	
    $("#div_prin").hide("blind");
    $("#frm_volver").show();
    $("#div_propietario").hide();
    $("#div_fact_cont").show();	
    $("#div_suministro").hide();
    $("#div_deuda").hide();
    $("#div_informacion_factura").hide();
    $("#div_abastece").hide();
    $("#div_historico_medidores").hide();
    $("#div_concepto_facturar").hide();
    $("#div_contrato_show").hide();
    $("#div_historial_subsidio").hide();
    $("#div_historial_aseo").hide();
    fn_setea_grilla_medidor_reg();
    fn_setea_grilla_cargo_fac();
}


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_med_ver()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_propietario").hide();	
   $("#div_suministro").hide();
   $("#div_abastece").hide();
   $("#div_deuda").hide();
   $("#div_medidor").show();
   $("#div_informacion_factura").hide();
   $("#div_historico_medidores").hide();
   $("#div_historial_aseo").hide();	
   $("#div_concepto_facturar").hide();
   $("#div_contrato_show").hide();
   $("#div_historial_subsidio").hide();

       	
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_deuda_ver()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_suministro").hide();	
   $("#div_propietario").hide();
   $("#div_abastece").hide();
   $("#div_deuda").show();
   $("#div_informacion_factura").hide();
   $("#div_historico_medidores").hide();
   $("#div_concepto_facturar").hide();
   $("#div_contrato_show").hide();
   $("#div_historial_subsidio").hide();
   $("#div_historial_aseo").hide();
   fn_setea_grill_resumen_deuda();
   fn_setea_grilla_corte_y_reposicion();
   fn_setea_grilla_deuda_por_cargo();
   $("#co_deuda").html("<span class='glyphicon glyphicon-file'></span>&#218;lt. Deuda H2O ");
   $("#co_estado").html("<span class='glyphicon glyphicon-duplicate'></span> Estado de Cuenta"); 
   $("#co_excel").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
 	
}


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_historico_medidores_ver()	
{
    $("#frm_leer").hide();	
    $("#nav_ul_opc").hide();	
    $("#div_prin").hide("blind");	
    $("#frm_volver").show();	
    $("#div_suministro").hide();	
    $("#div_propietario").hide();
    $("#div_abastece").hide();
    $("#div_deuda").hide();
    $("#div_informacion_factura").hide();
    $("#div_historico_medidores").show();
    $("#div_concepto_facturar").hide();
    $("#div_contrato_show").hide();
    $("#div_historial_subsidio").hide();
    $("#div_historial_aseo").hide();
    fn_setea_grilla_historico_medidores();
    $("#co_excel").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_audi_mod_ver()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_suministro").hide();	
   $("#div_propietario").hide();
   $("#div_abastece").hide();
   $("#div_deuda").hide();
   $("#div_informacion_factura").hide();
   $("#div_historico_medidores").hide();
   $("#div_audi_mod").show();
   $("#div_concepto_facturar").hide();
   $("#div_historial_subsidio").hide();
   $("#div_historial_aseo").hide();
   $("#div_contrato_show").hide();
   fn_setea_grillaaudimod();
   $("#co_excel_audi").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_contrato_madre()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_suministro").hide();	
   $("#div_propietario").hide();
   $("#div_abastece").hide();
   $("#div_deuda").hide();
   $("#div_informacion_factura").hide();
   $("#div_historico_medidores").hide();
   $("#div_audi_mod").hide();
   $("#div_concepto_facturar").hide();
   $("#div_historial_subsidio").hide();
   $("#div_historial_aseo").hide();
   $("#div_contrato_madre").show();
   fn_setea_contrato_madre();
   $("#co_excel_contrato_madre").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_historial_subsidio()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_suministro").hide();	
   $("#div_propietario").hide();
   $("#div_abastece").hide();
   $("#div_deuda").hide();
   $("#div_historico_medidores").hide();
   $("#div_audi_mod").hide();
   $("#div_informacion_factura").hide();
   $("#div_concepto_facturar").hide();
   $("#div_historial_subsidio").show();
   $("#div_historial_aseo").hide();
   $("#div_contrato_madre").hide();
   fn_setea_historial_subsidio();
   $("#co_excel_historial_subsidio").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_historial_aseo()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_suministro").hide();	
   $("#div_propietario").hide();
   $("#div_abastece").hide();
   $("#div_deuda").hide();
   $("#div_historico_medidores").hide();
   $("#div_audi_mod").hide();
   $("#div_informacion_factura").hide();
   $("#div_concepto_facturar").hide();
   $("#div_historial_subsidio").hide();
   $("#div_historial_aseo").show();
   $("#div_contrato_madre").hide();
   fn_setea_historial_aseo();
   $("#co_excel_historial_aseo").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_informacion_factura()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_suministro").hide();	
   $("#div_propietario").hide();
   $("#div_abastece").hide();
   $("#div_deuda").hide();
   $("#div_historico_medidores").hide();
   $("#div_audi_mod").hide();
   $("#div_concepto_facturar").hide();
   $("#div_historial_subsidio").hide();
   $("#div_historial_aseo").hide();
   $("#div_contrato_madre").hide();
   $("#div_informacion_factura").show();
   fn_setea_contador_agua_if();
   fn_setea_conceptos_facturados_if();
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*        	
function fn_concepto_facturar()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_suministro").hide();	
   $("#div_propietario").hide();
   $("#div_abastece").hide();
   $("#div_deuda").hide();
   $("#div_historico_medidores").hide();
   $("#div_audi_mod").hide();
   $("#div_concepto_facturar").show();
   $("#div_historial_aseo").hide();
   $("#div_contrato_show").hide();
   $("#div_informacion_factura").hide();
   fn_setea_concepto_facturar();
   $("#co_excel_concepto_facturar").html("<span class='glyphicon glyphicon-save'></span> Exportar Excel");
}
