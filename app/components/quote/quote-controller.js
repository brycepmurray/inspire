function QuoteController() {

    var qs = new QuoteService()

    function getQuote() {
        qs.getQuote(function(quote) {
            console.log('What is the quote', quote)
            document.getElementById('quote').innerHTML = `
			<p>"${quote.quote}"</p>
			<p>-${quote.author}</p>
			`
        })
    }
    getQuote()
}