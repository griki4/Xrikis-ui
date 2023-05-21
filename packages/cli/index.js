import commandLineArgs from 'command-line-args'
//提供参数提示
import commandLineUsage from 'command-line-usage'
import gitClone from './gitClone.js'
import prompts from 'prompts'
import { readFile } from 'fs/promises'

const pkg = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
)
//配置命令参数
const optionDefinitions = [
  { name: 'version', alias: 'v', type: Boolean },
  { name: 'help', alias: 'h', type: Boolean }
]
//配置帮助命令
const helpOptions = [
  {
    header: 'create-xrikis',
    content: '一个快速生成Vue3组件库环境的脚手架'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        alias: 'v',
        typeLabel: '{underline boolean}',
        description: '版本号'
      },
      {
        name: 'help',
        alias: 'h',
        typeLabel: '{underline boolean}',
        description: '帮助'
      }
    ]
  }
]
//配置交互式命令参数
const promptsOptions = [
  {
    type: 'text',
    name: 'project-name',
    message: '请输入项目名称'
  },
  {
    type: 'select',
    name: 'template',
    message: '请选择一个模板',
    choices: [
      { title: 'rezx-ui', value: 1 },
      { title: 'xrikis', value: 2 }
    ]
  }
]
const options = commandLineArgs(optionDefinitions)

//cli.js
const remoteList = {
  1: 'https://github.com/griki4/Xrikis-ui',
  2: 'https://github.com/qddidi/easyest.git'
}
const getUserInfo = async () => {
  const res = await prompts(promptsOptions)
  if (!res.name || !res.template) return
  gitClone(`direct:${remoteList[res.template]}`, res.name, {
    clone: true
  })
}

const runOptions = () => {
  if (options.version) {
    console.log(`v${pkg.version}`)
    return
  }
  if (options.help) {
    console.log(commandLineUsage(helpOptions))
    return
  }
  getUserInfo()
}
runOptions()
