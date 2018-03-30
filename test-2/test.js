const resumeParse = require('../index');
const util = require('util');
const fs = require('fs');
const path = require('path');
const log = console.log.bind(console);
resumeParse(path.join(__dirname,'resume_Zheng Qian.pdf')).catch(e=>log(e)).then((result)=>{
  console.log(result);
  return util.promisify(fs.writeFile)(path.join(__dirname,'resume_Zheng Qian.json'),JSON.stringify(result))
});