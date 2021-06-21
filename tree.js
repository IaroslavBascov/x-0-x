var genome=[1,1,1,
            1,1,1,
            1,1,1];
var vinner="x";
var lern=2;
var tab= document.getElementById ("tableData");
function checkFun () {
var n1 = tab. rows.length;
var i = 0, j = 0;
for (i = 0; i <n1; i ++) {
var n2 = tab.rows [i] .cells.length;
for (j = 0; j <n2; j ++) {
var x = tab.rows [i] .cells.item (j) .innerHTML; 
 if (x=="x"){
  for (m = 0; m <3; m ++) {
   if((i-m==1 || i-m==-1) & (j-m==1 || j-m==-1)){paint(tab.rows[i].cells.item(m),tab.rows[i].cells.item(m).Color+3);paint(tab.rows[m].cells.item(j),tab.rows[m].cells.item(j).Color+3);}
   paint(tab.rows[i].cells.item(m),tab.rows[i].cells.item(m).Color+1);
   paint(tab.rows[m].cells.item(j),tab.rows[m].cells.item(j).Color+1);
   if (i==j){
       if((i-m==1 || i-m==-1) & (j-m==1 || j-m==-1)){paint(tab.rows[m].cells.item(m),tab.rows[m].cells.item(m).Color+2)}
       paint(tab.rows[m].cells.item(m),tab.rows[m].cells.item(m).Color+1); 
   }
   if (i==n2-j-1){
       if((i-m==1 || i-m==-1) & (j-m==1 || j-m==-1)){paint(tab.rows[m].cells.item(n2-m-1),tab.rows[m].cells.item(n2-m-1).Color+2)}
       paint(tab.rows[m].cells.item(n2-m-1),tab.rows[m].cells.item(n2-m-1).Color+1);
   }
  }
 }
}
}
}
function learn () {
var n1 = tab. rows.length;
var i = 0, j = 0;
var str = "";
for (i = 0; i <n1; i ++) {
var n2 = tab.rows [i] .cells.length;
for (j = 0; j <n2; j ++) {
 var x = tab.rows [i] .cells.item (j) .innerHTML; 
 if (x==vinner){
  genome[i*3+j]-=lern;
 }
 else if (x!=""){
  genome[i*3+j]+=lern;
 }
}
}
 var n1 = tab.rows.length;
  var b = 0, g = 0;
  for (b = 0; b <n1; b++) {
  var n2 = tab.rows [b] .cells.length;
  for (g = 0; g <n2;g++) {
   tab.rows[b].cells.item(g).innerHTML="";
   tab.rows[b].cells.item(g).color=0;
  }
}}
var n1 =tab.rows.length;
var i = 0, j = 0;
for (i = 0; i <n1; i ++) {
var n2 =tab.rows [i] .cells.length;
for (j = 0; j <n2; j ++) { 
    tab.rows [i] .cells.item(j).onclick=function()
    {
    var n1 =tab.rows.length;
     var i = 0, j = 0;
     var str = "";
     for (k = 0; k <n1; k ++) {
     var n2 =tab.rows [i] .cells.length;
     for (h = 0; h <n2; h++) {
        tab.rows [k] .cells.item(h).Color=0;
     }
    }xx(this);
     checkFun();
     robot();
   }
}
}
function paint(cell,color){
  var x = cell.innerHTML; 
  if (x!="x" & x!="0"){cell.Color=color}
  else {cell.Color=0}
}
function oo(cell){
  var x = cell.innerHTML; 
  if (x!="x"){cell.innerHTML="0"}
}
function xx(cell){
  var x = cell.innerHTML; 
  if (x!="0"){cell.innerHTML="x";}
}
function robot()
{
var n1 =tab.rows.length;
var xxx = 0, yyy = 0;
var max=-10000;
var maxx=0;
var maxy=0;
for (xxx = 0; xxx <n1; xxx ++) {
var n2 =tab.rows [xxx] .cells.length;
for (yyy = 0;yyy <n2; yyy++) { 
 if(max<genome[xxx*3+yyy]*tab.rows[xxx].cells.item(yyy).Color & tab.rows[xxx].cells.item(yyy).innerHTML==""){
  max=genome[xxx*3+yyy]*tab.rows[xxx].cells.item(yyy).Color;maxx=xxx;maxy=yyy;
 }
}
}
oo(tab.rows[maxx].cells.item(maxy));
}
checkFun ();
function cr(){
vinner="x";
learn();
}
function cn(){
vinner="0";
learn();
}