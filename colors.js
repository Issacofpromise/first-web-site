var Links={
    color:function (co) {
    // var ali=document.querySelectorAll('a');
    // var i = 0;
    // while(i < ali.length){
    //   ali[i].style.color=co;
    //   i=i+1;}}}
    $('a').css('color',co);}}
  
var body = {
  color:function (co) {
  // document.querySelector('body').style.color=co;
  $('body').css('color',co);
  },
  back:function (co) {   
  // document.querySelector('body').style.backgroundColor=co;
  $('body').css('backgroundColor',co);             
                     }}
    var Line ={
      width:function (co) {
      // document.querySelector('h1').style.borderBottom=co;
      $('h1').css('borderBottom',co);},
      
      height:function (co) {
      // document.querySelector('ol').style.borderRight=co;
      $('ol').css('borderRight',co);}}
      
   function N_D_Handler(se) {     
  if(se.value === 'night'){
    body.back('black');
    body.color('white');    
    se.value='day';  
    Line.width('2px solid powderblue');
    Line.height("2px solid powderblue");
    Links.color('powderblue')    
} else {  
    body.back('white');
    body.color('black');      
    se.value='night';
    Line.width("1px solid black");
    Line.height('1px solid black');
    Links.color('black');
    }}