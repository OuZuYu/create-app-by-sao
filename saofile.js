const glob = require('glob')

module.exports = {
  prompts: [
    {
      name: 'name',
      message: 'Project name',
      default: '{outFolder}'
    },
    {
      name: 'version',
      message: 'version',
      default: '1.0.0'
    },
    {
      name: 'description',
      message: 'Project description',
      default: `My Nuxt.js project`
    },
    {
      name: 'ui',
      message: 'Choose UI framework',
      type: 'list',
      choices: [
        { name: 'Element', value: 'element-ui' },
        { name: 'iView', value: 'iview' }
      ],
      default: 'none'
    },
    {
      name: 'mode',
      message: 'Choose rendering mode',
      type: 'list',
      choices: [
        { name: 'Universal (SSR)', value: 'universal' },
        { name: 'Single Page App', value: 'spa' }
      ],
      default: 'universal'
    }
  ],

  actions () {
    const actions = [
      {
        type: 'add',
        files: '**', // 包括子目录的文件
        templateDir: 'template/nuxt'
      }
    ]

    // 添加 ui
    if (this.answers.ui !== 'none') {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: `template/frameworks/${this.answers.ui}`
      })
    }

    actions.push({
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        '_package.json': 'package.json'
      }
    })

    return actions
  },

  async completed() {
  }
}