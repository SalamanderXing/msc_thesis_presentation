import "./style.css";
import hljs from "highlight.js/lib/core";
import python from "highlight.js/lib/languages/python";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js"; // @ts-ignore
// @ts-ignore
import RevealNotes from "reveal.js/plugin/notes/notes.js";
// @ts-ignore
import RevealMath from "reveal.js/plugin/math/math.js";
// @ts-ignore
import RevealHighlight from "reveal.js/plugin/highlight/highlight.js";
import slides from "./slides.html?raw";

hljs.registerLanguage("python", python);
const el = document.getElementsByClassName("reveal")[0];
//const mdSlides = await (await fetch("/slides.md")).text();
el.innerHTML = `
  <div class='slides'>
    ${slides}
  </div>
`;

// TODO: add references in image captions
// TODO: fix image background color
function appendImagesSequentially(elementId: string): void {
  const parent = document.getElementById(elementId);
  if (!parent) {
    console.error("Element not found");
    return;
  }
  const imageNamesAndDescription = [
    ["GANs.svg", "Generative Adversarial Networks", "Adversarial training"],
    [
      "VAEs.svg",
      "Variational Autoencoders",
      "Maximize variational lower bound",
    ],
    [
      "Diffusion models.svg",
      "Diffusion models",
      "Maximize variational lower bound",
    ],
    [
      "Normalizing Flows.svg",
      "Normalizing Flows",
      "Maximize likelihood of invertible transforms of distributions",
    ],
    [
      "Autoregressive Models.svg",
      "Autoregressive Models",
      "Maximize likelihood of next token",
    ],
  ].map(([imgName, title, description]) =>
    `<section>
      <h2>${title}</h2>
      <p>${description}</p>
      <img src="${imgName}" />
    </section>`
  );
  parent.innerHTML += imageNamesAndDescription.join("\n");
}

appendImagesSequentially("after-this");
console.log(RevealMath);
let deck = new Reveal({
  plugins: [Markdown, RevealNotes, RevealMath, RevealHighlight],
  slideNumber: "c/t",
  hash: true,
});
deck.initialize();
