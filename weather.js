$(document).ready(function() {
    $('form').submit(function() {
        var url = "https://api.openweathermap.org/data/2.5/weather?q="+$('input[name=city]').val()+"&appid=9272ef239ea6967d7b46e66bae86355e";
        var html = ""
//        console.log(url);
        $.get(url, function(res) {
            html += "<h1>"+res.name+"</h1><p>Temperature: "+Math.round((1.8*(res.main.temp-273)+32)*10)/10+" &#x2109;</p>"
            $('#results').html(html);
        }, 'json');
        return false;
    });
});
