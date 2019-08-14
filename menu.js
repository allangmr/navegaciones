var myTree;
var indicador = false;
var alto = 0;

var p_empresa = "";
var d_empresa = "";
var SYNSegSimbMiles = "";
var SYNSegSimbDec = "";
var p_rol = "";
var synip = "";
var g_tit = "Menu";

var posx, posy = "";
var serv_link = "http://";

var hhavh = new Array();

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
$(document).ready(function()
{
	window.name = "arbol";

	//PARAMETROS DE LA VENTANA
	p_rol = "synergia";//SYNRequest("Rol");
	SYNLLAVE = 434;//SYNSacaLlave();
	
    $("#frame1").on("click", function (e) {
		if(indicador) fn_cerrar();
    });
      
    $("#div_rol").mouseout( function (e) {
		indicador = true;
    });
  
    $("#div_rol").mouseover( function (e) {
		indicador = false;
    });
	
	//fn_get_ip();
	//fn_get_empresa();
	
	$("#co_cambiaclave").on("click", function (e) {
		var seteo = "width=458px, height=440px, toolbar=no, scrollbars=no, resizable=yes, titlebar=yes";
		window.open(serv_link+"Syn_Logon_cam2.htm?Sesion=" + new String(SYNLLAVE)+"&syn_rol="+p_rol, '', seteo);
  		return false;
    });
	
	fn_crea_arbol();
});

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
function fn_cerrar()
{
	$( "#div_rol" ).dialog("close");
}
  
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
function fn_get_ip()
{
    var parameters = {
		"func":"fn_get_ip"
	};

    HablaServidor("menu2.xml",parameters,'text', function(text) 
    {
        if($.trim(text)!="")
		{
			var param_retorn =  text.split("|");
			synip = param_retorn[0];
			SYNSegIPServer = param_retorn[1];
			serv_link = serv_link+param_retorn[1]+"/";
        }
    });
}
  
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*  
function fn_get_empresa()
{
	var usuario = "";
	
	var parameters = {
		"func":"fn_get_rol_emp",
		"rol":p_rol
	};

    HablaServidor("menu.asp",parameters,'text', function(text) 
    {
        if($.trim(text)!="")
		{
			var param_retorn =  text.split("|");
			$("#tx_empresa").val(p_empresa);
			p_empresa = param_retorn[0];
            d_empresa = param_retorn[1];
			SYNSegSimbMiles = param_retorn[2];
            SYNSegSimbDec = param_retorn[3];
			
			usuario = "Usuario: " + param_retorn[4];
			$("#lb_usuario").html(usuario);
        }
    });
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
function fn_crea_arbol()
{
	myTree = new dhtmlXTreeObject("div_tree","100%","100%",0);
	myTree.setImagePath("./dhtmlxTree_v51_pro_eval/codebase/imgs/dhxtree_skyblue/");
	
	//Evento se dispara cuando termina de pintar el arbol menu
    myTree.attachEvent("onXLE", function(){
         $("#dv_cargando").hide();
         $("#frame1").show();
    });
	
	//Evento se dispara cuando hace click en una opción del menu
	myTree.attachEvent("onDblClick", function(id){
        
		var node = myTree._globalIdStorageFind(id).htmlNode;
		
		var x = dhx.getOffset(node).left;
		var y = dhx.getOffset(node).top;
		var w = node.offsetWidth;
       
        fn_procesa_sel(id, x+w, y);
	});

	//Evento se dispara cuando ocurre un error en la carga del arbol menu
	myTree.attachEvent("onLoadXMLError",fn_error_servidor);
	
	//Carga menu de la ruta especificada
	myTree.load("menu2.xml");
	
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
//PARA EL MANEJO DE ERROR DEL LADO DEL SERVIDOR O COMUNICACION
function fn_error_servidor(name, xhr){
    alert("Se produjo un error \n"+name+"\n Estado:"+xhr.status);
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
//PROCESA LA SELECCIÓN EN EL MENU
function fn_procesa_sel(id, xT, yT) 
{
    var ruta = myTree.getUserData(id,"ruta");    
    var tipo = myTree.getUserData(id,"tip_nodo");
	var _idmodulo = myTree.getParentId(id);
	var _idsistema = myTree.getParentId(_idmodulo);
	var _idrecurso = id;
	var _obser = $.trim(myTree.getUserData(id,"observ"));
	var url_ventana = "";
	var _ancho ="825";
	var _alto="640";
	url_ventana=serv_link+ruta;
	
	if(_idsistema=="idaan")
	{
		_idsistema = _idmodulo;
	}
	
	if (tipo=="0")
	{
		if(myTree.getOpenState(id) == "-1")
			myTree.openItem(id);
		else
			myTree.closeItem(id);
	}
	posx="";
	posy="";
	if(_obser=="NUEVO")
	{		 
			posx=0;
			posy=0;
			_ancho = screen.availWidth-17;
			_alto = screen.availHeight;
	}
    if (tipo=="1")
	{
		var roles = myTree.getUserData(id,"roles").split(";"); 
            
		var cant = roles.length - 1;

		if (cant<2)
		{
			fn_abre_ventana(url_ventana,_idrecurso,_idsistema,roles[0],_ancho,_alto,0,posy,posx);
		}
		else if (cant>1)
        {
			$("#div_rol").empty();
			var html_rol=""

			for	(var index = 0; index < cant; index++) {
				html_rol = html_rol + "<div class='itemMenu' onclick='fn_abre_ventana(\""+url_ventana+"\",\""+_idrecurso+"\",\""+_idsistema+"\",\""+roles[index]+"\",\""+_ancho+"\",\""+_alto+"\",1,\""+posy+"\",\""+posx+"\");'>"+ roles[index]+"</div>";
            }
            
			var alto = 0;
            alto = (20*cant)+20;

			$("#div_rol").append(html_rol);
			$("#div_rol").dialog({
				width:300,
				modal:false,
				open: function(event, ui){
					$(".ui-dialog-titlebar").hide();
				}
			});
                
            if(alto > screen.availHeight)
            {
                alto = screen.availHeight;
                $( "#div_rol" ).dialog( "option", "height", alto-100 );
                $( "#div_rol" ).dialog( "option", "position", {my:"left top", at:"left+"+xT+" top",  of:"body", collision:"fit" } );
            }
            else
            {
                $( "#div_rol" ).dialog( "option", "height", alto );
                $( "#div_rol" ).dialog( "option", "position", {my:"left top", at:"left+"+xT+" top+"+yT,  of:"body", collision:"fit" } );

            }
        }
    }
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
function fn_abre_ventana(url,_idselrecurso,_idselsistema,_idselrole, w, h, popu,top_y,left_x) 
{  
	//Se dispara un ajax para recuperar el area del rol y otros datos
	var valores = fn_get_data_perfil(_idselsistema,_idselrecurso,_idselrole);

	hrut_abre_ven_dial(valores);
	url = url + "?Sesion=" + new String(SYNLLAVE) + "&SYNParametro=" + sinogac;

	// Fixes dual-screen position                         Most browsers      Firefox  
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;  
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;  
			  
	width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;  
	height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;  
			  
	var left = ((width / 2) - (w / 2)) + dualScreenLeft;  
	var top = (((height / 2) - (h / 2)) + dualScreenTop) - 20;  
	
	if($.trim(top_y)==""){ top_y=top;}
	if($.trim(left_x)==""){ left_x=left;}
	
	var nueva_ventana = window.open(url, "_blank", "toolbar=no, scrollbars=yes, resizable=yes,  width=" + w + ", height=" + h + ", top=" + top_y + ", left=" + left_x);
	
	if($.trim(top_y)=="0"){nueva_ventana.resizeTo(screen.availWidth,  screen.availHeight);}
	if($.trim(top_y)=="0"){nueva_ventana.moveTo(0, 0);};
	/*nueva_ventana.innerHeight = screen.height;
	nueva_ventana.screenX = 0;
	nueva_ventana.screenY = 0;*/

	if(nueva_ventana!=null)
	{
		var existe_vent=false;
		for(var i=0;i<hhavh.length;i++)
			if(hhavh[i]==nueva_ventana)
				existe_vent=true;
		if(!existe_vent)hhavh[hhavh.length]=nueva_ventana;
	}
	limpia_arr_ventanas();	
  
	if(popu==1)  $("#div_rol").dialog('close');
  
	// Coloca el foco en la nueva ventana  
	if (window.focus) 
	{  
		nueva_ventana.focus();  
	}  
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
function fn_get_data_perfil(p_idsistema,p_idrecurso,p_idrolfun)
{
	var flag = true;
	var param_retorn = "";
	var parameters = {
		"func":"fn_get_parametro",
		"rol":p_rol,
		"empresa":p_empresa,
		"sistema":p_idsistema,
		"recurso":p_idrecurso,
		"rolfun":p_idrolfun
	};

	HablaServidor("menu2.xml",parameters,'text', function(text) 
	{
		if($.trim(text)!="")
		{
			param_retorn =  text;
			flag = false;
		}
	});

	if(!flag)
	{
		return param_retorn;
	}
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
function hrut_abre_ven_dial(parametros)
{
	matparam = parametros.split("|");
	rol_funcion = matparam[0];
	rol_permisos = matparam[1];
	sinogac = matparam[2];
	ico_path = matparam[4];;
	p_empresa = matparam[5];
	cod_padre = matparam[6];
	cod_hijo = matparam[7];
	pre_param_funcion = matparam[8];
    conexion = matparam[9];
	
	nuc14_datos_rol = matparam[10].split("#");
	p_centro = nuc14_datos_rol[0];
	p_centro_desc = nuc14_datos_rol[1];
	p_nombre = nuc14_datos_rol[2];
	p_area = nuc14_datos_rol[3];
	
	nuc14_datos_rolfun = matparam[11].split("#");
	p_fcentro = nuc14_datos_rolfun[0];
	p_fcentro_desc = nuc14_datos_rolfun[1];
	p_fnombre = nuc14_datos_rolfun[2];
	p_farea = nuc14_datos_rolfun[3];
	
	parametrosxxw = rol_funcion+"|"+rol_permisos+"|"+p_empresa+"|"+p_empresa+"|"+ico_path+"|"+synip+"|"+p_rol+"|"+p_centro+"|"+p_centro_desc+"|"+p_nombre+"|"+p_area+"|";
	window.ww_par = new hrut_parametros(window,parametrosxxw,rol_funcion,sinogac,p_empresa,ico_path,p_centro,p_nombre,p_area,p_centro_desc,cod_padre,cod_hijo,p_fcentro,p_fnombre,p_farea,p_fcentro_desc,conexion);
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// FUNCION QUE SE LLAMA DESDE LAS VENTANAS DEL SISTEMA
// MEDIANTE ELLA SE OBTIENEN LAS VARIABLES GLOBALES DE LA APLICACIÓN
// LAS VARABILES GLOBALES CAMBIAN DEPENDIENDO DEL RECURSO SELECCIONADO EN EL MENÚ
function hrut_parametros(objetoxx,param,rol_funcion,sinogac,p_empresa,ico_path,p_centro,p_nombre,p_area,p_centro_desc,cod_padre,cod_hijo,p_fcentro,p_fnombre,p_farea,p_fcentro_desc,conexion)
{
	//DireccionesIp	
	this.synip = synip;
	this.SYNSegIP = synip;
	this.SYNSegIPServer = SYNSegIPServer;
	
	//Datos de la empresa
	this.p_empresa = p_empresa;
	this.SYNSegCodEmpresa = p_empresa;
	this.SYNSegEmpresa = d_empresa;
	this.SYNSegSimbMiles = SYNSegSimbMiles;
	this.SYNSegSimbDec = SYNSegSimbDec;
	this.SYNSegImgEmpresa = ico_path;
	
	//Datos del Rol
	this.p_rol = p_rol;
	this.SYNSegRol = p_rol;
	this.p_nombre = p_nombre;
	this.SYNSegNombreUsuario = p_nombre;
	this.p_area = p_area;
	this.SYNSegArea = p_area;
	this.p_centro = p_centro;
	this.SYNSegCodCentroOper = p_centro;
	this.p_centro_desc = p_centro_desc;
	this.SYNSegCentroOper = p_centro_desc;
	
	//Datos del Perfil o Rol Funcional
	this.rol_funcion = rol_funcion;
	this.SYNSegRolFuncion = rol_funcion;
	this.p_fnombre = p_fnombre;
	this.SYNSegNomRolFuncion = p_fnombre;
	this.p_farea = p_farea;
	this.SYNSegAreaRolFuncion = p_farea;
	this.p_fcentro = p_fcentro;
	this.SYNSegCodCentroOperFun = p_fcentro;
	this.p_fcentro_desc = p_fcentro_desc;
	this.SYNSegCentroOperFun = p_fcentro_desc;   
		
	this.rol_permisos = rol_permisos;
	this.SYNSegPermisos = rol_permisos;
	
	this.sinogac = sinogac;
	this.SYNSegParametro = sinogac;
	
	this.parametros = param;
	this.conexion = conexion;
	this.window_inicio = objetoxx;
	this.ok = "Harrys";
	this.window_padre = window;
	this.window_hijo = null;
	this.cod_padre = cod_padre;
	this.cod_hijo = cod_hijo;
	this.SYNDialogAR = 0;
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
function fn_cierra_ventana_hija()
{
	for(var i=hhavh.length-1;i>=0;i--)
	{
		try{
		if(typeof(hhavh[i])=="object")
			if(hhavh[i]!=null)
				if(!hhavh[i].closed)
					hhavh[i].close();}
		catch(e){}
		hhavh[i]=null
	}
	hhavh.length=0
}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
function limpia_arr_ventanas()
{
	var existe_vn_null=false;
	do{
		existe_vn_null=false;
		for(i=0;i<hhavh.length;i++)
		{
			try
			{
				if(typeof(hhavh[i])=="object")
					if(hhavh[i]!=null)
					{
						if(hhavh[i].closed)
						{
							existe_vn_null=true;
							break;
						}
					}
					else
					{
						existe_vn_null=true;
						break;
					}
			}catch(e)
			{
				existe_vn_null=true;
				break;
			}
		}
		if(existe_vn_null)
		{
			for(j=i;j<hhavh.length-1;j++)
				hhavh[j]=hhavh[j+1];
			hhavh.length--;
		}
	}while(existe_vn_null)
}
