import languages from "./languages";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="container py-5">
      <h1 className="mb-4">Learn Web development</h1>


      <div className="d-flex flex-wrap gap-2 mb-4">
        {languages.map((lang) => (
          <button
            key={lang.id}
            type="button"
            onClick={() => setSelectedLanguage(lang)}
            className={
              "btn px-4 " +
              (lang.id === selectedLanguage.id
                ? "btn-warning text-dark"
                : "btn-primary")
            }
          >
            {lang.title}
          </button>
        ))}
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="card-title mb-3">{selectedLanguage.title}</h4>
          <p className="card-text mb-0">{selectedLanguage.description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;