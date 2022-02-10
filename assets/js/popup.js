  function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }

  function toggleResi(){
    document.getElementById("popup-4").classList.toggle("active");
  }

  function toggleView(){
    document.getElementById("popup-2").classList.toggle("active");
  }

  function resetView(){
    // var bodyRef = document.getElementById('view-output').getElementsByTagName('tbody')[0]; 
    // bodyRef.innerHTML = '';
    // var Table = document.getElementById("view-output");
    // Table.innerHTML = "";
    // $("#view-output tbody tr").remove();
    // $("view-output").children().remove();
    var node = document.getElementById("reset-view");
    while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
    }
  }

  function toggleDetail(){
    document.getElementById("popup-3").classList.toggle("active");
  }

  function resetDetail(){
    var node = document.getElementById("orders-detail");
    while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
    }
  }