var s = "shilesh";
var age  = 19
alert(s + " is " + age + " years old");

function sayingSomething(num,str)
{
    var c = str + " "+ num;
    var i = 1;
    while(i<10)
    {
    if(i%2==0)
    document.write("Number "+i+" is Even\n")
    else
    document.write("Number "+i+" is Odd\n")
    i++;
    }
    return 1;

}

var x = sayingSomething(7,"Ronaldo");
if(x==1)
alert("Exit successfully");
var orc={
    color:"green",
    height:5,
    weight:180,yell:function()
    {
        var stat = "Orcs are the best!";
        stat = stat.bold();
        document.write(stat);
    }
};
orc.color;
orc.yell();

function validatename()
        { var name = document.getElementById("hello").value;
        var names = name.slice(1,4);
        console.log(names);
        document.getElementById("show").innerHTML = names;
        }
