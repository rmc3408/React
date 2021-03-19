import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(firstPalette) {
  let newP = {
    paletteName: firstPalette.paletteName,
    id: firstPalette.id,
    emoji: firstPalette.emoji,
    colors: {},
  };
  for (let idxLevel of levels) {
    newP.colors[idxLevel] = [];
  }
  for (let color of firstPalette.colors) {
    let scale = getScale(color.color, 10).reverse();

    for (let i in scale) {
      newP.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newP;
}

function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function getScale(hexColor, numbeOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numbeOfColors);
}

export { generatePalette };
