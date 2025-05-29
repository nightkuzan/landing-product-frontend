const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const fs = require("fs");

// Make sure the output directories exist
fs.mkdirSync("public/css", { recursive: true });

// Execute the build
async function runBuild() {
  try {
    // Build CSS
    await esbuild.build({
      entryPoints: ["src/styles/site.scss"],
      bundle: true,
      minify: true,
      outfile: "public/css/site.min.css",
      plugins: [sassPlugin()],
      logLevel: "info",
    });
    console.log("✅ SCSS build complete");
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
}

runBuild();
