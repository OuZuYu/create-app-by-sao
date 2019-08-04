#!/usr/bin/env node
const path = require('path')
const sao = require('sao')
const cac = require('cac')
const chalk = require('chalk')
const { version } = require('./package.json')

const generator = path.resolve(__dirname, './') // saofile.js 所在目录

const cli = cac('create-app')

cli
  .command('<app-name>', '在当前目录生成 App')
  .option('-t, --type', 'App 类型')
  .action((outDir = '.', cliOptions) => {
    console.log(chalk.green(`create-app-by-sao v${version}`))
    console.log(chalk.blue(`Generating...`))

    // const outDir = path.resolve(__dirname, appName) // app 生成目录

    sao({ generator, outDir })
      .run()
      .catch(err => {
        console.trace(err)
        process.exit(1)
      })
  })

cli.help()

cli.parse()