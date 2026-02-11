import "./Home.scss";

function Home() {
  return (
    <section className="Home">
      {/* Левая часть */}
      <div className="Home_left">
        <h1 className="Home_title">
          Welcome to <span>My Portfolio</span>
        </h1>
        <p className="Home_subtitle">
          This is my first project, we are still at the beginning stage.
        </p>
      </div>

      {/* Правая часть с прозрачным 3D кубом */}
      <div className="Home_right">
        <div className="Home_cube">
          <div className="face face--front">Js</div>
          <div className="face face--back">Js</div>
          <div className="face face--left">Js</div>
          <div className="face face--right">Js</div>
          <div className="face face--top">Js</div>
          <div className="face face--bottom">Js</div>
        </div>
      </div>
    </section>
  );
}

export default Home;
