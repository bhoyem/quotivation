function QuoteCard({ quote }) {
    return (
        // console.log(quote)
        < article className = "quote-card" >
            <div>
                <h3>{quote.text}</h3>
                <footer>
                    <p className="author">
                        {quote.author}
                    </p>
                </footer>
            </div>
    </article >
    );
};

export default QuoteCard;