import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Loader } from "react-feather";
import Quotes from "./components/quotes/Quotes.js";
import FavoriteQuotes from "./components/quotes/FavoriteQuotes.js";
import Message from "./components/Message.js";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");
  const [favoriteQuotes, setFavoriteQuotes] = useState(JSON.parse(window.localStorage.getItem("favoriteQuotes")) || []);
  const [messageText, setMessageText] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";
  const categories = ["All", "Leadership", "Empathy", "Motivation", "Learning", "Success", "Empowerment"];
  const maxFaves = 3;

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const request = await fetch(quotesUrl);
      const results = await request.json();
      setQuotes(results);
    } catch (error) {
      console.log(`There was an error.`, error)
    }
    setLoading(false);
  };

  useEffect(() => { fetchQuotes(); }, []);

  //Every time the favoriteQuotes state changes, store the new state to local storage
  useEffect(() => {
    window.localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
  }, [favoriteQuotes]);

  const filteredQuotes = (category !== "All" ? quotes.filter((quote) => quote.categories.includes(category)) : quotes);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const addToFavorites = (quoteId) => {
    const selectedQuote = quotes.find((quote) => quote.id === quoteId);
    const alreadyFavorite = favoriteQuotes.find((quote) => quote.id === selectedQuote.id);

    if (alreadyFavorite) {
      removeFromFavorites(quoteId);
      setMessageText("Removed from favorites");
      setShowMessage(true);
    } else if (favoriteQuotes.length < maxFaves) {
      setFavoriteQuotes([selectedQuote, ...favoriteQuotes]);
      setMessageText("Added to favorites!");
      setShowMessage(true);
    } else {
      setMessageText("Max number of Favorite Quotes reached. Please delete one to add another.");
      setShowMessage(true);
    };
    return;
  }

  const removeMessage = () => {
    setShowMessage(false);
  };


  const removeFromFavorites = (quoteId) => {
    const newFavoriteQuotesList = favoriteQuotes.filter((quote) => quote.id !== quoteId)
    setFavoriteQuotes(newFavoriteQuotesList);
    return;
  };

  return (

    <div className='App'>
      {showMessage && <Message messageText={messageText} removeMessage={removeMessage} />}
      <Header />
      <main>
        <FavoriteQuotes favoriteQuotes={favoriteQuotes} maxFaves={maxFaves} removeFromFavorites={removeFromFavorites} />
        {loading ? (<Loader />) : (<Quotes quotes={filteredQuotes} categories={categories} category={category} handleCategoryChange={handleCategoryChange} addToFavorites={addToFavorites} favoriteQuotes={favoriteQuotes} />)}
      </main>
      <Footer />
    </div>
  );
}
export default App;
