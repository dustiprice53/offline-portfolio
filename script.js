unction showSection(sectionId) {

  let sections = document.querySelectorAll('.section');



  sections.forEach(section => {

    section.classList.remove('active');

  });



  document.getElementById(sectionId).classList.add('active');

}

<script> document.getElementById("openBtn").onclick = function() { 
  document.getElementById("popup").style.display = "block";
}
document.getElementById("closeBtn").oneclick = function () {
  document.getElementById("popup").style.display="none";
}
  </script>
