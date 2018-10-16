# ALSRobot Electromagnet
软件包github地址为：https://github.com/alsrobot-microbit-makecode-packages/ALSRobotElectromagnet
软件包修改维护人员：https://github.com/bobolx

该电磁铁模块（详情请访问：http://www.alsrobot.cn/goods-818.html）需要与我们公司的micro:bit 电机驱动扩展板（详情请访问：http://www.alsrobot.cn/goods-846.html）使用3P线（详情请见：http://www.alsrobot.cn/goods-786.html）连接使用，可以接在任意引脚上

## 控制磁性
//连接p1引脚，使电磁铁有磁性
Electromagnet.magnetController(DigitalPin.P1, controllerList.con1)

//连接p1引脚，使电磁铁无磁性
Electromagnet.magnetController(DigitalPin.P1, controllerList.con2)

## 支持

* for PXT/microbit

## License

MIT