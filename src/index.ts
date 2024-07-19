#!/usr/bin/env node

import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmdirSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs'
import { join, resolve } from 'node:path'
import process from 'node:process'
import ejs from 'ejs'
import { bold, green } from 'kolorist'
import minimist from 'minimist'
import prompts from 'prompts'
import JSON5 from 'json5'

import { bugs } from '../package.json'
import {
  printBanner,
} from './utils'

import { cancelMesssage, onCancel } from './question/onCancel'

async function init() {
  printBanner()
}

init()
  .catch((error) => {
    console.log(cancelMesssage)
    console.log(error.message.includes('操作已取消') ? '' : error)
    console.log(`🚀 遇到问题? 快速反馈：${green(bugs.url)}`)
    process.exit(0)
  })
