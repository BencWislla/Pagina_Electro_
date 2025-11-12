
/** GALERIA.HTML */

/** SECCION GALERIA*/
//**Utilizando el método jQuery para hacer que la imagen cambie después/antes */

$(document).ready(function () {
  if ($('.item-galeria').length) {
    $('.item-galeria').on('mouseover', function () {
      let fotoAntes = $(this).data('antes');
      $(this).find('img').attr('src', fotoAntes);
      $(this).find('.estado-imagen').text('Antes'); //cambia el texto al pasar el ratón
    });

    $('.item-galeria').on('mouseout', function () {
      let fotoDespues = $(this).data('despues');
      $(this).find('img').attr('src', fotoDespues);
      $(this).find('.estado-imagen').text('Después'); // vuelve para después
    });
  }
});
