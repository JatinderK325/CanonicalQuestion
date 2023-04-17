// Getting data from another js file using the require function in Node.js.
const { idina_response } = require('./myData.js');

// Using map for storing key-value pairs.
const spamScore = new Map();
const domainAuthority = new Map();

idina_response.sources.forEach(source => {
    // Checking for duplicate spam scores.
    if (spamScore.has(source.spam_score)) {
        spamScore.get(source.spam_score).push(source.url);
    } else {
        spamScore.set(source.spam_score, [source.url]);
    }
    // console.log(spamScore);

    // Checking for duplicate domain authorities.
    if (domainAuthority.has(source.domain_authority)) {
        domainAuthority.get(source.domain_authority).push(source.url);
    } else {
        domainAuthority.set(source.domain_authority, [source.url]);
    }
    // console.log(domainAuthority);
});


// getting lists of URLs with duplicate spam scores and domain authorities
const duplicateSpamScores = Array.from(spamScore.values()).filter(urls => urls.length > 1).flat();
const duplicateDomainAuthorities = Array.from(domainAuthority.values()).filter(urls => urls.length > 1).flat();

console.log("List of urls with duplicate spam scores = ", duplicateSpamScores);
console.log("List of urls with duplicate domain authority = ", duplicateDomainAuthorities);  