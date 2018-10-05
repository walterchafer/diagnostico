function principal() {
  var inp = document.getElementsByTagName('input');
  inp.bot.onclick = validar;

  a = 'Fiebre';

  function validar() {

    var c1 = document.getElementById('s1').checked;
    var c2 = document.getElementById('s2').checked;
    var c3 = document.getElementById('s3').checked;
    var c4 = document.getElementById('s4').checked;

    if (c1 == true) {
      
      //a = "fiebre";
      //alert('Seleccionaste el sintoma: ' + a);
      //var gripe = ['Fiebre', 'temperatura', 'diarrea', 'mobile', 'cual', 'piuma', 'al', 'vento'];
      //if (Array.gripe.includes('Fiebre')) {
      //  alert('el array gripe incluye fiebre');
    } else {
      alert('No te gustan las Naranjas');
    }

    if (c2 == true) {
      alert('Te gustan las Naranjas');
    } else {
      alert('No te gustan las Naranjas');
    }

    if (c3 == true) {
      alert('Te gustan las Naranjas');
    } else {
      alert('No te gustan las Naranjas');
    }

    if (c4 == true) {
      alert('Te gustan las Naranjas');
    } else {
      alert('No te gustan las Naranjas');
    }

  }

}

window.addEventListener("load", principal, false);
