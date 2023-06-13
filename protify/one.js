
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function openNav2() {
    document.getElementById("mySidebar2").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav2() {
    document.getElementById("mySidebar2").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  document.addEventListener("DOMContentLoaded", function() {
    console.log('in..');
    // Load header
    var headerPlaceholder = document.getElementById("header-placeholder");
    var headerRequest = new XMLHttpRequest();
    headerRequest.open("GET", "header.html", true);
    headerRequest.onreadystatechange = function() {
      if (headerRequest.readyState === 4 && headerRequest.status === 200) {
        headerPlaceholder.innerHTML = headerRequest.responseText;
      }
    };
    headerRequest.send();
  
    // Load footer
    var footerPlaceholder = document.getElementById("footer-placeholder");
    var footerRequest = new XMLHttpRequest();
    footerRequest.open("GET", "footer.html", true);
    footerRequest.onreadystatechange = function() {
      if (footerRequest.readyState === 4 && footerRequest.status === 200) {
        footerPlaceholder.innerHTML = footerRequest.responseText;
        console.log('out..');
      }
    };
    footerRequest.send();
  });



