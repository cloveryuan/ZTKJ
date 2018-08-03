import * as React from 'react';
import mystyle from './Us.scss';
import same from '../../same/same.scss';
import { Row, Col } from 'antd';

class Us extends React.Component {
    render() {
        return (
            <div>
                <div className={same.tit}>
                    <img src={require('../../img/us_tit.gif')} alt="" />
                </div>
                <div className={mystyle.introduce}>
                    <div className={mystyle.intro_con}>
                        <h2>紫图</h2>
                        <div className={mystyle.introduce_text}>
                            <p>
                                南京紫图科技有限公司是一家具有自主研发能力的高科技企业，主要从事：机房监控，动力与环境监控，机房环境动力监控，无人和少人值守机房动力及环境集中监控系统、基于无线网络远程现场数据采集系统等项目设计、设备制造和软件平台技术服务。
                            </p>
                            <p>
                                紫图科技独特的业务模式，和中国电信形成战略合作伙伴，借助其广泛的营销网络，接触最广泛的业务需求，不断创新解决各行业的痛点，服务于电信，服务于电信的客户的理念，处于蒸蒸日上的发展阶段。新兴业务服务于各行各业的物联网建设，做好大数据，人工智能的基础数据采集和可视化，传统产品服务于基本的电信机房业务维护，服务于5G建设。我们将围绕物联网服务差异化、生态化与智慧化愿景，筑力融合创新，赋能价值创造，共谋行业发展新蓝图！
                            </p>
                            <p>

                                紫图科技坚持为客户提供的不仅是产品，更是服务。帮助客户创造价值，并致力于发展与客户的长期合作伙伴关系，与合作伙伴共同发展。并将继续发挥自身技术优势和服务优势，不断完善与改进现有的软、硬件产品，不断提供优质领先的高科技产品、周到的技术服务，为广大客户提供更好的应用和管理手段，来共同推进整个社会的信息化进程。
                            </p>
                            <p>
                                “诚信、务实、共赢”不仅是公司经营管理的宗旨，也是公司对所有用户的服务承诺。

                            </p>
                        </div>
                    </div>
                </div>
                <div className={mystyle.introduce + ' ' + mystyle.back}>
                    <h3>企业资质</h3>
                    <Row className={mystyle.zs} type="flex" gutter={16}>
                        <Col md={5} xs={12}>
                            <img src={require('../../img/zs/zs1.jpg')} alt="科技型中小企业" title="科技型中小企业" />
                        </Col>
                        <Col md={5} xs={12}>
                            <img src={require('../../img/zs/zs2.jpg')} alt="软件产品" title="软件产品" />
                        </Col>
                        <Col md={5} xs={12}>
                            <img src={require('../../img/zs/zs3.jpg')} alt="软件企业" title="软件企业" />
                        </Col>
                        <Col md={5} xs={12}>
                            <img src={require('../../img/zs/zs4.jpg')} alt="资信等级" title="资信等级" />
                        </Col>
                    </Row>
                    <Row className={mystyle.zs} type="flex" gutter={16}>
                        <Col md={5} xs={12}>
                            <img src={require('../../img/zs/zs5.jpg')} alt="科技型中小企业" title="科技型中小企业" />
                        </Col>
                        <Col md={5} xs={12}>
                            <img src={require('../../img/zs/zs6.jpg')} alt="软件产品" title="软件产品" />
                        </Col>
                        <Col md={5} xs={12}>
                            <img src={require('../../img/zs/zs7.jpg')} alt="软件企业" title="软件企业" />
                        </Col>
                        <Col md={5} xs={12}>
                            <img src={require('../../img/zs/zs8.jpg')} alt="资信等级" title="资信等级" />
                        </Col>
                    </Row>
                </div>
                <div className={mystyle.introduce}>
                    <div className={mystyle.intro_con}>
                        <h3>企业优势</h3>
                        <ul className={mystyle.ys}>
                            <li className={mystyle.titli}><span />企业文化</li>
                            <li className={mystyle.c}>坚持“持续学习、不断创新、积极进取”的企业文化。强调员工的持续学习，完善和发挥个人技能并不断创新。聘请最优秀人的人才，给予他们学习、成长和发展的机会，让个人与企业共同成长、共同进步。</li>
                            <li className={mystyle.titli}><span />产品优势</li>
                            <li className={mystyle.c}>机房无忧在物联网方面的应用，通过改造水、电、气等能源设备，提供数据采集，自动抄表、远程控制、大数据分析等功能，实现楼宇，机房，生产场合的科学化管理和节能增效。</li>
                            <li className={mystyle.titli}><span />平台优势</li>
                            <li className={mystyle.c}>目前有三个运作方法，一是底层数据对接然后开放开发；二是采集平台服务器接口权限分配对接；三是应用界面的权限分享直接给出URL。在客户的系统平台、网站、数据库，、应用软件、企业微信、单独软件上实现完美定制。这种定制包含数据的采集、处理和告警，还有数据的加工和建模、场景建设、系统逻辑图组态画面等</li>
                            <li className={mystyle.titli}><span />技术支持服务</li>
                            <li className={mystyle.c}>本公司还对客户提供上门技术支持服务。针对客户在系统运行中出现的故障，工程师认为通过电话热线无法解决问题，就会根据客户的要求提供现场技术支持。现场技术支持包括故障诊断、提交解决方案、系统参数恢复等服务。</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Us;