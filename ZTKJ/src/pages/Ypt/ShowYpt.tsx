import * as React from 'react';
import mystyle from './Ypt.scss';
import { Row, Col } from 'antd'

interface ProjectProps {
}
class ShowYpt extends React.Component<ProjectProps> {
    render() {
        return (
            <div className={mystyle.showpage}>
                <Row gutter={20} className={mystyle.imgshow} type="flex">
                    <Col md={12} sm={24} className={mystyle.list}>
                        <h3>Ups的项目</h3>
                        <img src={require('../../img/ypt/show_1.png')} alt="" />
                    </Col>
                    <Col md={12} sm={24} className={mystyle.list}>
                        <h3>空调的项目</h3>
                        <img src={require('../../img/ypt/show_2.png')} alt="" />
                    </Col>
                    <Col md={12} sm={24} className={mystyle.list}>
                        <h3>信号标识</h3>
                        <img src={require('../../img/ypt/show_3.png')} alt="" />
                    </Col>
                    <Col md={12} sm={24} className={mystyle.list}>
                        <h3>（房间，设备，构建，左侧引导）</h3>
                        <img src={require('../../img/ypt/show_4.png')} alt="" />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default ShowYpt;