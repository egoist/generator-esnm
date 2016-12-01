# <%= moduleName %>

[![NPM version](https://img.shields.io/npm/v/<%= moduleName %>.svg?style=flat-square)](https://npmjs.com/package/<%= moduleName %>) [![NPM downloads](https://img.shields.io/npm/dm/<%= moduleName %>.svg?style=flat-square)](https://npmjs.com/package/<%= moduleName %>) [![Build Status](https://img.shields.io/circleci/project/egoist/<%= moduleName %>/master.svg?style=flat-square)](https://circleci.com/gh/egoist/<%= moduleName %>) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat-square)](https://github.com/egoist/donate)

## Install

```bash
$ npm install --save <%= moduleName %>
```

## Usage

```js
const <%= camelModuleName %> = require('<%= moduleName %>')

<%= camelModuleName %>('unicorns')
//=> 'unicorns & rainbows'
```

## API

### <%= camelModuleName %>(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.<% if (cli) { %>

## CLI

```
$ npm install --global <%= moduleName %>
```

```
$ <%= moduleName %> --help

  Usage
    <%= moduleName %> [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ <%= moduleName %>
    unicorns & rainbows
    $ <%= moduleName %> ponies
    ponies & rainbows
```<% } %><% if (showRelated) { %>

## Related

<!-- Related projects start -->
<!-- Related projects end --><% } %>

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**<%= moduleName %>** © [<%= name %>](https://github.com/egoist), Released under the [MIT](https://egoist.mit-license.org/) License.<br>
Authored and maintained by <%= name %> with help from contributors ([list](https://github.com/egoist/<%= moduleName %>/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](<%= website %>) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
