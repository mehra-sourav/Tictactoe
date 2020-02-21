var finish=true;
var count=0;
var arrTic = document.getElementsByClassName("col");

for(let i=0;i<arrTic.length;i++)
{
  arrTic[i].onclick = function(){
    if(this.getAttribute("checked")!="true" && finish)
    {
      this.setAttribute("checked","true");
      //console.log(this.id);
      //this.style.backgroundColor="#4CAF50";
      console.log(i+" was clicked")
      ++count;
      if(count%2==0)
        this.innerHTML = "O";
      else
        this.innerHTML = "X";
    }
    Check(arrTic)
  }
}






function Check(arrTic)
{
  if(count>4 && finish)
  {
    if(checkValue(0,1,2))
    {
      finish = false ;
	  
    }
    else if(checkValue(3,4,5))
    {
      finish=false;
    }
    else if(checkValue(6,7,8))
    {
      finish=false;
    }
    else if(checkValue(0,3,6))
    {
      finish=false;
    }
    else if(checkValue(1,4,7))
    {
      finish=false;
    }
    else if(checkValue(2,5,8))
    {
      finish=false;
	}
    else if(checkValue(0,4,8))
    {
      finish=false;
    }
    else if(checkValue(2,4,6))
    {
      finish=false;
    }
    else if(count==9)
    {
        show();
    }
  }
}

function show()
{
    if(count != 9)
    {
        $(document).ready(function() { 
            $("#Winmsg").modal("show"); });
    }
    else
        {
            document.getElementById("Winmsgbody").innerHTML = "<p align='center'>Draw</p>";
            $(document).ready(function() { 
            $("#Winmsg").modal("show"); });
        }
    
}
function checkValue(x,y,z)
{
  if(arrTic[x].innerHTML == "O" && arrTic[y].innerHTML == "O" && arrTic[z].innerHTML == "O" || arrTic[x].innerHTML == "X" && arrTic[y].innerHTML == "X" && arrTic[z].innerHTML == "X" )
    {
      arrTic[x].style.backgroundColor="#4CAF50";
      arrTic[y].style.backgroundColor="#4CAF50";
      arrTic[z].style.backgroundColor="#4CAF50";
      changeother(x,y,z);
      show();
      if(arrTic[x].innerHTML == "O")
        document.getElementById("Winmsgbody").innerHTML = "<p align='center'>Player 2 wins</p>";
      else
        document.getElementById("Winmsgbody").innerHTML = "<p align='center'>Player 1 wins</p>";
        
    return true;
    }
  else
    return false;
}
function changeother(a,b,c)
{
  for(var i=0;i<arrTic.length;i++)
  {
    if(i!=a && i!=b && i!=c)
    {
      arrTic[i].style.backgroundColor = "#FF132A";
      
      arrTic[i].innerHTML ="";
    }
  }
}

function Reset()
{
  count = 0;
  finish = true;
  
  for(var i=0;i<arrTic.length;i++)
  {
    arrTic[i].setAttribute("checked","false");
    arrTic[i].style.backgroundColor = "#Fa877F";
    arrTic[i].innerHTML ="";
  }
    
}