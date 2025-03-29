// Simple export of the quotes array for direct consumption
// This is used for environments where a simple module export is preferred

// Import the quotes from the main file
// In a proper build system, this would be handled by the packaging tool
if (typeof require === 'function') {
    const quotes = require('./quotes');
    module.exports = quotes;
} else {
    // In browser environments where quotes is defined globally
    if (typeof window !== 'undefined' && window.quotes) {
        // Export to window if in a browser
        window.quotesExport = window.quotes;
    }
} 