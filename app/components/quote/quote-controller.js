function QuoteController() {

    var qs = new QuoteService()

    function getQuote() {
        qs.getQuote(function(quote) {
            console.log('What is the quote', quote)
            document.getElementById('quote').innerHTML = `
			<p class="flow-text">"${quote.quote}"</p>
			<p1 class ="flow-text author center-align">-${quote.author}
			`
        })
    }
    getQuote()
}