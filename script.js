function nonDiv() {document.getElementById('konten').style.opacity = "0";} function showDiv() {document.getElementById('konten').style.opacity = "1";document.getElementById('konten').style.top = "0";document.querySelector("body").style.animation = "anim 9s ease infinite";}
  function tombol() {document.getElementById('contTom').style.margin = "0";document.getElementById('contTom').style.opacity = "1";var e1 = document.getElementById('ftKm');e1.classList.add("degdeg");}  
  function klikfoto() {document.getElementById('sp1').style.display = "none";document.getElementById('sp2').style.display = "block";if(a<finish.length){document.getElementById("finish").innerHTML += finish.charAt(a);a++;setTimeout(klikfoto,100);} if(a==finish.length){setTimeout(tombol,500);}}
