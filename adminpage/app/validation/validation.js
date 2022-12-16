function Validation(){
    this.kiemTraRong = function (value, errorId, mess) {
        if (value === "") {
          document.getElementById(errorId).innerHTML = mess;
          document.getElementById(errorId).style.display = "block";
          return false;
        }
    
        document.getElementById(errorId).innerHTML = "";
        document.getElementById(errorId).style.display = "none";
        return true;
      };
      this.kiemTraChonLoai = function (idSelect, errorId, mess) {
        if (document.getElementById(idSelect).selectedIndex !== 0) {
            document.getElementById(errorId).innerHTML = "";
            document.getElementById(errorId).style.display = "none";
          return true;
        }
    
        document.getElementById(errorId).innerHTML = mess;
        document.getElementById(errorId).style.display = "block";
        return false;
      };
      this.kiemTraTrungTenSP = function (value, errorId, mess, data) {
        var exist = false;
        for (var i = 0; i < data.length; i++) {
          var sp = data[i];
          if (sp.tenSP === value) {
            exist = true;
            break;
          }
        }
    
        if (exist) {
            document.getElementById(errorId).innerHTML = mess;
            document.getElementById(errorId).style.display = "block";
          return false;
        }
    
        document.getElementById(errorId).innerHTML = "";
        document.getElementById(errorId).style.display = "none";
        return true;
      };
}

