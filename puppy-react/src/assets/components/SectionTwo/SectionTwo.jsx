import watchda from "../../image/seciton-two.png";

function SectionTwo() {
  return (
    <section className="section-one section-two">
      <div>
        <img src={watchda} alt="watch logo" />
      </div>
      <div className="main-text">Next level adventure.</div>
      <div>From $300</div>
      <button>Buy</button>
      <div className="learn-container">
        <div>
          <a href="#" className="learn">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo
