/*
I create  this function to call all of my functions
 with the one click on the same time 
*/  
function changeText() 
{
    Top();       bottom(); 
}
/*
This function will handle the every thing about top text 
like position it on the top or change the font size 
*/
function Top()
{
    var topText = document.getElementById('topText').value ;
    var pTopText =  document.getElementById("topMeme") ; 
    pTopText.innerHTML= topText ; 
    pTopText.classList.add("topPosition"); 
    console.log(typeof(topText) )
    var TopTextLength = JSON.stringify(topText);
    console.log(typeof(TopTextLength) )
    console.log(TopTextLength.length )
    if(TopTextLength.length >12 ) 
       {
          pTopText.style.fontSize= "15px" ; 
       }
    if(TopTextLength.length >32 )  
       {
          pTopText.style.fontSize= "10px" ; 
       }
}
/*
This function will handle the every thing about bottom text 
like position it on the bottom or change the font size 
*/
function bottom()
{
    var BottomText = document.getElementById('BottomText').value ; 
    var pBottomText = document.getElementById("bMeme")
    pBottomText.innerHTML = BottomText ; 
    pBottomText.classList.add("bottomPosition");
    console.log(typeof(BottomText) )
    var BottomTextLength = JSON.stringify(BottomText);
    console.log(typeof(BottomTextLength) )
    console.log(BottomTextLength.length )
    if(BottomTextLength.length >12 ) 
    {
        pBottomText.style.fontSize= "15px" ; 
    }
    if(BottomTextLength.length >32 )  
    {
        pBottomText.style.fontSize= "10px" ; 
    }
}



