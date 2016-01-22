# <%= moduleName %> [![NPM version](https://img.shields.io/npm/v/<%= moduleName %>.svg)](https://npmjs.com/package/<%= moduleName %>) [![NPM downloads](https://img.shields.io/npm/dm/<%= moduleName %>.svg)](https://npmjs.com/package/<%= moduleName %>) [![Build Status](https://img.shields.io/circleci/project/<%= githubUsername %>/<%= moduleName %>/master.svg)](https://circleci.com/gh/<%= githubUsername %>/<%= moduleName %>) 

> <%= description %>

## Install

```
$ npm install --save <%= moduleName %>
```

## Usage

```js
const <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('unicorns');
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

## License

MIT © [<%= name %>](<%= website %>)
