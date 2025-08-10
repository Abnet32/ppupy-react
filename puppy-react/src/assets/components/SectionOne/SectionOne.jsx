import watchnine from "../../image/section-one.PNG";

function SectionOne() {
  return (
    <section className="section-one">
      <div>
        <img src={watchnine} alt="watch logo" />
      </div>
      <div className="main-text">Smarter,Brighter,Mighiter.</div>
      <div>From $300</div>
      <button>Buy</button>
      <div className="learn-container">
        <div>
          <a href="#" className="learn">
            Learn more
          </a>
        </div>
        <div>
          <a href="#" className="watch">
            Watch the film
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
