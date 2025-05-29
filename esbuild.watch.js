const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const fs = require("fs");

// Make sure the output directories exist
fs.mkdirSync("public/css", { recursive: true });

/**
 * Start the watch mode for SCSS files
 */
async function startWatchMode() {
  try {
    // Create contexts for watching CSS
    const cssContext = await esbuild.context({
      entryPoints: ["src/styles/site.scss"],
      bundle: true,
      minify: true,
      outfile: "public/css/site.min.css",
      plugins: [sassPlugin()],
      logLevel: "info",
    });

    await cssContext.watch();

    console.log("⚡ Watch mode started - monitoring SCSS files for changes");
    console.log("Press Ctrl+C to stop watching");
  } catch (error) {
    console.error("❌ Watch mode error:", error);
    process.exit(1);
  }
}

// Execute the watch mode
startWatchMode();
