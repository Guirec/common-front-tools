# Common front tools

There are always several ways to do frontend stuff, so I will try to explain my choices as best I can.

[Storybook](https://storybook.js.org/) is used to present the documentations and components. Use the following commands to visualize locally:

```
npm install
npm run storybook
```

[Prettier](https://prettier.io/), [stylelint](https://stylelint.io/), [ESLint](https://eslint.org/) and [EditorConfig](https://editorconfig.org/) rules are set, it is strongly recommended to install thier matching extensions in your code editor.

For Visual Studio Code I recommend these extensions:

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Formatting Toggle](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle)

You can install these extensions with the VS Code CLI:

```
code --install-extension editorconfig.editorconfig
code --install-extension stylelint.vscode-stylelint
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension tombonnike.vscode-status-bar-format-toggle
```
