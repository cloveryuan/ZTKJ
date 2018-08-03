import React from 'react';
import { Row, Col, BackTop } from 'antd';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import mystyle from './Footer.scss'
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    static defaultProps = {
        className: 'footer0',
    };

    render() {
        const props = { ...this.props };
        return (
            <div>
                <Row type="flex" className={mystyle.footerdetail}>
                    <Col
                        md={2}
                        xs={6}
                    >
                        <h3>关于我们</h3>
                        <ul>
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/us">公司简介</Link></li>
                        </ul>
                    </Col>
                    <Col
                        md={6}
                        xs={10}
                    >
                        <h3>联系我们</h3>
                        <ul>
                            <li>公司地址：南京市鼓楼区集庆门大街268号苏宁慧谷E8-14   </li>
                            <li>固定电话：025－86795057   </li>
                            <li>移动电话：13915966993　（许先生） </li>
                            <li>传真号码：025－86795056</li>
                            <li>公司邮编：210029</li>
                        </ul>
                    </Col>
                    <Col
                        md={4}
                        xs={8}

                    >
                        <h3>物联网云平台</h3>
                        <ul>
                            <li><a href="#">物联网云平台</a></li>
                            <li>
                                <a href="#">云平台简述</a>
                            </li>
                            <li>
                                <a href="#">云平台在线体验</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} />
                    <Col
                        md={4}
                        xs={24}
                    >
                        <h3>关注我们</h3>
                        <ul>
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/us">公司简介</Link></li>
                        </ul>
                        <p className={mystyle.code}>
                            <img src={require('../../img/code.png')} alt="" />
                        </p>
                    </Col>
                </Row>
                <div>
                    <BackTop />
                </div>
                <hr className={mystyle.line} />
                <OverPack
                    {...props}
                    playScale={0.05}
                    className={mystyle.footer}

                >
                    <TweenOne
                        animation={{ y: '+=30', opacity: 0, type: 'from' }}
                        key="footer"
                    >
                        <span>
                            Copyright © 2018  <a href="#">nanjing zitu Co.,Ltd </a>. All Rights Reserved
                    </span>
                    </TweenOne>
                </OverPack>
            </div>)
    }
}

export default Footer;
