/* ejemplo de ajax con recuperacion de errores */

$.ajax({
      type: "POST",
      url: "mi_url",
      data:{
           ....
      },
      dataType: "json",
      beforeSend: function() {
          $('body').plainOverlay('show');
      },
      success: function(data) {
        .....
      },
      error: function( jqXHR, textStatus, errorThrown ) {
          $('body').plainOverlay('hide');
          if (jqXHR.status === 0) {

              swal('Error al intentar Conectarse: Verifique su conexion a Internet.', "", "error");

          } else if (jqXHR.status == 404) {

              swal('La Pagina solicitada no fue encontrada [404]', "", "error");

          } else if (jqXHR.status == 500) {

              swal('Erro Interno [500]', "", "error");

          } else if (textStatus === 'parsererror') {

              swal('Error en el retorno de Datos. [parseJson]', "", "error");

          } else if (textStatus === 'timeout') {

              swal('Tiempo de Espera agotado', "", "error");

          } else if (textStatus === 'abort') {
              swal('Solicitud Abortada. [Ajax Request]', "", "error");

          } else {
              swal('Error desconocido: ' + jqXHR.responseText, "", "error");

          }//end if

      }//end error
  });
