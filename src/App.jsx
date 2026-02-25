import { useState } from "react";

export default function App() {
  // Mandatory dictionary
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const query = searchTerm.trim();

    //  No Search Term Tests: if empty, show nothing (no error msg)
    if (query.length === 0) {
      setDefinition("");
      return;
    }

    const found = dictionary.find(
      (item) => item.word.toLowerCase() === query.toLowerCase()
    );

    if (found) {
      setDefinition(found.meaning);
    } else {
      //  Must display ONLY this exact message if not found
      setDefinition("Word not found in the dictionary.");
    }
  };

  const isNotFound = definition === "Word not found in the dictionary.";

  return (
    <div style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      {/* UI tests often check exact heading text */}
      <h2>XDictionary</h2>

      {/*  UI tests often look for input by testid */}
      <input
        data-testid="search-input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* UI tests often look for button by testid */}
      <button data-testid="search-button" onClick={handleSearch}>
        Search
      </button>

      <div style={{ marginTop: 16 }}>
        {/* Show definition format only when word is found */}
        {!isNotFound && definition !== "" && (
          <>
            <h3>Definition:</h3>
            <p data-testid="definition">{definition}</p>
          </>
        )}

        {/* Not found message should be alone */}
        {isNotFound && (
          <p data-testid="not-found">Word not found in the dictionary.</p>
        )}
      </div>
    </div>
  );
}