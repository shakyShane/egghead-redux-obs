import React from 'react';

export function Search({ defaultValue, onChange, messages, loading, cancel }) {

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search for a Beer"
        defaultValue={defaultValue}
        onChange={(evt) => onChange(evt.target.value)}
      />
      {loading && (
        <button type="button" onClick={cancel}>Cancel</button>
      )}
      {messages.length > 0 && (
        <ul>
          {messages.map(message =>
            <li key={message.text} className={`Message Message--${message.type}`}>
              {message.text}
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
