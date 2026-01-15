import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">WIKIPEDIA SUCHE</h2>
      <label htmlFor="wiki-search">Suche nach einem Artikel:</label>
      <input
        id="wiki-search"
        type="search"
        autoFocus
        placeholder="z.B. Earth"
      ></input>
      <p>Hier kommt später der Text</p>
      <a className="article__link" href="https://en.wikipedia.org/wiki/Earth">
        Zum Wikipedia Artikel
      </a>
    </article>
  );
}

async function Wiki() {
  try {
    const response = await fetch(
      "https://en.wikipedia.org/api/rest_v1/page/summary/Earth"
    );
    if (!response.ok) {
      throw new Error(`HTTP Fehler! Status ${response.status}`);
    }
    const data = await response.json();
    console.log("Daten erfolgreich geladen: ", data);
    return data;
  } catch (error) {
    console.error("Da ging was schief: ", error);
    return { error: error.message };
  }
}
Wiki().then((data) => console.log("Ergebnis in der Konsole:", data));
