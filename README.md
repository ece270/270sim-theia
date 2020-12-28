# sim-ext
ECE270 FPGA simulator frontend extension for vscode based theia-ide.

This is a test/rework of @norandomtechie's work [here](https://github.com/norandomtechie/ece270-simulator). Check it out for an extended README with more info about the project and also [this documentation](https://nirajmmenon.com/assets/Simulator_Documentation.pdf) he wrote. 

## Getting started

Install [nvm](https://github.com/creationix/nvm#install-script).

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash

Install npm and node.

    nvm install 10
    nvm use 10

Install yarn.

    npm install -g yarn

Install [verilog vscode plugin](https://marketplace.visualstudio.com/items?itemName=mshr-h.VerilogHDL)
 - download plugin
 - unpack with zip
 - place extension directory in `~/.theia/plugins/`
 - add following to `settings.json` in `~/.theia`
    ```
    {
    "verilog.linting.linter": "verilator",
    "verilog.languageServer": "svls"
    }
    ```


Install [svls](https://github.com/dalance/svls)
 - put binary somewhere in PATH

Install Verilator
 - `apt install verilator`

## Running the browser example

    yarn rebuild:browser
    cd browser-app
    yarn start

Open http://localhost:3000 in the browser.

## Running the Electron example

    yarn rebuild:electron
    cd electron-app
    yarn start

## Developing with the browser example

Start watching of sim-ext.

    cd sim-ext
    yarn watch

Start watching of the browser example.

    yarn rebuild:browser
    cd browser-app
    yarn watch

Launch `Start Browser Backend` configuration from VS code.

Open http://localhost:3000 in the browser.

## Developing with the Electron example

Start watching of sim-ext.

    cd sim-ext
    yarn watch

Start watching of the electron example.

    yarn rebuild:electron
    cd electron-app
    yarn watch

Launch `Start Electron Backend` configuration from VS code.

## Publishing sim-ext

Create a npm user and login to the npm registry, [more on npm publishing](https://docs.npmjs.com/getting-started/publishing-npm-packages).

    npm login

Publish packages with lerna to update versions properly across local packages, [more on publishing with lerna](https://github.com/lerna/lerna#publish).

    npx lerna publish
