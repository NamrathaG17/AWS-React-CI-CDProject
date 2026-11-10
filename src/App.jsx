import { useState } from 'react';
import { STRING_TOOLS } from './stringTools';
import './App.css';

export default function App() {
  const [text, setText] = useState('');
  const [toolId, setToolId] = useState(STRING_TOOLS[0].id);

  // Recalculated on every render, so it updates live as the user types
  const tool = STRING_TOOLS.find((t) => t.id === toolId);
  const result = text && tool ? tool.run(text) : '';

  return (
    <main>
      <h1>String Tools</h1>

      <label htmlFor="text">Your text</label>
      <textarea
        id="text"
        placeholder="Type or paste text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="tool">Choose a tool</label>
      <select id="tool" value={toolId} onChange={(e) => setToolId(e.target.value)}>
        {STRING_TOOLS.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>

      {result && (
        <section className="result">
          <h2>Result</h2>
          <pre>{result}</pre>
        </section>
      )}
    </main>
  );
}
