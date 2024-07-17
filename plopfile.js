// plop 入口文件，需要导出一个函数
// 此函数接收一个 plop 对象，用于创建生成器任务
module.exports = plop => {
  plop.setGenerator('component',{
    description:'create a component',
    prompts:[
      {
        type:'input',
        name:'name',
        message:'component name',
        default:'MyComponent'
      }
    ],
    actions:[
      {
        type:'add', // 添加全新文件
        path:'src/components/{{name}}/{{name}}.js',
        templateFile:'plop-templates/component.hbs'
      }
    ]
  })
}