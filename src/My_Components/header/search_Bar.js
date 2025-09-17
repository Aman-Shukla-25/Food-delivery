import React, { useState, useRef, useEffect } from 'react';
import './search_Bar.css';

const suggestions = [
  'Apples',
  'Bananas',
  'Bread',
  'Butter',
  'Milk',
  'Maggi',
  'Masala',
  'Aata',
  'Rice',
  'Eggs'
];

const SearchBar = ({ placeholder = "Search for products and brands" }) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!query) {
      setFiltered([]);
      return;
    }
    const q = query.toLowerCase();
    setFiltered(suggestions.filter(item => item.toLowerCase().includes(q)));
    setOpen(true);
  }, [query]);

  function onSelect(item) {
    setQuery(item);
    setOpen(false);
  }

  return (
    <div className="akku-search-wrapper" ref={wrapperRef}>
      <div className="akku-search">
        <button type="button" className="loc-btn" aria-label="location">
          <span className="loc-dot" /> Deliver
        </button>

        <div className="input-area">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query && setOpen(true)}
            placeholder={placeholder}
          />
          {query && (
            <button type="button" className="clear-btn" onClick={() => setQuery('')}>
              ✕
            </button>
          )}
        </div>
      </div>

      {open && filtered.length > 0 && (
        <ul className="suggestions">
          {filtered.map(item => (
            <li key={item} className="suggestion-item" onClick={() => onSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
