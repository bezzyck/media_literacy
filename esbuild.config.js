const esbuild = require('esbuild');
const path = require('path');

// plugins
const { stimulusPlugin } = require('esbuild-plugin-stimulus');

esbuild.build({
  entryPoints: ["application.js"],
  bundle: true,
  outdir: path.join(process.cwd(), "app/assets/builds"),
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  watch: true,
  plugins: [stimulusPlugin()],
}).catch(() => process.exit(1));
