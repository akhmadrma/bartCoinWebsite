import { LitElement, html, css } from "https://esm.sh/lit";
import heroBg from "../assets/heroBanner.png";
import "./component.css"

class ActivitiesWidget extends LitElement {
  // Types without TypeScript? I guess??
  static properties = {
    count: { type: Number },
    activeActivity: { type: Number }
  };

  constructor() {
    super(); // makes `this` work
    this.activeActivity = 1;
  }

  // DOM-releated stuff needs DOM to be ready.
  connectedCallback() {
    super.connectedCallback();
    this.allActivities = this.querySelectorAll(".activity");
    this.allActivities[0].classList.add("active");
    this.count = this.allActivities.length;
  }

  _makeActive(index) {
    this.allActivities.forEach((activity, i) => {
      activity.classList.remove("active");
    });
    this.allActivities[index].classList.add("active");
    this.classList.add("children-animating");
    this.allActivities[index].addEventListener(
      "animationend",
      () => {
        this.classList.remove("children-animating");
      },
      { once: true }
    );
  }

  _movePrevious(e) {
    this.activeActivity--;
    if (this.activeActivity < 1) {
      this.activeActivity = this.count;
      this._makeActive(this.count - 1);
    } else {
      this._makeActive(this.activeActivity - 1);
    }
  }

  _moveNext(e) {
    this.activeActivity++;
    if (this.activeActivity > this.count) {
      this.activeActivity = 1;
      this._makeActive(0);
    } else {
      this._makeActive(this.activeActivity - 1);
    }
  }

  // Light DOM!
  createRenderRoot() {
    return this;
  }

  // Inject additional stuff into DOM (stays Light DOM), and allow Lit-style reactivity and event handling.
  render() {
    return html`
      <nav class="activities-navigation">
        <button aria-label="previous" @click="${this._movePrevious}">⭠</button>
        <button aria-label="next" @click="${this._moveNext}">⭢</button>
      </nav>
    `;
  }
}

customElements.define("activities-widget", ActivitiesWidget);


const AboutSection = () =>{
    return(
        <section className="relative min-h-[800px] bg-cover bg-center sm:bg-top md:bg-center flex items-center m-4">
  <div className="mx-auto p-6 p-10 flex flex-col lg:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-8">
    <div className="max-w-lg text-lg text-gray-800">

      {/* CardCarousel */}
      <activities-widget>
        <div className="activity">
          <div className="img"><img src={heroBg} alt="Hero banner" /></div>
        </div>
        <div className="activity">
          <div className="img"><img src={heroBg} alt="Hero banner" /></div>
        </div>
        <div className="activity">
          <div className="img"><img src={heroBg} alt="Hero banner" /></div>
        </div>
        <div className="activity">
          <div className="img"><img src={heroBg} alt="Hero banner" /></div>
        </div>
      </activities-widget>
      
    </div>

    <div className="max-w-lg text-lg text-gray-800 montserrat">
      <h1 className="font-bold text-4xl mb-4">Rebel of the Meme Coin World</h1>
      <p>
        Inspired by the legendary mischief-maker of Springfield, Bart Coin is not just another meme coin — it's a cultural statement powered by blockchain.
        Bart Coin captures the spirit of rebellion, humor, and unpredictability that made Bart Simpson a household name. Built on a decentralized foundation, Bart Coin combines the thrill of crypto with the nostalgia of pop culture, offering holders a chance to be part of a movement that doesn’t follow the rules — it rewrites them.
        Whether you're in it for the memes, the community, or the potential moonshot, Bart Coin stands out with its bold branding, cheeky attitude, and growing fanbase. Backed by a transparent team and an active community, Bart Coin is positioned to become one of the most recognizable names in the meme coin universe.
      </p>
    </div>
  </div>
</section>

    )
}

export default AboutSection