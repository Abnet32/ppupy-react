import watch from "../../image/watch_SE.png";
import secthree from "../../image/section-three.PNG";

function Footer() {
  return (
    <section className="sec-3">
      <div className="section-three">
        <div className="left-side">
          <div className="logo-img">
            <img src={watch} alt="watch logo" />
          </div>
          <div className="main-text">A great deal to love.</div>
          <div>From $300</div>
          <div className="learn-container">
            <button>Buy</button>
            <div>
              <a href="#" className="learn">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={secthree} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Footer
