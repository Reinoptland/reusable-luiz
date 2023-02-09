import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import Label from "./Label";
import "./styles.css";

export default function SearchBar({ handleSearch, entity, suggestions }) {
  const [query, setQuery] = useState("");

  return (
    <div className="sb-main">
      <div className="sb-label">
        <Label variant="warning" htmlFor="search">
          Search for {entity}
        </Label>
        <div className="sb-input">
          <datalist id="suggestions">
            {suggestions.map((suggestion) => (
              <option key={suggestion} value={suggestion}>
                {suggestion}
              </option>
            ))}
          </datalist>
          <InputField
            list="suggestions"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`search for ${entity}`}
            id="search"
          />
        </div>
      </div>
      <div className="sb-button">
        <Button variant="warning" onClick={() => handleSearch(query)}>
          Go
        </Button>
      </div>
    </div>
  );
}
