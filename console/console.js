var currentStage = 1;

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
}

function checkStage(i)
{
  switch(i)
  {
    case 1:
      var inp=document.getElementById("consolein").value;
      var ans="Hello!";


      if (inp=="System.out.println(\"" + ans + "\");")
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
          if (inp=="takeStep();")
          {

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
