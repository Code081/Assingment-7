var index = 0;
function colors()
{
    var colors = ["red", "blue", "orange","green", "purple"];
    document.getElementsByTagName("body")[0].
    style.background = colors[index++];
if(index > colors.length - 1)
{
    index = 0;
}

}