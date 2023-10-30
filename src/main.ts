import "./style.css";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.js";
import RevealMath from "reveal.js/plugin/math/math.js";
import slides from "./slides.html?raw";

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
function setBackgroundImage(): void {
  // Get all divs with img-src attribute
  const divs = document.querySelectorAll("div[img-src]");

  divs.forEach((div: Element) => {
    // Extract the image source from the attribute
    const imgSrc = div.getAttribute("img-src");

    // Create an image element to get dimensions
    const img = new Image();
    img.src = imgSrc as string;

    img.onload = () => {
      // Create a background element
      const background = document.createElement("div");
      background.style.position = "absolute";
      background.style.width = `${img.width}px`;
      background.style.height = `${img.height}px`;
      background.style.backgroundColor = "white";
      background.style.zIndex = "-1";

      // Position the background element
      div.appendChild(background);

      // Add the actual image
      div.style.position = "relative";
      const imageElement = document.createElement("img");
      imageElement.src = imgSrc as string;
      imageElement.style.position = "relative";
      imageElement.style.zIndex = "1";

      div.appendChild(imageElement);
    };
  });
}

setBackgroundImage();
appendImagesSequentially("after-this");
console.log(RevealMath);
let deck = new Reveal({
  plugins: [Markdown, RevealNotes, RevealMath],
  slideNumber: "c/t",
  hash: true,
});
deck.initialize();
