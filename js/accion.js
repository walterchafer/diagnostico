function principal()
{
  var inp = document.getElementsByTagName("input");
  inp.bot.onclick = validar;

  function Validar() {
     var c1 = document.getElementById('s1').checked;
    //var c2 = document.getElementById('s2').checked;
    //var c3 = document.getElementById('s3').checked;
    //var c4 = document.getElementById('s4').checked;

    if (c1==true) {
      alert("Te gustan las Naranjas");
    } else {
      alert('No te gustan las Naranjas');
    }

  }

}

window.addEventListener("load", principal, false);
