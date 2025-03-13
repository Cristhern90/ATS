
let key = "";

function API_query(url, method, timeout) {
    var settings = {
        "url": url,
        "method": method,
        "timeout": timeout,
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

function get_game_achievement(game, lang) {
    let url = 'https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=' + key + '&appid=' + game + '&l=' + lang;
    API_query(url,"GET",0);
}