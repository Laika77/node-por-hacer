const SwaggerParser = require("swagger-parser");

SwaggerParser.validate('../swagger01.json', (err, api) => {
    if (err) {
        console.error(err);
    } else {
        console.log("API name: %s, Version: %s", api.info.title, api.info.version);
        console.log(Object.keys(api.paths));
        // console.log("Objetos: ", api.definitions.portfolioRequest.properties);
    }
});