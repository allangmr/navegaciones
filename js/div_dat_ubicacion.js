var url_informacion_ubicacion = "asp/div_dat_ubicacion.asp";

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
function fn_ubicacion_ver() {
    fn_hide_menu()
    $("#frm_leer").hide();
    $("#div_prin").hide();
    $("#frm_volver_pdf").show();
    $("#div_ubicacion").show();
    $("#h_ubicacion").html("[CLIENTE: " + $("#tx_ing_nic").val() + " – " + $("#tx_nom").val() + "]");
    if (!flag_dat_sum) fn_datos_ubicacion();
	$("#co_pdf_print").attr("rel", "pdf_datos_ubicacion");
	$("#frm_div_dat_ubicacion").attr("action", "asp/div_dat_ubicacion_pdf.asp?Empresa="+$("#tx_empresa").val()+"&Suministro="+$("#tx_ing_nic").val()+ "&Rol=" + $("#tx_rol").val());


}
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
function fn_datos_ubicacion() {
    DatoOriginal = [];

    var parames = {
        "func": "fn_dat_ubicacion",
        "p_empresa": $("#tx_empresa").val(),
        "p_cliente": $("#tx_ing_nic").val(),
        "rol": $("#tx_rol").val(),
        "Ip": $("#tx_ip").val()
    };

    HablaServidor(url_informacion_ubicacion, parames, "text", function (text) {

        DatoOriginal = text.split("|");
        $("#tx_provincia_ubi").val(DatoOriginal[0]);
        $("#tx_distrito_ubi").val(DatoOriginal[1]);
        $("#tx_corregimiento_ubi").val(DatoOriginal[2]);
        $("#tx_barrio_ubi").val(DatoOriginal[3]);
        $("#tx_sector_ubi").val(DatoOriginal[4]);
        $("#tx_sistema_ubi").val(DatoOriginal[5]);
        $("#tx_tipo_ubicacion_ubi").val(DatoOriginal[6]);
        $("#tx_calle_ubi").val(DatoOriginal[7]);
        $("#tx_tipo_vida_ubi").val(DatoOriginal[8]);
        $("#tx_condominio_ubi").val(DatoOriginal[9]);
        $("#tx_num_casa_ubi").val(DatoOriginal[10]);
        $("#tx_piso_ubi").val(DatoOriginal[11]);
        $("#tx_torre_ubi").val(DatoOriginal[12]);
        $("#tx_apartamento_ubi").val(DatoOriginal[13]);
        $("#tx_dir_adicional_ubi").val(DatoOriginal[14]);

        $("#tx_tipo_entrega_ubi").val(DatoOriginal[15]);
        $("#tx_zona_postal_ubi").val(DatoOriginal[16]);
        $("#tx_apartado_postal_ubi").val(DatoOriginal[17]);
        $("#tx_agencia_ubi").val(DatoOriginal[18]);
        $("#tx_administrador_ubi").val(DatoOriginal[19]);



    });
    flag_dat_sum = true;
}