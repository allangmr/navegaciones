
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	
     	

var g_modulo="Cartera Morosa";
var g_tit="Consulta de Convenio de Pago";
var g_simb;
var $grid;
var $grid_pago;
var DatoOriginal = [];
var grilla_prin = [];
var grilla_pago = [];
var cuo_ini_cal, nro_cuo_cal, vlr_cuo_cal;

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	
function fn_setea_grid_documentos()
{   
	grilla_prin = [
        { title: "Tipo", width: 120, dataType: "string", dataIndx: "c1", halign:"center", align:"center"},
        { title: "N ° Documento", width: 150, dataType: "string", dataIndx: "c2", halign:"center", align:"left" },
        { title: "Periodo", width: 300, dataType: "string", dataIndx: "c3", halign:"center", align:"left" },
        { title: "Emisión", width: 470, dataType: "string", dataIndx: "c4", halign:"center", align:"left" },
        { title: "Importe", width: 200, dataType: "string", dataIndx: "c5", halign:"center", align:"left" },
        { title: "Tarifa", width: 150, dataType: "string", dataIndx: "c6", halign:"center", align:"right" }
    ];
	
    var obj = {
        height: 350,
        showTop: true,
        showHeader: true,
        roundCorners: true,
        rowBorders: true,
		fillHandle: "",
        columnBorders: true,
        editable:false,
        selectionModel: { type: "row", mode:"single"},
        collapsible:false,
        numberCell: { show: false },
		colModel: grilla_prin,
		pageModel: { rPP: 20, type: "local", rPPOptions: [20, 50, 100]},
        scrollModel:{theme:true},
        toolbar:
        {
            cls: "pq-toolbar-export",
            items:
            [
				{ type: "button", label: "Excel", attr:"id=co_excel", cls:"btn btn-primary btn-sm"}
            ]
        }
    };
		
	var data = [           
                    ];
    $grid = $("#div_grid").pqGrid(obj);
	
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	
function fn_setea_grid_cargos()
{   
	grilla_pago = [
        { title: "Periodo", width: 250, dataType: "string", dataIndx: "c1", halign:"center", align:"center"},
        { title: "Descripción", width: 450, dataType: "string", dataIndx: "c2", halign:"center", align:"center" },
        { title: "Valor Ajuste", width: 220, dataType: "string", dataIndx: "c3", halign:"center", align:"right" }
       ];
	
    var obj = {
        height: 300,
        showTop: true,
        showHeader: true,
        roundCorners: true,
        rowBorders: true,
		fillHandle: "",
        columnBorders: true,
        editable:false,
        selectionModel: { type: "row", mode:"single"},
        collapsible:false,
        numberCell: { show: false },
		colModel: grilla_pago,
		pageModel: { rPP: 20, type: "local", rPPOptions: [20, 50, 100]},
        scrollModel:{theme:true},
        toolbar:
        {
            cls: "pq-toolbar-export",
            items:
            [
				{ type: "button", label: "Excel", attr:"id=co_excel_pago", cls:"btn btn-primary btn-sm"}
            ]
        }
    };
		
	var data = [           
                    ];
    $grid_pago = $("#div_grid_pago").pqGrid(obj);
	
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*	
function fn_setea_grid_observacion()
{   
	grilla_pago = [
        { title: "Fecha Ingreso", width: 250, dataType: "string", dataIndx: "c1", halign:"center", align:"center"},
        { title: "Nombre", width: 350, dataType: "string", dataIndx: "c2", halign:"center", align:"center" },
        { title: "Observación", width: 320, dataType: "string", dataIndx: "c3", halign:"center", align:"right" }
           ];
	
    var obj = {
        height: 300,
        showTop: true,
        showHeader: true,
        roundCorners: true,
        rowBorders: true,
		fillHandle: "",
        columnBorders: true,
        editable:false,
        selectionModel: { type: "row", mode:"single"},
        collapsible:false,
        numberCell: { show: false },
		colModel: grilla_pago,
		pageModel: { rPP: 20, type: "local", rPPOptions: [20, 50, 100]},
        scrollModel:{theme:true},
        toolbar:
        {
            cls: "pq-toolbar-export",
            items:
            [
				{ type: "button", label: "Excel", attr:"id=co_excel_ob", cls:"btn btn-primary btn-sm"}
            ]
        }
    };
		
	var data = [           
                    ];
    $grid_observacion = $("#div_grid_observacion").pqGrid(obj);
	
}


function fn_ajustes()	
{	
       	
   $("#frm_leer").hide();	
   $("#nav_ul_opc").hide();	
   $("#div_prin").hide("blind");	
   $("#frm_volver").show();
   $("#div_ajustes").show();
   $(".nav-tabs a").on("shown.bs.tab", function(event){
       var x = $(event.target).prop("href");  // tab activada
       var dato_original = [];
       dato_original = x.split("#");
       x = dato_original[1];
       if(x == "con_documentos")
           $grid.pqGrid( "refreshView" );
       if(x == "con_cargos")
           $grid_pago.pqGrid( "refreshView" );  
        if(x == "con_observacion")
        $grid_observacion.pqGrid( "refreshView" ); 
   });
   
   fn_setea_grid_documentos();
   fn_setea_grid_cargos();
   fn_setea_grid_observacion();
   
   $("#co_excel").html("<span class='glyphicon glyphicon-save'></span> Excel");
   $("#co_excel_pago").html("<span class='glyphicon glyphicon-save'></span> Excel");
   $("#co_excel_ob").html("<span class='glyphicon glyphicon-save'></span> Excel");
   
        
   $("#co_excel").on("click", function (e) {
       var col_model=$( "#div_grid" ).pqGrid( "option", "colModel" );
       var cabecera = "";
       e.preventDefault();
       for (i=0; i< col_model.length; i++){
           if(col_model[i].hidden != true) cabecera += "<th>"+col_model[i].title+ "</th>";
       }
       $("#excel_cabecera").val(cabecera);
       $("#tituloexcel").val(g_tit + " - Eventos");
       $("#filtro").val("Cliente: "+$("#tx_cliente").val() + " &nbsp;&nbsp;&nbsp;&nbsp;Convenio: " + $("#tx_cor_con").val() );
       var element =$grid.pqGrid("option","dataModel.data");
       if (element)
           a= element.length;
       else 
           a= 0;
       if(a>0){
           $("#frm_Exel").submit();
           return;
       }
   });
   
   $("#co_excel_pago").on("click", function (e) {
       var col_model=$( "#div_grid_pago" ).pqGrid( "option", "colModel" );
       var cabecera = "";
       e.preventDefault();
       for (i=0; i< col_model.length; i++){
           if(col_model[i].hidden != true) cabecera += "<th>"+col_model[i].title+ "</th>";
       }
       $("#excel_cabecera").val(cabecera);
       $("#tituloexcel").val(g_tit + " - Pagos");
       $("#filtro").val("Cliente: "+$("#tx_cliente").val() + " &nbsp;&nbsp;&nbsp;&nbsp;Convenio: " + $("#tx_cor_con").val() );
       var element =$grid_pago.pqGrid("option","dataModel.data");
       if (element)
           a= element.length;
       else 
           a= 0;
       if(a>0){
           $("#frm_Exel").submit();
           return;
       }
   });
    
   $("#co_pdf").on("click", function (e) {
               var vAncho = 540;
       var vAlto = 810;
       var posX = (screen.availWidth-vAncho)/2;
       var posY = (screen.availHeight-vAlto)/2;
       
       var parameters = {
                   "func":"fn_PDF",
                   "empresa":$("#tx_empresa").val(),
                   "rol":$("#tx_rol").val(),
                   "cliente":$("#tx_cliente").val(),
                   "corconv":$("#tx_cor_con").val()
               };
       
       window.open("conve_consul_pdf.asp?"+jQuery.param(parameters),"_blank", "width=810,height=540,left='"+posX+"',top='"+posY+"',menubar=no,location=no,resizable=yes,scrollbars=no");
   });
   
   $(window).scrollTop(0);
}
