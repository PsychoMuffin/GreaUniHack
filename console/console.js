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
  document.getElementById("consolein").value = "";
  var x = document.getElementsByClassName("stage" + stage);
  for (var i = 0; i < x.length; i++)
  {
    x[i].classList.remove("notCurrent");
  }

}

function enterInput()
{
  var inp=document.getElementById("consolein").value;
  var ans="Hello World";
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
}

function checkEnter() {
  if(event.key === 'Enter')
  {
    enterInput();
  }
}
