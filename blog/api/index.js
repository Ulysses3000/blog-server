let user = require('./user')
const BASE_PATH = '/blogApi/'
const RES_CODE = require('../../common/resCode')
const sendJson = require('../../common/sendJson')
const PATH_GET = {
  '':(req,res,back)=>{ back(RES_CODE.SUCCESS,'云川api 1.0')},
  
  'user/regist': user.regist,
  // 'user/getFollower': user.getFollower,
  // 'user/following': user.following,
}
const PATH_POST = {
  'user/login': user.login,
  'user/regist': user.regist,
}
function blogController(router){
  for (let path_get in PATH_GET) {
    let handle_get = PATH_GET[path_get];
    router.get(BASE_PATH+path_get,(req,res)=>{
      handle_get(req,res,(status,data)=>{
        if(status == RES_CODE.SUCCESS){
          sendJson.sendData(res,data)
        }else{
          sendJson.throwErrow(res,status,data)
        }
      })
    })
  }
  for (let path_post in PATH_POST) {
    let handle_post = PATH_POST[path_post];
    router.post(BASE_PATH+path_post,(req,res)=>{
      handle_post(req,res,(status,data)=>{
        if(status == RES_CODE.SUCCESS){
          sendJson.sendData(res,data)
        }else{
          sendJson.throwErrow(res,status,data)
        }
      })
    })
  }
}


module.exports = blogController