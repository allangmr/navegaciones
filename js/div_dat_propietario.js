var url_propietario = "asp/div_dat_propietario.asp";
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
function fn_prop_ver() {
    fn_hide_menu();
    $("#frm_leer").hide();
    $("#div_prin").hide();
    $("#div_ventanas_auxiliares > div.grilla").hide();
    $("#div_ventanas_auxiliares > div.texto").hide();
    $("#frm_volver_pdf").show();
    $("#div_propietario").show();
    $("#h_cliente").html("[CLIENTE: " + $("#tx_ing_nic").val() + " – " + $("#tx_nom").val() + "]");

    if (!flag_dat_prop) {

        //~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
        var parames = {
            "func": "fn_generales",
            "p_empresa": $("#tx_empresa").val(),
            "p_cliente": $("#tx_ing_nic").val(),
            "rol": $("#tx_rol").val(),
            "Ip": $("#tx_ip").val()
        };
        HablaServidor(url_propietario, parames, "text", function (text) {

            fn_setea_propietario(text);

        });
        flag_dat_prop = true;
    }
	$("#co_pdf_print").attr("rel", "pdf_datos_propietario");
	$("#frm_div_dat_propietario").attr("action", "asp/div_dat_propietario_pdf.asp?Empresa="+$("#tx_empresa").val()+"&Suministro="+$("#tx_ing_nic").val()+ "&Rol=" + $("#tx_rol").val());
}

function fn_hide_menu() {
    // SE OCULTAN LOS CRITERIOS DE BÚSQUEDA
    $("#frm_busq").hide();
    $("#div_busq").hide();
    $("#div_ventanas_auxiliares > div.container").hide();
    $("#frm_volver").hide();
    $("#frm_volver_pdf").hide();
    $("#frm_volver_pdf_med").hide();
    $("#frm_informacion_factura").hide();
    $("#frm_informacion_ajustes").hide();
    $("#frm_leer").hide();
    $("#nav_ul_opc").show();
    $("#div_prin").hide();
    $("#frm_convenios_pago_detalle").hide();


}

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
/*function fn_setea_propietario(ColeccionDatos) {
    DatoOriginal = ColeccionDatos.split("|");
    $("#tx_persona_propietario").val(DatoOriginal[0]);
    $("#tx_identidad_propietario").val(DatoOriginal[1]);
    $("#tx_documento_propietario").val(DatoOriginal[2]);
    $("#tx_nombre_propietario").val(DatoOriginal[3]);
    $("#tx_apellidop_propietario").val(DatoOriginal[4]);
    $("#tx_apellidom_propietario").val(DatoOriginal[5]);
    $("#tx_fnac_propietario").val(DatoOriginal[6]);
    $("#tx_sexo_propietario").val(DatoOriginal[7]);
    $("#tx_telefono_propietario").val(DatoOriginal[8]);
    $("#tx_celular_propietario").val(DatoOriginal[9]);
    $("#tx_email_propietario").val(DatoOriginal[10]);
    $("#tx_recibemail_propietario").val(DatoOriginal[11]);
    $("#tx_datprop_propietario").val(DatoOriginal[12]);
    $("#tx_finca_propietario").val(DatoOriginal[13]);
    $("#tx_tomo_propietario").val(DatoOriginal[14]);
    $("#tx_folio_propietario").val(DatoOriginal[15]);

}
*/

