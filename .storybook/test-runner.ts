const { injectAxe, checkA11y, configureAxe } = require("axe-playwright");
const { getStoryContext } = require("@storybook/test-runner");

module.exports = {
  preRender: async (page) => {
    await injectAxe(page);
  },
  postRender: async (page, context) => {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    // Do not run a11y tests on disabled stories.
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    await checkA11y(
      page,
      "#root",
      {
        detailedReport: true,
        detailedReportOptions: { html: true },
      },
      true
    );
  },
};
