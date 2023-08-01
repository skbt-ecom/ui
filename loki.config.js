module.exports = {
  chromeSelector: "#storybook-root > *",
  diffingEngine: "pixelmatch",
  configurations: {
    "chrome.tablet_min": {
      target: "chrome.docker",
      width: 600,
      height: 768,
    },
    "chrome.tablet_max": {
      target: "chrome.docker",
      width: 950,
      height: 768,
    },
    "chrome.desktop_min": {
      target: "chrome.docker",
      width: 960,
      height: 768,
    },
    "chrome.desktop_max": {
      target: "chrome.docker",
      width: 1275,
      height: 768,
    },
    "chrome.large_desktop": {
      target: "chrome.docker",
      width: 1280,
      height: 768,
    },
    "chrome.iphone5": {
      target: "chrome.docker",
      preset: "iPhone 5",
    },
  },
};
