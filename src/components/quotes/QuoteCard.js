function QuoteCard({ quote }) {
    console.log(quote)
    return (
        < article className = "quote-card" >
            <div>
                <p className="categories">
                    {quote.categories.map((category, index) => <span className="category" key={index}>{category}</span>)
                    }
                </p>
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