import './Hero.css';

export function Hero () {
    return (
      <section className="hero">
        <h1>How can we help ?</h1>
        <form action="">
        <input placeholder='Search' type="search" name="search" id="search" />
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}>
          <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
        </svg>
        </form>
      </section>
    );
}