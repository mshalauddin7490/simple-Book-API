const newman = require('newman');

newman.run({
    // collection: require('./collection/simpleBookAPI.json'), // pointing to local JSON file.
    collection:'https://api.postman.com/collections/24548418-258e640a-5027-464c-858c-f2170fca2c26?access_key=PMAT-01H19QNFDQJ92X58XG34H1WKCF',
    //environment: require('./collection/customer_api_env.json'), // pointing to local env file
    iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
    
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});