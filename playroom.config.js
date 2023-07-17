module.exports = {
  components: "./src/components/index.ts",
  outputPath: "playroom-static",

  // Optional:
  title: "My Awesome Library",
  widths: [300, 360, 600, 960, 1280],
  port: 9000,
  openBrowser: false,
  iframeSandbox: "allow-scripts allow-same-origin",
  frameComponent: "./src/playroom/FrameComponent.tsx",
  themes: "./src/core/themes/index.ts",
  exampleCode: `
    <Button variant="contained">
      Hello World!
    </Button>
  `,
  typeScriptFiles: ["./src/components/**/*.{ts,tsx}", "!**/node_modules"],

  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
                ["@babel/preset-react", { runtime: "automatic" }],
              ],
            },
          },
        },
        {
          test: /\.js$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.svg$/i,
          exclude: /node_modules/,
          type: "javascript/auto",
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                icon: true,
              },
            },
            "url-loader",
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          oneOf: [
            // module.scss files (e.g component styles.module.scss)
            // https://webpack.js.org/loaders/style-loader/#modules
            {
              test: /\.module\.s?css$/,
              use: [
                // Add exports of a module as style to DOM
                "style-loader",
                // Loads CSS file with resolved imports and returns CSS code
                {
                  loader: "css-loader",
                  options: {
                    importLoaders: 1,
                    esModule: true,
                  },
                },
                // Loads and compiles a SASS/SCSS file
                "sass-loader",
              ],
            },
            // scss files that are not modules (e.g. custom.scss)
            {
              use: [
                // Add exports of a module as style to DOM
                "style-loader",
                // Loads CSS file with resolved imports and returns CSS code
                "css-loader",
                // Loads and compiles a SASS/SCSS file
                "sass-loader",
              ],
            },
          ],
        },
      ],
    },

    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      // alias: {
      //   "@src/*": path.resolve(__dirname, "src/"),
      // },
    },
  }),
};
