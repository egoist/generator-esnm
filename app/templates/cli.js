#!/usr/bin/env node
'use strict'
var cli = require('commander')
var update = require('update-notifier')
var pkg = require('./package')

update({pkg: pkg}).notify()

cli.version(pkg.version)

cli.parse(process.argv)
