var request = require("request");

export const getToken = () => {
    var options = {
        method: 'POST',
        url: 'https://actually-dev.us.auth0.com/oauth/token',
        headers: { 'content-type': 'application/json' },
        body: '{"client_id":"5n7WJSexZXgm18QcIAKDw45a9aZQ9lgd","client_secret":"hIRr_yIIyUSnu_WzZE_EVE_PrWdW-zam7mrF3hBYHm7iWtyhkSpNISXYzF8uEBqM","audience":"https://db.fauna.com/db/yut6if31yynfc","grant_type":"client_credentials"}'
    };

    request(options, function (error, response, body) {
        if (error) return error;

        return body;

    });
}

getToken();
