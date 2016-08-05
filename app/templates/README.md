<p align="center">
  <br><strong><%= moduleName %></strong> is <%= description %>.
</p>

<p align="center">
  <a href="https://npmjs.com/package/<%= moduleName %>"><img src="https://img.shields.io/npm/v/<%= moduleName %>.svg?style=flat-square" alt="NPM version"></a>
  <a href="https://npmjs.com/package/<%= moduleName %>"><img src="https://img.shields.io/npm/dm/<%= moduleName %>.svg?style=flat-square" alt="NPM downloads"></a>
  <a href="https://circleci.com/gh/<%= githubUsername %>/<%= moduleName %>"><img src="https://img.shields.io/circleci/project/<%= githubUsername %>/<%= moduleName %>/master.svg?style=flat-square" alt="Build Status"></a>
</p>

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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Related

<!-- Related projects start -->
<!-- Related projects end --><% } %>

## License

MIT © [<%= name %>](<%= website %>)
