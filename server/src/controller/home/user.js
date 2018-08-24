const Base = require('../base.js');

module.exports = class extends Base {
  async indexAction() {
    const user = this.model('home/user'); // controller 里实例化模型
    // const data = await user.find();
    return this.json('000');
    // return this.display('test'); this.display的话输出对应的test.html文件
    
  }
  async addAction() {
    let model = this.model('home/user')
    let inserID = await model.add({
      name: 'add',
      password: 'add'
    })
    return this.json(inserID)
  }
};
