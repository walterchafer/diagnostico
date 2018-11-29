var patologias = [];

function principal() {
  var inp = document.getElementsByTagName('input');
  inp.bot.onclick = validar;

  function validar() {

    var c1 = document.getElementById('s1').checked;
    var c2 = document.getElementById('s2').checked;
    var c3 = document.getElementById('s3').checked;
    var c4 = document.getElementById('s4').checked;

    if (c1 == true) {
      patologias[0] = 'img/andy.jpg';
    }

    if (c2 == true) {
      patologias[1] = 'asma';
    }

    if (c3 == true) {
      patologias[2] = 'gripe';
    }

    if (c4 == true) {
      patologias[3] = 'gripe';
    }

    var set = new Set(patologias.map(JSON.stringify));
    var arrSinDuplicaciones = Array.from(set).map(JSON.parse);

    var path = patologias[0]; //-->Editar la ruta
    var img = document.createElement('img');
    img.setAttribute('src', path);
    img.setAttribute('width', '100');
    img.setAttribute('height', '75');
    document.getElementById('content').appendChild(img);

    //  document.writ e(arrSinDuplicaciones);

    //  document.write(patologias);
  }
}

window.addEventListener('load', principal, false);
