import React from "react";
import QuoteCard from "./QuoteCard.js";
import CategoryForm from "./CategoryForm.js";

function Quotes({ quotes, categories, category }) {
    return (
        <section className="all-quotes">
            <div className="quotes wrapper">
                <div className="categoryHeader">
                    <p>Browse through your collection of quotes</p>
                    <CategoryForm categories={categories} category={category} />
                </div>
                {quotes.map((quote) => (<QuoteCard key={quote.id} quote={quote} />))}
            </div>
        </section>
    );
};

export default Quotes;