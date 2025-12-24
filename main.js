import { vchat } from 'vchat'

/**
 * 收到消息执行自动化流程
 * 建议每一步操作完使用 sleep(random(100,1000)) 停顿随机时间
 * 避免操作太快导致异常
 */
vchat.onMessage((notice) => {
    vchat.openApp() //打开APP
    vchat.openTopSession() //打开第一个会话
    vchat.sendText("Hello world") //发送文字消息
    vchat.finish() //结束任务
    // notice.getTitle() //通知标题
    // notice.getText() //通知详情
})