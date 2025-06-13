.keyboard {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  align-items: center;
}

.keyboard-row {
  display: flex;
  justify-content: center;
  gap: 6px;
}

.key {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 58px;
  border-radius: 4px;
  border: none;
  background-color: #d3d6da;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  color: var(--text-color, #000);
  font-size: 1.1rem;
  transition: background-color 0.2s ease;
  padding: 0 10px; /* Make room for longer text like "ENTER" */
}

/* Optional: Make special keys wider */
.key.enter {
  min-width: 64px;
}

.key.backspace {
  min-width: 64px;
}
'