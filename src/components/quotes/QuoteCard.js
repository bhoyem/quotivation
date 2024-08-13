import { Heart } from "react-feather";

function QuoteCard({ quote, addToFavorites}) {
    // console.log(quote)
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
                        <Heart onClick={() => addToFavorites(quote.id)}/>
                    </p>
                </footer>
            </div>
        </article >
    );
};

export default QuoteCard;