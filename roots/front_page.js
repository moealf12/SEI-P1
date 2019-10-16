var fs=require('fs');
var user = document.getElementById('#sub');
if ( user )
{
    user.onclick = function(){
        var user_name = document.getElementById('#username')
        fs.writeFile('words.json',user_name,finished)
    }
}
