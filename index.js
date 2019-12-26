function addTask() {
    var d = new Date();
    var clnm = d.getMinutes() + "_" + d.getSeconds() + "_" + d.getMilliseconds();
    var todobox = document.getElementById("divtodo");
    var t = document.getElementById("tsk").value;
    document.getElementById("tsk").value = null;
    var div1 = document.createElement("div");
    div1.className = clnm;
    var spantxt = document.createElement("div");
    spantxt.className = clnm;
    spantxt.innerText = t;
    div1.appendChild(spantxt);
    var cp_btn = document.createElement("button");
    cp_btn.className = clnm;
    cp_btn.setAttribute("onclick", "moveComplete(this)");
    cp_btn.innerHTML = "<U>&#10004</U>";
    div1.appendChild(cp_btn);
    var cp_btn = document.createElement("button");
    cp_btn.className = clnm;
    cp_btn.setAttribute("onclick", "removeThis(this)");
    cp_btn.innerText = "X";
    div1.appendChild(cp_btn);
    todobox.appendChild(div1);
    
  }
  
  function moveComplete(c) {
  
    var d = new Date();
    var clnm = d.getMinutes() + "_" + d.getSeconds() + "_" + d.getMilliseconds();
    var cpbox = document.getElementById("divcomplete");
  
    var cc = document.getElementsByClassName(c.className);
    var t = cc[1].innerText;
    
    var div1 = document.createElement("div");
    div1.className = clnm;
    var spantxt = document.createElement("div");
    spantxt.className = clnm;
    spantxt.innerText = t;
    div1.appendChild(spantxt);  
    var cp_btn = document.createElement("button");
    cp_btn.className = clnm;
    cp_btn.setAttribute("onclick", "moveTodo(this)");
    cp_btn.innerText = "U";
    div1.appendChild(cp_btn);
    var cp_btn = document.createElement("button");
    cp_btn.className = clnm;
    cp_btn.setAttribute("onclick", "removeThis(this)");
    cp_btn.innerText = "X";
    div1.appendChild(cp_btn);
    
    cpbox.appendChild(div1);
    cc[0].parentNode.removeChild(cc[0]);
  }
  
  function moveTodo(c) {
    var d = new Date();
    var clnm = d.getMinutes() + "_" + d.getSeconds() + "_" + d.getMilliseconds();
    var todobox = document.getElementById("divtodo");
    var cc = document.getElementsByClassName(c.className);
    var t = cc[1].innerText;
    var div1 = document.createElement("div");
    div1.className = clnm;
    var spantxt = document.createElement("div");
    spantxt.className = clnm;
    spantxt.innerText = t;
    div1.appendChild(spantxt);
    var cp_btn = document.createElement("button");
    cp_btn.className = clnm;
    cp_btn.setAttribute("onclick", "moveComplete(this)");
    cp_btn.innerHTML = "<U>&#10004</U>";
    div1.appendChild(cp_btn);
    var cp_btn = document.createElement("button");
    cp_btn.className = clnm;
    cp_btn.setAttribute("onclick", "removeThis(this)");
    cp_btn.innerText = "X";
    div1.appendChild(cp_btn);
    
    todobox.appendChild(div1);
    cc[0].parentNode.removeChild(cc[0]);
  }
  
  function removeThis(c) {
    var cc = document.getElementsByClassName(c.className);
    cc[0].parentNode.removeChild(cc[0]);
  }
  