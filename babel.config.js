module.exports = {
    presets:[
        "@babel/preset-env",
        ["@babel/preset-react", {
            // Adding runtime automatic means we don't have to import it each time in the tests
            "runtime": "automatic"
         }],
        '@babel/preset-typescript',
    ]
}