var contador=0;
var intentos=0;
var sentence=0;

function randomNumbers()
{
    var numeros = new Array();
    var randomNumber;
    for(var i=0;i<12;i++)
        {
            do
            {
                randomNumber=Math.floor((Math.random()*12)+1);
                
            }while(numeros.indexOf(randomNumber)!=-1);
            numeros[i]=randomNumber;
        }
    console.log(numeros);
    return numeros;
}

function posicionate2(position)
{
    var card;
    for(var i=0;i<12;i++)
        {
            card=document.getElementById("c"+i);
            card.style.gridColumn = "" + position[i]%4;
            if(position[i]/5 <1)
                {
                    card.style.gridRow=1;
                }
            else if(position[i]/9 <1)
                {
                    card.style.gridRow=2;
                }
            else
                {
                    card.style.gridRow=3;
                }
        }
    
}

function checkingImg(cartas, seleccionado,cont)
{
    console.log(seleccionado);
    var id=seleccionado.id;
    console.log(id);
    var image=document.getElementById(""+id);
   
    
    var i;
    for(i=0;i<2;i++)
        {
            if(cartas[i]==-1)
                {
                    cartas[i]=image;
                    break;
                }
        }
    if(cartas[0]!=-1 && cartas[1]!=-1)
        {
            if(cartas[0].src==cartas[1].src)
                {
                    $(cartas[0]).parent().removeAttr("onclick");
                    $(cartas[1]).parent().removeAttr("onclick");
                    parada(cartas);
                   
                    console.log(contador);
                    if(contador==5)
                        {
                            setTimeout(ganas,500);
                            
                        }
                     contador++;
                    
                }
            else
                {
                      setTimeout(acabar,400,cartas);
                

                }
        intentos++;
            document.getElementById("attempts").innerHTML = "Attempts: "+intentos;
        }
    
}

function acabar(cartas){
                console.log(cartas);
                $(cartas[0]).parent().trigger("onclick");  
                $(cartas[1]).parent().trigger("onclick");
                parada(cartas);
    
}

function parada(cartas){
    for(i=0;i<2;i++)
            {
                cartas[i]=-1;
            }
}

function ganas(){
    
    alert("You win");
    $(".wrapper").hide();
    $(".button").hide();
    $("body").addClass('win');
}
function ingeniousSentence()
{
    switch(sentence)
        {
            case 0:
                alert("Paqui 2 convalidada");
                break;
            case 1:
                alert("Chema delegado");
                break;
            case 2:
                alert("Javi deja de llorar");
                break;
            case 3:
                alert("Nestor al carrer");
                break;
            case 4:
                alert("Javi Calvo wuapo");
                break;
            case 5:
                alert("Ok, now you know some lore of the San Jorge university lore");
                break;
            case 6:
                alert("Ok, you touch so many times the button");
                break;
            case 7:
                alert("Stop");
                break;
            case 8:
                alert("Pleas Johanna");
                break;
            case 9:
                alert("Lopeta");
                break;
            case 10:
                alert("Ok, I'm going to ignore from now on");
                break;
            case 14:
                alert("OK, STOP, YOU WIN, OK? BUT STOP PLEASE");
                ganas();
                break;
            default:
                alert("...");
                break;
        }
    sentence++;
}
$(document).ready(function()
{
    var positions = randomNumbers();
    var selectedImages=new Array(2);
    selectedImages[0]=-1;
    selectedImages[1]=-1;
    var id;
    posicionate2(positions);
    $(".card").click(function()
    {
        
        
        var childs = $(this).children();
        id=childs[1];
        checkingImg(selectedImages,id);
        document.getElementById("puntos").innerHTML = "Score: "+contador;
    });
    
    
});