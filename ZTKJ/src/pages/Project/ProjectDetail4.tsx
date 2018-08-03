import * as React from 'react';
import mystyle from './Project.scss';
import reqwest from 'reqwest';

interface ProjectProps {
}
interface NumProps {
    num: any,
    datetime: string
}

class ProjectDetail4 extends React.Component<ProjectProps, NumProps> {
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
                <p className={mystyle.tit}>空调远程监控维护管理</p>
                <div className={mystyle.subtit}>
                    <span>添加时间：{this.state.datetime}</span>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <span>浏览次数：{this.state.num}</span>
                </div>
                <div className={mystyle.content}>
                    <div className={mystyle.wrap}>
                        <h3>一、概述 </h3>
                        <p>空调设备在机房运转中属于必须配置的基本设备，同时在机房运转中举足轻重，它的运转良好和可靠安全对机房的各种it设备的散热非常重要，机房没有散热，电子设备就会宕机。空调设备的建设在机房设计阶段考虑到经济成本会有不同的选择，大体分为三类1.舒适性空调，比如各类挂机柜机和吸顶机；2.精密空调，有各个品牌厂家和类型；3.中央空调，涉及到水系统，换热系统，制冷机和泵。</p>
                        <p>不管各类什么类型和种类空调，都离不开维护和管理，才能随时保持良好的运转状态，包括精细运转管理后的能耗节省，这样空调设备及系统应用在各类IT机房的时候才能保持防患未然，经济适用，稳定长效！</p>
                        <p>远程温湿度集中监控系统中所有监测点的温湿度数据是通过CDMA网络实时上传。</p>
                    </div>
                    <div className={mystyle.wrap}>
                        <h3>二、应用项目功能描述  </h3>
                        <p>温度是一个变化的模拟量，和自然条件相关，和季节变化相连，和周遭环境相干，同时在各行各业的生产，管理，安全上也是一个关键的参数。</p>
                        <ul>
                            <li>1. IT行业的机房考虑到设备的散热，温度是一个重要的参考和监控量，涉及机房设备能否稳妥运行的重要指标；</li>
                            <li>2. 冷链运输行业中对货品的存储和运输途中的变质和存储时间非常关键，影响到食物和货物的安全和品质</li>
                            <li>3. 农业大棚种植中，对植物的栽培和种子的发育必须随时监控和采取措施调整，保证农业种植的安全生产；</li>
                            <li>4. 药房的药品的存储和临时存放，包括疫苗的恒温保存，在药品的使用周期和药效至关重要，疫苗更是直观的医疗事故；</li>
                            <li>5. 工业制造生产中对于一些精密设备的制造必须有恒温恒湿的环境，不仅仅是产品质量的问题更是经济效益的关注；</li>
                            <li>6. 同时在奢侈品存储，防火，食品加工，养殖，图书馆，实验环境，中央空调，关联控制中，等等表现出各种各样的应用和必要监控；</li>
                        </ul>
                        <div className={mystyle.img}>
                            <img src={require('../../img/project/p2-1.png')} alt="应用场景" />
                            <p>监控是一种管理手段，也是对安全和便捷的追求，通过监控我们可以对数据赋予更多的解读，通过对数据的分析我们可以保证效率的提升。</p>
                        </div>
                    </div>
                    <div className={mystyle.wrap}>
                        <h3>三、温度监控的价值发现  </h3>
                        <p>温度监控是对处于一个温度范围的管理，包括：</p>
                        <ul>
                            <li>A. 上限值和下限值的告警设置;</li>
                            <li>B. 曲线变化趋势的直观表达;</li>
                            <li>C. 环境变化的时间轴突出和事件的关联；</li>
                            <li>D. 历史数据的对比和统计发现问题所在;</li>
                            <li>E. 温度监控点的分布及对比也是对管理的严格要求；</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDetail4;