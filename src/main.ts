import "./style.css";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

const el = document.getElementsByClassName("reveal")[0];
const mdSlides = await (await fetch("/slides.md")).text();
el.innerHTML = `
  <div class='slides'>
    <section data-markdown>
      <textarea data-template>
        ${mdSlides} 
      </textarea>
    </section>
  </div>
`;
let deck = new Reveal({
  plugins: [Markdown],
  slideNumber: "c/t",
});
deck.initialize();
