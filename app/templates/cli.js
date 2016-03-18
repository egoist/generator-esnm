#!/usr/bin/env node
'use strict'
/**
 * Module dependencies
 */
const meow = require('meow')
const update = require('update-notifier')
const pkg = require('./package')
const main = require('./')

update({pkg}).notify()

const cli = meow(`
  Usage:

    -v/--version:   Print version
    -h/--help:      Print help
`)

main(cli)
