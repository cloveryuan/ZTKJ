import * as React from 'react';
import { Row, Col, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Home.css';
import BannerAnim from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css'
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import zt from '../../img/zt.png';

// 图片系列
//  主打产品标志
import p1 from '../../img/p1.png';
import p2 from '../../img/p2.png';
import p3 from '../../img/p3.png';
//  小的轮播图
import ypt1 from '../../img/ypt_1.jpg';
import ypt2 from '../../img/ypt_2.jpg';
import ypt3 from '../../img/ypt_3.jpg';
import ypt4 from '../../img/ypt_4.jpg';
import ypt5 from '../../img/ypt_5.jpg';
import ypt6 from '../../img/ypt_6.jpg';
import ypt_right from '../../img/ypt_right.png'

// 方案icon图；
import icon1 from '../../img/fan_icon1.png';

// 合作伙伴
import hz1 from '../../img/hz1.jpg';
import hz2 from '../../img/hz2.jpg';

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

interface PropsConfigure {
    target: any
}
interface StateConfig {
    changeBig: string
}

class Home extends React.Component<PropsConfigure, StateConfig> {
    constructor(props: PropsConfigure) {
        super(props)
        this.state = {
            changeBig: null // 控制主打产品动画

        }
    }

    handleMouseEnter(e: PropsConfigure, key: string) {
        this.setState({ changeBig: key })
    }

    handleMouseLeave(e: PropsConfigure) {
        this.setState({ changeBig: null })
        // console.log(this.state.changeBig)
    }
    render() {
        return (
            <div id="home">
                {/*轮播  */}
                <BannerAnim
                    autoPlay={true}
                    dragPlay={false}
                    prefixCls="banner-user"
                >
                    <Element
                        key="1"
                        prefixCls="banner-user-elem"
                    >
                        <BgElement
                            key="bg"
                            className="bg banner_1"
                        />
                        <TweenOne
                            className="banner-user-img"
                            animation={{ y: 30, opacity: 0, type: 'from', duration: 1000 }}
                        >
                            <img src={zt} />
                        </TweenOne>
                    </Element>
                    <Element
                        key="2"
                        prefixCls="banner-user-elem"
                    >
                        <BgElement
                            key="bg"
                            className="bg banner_2"
                        />
                    </Element>
                    <Element
                        key="3"
                        prefixCls="banner-user-elem"
                    >
                        <BgElement
                            key="bg"
                            className="bg banner_3"
                        />
                    </Element>
                </BannerAnim>
                {/* 产品 */}
                <div className="proWrap">
                    {/* 简介 */}
                    <div className="intro">
                        <p>
                            南京紫图一家面向网络化监控产品的专业网络设备开发和制造的高科技企业
                            <br />
                            主要从事：机房监控，动力环境监控，机房环境动力监控
                        </p>
                    </div>
                    {/* 主打产品 */}
                    <Link to="/product" className="fan_content">
                        <OverPack
                            playScale={0.05}
                            always={false}
                            style={{ minHeight: '380px', marginBottom: '50px' }}
                        >
                            <Row className="main_list_wrap" type="flex" key="p">
                                <Col
                                    md={7}
                                    xs={24}
                                    onMouseEnter={(e) => { this.handleMouseEnter(e, 'p1') }}
                                    onMouseLeave={(e) => { this.handleMouseLeave(e) }}
                                >
                                    <TweenOne
                                        animation={{ y: '+=50', type: 'from', duration: 500 }}
                                        key="p1"
                                    >
                                        <div className={`main_list  ${this.state.changeBig === 'p1' ? 'changebig' : ''}`}>
                                            <div className="p_top">
                                                <img src={p1} alt="产品1" />
                                            </div>
                                            <div className="p_bottom">
                                                <h2>智能终端</h2>
                                                <div className="xiantiao" />
                                                <p className="p_text ellip1">
                                                    一体化智能采集器UPT-7S是紫图科技对数据采集硬件平台的充分理解后的主力推荐品种，主要为数据机房、通信系统和电力系统动环数据监控系统设计的嵌入式一体化监控平台，19英寸1U机架式设计，适用于大中小型数据机房的动环数据采集监控管理。集数据采集硬件平台大成，传输口双备份，采集数据大容量，接口种类多样化，远程配置管理，数据本地存储和告警实时传送，设备协议底层解析，液晶面板查询，数据统一格式交互，自成系统可编程运行；满足安全需求，网络拓扑多样，兼容多家软件系统平台。
                                                </p>
                                            </div>
                                        </div>
                                    </TweenOne>
                                </Col>
                                <Col
                                    md={7}
                                    xs={24}
                                    onMouseEnter={(e) => { this.handleMouseEnter(e, 'p2') }}
                                    onMouseLeave={(e) => { this.handleMouseLeave(e) }}
                                >
                                    <TweenOne
                                        animation={{ y: '+=50', type: 'from', duration: 500, delay: 200 }}
                                        key="p2"
                                    >
                                        <div className={`main_list main_list_o ${this.state.changeBig === 'p2' ? 'changebig' : ''}`}>
                                            <div className="p_top">
                                                <img src={p2} alt="产品1" />
                                            </div>
                                            <div className="p_bottom">
                                                <h2>RFID</h2>
                                                <div className="xiantiao" />
                                                <p className="p_text ellip2">
                                                    本产品是一种超高频卡扣式标签, 由超高频不干胶标签贴附在塑料卡扣上形成一种光纤尾纤专用的卡扣式标签。超高频不干胶标签内部可封装不同的 UHF 芯片和不同的 UHF 天线, 因而具有不同的读写距离和特性, 但总体来讲， 相比高频标签具有读取距离远、 防冲突能力强、 感应速度快等特点, 广泛应用于资产管理、 配线架管理、 追踪追溯等。
                                            </p>
                                            </div>
                                        </div>
                                    </TweenOne>
                                </Col>
                                <Col
                                    md={7}
                                    xs={24}
                                    onMouseEnter={(e) => { this.handleMouseEnter(e, 'p3') }}
                                    onMouseLeave={(e) => { this.handleMouseLeave(e) }}
                                >
                                    <TweenOne
                                        animation={{ y: '+=50', type: 'from', duration: 500, delay: 400 }}
                                        key="p3"
                                    >
                                        <div className={`main_list main_list_t ${this.state.changeBig === 'p3' ? 'changebig' : ''}`}>
                                            <div className="p_top">
                                                <img src={p3} alt="产品1" />
                                            </div>
                                            <div className="p_bottom">
                                                <h2>个性化定制</h2>
                                                <div className="xiantiao" />
                                                <p className="p_text ellip3">
                                                    我们用无线和有线方式来实现物联网的应用更细节化,更贴近使用场景。只有这样才可以让物联网做到大范围的推广,所以有必要做个性化的开发，保证正常数据接入的情况下做贴切客户具有应用的二次数据加工和展现;包含基本数据采集,后续数据的计算加工和呈现,包括和客户探讨后的数据分析建模、接口开发等
                                                </p>
                                            </div>
                                        </div>
                                    </TweenOne>
                                </Col>
                            </Row>

                        </OverPack>
                    </Link>
                </div>
                {/* {解决方案} */}
                <div className="fan">
                    <div className="fan_top">
                        <h2>行业物联网解决方案</h2>
                        <div className="xiantiao xian_color1" />
                        <h3>一切从客户的实际需求出发,靠强大的研发能力提供更有针对性,更优越的解决方案</h3>
                    </div>
                    <Link to="/project" className="fan_content">
                        <div
                            className="fan_base fan_1"
                            onMouseEnter={(e) => { this.handleMouseEnter(e, 'fan1') }}
                            onMouseLeave={(e) => { this.handleMouseLeave(e) }}
                        >
                            <div className={`cover ${this.state.changeBig === 'fan1' ? 'hovercover' : ''}`} />
                            <div className={`mask ${this.state.changeBig === 'fan1' ? 'maskhover' : ''}`}>
                                <h3 className="icon">
                                    <img src={icon1} />
                                </h3>
                                <div className={`xiantiao color2 ${this.state.changeBig === 'fan1' ? 'xianhover' : ''}`} />
                                <h2>数据中心/IDC机房动力环境监控</h2>
                                <p className={`fan-desc ${this.state.changeBig === 'fan1' ? 'hoveropacity' : ''}`}>
                                    应用案例：江苏省公安厅、江苏省工商局、华泰证券、江苏省税务局、苏州二附医院、苏州相城教育局、大亚湾核电站、苏州光大银行、河西国际数据中心等
                                </p>
                                <span className={`fan-link  ${this.state.changeBig === 'fan1' ? 'hoveropacity' : ''}`}>查看详情</span>
                            </div>
                        </div>
                        <div
                            className="fan_base fan_2"
                            onMouseEnter={(e) => { this.handleMouseEnter(e, 'fan2') }}
                            onMouseLeave={(e) => { this.handleMouseLeave(e) }}
                        >
                            <div className={`cover ${this.state.changeBig === 'fan2' ? 'hovercover' : ''}`} />
                            <div className={`mask ${this.state.changeBig === 'fan2' ? 'maskhover' : ''}`}>
                                <h3 className="icon">
                                    <img src={require('../../img/fan_icon2.png')} />
                                </h3>
                                <div className={`xiantiao color2 ${this.state.changeBig === 'fan2' ? 'xianhover' : ''}`} />
                                <h2>环保监控管理应用</h2>
                                <p className={`fan-desc ${this.state.changeBig === 'fan2' ? 'hoveropacity' : ''}`}>
                                    应用案例：无锡环保局、连云港核电站等
                                </p>
                                <span className={`fan-link  ${this.state.changeBig === 'fan2' ? 'hoveropacity' : ''}`}>查看详情</span>
                            </div>
                        </div>
                        <div
                            className="fan_base fan_3"
                            onMouseEnter={(e) => { this.handleMouseEnter(e, 'fan3') }}
                            onMouseLeave={(e) => { this.handleMouseLeave(e) }}
                        >
                            <div className={`cover ${this.state.changeBig === 'fan3' ? 'hovercover' : ''}`} />
                            <div className={`mask ${this.state.changeBig === 'fan3' ? 'maskhover' : ''}`}>
                                <h3 className="icon">
                                    <img src={require('../../img/fan_icon3.png')} />
                                </h3>
                                <div className={`xiantiao color2 ${this.state.changeBig === 'fan3' ? 'xianhover' : ''}`} />
                                <h2>中央空调远程管理</h2>
                                <p className={`fan-desc ${this.state.changeBig === 'fan3' ? 'hoveropacity' : ''}`}>
                                    应用案例：中国电信河西国际数据中心、南通云数据中心、无锡国际IDC中心、苏州金鸡湖IDC数据中心等
                                </p>
                                <span className={`fan-link  ${this.state.changeBig === 'fan3' ? 'hoveropacity' : ''}`}>查看详情</span>
                            </div>
                        </div>
                        <div
                            className="fan_base fan_4"
                            onMouseEnter={(e) => { this.handleMouseEnter(e, 'fan4') }}
                            onMouseLeave={(e) => { this.handleMouseLeave(e) }}
                        >
                            <div className={`cover ${this.state.changeBig === 'fan4' ? 'hovercover' : ''}`} />
                            <div className={`mask ${this.state.changeBig === 'fan4' ? 'maskhover' : ''}`}>
                                <h3 className="icon">
                                    <img src={require('../../img/fan_icon4.png')} />
                                </h3>
                                <div className={`xiantiao color2 ${this.state.changeBig === 'fan4' ? 'xianhover' : ''}`} />
                                <h2>通用温度在线监测</h2>
                                <p className={`fan-desc ${this.state.changeBig === 'fan4' ? 'hoveropacity' : ''}`}>
                                    应用案例：江苏省高级人民法院灌南门面药房监控、徐州公安局无人值守机房等
                                </p>
                                <span className={`fan-link  ${this.state.changeBig === 'fan4' ? 'hoveropacity' : ''}`}>查看详情</span>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* {云平台} */}
                <div className="ypt">
                    <div className="ypt_top">
                        <h2>ZtManger 工业物联网云平台</h2>
                        <div className="xiantiao xian_color1" />
                        <p className="ypt_top_text">ZtManger,帮助传统制造型企业或工业设备制造企业，实现工业物联网化或设备信息化。为用户提供工业现场的数据采集上传，并通过电脑端、手机端进行远程地实时监测、控制。</p>
                    </div>
                    <Row type="flex" className="ypt_bottom">
                        <Col
                            md={12}
                            xs={24}
                            className="ypt_left"
                        >
                            <div className="ypt_left_banner">
                                <Carousel autoplay={true}>
                                    <div>
                                        <img src={ypt1} />
                                    </div>
                                    <div>
                                        <img src={ypt2} />
                                    </div>
                                    <div>
                                        <img src={ypt3} />
                                    </div>
                                    <div>
                                        <img src={ypt4} />
                                    </div>
                                    <div>
                                        <img src={ypt5} />
                                    </div>
                                    <div>
                                        <img src={ypt6} />
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                        <Col md={1} xs={0} />
                        <Col
                            md={9}
                            xs={24}
                            className="ypt_right"
                        >
                            <img src={ypt_right} style={{ width: '100%' }} />
                        </Col>
                    </Row>
                </div>
                {/* {合作伙伴} */}
                <div className="hz">
                    <div className="hz_top">
                        <h2>合作伙伴</h2>
                        <div className="xiantiao xian_color1" />
                        <p className="hz_text">
                            携手共赢，共建物联网时代
                        </p>
                        <Row type="flex" className="hz_bottom" gutter={16}>
                            <Col
                                md={4}
                                xs={10}
                            >
                                <img className="hz_img" src={hz1} />
                            </Col>
                            <Col
                                md={4}
                                xs={10}
                            >
                                <img className="hz_img" src={hz2} />
                            </Col>
                            <Col
                                md={4}
                                xs={10}
                            >
                                <img className="hz_img" src={require('../../img/hz3.jpg')} />
                            </Col>
                            <Col
                                md={4}
                                xs={10}
                            >
                                <img className="hz_img" src={require('../../img/hz4.jpg')} />
                            </Col>
                            <Col
                                md={4}
                                xs={10}
                            >
                                <img className="hz_img" src={require('../../img/hz5.jpg')} />
                            </Col>
                            <Col
                                md={4}
                                xs={10}
                            >
                                <img className="hz_img" src={require('../../img/hz6.jpg')} />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home