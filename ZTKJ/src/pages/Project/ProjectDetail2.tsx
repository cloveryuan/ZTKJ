import * as React from 'react';
import mystyle from './Project.scss';
import reqwest from 'reqwest';

interface ProjectProps {
}
interface NumProps {
    num: any,
    datetime: string
}
class ProjectDetail2 extends React.Component<ProjectProps, NumProps> {
    constructor(props: ProjectProps) {
        super(props)
        this.state = {
            num: [],
            datetime: ''
        }
    }
    componentWillMount() {
        const search = this.props['location'].search;
        const index = search.indexOf('?');
        const id = search.slice(index + 1);

        reqwest({
            url: 'http://127.0.0.1:8000/project/detail1',
            method: 'post',
            data: { id: id },
            success: (res: any) => {
                this.setState({ num: res.num, datetime: res.datetime })
            }
        })
    }

    render() {
        return (
            <div>
                <p className={mystyle.tit}>农业物联网采集控制智能系统</p>
                <div className={mystyle.subtit}>
                    <span>添加时间：{this.state.datetime}</span>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <span>浏览次数：{this.state.num}</span>
                </div>
                <div className={mystyle.content}>
                    <div className={mystyle.wrap}>
                        <h3>一、需求概述 </h3>
                        <p>随着中国信息化的快速发展和业务的不断增加,迫切需要新技术产品提供保障支撑，本篇在农业物联网涉及果蔬花卉种植、畜牧、水产养殖，大棚栽培，家禽养殖、等若干领域，做应用的描述应用举例。</p>
                        <p>工信部中国信息通讯研究院《物联网白皮书2015》公布的“网络架构图”是所有参与到物联网应用的基础依据，农业物联网采集控制智能系统是为提高现代农业生产效率，实现精细化、全方位、智能型管理而提出的解决方案，为现代农业量身打造最专业的物联网控制系统。一整套综合型农业物联网系统包括：环境数据采集与处理终端+无线传输+数据中心和存储服务器与云计算平台+远程农业专家管理平台及展示+云服务器视频监控与远程计算机和手机视频监控等功能。</p>
                        <div className={mystyle.img}>
                            <img src={require('../../img/project/p4-1.png')} alt="应用场景" />
                            <p>监控是一种管理手段，也是对安全和便捷的追求，通过监控我们可以对数据赋予更多的解读，通过对数据的分析我们可以保证效率的提升。</p>
                        </div>
                    </div>
                    <div className={mystyle.wrap}>
                        <h3>二、系统功能  </h3>
                        <p>系统主要完成相应区域内的种植、畜牧、水产养殖等环境信息的采集、监测、可视化监控、自动化控制等。根据系统建设要求，可由电子显示屏或组合式电视墙，表现出很好的参观效果。为用户可提供多种种显示终端，实时显示所有数据告警及视频，并进行远程操作及手机端接受告警和远程控制。</p>
                        <p>物联网控制系统其核心控制方法是参考国外先进的理念，融入了物联网智慧农业的应用技术，集成了智能传感器、全无线技术、农业智能管理系统、互联网云计算平台（云服务器农业管理软件、手机视频监控）等专业技术。</p>
                        <p>数据采集层：通过传感器采集测量风向、风速、温度、湿度、光照、气压、雨量、太阳辐射量、太阳紫外线、土壤温度、土壤水分等农业环境要素，传输至数据采集控制器。</p>
                        <p>数据传输层：所有控制器通过无线传输将数据传输至监控中心。</p>
                        <p>数据管理层：监控中心管理软件根据不同作物，自动调用对应的农业专家数据库为控制目标，自动控制开关窗、遮阳、风机湿帘、生物补光、灌溉、施肥等环境控制设备，自动控制温室内环境，达到适宜植物生长范围，为植物生长提供最佳环境。实现温室无人值守自动化运行，减轻人员劳动力强度，减低温室能耗和运行成本。</p>
                    </div>
                    <div className={mystyle.wrap}>
                        <h3>三、系统组成  </h3>
                        <p>3.1系统整体拓扑</p>
                        <div className={mystyle.img}>
                            <img src={require('../../img/project/p4-2.png')} />
                        </div>
                        <p>3.2底端采集架构</p>
                        <div className={mystyle.img}>
                            <img src={require('../../img/project/p4-3.png')} />
                        </div>
                        <p>物联网智能互动终端提供多种通信技术接口，满足国内农业涉及的传感器及控制接口，传输网络使用电信的CDMA的高效稳定网络作为接入到云端的传输平台。</p>
                        <p>智能终端检测能力强：控制系统无需扩展与改造，可直接连接传感器，同时检测室外温度、湿度、风速、风向、光照辐射、雨雪信号、雨量、室内多点温度、多点湿度、多点光照强度、CO2浓度、土壤温度、土壤湿度、营养液PH、营养液EC和水暖水温。智能控制设备极为丰富：控制系统可同时控制双向天窗、侧通风窗、外遮阳幕、内遮阳幕、内保温幕、一级风扇、二级风扇、三级风扇、湿帘、湿帘外翻窗、微雾、一级加热器、二级加热器、三级加热器、环流风扇、补光灯、CO2补气阀、除湿风扇、负压变频风机、空调机组、水暖三通调节阀、水暖循环泵、遮荫棚、顶喷淋、灌溉水泵等。 </p>
                    </div>
                    <div className={mystyle.wrap}>
                        <h3>四、功能特点(以大棚栽培做物联网应用说明)</h3>
                        <p>4.1智能降温功能实现：</p>
                        <ul>
                            <li><span /> 通风窗：依据温度变化，可自动调控开窗幅度达到调温控制通风。</li>
                            <li><span /> 遮阳慕：依据光照遮阳降温功能来进行自动控制。</li>
                            <li><span /> 三级风扇、湿帘：依据温度三级调控原理来控制风扇、湿帘降温控制，以及湿帘外翻窗的协同自动控制。</li>
                            <li><span /> 微雾降温系统：以“PWM(脉宽调制)方式”自动控制“喷雾降温”。</li>
                        </ul>
                        <div className={mystyle.wrapper}>
                            <div className={mystyle.imgsmall}>
                                <img src={require('../../img/project/p4-4.png')} />
                                <p>遮阳通风控制 </p>
                            </div>
                            <div className={mystyle.imgsmall}>
                                <img src={require('../../img/project/p4-5.png')} />
                                <p>微雾加湿系统</p>
                            </div>
                        </div>
                        <p>4.3智能保温、加温功能：</p>
                        <ul>
                            <li><span /> 保温幕：以“室外温度、室内温度、光照强度”为判断依据，基于“温室效应”原理，协调“内遮阳保温幕”的自动控制。</li>
                            <li><span /> 燃油（气）加热器、热水泵：以“PWM(脉宽调制)方式”自动控制“开关式加热设备”。</li>
                        </ul>
                        <p>4.4加湿系统设备控制：自动控制“微雾系统”进行加湿。</p>
                        <p>4.5除湿系统智能控制：</p>
                        <ul>
                            <li><span /> 通风窗的除湿控制。</li>
                            <li><span /> 基于“等焓原理”，通过适度提高目标温度进行自动除湿。</li>
                        </ul>
                        <p>4.6空气循环系统其他温室设备自动控制：</p>
                        <ul>
                            <li><span /> 环流风扇：基于“实时温度变化”和“各温度传感器平均值”为判断依据来对环流风扇进行自动控制。</li>
                            <li><span /> 补光灯：基于“光照强度”和“多点定时”原理来对补光灯进行自动控制。</li>
                        </ul>
                        <div className={mystyle.img}>
                            <img
                                style={{ width: 300 }}
                                src={require('../../img/project/p4-8.png')}
                            />
                            <p>循环风机系统</p>
                        </div>
                        <p>4.7自动控制的关联性：控制器依据各种温室设备特性进行关联自动控制。</p>
                        <ul>
                            <li><span /> 例如：傍晚湿帘降温结束后，风机自动延长工作时间，以便将湿帘上水分吹干，延长湿帘寿命。</li>
                        </ul>
                        <p>4.8报警控制：用户可自行设置报警参数。通过手机智能终端查看和报警</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDetail2;