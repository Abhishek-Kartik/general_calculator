let currentdisplay='';

document.getElementById('display').value=currentdisplay;


function value1()
{
     currentdisplay =currentdisplay+'1'
     document.getElementById('display').value= currentdisplay;
}

function value2()
{
     currentdisplay =currentdisplay+'2'
     document.getElementById('display').value= currentdisplay;
}
function value3()
{
     currentdisplay =currentdisplay+'3'
     document.getElementById('display').value= currentdisplay;
}
function value4()
{
     currentdisplay =currentdisplay+'4'
     document.getElementById('display').value= currentdisplay;
}
function value5()
{
     currentdisplay =currentdisplay+'5'
     document.getElementById('display').value= currentdisplay;
}
function value6()
{
     currentdisplay =currentdisplay+'6'
     document.getElementById('display').value= currentdisplay;
}
function value7()
{
     currentdisplay =currentdisplay+'7'
     document.getElementById('display').value= currentdisplay;
}
function value8()
{
     currentdisplay =currentdisplay+'8'
     document.getElementById('display').value= currentdisplay;
}
function value9()
{
     currentdisplay =currentdisplay+'9'
     document.getElementById('display').value= currentdisplay;
}
function valueE()
{
    let res= eval(currentdisplay)
     document.getElementById('display').value= res;
}
function valueA()
{
     currentdisplay =currentdisplay+'+'
     document.getElementById('display').value= currentdisplay;
}
function valueS()
{
     currentdisplay =currentdisplay+'-'
     document.getElementById('display').value= currentdisplay;
}
function valueZZ()
{
     currentdisplay =currentdisplay+'00'
     document.getElementById('display').value= currentdisplay;
}
function valueM()
{
     currentdisplay =currentdisplay+'*'
     document.getElementById('display').value= currentdisplay;
}
function valueR()
{
     currentdisplay =currentdisplay+'%'
     document.getElementById('display').value= currentdisplay;
}
function valueD()
{
     currentdisplay =currentdisplay+'/'
     document.getElementById('display').value= currentdisplay;
}
function valueZ()
{
     currentdisplay =currentdisplay+'0'
     document.getElementById('display').value= currentdisplay;
}
function valueDo()
{
     currentdisplay =currentdisplay+'.'
     document.getElementById('display').value= currentdisplay;
}
function valueC()
{
     currentdisplay =''
     document.getElementById('display').value= currentdisplay;
}
function valueS()
{
     currentdisplay=currentdisplay.slice(0, -1);
     document.getElementById('display').value= currentdisplay;
}