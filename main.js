import { vchat } from 'vchat'

/**
 * 收到消息执行自动化流程
 * 建议每一步操作完使用 sleep(random(100,1000)) 停顿随机时间
 * 避免操作太快导致异常
 */
vchat.onMessage((notice) => {
    vchat.openApp()
    vchat.openTopSession()
    vchat.sendText("Hello world")
    vchat.finish()
})