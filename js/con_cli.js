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
var $grid_historico_pagos;
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
var flag_hist_pago_prop = false; 
var flag_informacion_consumo = false;
var flag_convenios_pago = false;
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
            $("#div_concepto_facturar").load("div_dat_concepto_facturar.htm",fn_concepto_facturar);
            flag_concepto_facturar = true;
            console.log("Tag Concepto por facturar Cargado");
        }
        else{
            $("#div_concepto_facturar").load("div_dat_concepto_facturar.htm",fn_concepto_facturar);
        }

        
    });

    //~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*       

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

    $("#btn_convenios_pago").click(function(e){
        e.preventDefault();

        if(!flag_convenios_pago)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_convenios_pago").load("div_dat_convenios_pago.htm",fn_convenios_pago);
            flag_convenios_pago = true;
            console.log("Tag Convenios de Pago Cargado");
        }
        else{
            $("#div_convenios_pago").load("div_dat_convenios_pago.htm",fn_convenios_pago);
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

    $("#btn_ubicacion").click(function(e){
        e.preventDefault();

        if(!flag_dat_sum)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_ubicacion").load("div_dat_ubicacion.htm",fn_ubicacion_ver);
            flag_dat_sum = true;
            console.log("Tag Datos de ubicacion");
        }
        else{
            $("#div_ubicacion").load("div_dat_ubicacion.htm",fn_ubicacion_ver);
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

    $("#btn_historico_pagos").click(function(e){
        e.preventDefault();

        if(!flag_hist_pago_prop)
        {
            // SE CARGA EL HTML DE DIV DE BÚSQUEDA
            $("#div_historico_pagos").load("div_dat_historico_pagos.htm",fn_historico_pagos_ver);
            flag_hist_pago_prop= true;
            console.log("Historico Pagos Tag Cargado");
        }
        else{
            $("#div_historico_pagos").load("div_dat_historico_pagos.htm",fn_historico_pagos_ver);
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
            $("#div_audi_mod").load("div_dat_auditoria.htm",fn_audi_mod_ver);
            flag_audi_mod = true;
            console.log("Deuda Tag Cargado");
        }
        else{
            $("#div_audi_mod").load("div_dat_auditoria.htm",fn_audi_mod_ver);
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

        $("#btn_pagos_aplica").click(function(e){
            e.preventDefault();
    
            if(!flag_pagos_aplicar)
            {
                // SE CARGA EL HTML DE DIV DE BÚSQUEDA
                $("#div_pagos_aplicar").load("div_dat_pagos_aplicar.htm",fn_pagos_aplicar);
                flag_pagos_aplicar = true;
                console.log("Deuda Tag Cargado");
            }
            else{
                $("#div_pagos_aplicar").load("div_dat_pagos_aplicar.htm",fn_pagos_aplicar);
            }
            
                
        });


        $("#btn_pagos_otros").click(function(e){
            e.preventDefault();
    
            if(!flag_pagos_otros)
            {
                // SE CARGA EL HTML DE DIV DE BÚSQUEDA
                $("#div_pagos_otros").load("div_dat_pagos_otros.htm",fn_pagos_otros);
                flag_pagos_otros = true;
                console.log("Deuda Tag Cargado");
            }
            else{
                $("#div_pagos_otros").load("div_dat_pagos_otros.htm",fn_pagos_otros);
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
    
    $("#frm_leer").show();
    $("#nav_ul_opc").show();
    $("#div_prin").show();
    $("#frm_busq").hide();
   

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

function fn_setea_grid_con()
{
//HISTORIAL DE CONSUMOS
    var data = [
        { C1: '08/08/2018'
        , C2: '08/08/2018'
        , C3: 'Ago72018'
        , C4: 'P'
        , C5: '08/08/2018'
        , C6: 'Ago72018'
        , C7: 'P'
        , C9: '08/08/2018'
        , C10: 'Ago72018'
        , C11: 'P'
        , C12: '08/08/2018'
        , C13: 'Ago72018'
        , C14: 'P'
        , C15: '08/08/2018'
        , C16: 'Ago72018'
    }
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
                   { type: "button", label: " Excel", attr:"id=co_excel_con", cls:"btn btn-primary"},
               ]
           }
        };
            
        obj.colModel = [            
            { title: "Fecha Lectura", width: 110, dataType: "string", dataIndx: "C1", halign:"center", align:"left"},
            { title: "Fecha Facturación", width: 110, dataType: "string", dataIndx: "C2", halign:"center", align:"left"},
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


    //EVENTO DBL_CLICK DE LA GRILLA

    

    $grid_con.pqGrid({
        rowDblClick: function( event, ui ) {
            if (ui.rowData)
            {
                var dataCell = ui.rowData;
               
          
                    if(!flag_informacion_consumo)
                {
                    // SE CARGA EL HTML DE DIV DE BÚSQUEDA
                    $("#div_informacion_consumo").load("div_dat_informacion_consumo.htm",fn_informacion_consumo);
                    flag_informacion_consumo = true;
                    console.log("Tag informacion_consumo Cargado");
                }
                else{
                    $("#div_informacion_consumo").load("div_dat_informacion_consumo.htm",fn_informacion_consumo);
                }
            }
        }
    });
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
function fn_setea_grilla_pagos_aplicar(){
	
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
            collapsible: false,
            selectionModel: { type: 'row',mode:'single'}
        };
        
        $grid_aplicar_pagos =$("#grid_pagos_aplicar").pqGrid(obj3);
        $grid_aplicar_pagos.pqGrid( "option", "scrollModel", {horizontal: true} );
        $grid_aplicar_pagos.pqGrid("option", "pageModel.type", {checked:false});
        $( "#grid_pagos_aplicar" ).pqGrid( "option", "showBottom", false );
                    
    }

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










