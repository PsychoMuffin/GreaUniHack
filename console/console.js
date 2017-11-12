var currentStage = 1;
function myMove() {
  var elem = document.getElementById("knightstage"+currentStage);
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 500) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }}}
function disableStages()
{
  for (var index = 1; index <= 6; index++)
    {
      var x = document.getElementsByClassName("stage" + index);
      for (var i = 0; i < x.length; i++)
      {
        x[i].classList.add("notCurrent");
      }
    }
}

function selectStage(stage)
{
  disableStages();
  document.getElementById("bubble").classList.remove("speech");
  document.getElementById("bubble").innerHTML = "";
  document.getElementById("consolein").value = "";
  var x = document.getElementsByClassName("stage" + stage);
  for (var i = 0; i < x.length; i++)
  {
    x[i].classList.remove("notCurrent");
  }
  currentStage = stage;
  if (currentStage == 4)
  {
    document.getElementById("background").classList.remove("body");
    document.getElementById("background").classList.add("lake");
  }
  else
  {
    document.getElementById("background").classList.remove("lake");
    document.getElementById("background").classList.add("body");
  }

}

function checkStage(i)
{
  switch(i)
  {
    case 1:
      var inp=document.getElementById("consolein").value;
      var ans="Hello!";


      if (inp=="System.out.print(\"" + ans + "\");")
      {
        document.getElementById("bubble").classList.add("speech");
        document.getElementById("bubble").innerHTML = ans;
      }
      else
      {
        alert("Sorry. That is wrong");
        document.getElementById("bubble").classList.remove("speech");
        document.getElementById("bubble").innerHTML = "";
      }
      break;
      case 2:
        var inp=document.getElementById("consolein").value;
        var inpName = inp.substr(19,inp.length-21);
        if (inp=="String myNameIs = \""+inpName+"\";")
        {
          document.getElementById("thought").classList.add("speech");
          document.getElementById("thought").innerHTML = "Hi, " + inpName;
        }
        else
        {
          alert("Sorry. That is wrong");
          document.getElementById("thought").classList.remove("speech");
          document.getElementById("thought").innerHTML = "";
        }
        break;
        case 3:
          var inp=document.getElementById("consolein").value;
          if (inp=="walk();")
          {


            walk();

          }
          else
          {
            alert("Sorry. That is wrong");
          }
          break;
          case 4:
            var inp=document.getElementById("consolein").value;
            if (inp=="boolean isObstacle = true;")
            {

               jumpObstacle(currentStage);

            }
            else
            {
              alert("Sorry. That is wrong");
            }
            break;
            case 5:
              var inp=document.getElementById("consolein").value;
                if (inp=="javac SlayDragon.java && java SlayDragon")
              {

                 jumpObstacle(currentStage);
                 hit();



              }
              else
              {
                alert("Sorry. That is wrong");
              }
              break;



  }
}

function checkEnter() {
  if(event.key === 'Enter')
  {
    checkStage(currentStage);
  }
}

function walk() {
  var elem = document.getElementById("knightstage3");
  var pos = 300;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 1000) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}

function hit()
  {
    var hits = 0;
    var elem = document.getElementById("hit");
    var id = setInterval(frame,1200);
      function frame(){
        if(hits == 6)
        {
          clearInterval(id);
          selectStage(6);
        }
        else {
          hits++;

        }
      }

  }

function jumpObstacle(currentStage) {
  var elem = document.getElementById("knightstage" + currentStage);
  var pos = 300;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 1000) {
      clearInterval(id);
    } else {
      if (pos < 650)
      {
      pos++;
      elem.style.left = pos + 'px';
      elem.style.top = 700-pos + 'px';
    }
    else {
      pos++;
      elem.style.left = pos + 'px';
      elem.style.top = -600 + pos + 'px';
    }
    }
  }
}
