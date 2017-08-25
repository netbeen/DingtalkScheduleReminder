const request = require('request');
const schedule = require('node-schedule');

const sendReminder = (message, ifAt = true, ifAtAll = false) => {
  request({
    url: 'https://oapi.dingtalk.com/robot/send?access_token=bfc3085a381072cc6ee352738ad0293c22365a34bebbe3cdf62eea3cccc0c04e',
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      "msgtype": "text",
      "text": {
        "content": message
      },
      "at": {
        "atMobiles": [
          ifAt?"15606617716":null
        ],
        "isAtAll": false
      }
    })
  }, function(error, response, body) {
    console.log(body);
    if (!error && response.statusCode == 200) {
    }
  });
}

/**
 *    *    *    *    *    *
 ┬    ┬    ┬    ┬    ┬    ┬
 │    │    │    │    │    |
 │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
 │    │    │    │    └───── month (1 - 12)
 │    │    │    └────────── day of month (1 - 31)
 │    │    └─────────────── hour (0 - 23)
 │    └──────────────────── minute (0 - 59)
 └───────────────────────── second (0 - 59, OPTIONAL)
 */

sendReminder('我进入工作状态啦！',false);
// schedule.scheduleJob('0 10 * * 1-5', function(){
//   sendReminder('晨会30分钟准备\n- 统计内网+RDC的昨日BUG、本月BUG\n- 浏览各个项目的进度\n- 昨日验收会BUG跟进\n- 对外Vone修改指派人\n 更新前一天版本，修改状态，设置新版本');
// });
// schedule.scheduleJob('25 10 * * 1-5', function(){
//   sendReminder('晨会5分钟准备\n- 打开云雀晨会纪要+Aone项目域看板视图\n- 大电视就位');
// });
// schedule.scheduleJob('29 10 * * 1-5', function(){
//   sendReminder('晨会即将开始\n- 在群里通知大家参会\n- 结束后发布晨会纪要，并更新');
// });
schedule.scheduleJob('0 13 * * 5', function(){
  sendReminder('项目域周会4小时准备\n- 统计本周线上BUG情况');
});
schedule.scheduleJob('30 16 * * 1-5', function(){
  sendReminder('验收会30分钟准备\n- 在群里提醒大家进入预发环境');
});
schedule.scheduleJob('59 16 * * 1-5', function(){
  sendReminder('验收会即将开始\n- 在群里通知相关人员参会\n- 结束后发布验收结果');
});