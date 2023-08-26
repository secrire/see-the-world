const fs = require("fs");
const path = require("path");
const svgr = require("@svgr/core").default;

const svgsDir = path.resolve(__dirname, "src", "images");
const outputDir = path.resolve(__dirname, "src", "components", "SVGIcons");

fs.readdirSync(svgsDir).forEach((file) => {
  if (file.endsWith(".svg")) {
    const svgContent = fs.readFileSync(path.resolve(svgsDir, file), "utf-8");
    const componentName = file.replace(".svg", "");
    const jsxCode = svgr.sync(svgContent, { icon: true });
    fs.writeFileSync(path.resolve(outputDir, `${componentName}.js`), jsxCode);
  }
});
