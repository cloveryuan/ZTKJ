import * as React from 'react';
import mystyle from './Project.scss';
import reqwest from 'reqwest';

interface ProjectProps {
}
interface NumProps {
    num: any,
    datetime: string
}

class ProjectDetail3 extends React.Component<ProjectProps, NumProps> {
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
                <p className={mystyle.tit}>IDC数据中心解决方案</p>
                <div className={mystyle.subtit}>
                    <span>添加时间：{this.state.datetime}</span>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <span>浏览次数：{this.state.num}</span>
                </div>
                <div className={mystyle.content}>
                    <div className={mystyle.wrap}>
                        <h3>一、概述 </h3>
                        <p>随着云计算、下一代网络的积极推进和信息化发展的深入，国内IDC市场迎来了前所未有的发展。IDC作为数据存储和数据流通双重中心，IDC的规模不断扩大，运维系统不断增多，IDC未来的整合将不仅是对硬件资源和技术服务的整合，如何实现数据中心的高效运作，减少数据中心运维成本、实现数据中心在一个高效、安全、可靠的环境中运行，将是数据中心建设整合的关键，电信机房无忧产品的机房环境监控系统结合IDC的特殊服务性和未来发展趋势，以“绿色数据中心”为导向，为IDC的正常运转提供可靠和一流的技术保障。</p>
                        <p>IDC数据中心机房动力环境监控包括计算机中心机房、监控机房、程控通讯机房、数据中心、包括安全领域的屏蔽机房等电子类机房。它是一项实际、复杂、涉及技术面广泛的综合性的系统工程，它横跨多项专业系统，是一门集建筑、电气设备、计算机设备、安装工艺、网络智能、通信技术等多方面技术的集成。</p>
                        <p>通过本方案帮助客户IDC机房实现机房配电、UPS、精密空调、机房漏水、蓄电池，机房温湿度及后续机房改造后的门禁、摄像头等在统一平台上进行监控管理、告警派发短信提醒的愿望。通过实现机房电源、、UPS、环境参数、监控设备等的集中监控、集中维护、集中管理获得良好收益，采用先进的“预警”维护方式彻底解决落后的人工被动的维护方式，精确定位故障，能够节约维护人员，为机房的安全和可靠运行提供有力保障，防范于未然从而提升经济效益。</p>
                        <p>IDC数据中心经营的业务比较广泛，囊括小型机，机柜出租，楼层整体包租，在安全管理，安全防范，安全运行方面显得尤其重要，那么在相关业务保证方面，监控管理方面，提前预警方面必须做到24小时有人值守，短信通知，邮件告知，数据分析，故障统计，专业知识决策和判断从而防患未然。</p>
                    </div>
                    <div className={mystyle.wrap}>
                        <h3>二、系统结构 </h3>
                        <p>监控整个系统主要由以下三部分组成：现场设备采集层、传输设备、嵌入式服务器。</p>
                        <div className={mystyle.img}>
                            <img src={require('../../img/project/p1-1.png')} alt="系统结构图" />
                        </div>
                        <h3>1.现场设备采集层</h3>
                        <p>采集层服务器直接连接各种被监控设备，采集UPS、空调、配电、门禁、温湿度、烟雾、漏水，将采集的现场信号通过IP方式上传到机房无忧服务器。在上述监控条目的基础上，做深入监控和节能控制措施，做到列头柜的监控，机柜监控，空开监控，多路电的监控，机房PUE的控制，等</p>
                        <h3>2.传输设备</h3>
                        <p>利用DCN链路资源，将机房内监控信息上传至电信服务器。</p>
                        <div className={mystyle.img}>
                            <img src={require('../../img/project/p1-2.png')} alt="传输设备图" />
                        </div>
                        <h3>3.服务器（机房无忧服务器）</h3>
                        <p>具有独立数据处理及数据存储能力，用于将现场设备采集层传输来的的各种信息进行存储、实时处理、分析，处理所有的报警信息，记录报警事件，并可以通过中国电信大客户网管平台进行用户端展示。</p>
                    </div>
                    <div className={mystyle.wrap}>
                        <h3>三、系统性能 </h3>
                        <h3>A.可靠性</h3>
                        <p>系统符合电磁兼容性和电气隔离性能设计要求，不会影响被监控设备的正常工作。监控设备具有良好的接地，抗干扰能力强。设备选用高可靠的工业级设备，保障系统7×24小时不间断运行。系统成熟稳定，支持3000种主流厂家设备的接口通讯协议。</p>
                        <h3>B.稳定性</h3>
                        <p>系统采用多总线方式，某一子系统的故障不影响其它子系统的正常运行。</p>
                        <h3>C.实时性</h3>
                        <p>使用同类设备单总线采集方式，保证监控数据的实时性。前端设备数据采控时间&lt;2S；远程监控数据刷新时间&lt;4S；短信、电话报警发出响应时间&lt;30S</p>
                        <h3>D.安全性</h3>
                        <p>系统具有多级权限管理，区域划分，设备分类，信号分层等</p>
                        <h3>E.维护性</h3>
                        <p>系统支持在线修改，在不停止监控系统的情况下对监控设备进行参数等的修改。系统设计采用模块化结构，系统软件采用组态工具实现方便的系统组建、维护、扩充，无需编程。</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDetail3;