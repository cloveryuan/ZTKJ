import * as React from 'react';
import same from '../../same/same.scss';
import mystyle from './Ypt.scss';
import { Row, Col } from 'antd'

interface ProjectProps {
}
class YptInfo extends React.Component<ProjectProps> {
    render() {
        return (
            <div className={mystyle.ypt}>
                <div className={same.tit}>
                    <img
                        src={require('../../img/ypt/ypt_back.jpg')}
                        alt=""
                        style={{ width: '100%', height: '300px' }}
                    />
                </div>
                <div className={mystyle.title}>
                    <div className={mystyle.top}>
                        <h3>云平台介绍</h3>
                        <p>  物联网是新一代信息技术的高度集成和综合运用，对新一轮产业变革和经济社会绿色、智能、可持续发展具有重要意义。“十二五”时期，我国物联网发展取得了显著成效，与发达国家保持同步，成为全球物联网发展最为活跃的地区之一。“十三五”时期，我国经济发展进入新常态，创新是引领发展的第一动力，促进物联网、大数据等新技术、新业态广泛应用，培育壮大新动能成为国家战略。当前，物联网正进入跨界融合、集成创新和规模化发展的新阶段，迎来重大的发展机遇</p>
                    </div>
                    <div className={mystyle.infoImg}>
                        <img src={require('../../img/ypt/info.png')} alt="" />
                    </div>
                    <Row gutter={20} className={mystyle.imgshow} type="flex">
                        <Col md={12} sm={24} className={mystyle.list}>
                            <h3>局战数</h3>
                            <img src={require('../../img/ypt/web_1.png')} alt="" />
                        </Col>
                        <Col md={12} sm={24} className={mystyle.list}>
                            <h3>设备信息</h3>
                            <img src={require('../../img/ypt/web_1.png')} alt="" />
                        </Col>
                        <Col md={12} sm={24} className={mystyle.list}>
                            <h3>记录</h3>
                            <img src={require('../../img/ypt/web_1.png')} alt="" />
                        </Col>
                        <Col md={12} sm={24} className={mystyle.list}>
                            <h3>实时信息</h3>
                            <img src={require('../../img/ypt/web_1.png')} alt="" />
                        </Col>
                        <Col md={12} sm={24} className={mystyle.list}>
                            <h3>手机界面</h3>
                            <img src={require('../../img/ypt/phone_1.png')} alt="" />
                        </Col>
                        <Col md={12} sm={24} className={mystyle.list}>
                            <h3>手机界面</h3>
                            <img src={require('../../img/ypt/phone_1.png')} alt="" />
                        </Col>
                    </Row>
                </div>
                <div className={mystyle.special}>
                    <h3>平台特点</h3>
                    <Row gutter={20} className={mystyle.spewrap} type="flex">
                        <Col md={10} sm={24} className={mystyle.list}>
                            <span>
                                <img src={require('../../img/ypt/special_1.png')} alt="" />
                            </span>
                            <div className={mystyle.culture}>
                                <h3 className={mystyle.toptit}>远程控制</h3>
                                <p>便于用户权限管理、设备监控、异常报警、远程维护。</p>
                            </div>
                        </Col>
                        <Col md={10} sm={24} className={mystyle.list}>
                            <span>
                                <img src={require('../../img/ypt/special_2.png')} alt="" />
                            </span>
                            <div className={mystyle.culture}>
                                <h3 className={mystyle.toptit}>在线分析</h3>
                                <p>在线分析可以收集和学习来自现场的所有信息，以帮助用户更好地了解他们的设备运行状态</p>
                            </div>
                        </Col>
                        <Col md={10} sm={24} className={mystyle.list}>
                            <span>
                                <img src={require('../../img/ypt/special_3.png')} alt="" />
                            </span>
                            <div className={mystyle.culture}>
                                <h3 className={mystyle.toptit}>告警信息</h3>
                                <p>设备实时运行，并提供了参数分析。实时传输设备故障告警、维护情况。</p>
                            </div>
                        </Col>
                        <Col md={10} sm={24} className={mystyle.list}>
                            <span>
                                <img src={require('../../img/ypt/special_4.png')} alt="" />
                            </span>
                            <div className={mystyle.culture}>
                                <h3 className={mystyle.toptit}>实时数据</h3>
                                <p>实时数据给用户提供了一个可靠的数据获取方式来及时显示数据的真实情况。</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default YptInfo;