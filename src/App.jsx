import { useState } from "react";

export default function App() {
  // Mandatory dictionary (don't remove these)
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const query = term.trim().toLowerCase();

    const found = dictionary.find(
      (item) => item.word.toLowerCase() === query
    );

    if (found) {
      setDefinition(found.meaning);
      setNotFound(false);
    } else {
      setDefinition("");
      setNotFound(true);
    }
  };

  return (
    <div style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h2>XDictionary</h2>

      {/* MUST use input */}
      <input
        type="text"
        value={term}
        placeholder="Search a word..."
        onChange={(e) => setTerm(e.target.value)}
      />

      {/* MUST use button */}
      <button onClick={handleSearch} style={{ marginLeft: "8px" }}>
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        {definition && (
          <>
            <h3>Definition:</h3>
            <p>{definition}</p>
          </>
        )}

        {notFound && (
          <p>Word not found in the dictionary.</p>
        )}
      </div>
    </div>
  );
}