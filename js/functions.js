
  var table       = document.querySelector("#grid1");
  var r_table     = document.querySelector("#grid2");
  var l_table     = document.querySelector("#grid3");
  var cells       = table.querySelectorAll("td");
  var r_cells     = r_table.querySelectorAll("td");
  var l_cells     = l_table.querySelectorAll("td");
  var myAudio     = new Audio('audio/poing.mp3');
  var highscores  = document.querySelector("#Leaderboard");
  var time        = highscores.querySelectorAll("p");
  var left_anim   = document.getElementsByClassName("marqueel");
  var ltds         = document.querySelectorAll("#left");
  var rtds        = document.querySelectorAll("#right");

  var tableWidth = window.innerWidth;
  var num = 0;
  var difficulty;
  var arr = [];
  var scores = [1000,1000,1000,1000,1000,1000];
  var previous_chosen = 0;
  var easy_time = ["first","second","third","fourth","fifth"];
  var diff_time = ["one","two","three","four","five"];
  var enTryAgain = 1;


  
  
  for (var i = 0; i < cells.length; i++) {

    (function(index){

    cells[i].addEventListener("click", function() {
 
      if(this.innerHTML == previous_chosen + 1) 
       {
         myAudio.play();
           
           if(this.innerHTML < 16)
            {
                this.innerHTML = parseInt(this.innerHTML) + 25;
                r_cells[index].innerHTML = this.innerHTML;
                l_cells[index].innerHTML = this.innerHTML;
                temp =this.innerHTML;
                cells[index].style.backgroundColor = "#fffa"+ (130 - temp*3).toString(16);
                r_cells[index].style.backgroundColor =  "#fffa"+ (130 - temp*3).toString(16);
                l_cells[index].style.backgroundColor =  "#fffa"+ (130 - temp*3).toString(16);
             }
   
           else
           {
               this.style.visibility="hidden";
               r_cells[index].style.visibility="hidden";
               l_cells[index].style.visibility="hidden";
               

               if(this.innerHTML == 40)
               {
                 stop();
                 scoreboard();
                  
                  
               }  
           }
            previous_chosen++;
       }
 
       else
      {
            stop();
            alert("GAME OVER !!");
            for(var i =0; i< 25 ;i++)
           {
              r_cells[i].style.visibility = "hidden";
              cells[i].style.visibility = "hidden";
              l_cells[i].style.visibility = "hidden";
           }
        table.style.backgroundImage="url('images/gameover.png')";
      }
 });

 r_cells[i].addEventListener("click", function() {
 
     if(this.innerHTML == previous_chosen + 1) 
        {
          myAudio.play();
           
         
     
           if(this.innerHTML < 16)
            {
              this.innerHTML = parseInt(this.innerHTML) + 25;
              cells[index].innerHTML = this.innerHTML;
              temp =this.innerHTML;
                cells[index].style.backgroundColor = "#fffa"+ (130 - temp*3).toString(16);
                r_cells[index].style.backgroundColor ="#fffa"+ (130 - temp*3).toString(16);
                l_cells[index].style.backgroundColor ="#fffa"+ (130 - temp*3).toString(16);
             }  
           else
           {
              this.style.visibility="hidden";
              cells[index].style.visibility="hidden";
              

              if(this.innerHTML == 40)
               {
                 stop();
                 scoreboard();
                  
              }  
           }
     
           previous_chosen++;
        }

    else
      {
           stop();
           alert("GAME OVER !!");
         for(var i =0; i< 25 ;i++)
        {
           r_cells[i].style.visibility = "hidden";
           cells[i].style.visibility   = "hidden";
           l_cells[i].style.visibility = "hidden";
        }
       table.style.backgroundImage="url('images/gameover.png')";
      }   
});


l_cells[i].addEventListener("click", function() {
 
  if(this.innerHTML == previous_chosen + 1) 
     {
         myAudio.play();
            
    
  
        if(this.innerHTML < 16)
         {
           this.innerHTML = parseInt(this.innerHTML) + 25;
           cells[index].innerHTML = this.innerHTML;

           temp =this.innerHTML;
                cells[index].style.backgroundColor =  "#fffa"+ (130 - temp*3).toString(16);
                r_cells[index].style.backgroundColor = "#fffa"+ (130 - temp*3).toString(16);
                l_cells[index].style.backgroundColor =  "#fffa"+ (130 - temp*3).toString(16);
          }  
        else
        {
           this.style.visibility="hidden";
           cells[index].style.visibility="hidden";
           

          if(this.innerHTML == 40)
          {
             stop();
             scoreboard();
          }  
        }
  
        previous_chosen++;
     }

 else
   {
        stop();
        alert("GAME OVER !!");
      for(var i =0; i< 25 ;i++)
     {
        r_cells[i].style.visibility = "hidden";
        cells[i].style.visibility = "hidden";
        l_cells[i].style.visibility = "hidden";
     }
    table.style.backgroundImage="url('images/gameover.png')";
   }   
});





})(i);
 }
  

  function newgame()
  
  {
    if(enTryAgain == 1)
    {
     stop();
     document.getElementById("timer").innerHTML = 0;
     document.querySelector("#newgame").innerHTML="Try Again";
     enTryAgain = 0;

    for(var i =0; i< 25 ;i++)
   {
     cells[i].style.visibility   = "hidden";
     r_cells[i].style.visibility = "hidden";
     l_cells[i].style.visibility = "hidden";

   }

   table.style.backgroundImage="url('images/3.jpg')";
   table.style.backgroundSize= "100% 100%";
  
  setTimeout(function bg2()
  {
    table.style.backgroundImage="url('images/2.jpg')";
    table.style.backgroundSize= "100% 100%";
    
  }, 1000);

  setTimeout(function bg2()
  {
    table.style.backgroundImage="url('images/1.jpg')";
   table.style.backgroundSize= "100% 100%";
    
  }, 2000);

  setTimeout( function createtable()
{
  for(var i =0; i< 25 ;i++)
   {
     cells[i].style.visibility   = "visible";
     r_cells[i].style.visibility = "visible";
     l_cells[i].style.visibility = "visible";
   } 

  table.style.backgroundImage="none";

  previous_chosen = 0;


 for(var i =0; i<25 ;i++)
    arr.push(i+1);
  

  for(var i = 0; i<25 ;i++)
  {
    var temp = Math.floor(Math.random() * (25-i) );
    cells[i].innerHTML   = arr[temp] ;
    r_cells[i].innerHTML = cells[i].innerHTML;
    l_cells[i].innerHTML = cells[i].innerHTML;
    cells[i].style.backgroundColor = "#fffa"+ (130 - arr[temp]*3).toString(16);
    r_cells[i].style.backgroundColor = "#fffa"+ (130 - arr[temp]*3).toString(16);
    l_cells[i].style.backgroundColor = "#fffa"+ (130 - arr[temp]*3).toString(16);
    arr.splice(temp,1);
  }
  start();

  

},3000);

    }  
}

  function changeValue() {
    value += 0.003;
    num = value.toFixed(3) 
    document.getElementById("timer").innerHTML = num;
    enTryAgain = 1;
    
  }
  
  var timerInterval = null;
  function start() {
    stop(); // stoping the previous counting (if any)
    value = 0;
    timerInterval = setInterval(changeValue, 1);  
  }
  var stop = function() {
    clearInterval(timerInterval);
  }
  
function scoreboard()
{
  
  scores[5] = num;
  
  scores.sort(function(a, b){return a - b});

  for(var i=0; i<5 ;i++)
  {

    time[i].innerHTML        =   scores[i];
    time[i].style.visibility =  "visible";

    if(scores[i] == 1000 || scores[i] == 0)
    time[i].style.visibility="hidden";

    if(difficulty == 0)
    window.localStorage.setItem(easy_time[i], scores[i]);

    else
    window.localStorage.setItem(diff_time[i],scores[i]);

  }   
}

function easy()
{
  newgame();

  difficulty = 0;
  for(var i =0 ;i < 25;i++)
  {
    console.log("easy" + cells[i].style.animationDuration);
    cells[i].style.animationDuration = "12s";
    l_cells[i].style.animationDuration = "12s";
    r_cells[i].style.animationDuration = "12s";

  }

for(var i= 0 ;i < 5 ;i++)
 if(localStorage.getItem(easy_time[i]))
   {
     scores[i] = window.localStorage.getItem(easy_time[i]);
     time[i].innerHTML     =   scores[i];
     if(scores[i] == 1000 || scores[i] == 0)
    time[i].style.visibility="hidden";
     
      console.log("inside scoress");
   }  
}  



function difficult()
{
  newgame();

  difficulty = 1;

  for(var i =0 ;i < 25;i++)
  {
    console.log("diff" + cells[i].style.animationDuration);
    cells[i].style.animationDuration = "3s";
    l_cells[i].style.animationDuration = "3s";
    r_cells[i].style.animationDuration = "3s";

  }

  for(var i= 0 ;i < 5 ;i++)
 if(localStorage.getItem(diff_time[i]))
   {
     scores[i] = window.localStorage.getItem(diff_time[i]);
     time[i].innerHTML     =   scores[i];
     if(scores[i] == 1000 || scores[i] == 0)
    time[i].style.visibility="hidden";
     
      console.log("inside scoress");
   }

}