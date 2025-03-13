
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
    API_query(url, "GET", 0);
}

function get_game_achievement_global(game) {
    let url = 'https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=' + game + '&format=XML';
    API_query(url, "GET", 0);
}

function get_game_my_achievements(game, steamid, lang) {
    let url = 'https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=' + game + '&key=' + key + '&steamid=' + steamid + '&l=' + lang;
    API_query(url, "GET", 0);
}