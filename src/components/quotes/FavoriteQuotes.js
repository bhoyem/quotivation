import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";


function FavoriteQuotes({ favoriteQuotes, maxFaves, removeFromFavorites }) {
    return (
        <section className="favorite-quotes">
            <div className="wrapper quotes">
                <h3>Top 3 favorite quotes</h3>
                {favoriteQuotes.length > 0 &&
                    (<ul>
                        {favoriteQuotes.map((quote, index) => (<FavoriteQuoteCard quote={quote} key={quote.id} removeFromFavorites={removeFromFavorites} listPosition={index + 1} />))}
                    </ul>)}
                < div className="favorite-quotes-description">
                    <p>
                        {favoriteQuotes.length < 3 && `You can add ${maxFaves - favoriteQuotes.length} more ${maxFaves - favoriteQuotes.length > 1 ? `quotes` : `quote`} to your top three favorites by selecting from the options below.`} <br />
                        {favoriteQuotes.length < 3 && `Once you choose, they will appear here.`}
                    </p>
                </div>
            </div>
        </section >
    );
};

export default FavoriteQuotes;