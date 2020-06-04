# bundle-size

[![LICENSE](https://img.shields.io/github/license/henriquecarv/bundle-size.svg)](./LICENSE)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=henriquecarv/bundle-size)](https://dependabot.com)

## System Requirements

- [NodeJS](https://nodejs.org/en/) (version >= 12).
- [Docker](https://docs.docker.com/engine/install/) - **if running with docker** (version >= 19)
- [Docker compose](https://docs.docker.com/compose/install/) **if running with docker** (version >= 1.25.5)

## Setup

- `yarn install`
- `yarn env`

## Running in Production mode

- `yarn build`
- `yarn start`
- The application will run on <http://localhost:3000/>

## Running with docker

- `yarn docker:start`

## Running in development mode

- `yarn dev`

## Testing

- `yarn test`

### Todo

- [ ] Clean installs temporary folder after package versions sizes retrieval
- [ ] Add more automated tests and test coverage report
- [ ] Include search field in the Package page to continue searching for other packages from there
- [ ] Add database instance to be able to reuse the already searched and built package versions
- [ ] Refactor nextjs server methods to a `nextjs-koa-middleware`

### License

Copylefted (c) 2020 [Henrique Carvalho da Cruz][1] Licensed under the [MIT license][2].

[1]: https://henriquecarv.com
[2]: ./LICENSE
