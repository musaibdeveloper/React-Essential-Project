import { useState } from "react";
import img from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";
import Musaib from "./components/Musaib.jsx";
import CoreComponents from "./components/coreComponents.jsx";
import Tabbutton from "./components/TabButtons.jsx";
import { EXAMPLES } from "./data.js";
const keywords = ["Fundamentals", "Core", "Important"];

function getanyone(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [selectedTopics, setTheTopics] = useState(
    "components",
    "jsx",
    "props",
    "state"
  );

  function onSelect(SelectedButtons) {
    setTheTopics(SelectedButtons);
  }
  return (
    <div>
      <header>
        <img src={img} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <Musaib></Musaib>
        <p>
          {keywords[getanyone(2)]} React concepts you will need for almost any
          app you are going to build!
        </p>
      </header>
      <main>
        <section id="core-concepts">
          <h2>Core-Concepts</h2>
          <ul>
            <CoreComponents
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreComponents {...CORE_CONCEPTS[1]} />
            <CoreComponents {...CORE_CONCEPTS[2]} />
            <CoreComponents {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <menu>
            <Tabbutton onSelect={() => onSelect("components")}>
              Components
            </Tabbutton>
            <Tabbutton onSelect={() => onSelect("jsx")}>JSX</Tabbutton>
            <Tabbutton onSelect={() => onSelect("props")}>Props</Tabbutton>
            <Tabbutton onSelect={() => onSelect("states")}> States</Tabbutton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopics].title}</h3>
            <p>{EXAMPLES[selectedTopics].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopics].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
