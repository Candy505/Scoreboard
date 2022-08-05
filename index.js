let home_El =  document.getElementById("home");
let guest_El = document.getElementById("guest");

let h_Count = 0 ;
let g_Count = 0 ;

home_El.innerHTML = 0 ;
guest_El.innerHTML = 0 ;

function point1(player)
{
     if(player == "home")
    {
        h_Count += 1;
        home_El.innerHTML = h_Count;
     }
     
     else
     {
         g_Count += 1;
         guest_El.innerHTML = g_Count ;
         
     }
    
}


function point2(player)
{    
     if(player == "home")
    {
        h_Count += 2;
        home_El.innerHTML = h_Count;
     }
     
     else
     {
         g_Count += 2;
         guest_El.innerHTML = g_Count ;
         
     }
    
    
}


function point3(player)
{
     
     if(player == "home")
    {
        h_Count += 3;
        home_El.innerHTML = h_Count;
     }
     
     else
     {
         g_Count += 3;
         guest_El.innerHTML = g_Count ;
         
     }
    
}