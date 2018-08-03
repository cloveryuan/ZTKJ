import * as React from 'react';
import mystyle from './Project.scss';
import reqwest from 'reqwest';

interface ProjectProps {
}
interface NumProps {
    num: any,
    datetime: string
}

class ProjectDetail1 extends React.Component<ProjectProps, NumProps> {
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
                <p className={mystyle.tit}>精密空调远程监控维护管理</p>
                <div className={mystyle.subtit}>
                    <span>添加时间：{this.state.datetime}</span>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <span>浏览次数：{this.state.num}</span>
                </div>
                <div className={mystyle.content}>
                    <div className={mystyle.wrap}>
                        <h3>一、需求概述 </h3>
                        <p>空调设备在IT机房运转中属于必须配置的基础设备，同时在机房运转中举足轻重，它的运转良好和可靠安全对机房的各种it设备的散热非常重要，机房没有散热，电子设备就会宕机。空调设备的建设在机房设计阶段考虑到经济成本会有不同的选择，大体分为三类1.舒适性空调，比如各类挂机柜机和吸顶机；2.精密空调，有各个品牌厂家和类型；3.中央空调，涉及到水系统，换热系统，制冷主机和冷冻冷却水泵；</p>
                        <p>不管各类什么类型和种类空调，都离不开维护和管理，才能随时保持良好的运转状态，包括精细运转管理后的能耗节省，这样空调设备及系统应用在各类IT机房的时候才能保持防患未然，经济适用，稳定长效！</p>
                        <div className={mystyle.img}>
                            <img src={require('../../img/project/p3-1.png')} />
                        </div>
                    </div>
                    <div className={mystyle.wrap}>
                        <h3>二、系统描述  </h3>
                        <p>2.1 方案针对性</p>
                        <ul>
                            <li>机房精密空调涉及的品牌和型号较多，各自有专属的状态采集及通讯板。本方案表现出通用性及与具体空调无关性，适用于无法采集到空调状态信息及没有通讯板的场合，也适合虽然通过采集板采集到数据但是没有有效分析和告警处理传送的场合，采用M2M无线流量方式，省去了专用的通信传输设备及专有电路资源。实现自我分析及报警功能，体积小、价格低，不受空调本身各种采集装置的影响，不破坏现有空调的完整性，安装方便。</li>
                            <li>本方案希望通过较少量的数据采集，结合日常空调实际维护经验，通过对采集数据的逻辑运算，实现对空调运行质态的监控。</li>
                        </ul>
                        <p>2.2 方案可以解决的问题</p>
                        <ul>
                            <li>1.专用控制器存在通用性不足的问题，仅适用特定的空调产品，对其它的空调产品不能使用;</li>
                            <li>2.现有的技术采集数据量比较大，侧重于信号采集，仅给出相应的阀值告警通知，未根据信号量逻辑生成故障代码问题;</li>
                            <li>3.现有的采集器依赖有线传输网络，增加了故障点;</li>
                            <li>4.希望空调设备代维厂家直接拿到维护空调的故障代码信息，保证空调维护及时有效防患未然;</li>
                        </ul>
                        <p>方案基于空调的制冷循环原理，通过回风温度、出风温度、压缩机电流等三个模拟量的采集确定空调及机房的制冷质态。采集回风温度是对机房空调运行效果最佳探测；采集送风温度是对空调制冷效果的最优判断；采集空调压缩机的电流是对空调运行整体的最集中体现，通过运行电流值和额定参数值相比较，得出空调运行质态。系统工作框图参考图1-0。</p>
                        <div className={mystyle.img}>
                            <img src={require('../../img/project/p3-2.png')} />
                        </div>
                    </div>
                    <div className={mystyle.wrap}>
                        <h3>三、关键技术  </h3>
                        <p>3.1 针对送风温度、回风温度及压缩机电流等三个采集量，通过判断逻辑，生成告警代码</p>
                        <p>在本报警装置中，告警代码生成是核心功能。告警代码运转产生机理如下表（空白部分是本装置的运算部分不做描述）：</p>
                        <div className={mystyle.img}>
                            <img src={require('../../img/project/p3-3.png')} />
                            <p>告警代码应用分析举例（见上表）：</p>
                        </div>
                        <ul>
                            <li>代码01：电流值判断空调两台压缩机工作正常，T0>T△判断空调制冷效果也正常，但是机房整体温度表现出高，送风温度和回风温度都偏高，代码1给予的维护信息就是本台空调工作正常，但是机房负荷变大，或者有其他空调有人为关机或者故障原因导致机房表现出整体制冷效果差，可以查看其他空调的故障代码;</li>
                            <li>代码02：检测2台压缩机运转电流都偏高，这样的故障判断不去理会送风温度、回风温度及温差，都列为重要告警，需要空调维护人员到现场检测，例如清洗空调冷凝器;</li>
                            <li>代码03：检测到空调的一台压缩机处于停机状态，停机状态是一个正常状态单独不可以作为告警处理，但是送风回风温差（Th/Ts/△T）的机房运转工况都超出运转设定的理想范围，给出的分析代码目的就在给出一个明确的运行故障指示，一台压缩机启动不起来需要现场确认;</li>
                        </ul>
                        <p>3.2 告警代码分等级控制输出</p>
                        <ul>
                            <li>A. 告警代码分级别：a.重要告警代码;b.紧急告警代码；c.一般告警代码。分类原则：一是空调设备本身故障严重程度；二是空调在机房运转效率影响到机房内IT设备的运转，三是机房空调设备运行管理要求条例的落实。</li>
                            <li> B. 等级分类目的是不同的维护人员根据需求选择输出不同的维护信息，从而指导维护工作的开展。</li>
                            <li>C. 通过无线通讯模块选择性发送到维护人员手机，维护人员通过查阅代码值对应的现场运行状态表，明确掌握空调设备和机房现场温度运转情况。</li>
                        </ul>
                    </div>
                    <div className={mystyle.wrap}>
                        <h3>四、项目功能描述  </h3>
                        <p>4.1 采集主机及传感器硬件</p>
                        <p>项目方案采用紫图科技UPT6000系列无线物联网智能互动终端，基于2G、3G、4G无线网络传输，采用M2M技术实现数据包的传送。底端设备对接安装电流传感器和温度传感器。一台设备可以实现2台精密空调的监控采集；智能互动终端预留空调的辅助对接接口，比如总告警接口，远程开机，重启接口等都是作为空调故障代码分析装置的完善辅助功能实现；</p>
                        <p>4.2 软件平台及智能终端软件</p>
                        <p>采用物联网技术实现必然要运行一台服务器云平台实现数据的数值计算和逻辑运算，直到生成可见的精密空调故障代码，且分类告警通知，同时便于随时随地的查看。这里有个3个层次的实现过程:</p>
                        <ul>
                            <li>a、紧急的故障在底端设备和平台同时发送短信到维护人员；</li>
                            <li>b、紧急的，重要的和一般的故障代码由web平台和APP手机软件发送，手机app同时对各类故障做1周，2周的故障代码总结，以可视化图形展现出来；如果实现微信关注，每天可以投送一个分析图表消息；</li>
                            <li>c、对采集数据的配置和管理由web平台来实现；</li>
                        </ul>
                        <p>4.3 项目列举及界面展现</p>
                        <p>本项目及关键技术属于南京电信发明专利，项目已经在南京电信重点机房和苏州电信关键机房的精密空调广泛使用，以下是项目的一些截图；</p>
                        <div className={mystyle.img}>
                            <img src={require('../../img/project/p3-4.png')} alt="传输设备图" />
                            <p>App终端界面</p>
                        </div>
                        <div className={mystyle.img}>
                            <img src={require('../../img/project/p3-5.png')} alt="传输设备图" />
                            <p>Web配置管理账号登陆: http://180.96.28.83:83</p>
                        </div>
                    </div>
                    <div className={mystyle.wrap}>
                        <h3>五、项目的价值发现  </h3>
                        <p>各种物联网应用场景是对处于一个范围数据值的管理功能，运算功能，数据挖掘功能，精密空调故障代码分析只是其中一种具体的应用；数据还可以包括：</p>
                        <ul >
                            <li>★ 上限值和下限值的告警设置; 曲线变化趋势的直观表达;</li>
                            <li>★ 环境变化的时间轴多曲线表达，发现数据变化和事件的关联；</li>
                            <li>★ 历史数据的对比和统计，通过可视化图表发现问题所在;</li>
                            <li>★ 监控数值点的地域位置分布及对比也是应用管理的基本方法；</li>
                        </ul>
                        <p>万物互联是一种管理手段，也是对安全和便捷的追求，通过项目的实施我们可以对数据赋予更多的解读，通过对数据的分析我们可以产生相应的知识系统，通过对万物互联的应用，保证在各行各业效率的提升。</p>
                    </div>
                    <div className={mystyle.wrapper}>
                        <div className={mystyle.imgsmall}>
                            <img src={require('../../img/project/p3-6.png')} alt="传输设备图" />
                            <p>微信企业号关注</p>
                        </div>
                        <div className={mystyle.imgsmall}>
                            <img src={require('../../img/project/p3-7.png')} alt="传输设备图" />
                            <p>安卓App 应用下载</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDetail1;