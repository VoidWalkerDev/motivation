// Quote database - CDN compatible version
// This file makes the quotes array available in different module systems

// Import the quotes array from the original file
// In a real CDN scenario, this would be properly packaged during build

// UMD pattern to make the module compatible with different environments
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module
        define(['./quotes'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('./quotes'));
    } else {
        // Browser globals (root is window)
        // Assumes the quotes variable is already available in the global scope
        root.quotesLibrary = factory(root.quotes);
    }
}(typeof self !== 'undefined' ? self : this, function(quotes) {
    // Return an object with the quotes and utility functions
    return {
        quotes: quotes,
        getRandomQuote: function() {
            return quotes[Math.floor(Math.random() * quotes.length)];
        },
        getQuotesByTag: function(tag) {
            return quotes.filter(function(quote) {
                return quote.tags.indexOf(tag) !== -1;
            });
        }
    };
})); 