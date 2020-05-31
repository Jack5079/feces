#!/usr/bin/env node
if (process.argv.includes('--massive')) {
  require('.').massive().then(console.log)
} else require('.')().then(console.log)
