# <%= moduleName %>

[![NPM version](https://img.shields.io/npm/v/<%= moduleName %>.svg?style=flat-square)](https://npmjs.com/package/<%= moduleName %>) [![NPM downloads](https://img.shields.io/npm/dm/<%= moduleName %>.svg?style=flat-square)](https://npmjs.com/package/<%= moduleName %>) [![Build Status](https://img.shields.io/circleci/project/egoist/<%= moduleName %>/master.svg?style=flat-square)](https://circleci.com/gh/egoist/<%= moduleName %>)

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

## License

[MIT](https://egoist.mit-license.org/) © [<%= name %>](<%= website %>)
