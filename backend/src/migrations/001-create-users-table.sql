-- Tell Postgres where to put these tables
SET search_path TO public;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL, 
    password_hash TEXT NOT NULL, 
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS decks (
    id SERIAL PRIMARY KEY, 
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name TEXT NOT NULL, 
    card_count INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS cards (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    deck_id INT NOT NULL REFERENCES decks(id) ON DELETE CASCADE, 
    front TEXT NOT NULL, 
    back TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() -- Removed the extra comma that was here
);

-- Index for fast searching (Fixed the column name to match the table above)
CREATE INDEX idx_cards_deck_id ON cards(deck_id);
