function changeText() 
{
    Top();       bottom(); 
}
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



