import { Heart } from "react-feather";

function QuoteCard({ quote, addToFavorites, favoriteQuotes }) {
    const alreadyFavorite = favoriteQuotes.find((checkedQuote) => checkedQuote.id == quote.id);
    const faveStyle = (alreadyFavorite ? "#333" : "");

    return (
        < article className="quote-card" >
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
                    <p className="add-favorite" >
                        <Heart onClick={() => addToFavorites(quote.id)} style={{ fill: faveStyle }} />
                    </p>
                </footer>
            </div>
        </article >
    );
};

export default QuoteCard;