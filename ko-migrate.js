const request = require('request');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

let fun = async function (){
  for(let from = 0; from < 15000; from=from+10){
    request({
      // url: `http://pre-aone-cloud-api.aliyun-inc.com/ak/project/migrate/user/migrateUser?from=${from}&limit=100&sourceType=Havana`,
      url: `http://localhost:8080/ak/project/migrate/user/migrateUser?from=${from}&limit=10&sourceType=Kelude&env=daily`,
      method: "POST"
    }, function(error, response, body) {
      console.log('from=', from,'error:',error );
      try{
        console.log('body:',JSON.parse(body).result);
      }catch(e) {
        console.log('body:',body);
      }
    });
    await sleep(1000);
  }
}
fun();