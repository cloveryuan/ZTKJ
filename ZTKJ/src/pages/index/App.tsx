import * as React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css';
import mystyle from './App.scss';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Footer from '../Footer/Footer'
import Home from '../home/Homes';
import Product from '../Product/Product';
import ProductBase from '../Product/ProductBase';
import Project from '../Project/Project';
import Ypt from '../Ypt/YptInfo';
import ShowYpt from '../Ypt/ShowYpt';
import Us from '../Us/Us';
import logo from '../../img/logo1.png';
import reqwest from 'reqwest';

const { Content } = Layout;
interface PropsConfigure {
}

// 云平台下级
const menuYpt = (
    <Menu className={mystyle.menus}>
        <Menu.Item>
            <NavLink to="/ypt" rel="noopener noreferrer" >云平台简述</NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to="/showYpt" rel="noopener noreferrer" >可视化展现</NavLink>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://cloud.witium.com/#/extra/login">平台演示链接</a>
        </Menu.Item>
    </Menu>);

class App extends React.Component<PropsConfigure, any> {
    constructor(props: PropsConfigure) {
        super(props)
        this.state = {
            Mleft: '',
            center: []
        }
    }
    componentWillMount() {
        new Promise((resolve, reject) => {
            reqwest({
                url: 'http://127.0.0.1:8000/product',
                type: 'json',
                method: 'post',
                success(res: any) {
                    resolve(res)
                },
                error(err: any) {
                    reject(err)
                }
            })
        }).then(
            (res) => {
                console.log('成功:', res);
                this.setState({ center: res })
            },
            (err) => {
                console.log('失败:', err)
            })
    }
    handleMouseEnter(e: PropsConfigure, index: number) {
        this.setState({
            Mleft: e['target'].clientWidth * index
        })
    }

    render() {

        // 产品中心下级
        const menuPro = (
            <Menu className={mystyle.menus}>
                {
                    this.state.center.map((item, index) => {
                        return (
                            <Menu.Item key={index}>
                                <NavLink to={{ pathname: item.path, search: '?' + item.id }} rel="noopener noreferrer" >{item.name}</NavLink>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>);
        // 导航
        const nav = [
            { name: '首页', path: '/' },
            { name: '产品中心', path: '/product', menus: menuPro },
            { name: '解决方案', path: '/project' },
            { name: '物联网平台', path: '/ypt', menus: menuYpt },
            // { name: 'RFID应用', path: '/rfid' },
            // { name: '定制开发', path: '/dz' },
            { name: '关于我们', path: '/us' }
        ]

        return (
            <HashRouter>
                <Layout className="layout" style={{ height: '100vh' }}>
                    <div className={mystyle.header}>
                        <div className={mystyle.logo}>
                            <img src={logo} alt="" />
                            <a href="javascript:void(0)" className={mystyle.title}>紫图科技</a>
                        </div>
                        <div style={{ height: '100%', float: 'right', marginRight: '10px' }}>
                            <ul>
                                {
                                    nav.map(
                                        (item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    onMouseEnter={(e) => { this.handleMouseEnter(e, index) }}
                                                >
                                                    {
                                                        item.menus ? (
                                                            <Dropdown overlay={item.menus}>
                                                                <NavLink className="ant-dropdown-NavLink" to={item.path}>
                                                                    {item.name}
                                                                    <Icon type="down" />
                                                                </NavLink>
                                                            </Dropdown>

                                                        ) :
                                                            <NavLink to={item.path} >
                                                                {item.name}
                                                            </NavLink>
                                                    }
                                                </li>
                                            )

                                        })
                                }
                            </ul>
                            <p style={{ marginLeft: this.state.Mleft }} />
                        </div>
                    </div>
                    <Content style={{ marginTop: '60px', background: '#fff' }}>
                        {/* 主页 */}
                        <Route path="/" exact={true} component={Home} />

                        {/* 产品product主分类，product1每个分类下产品，product2每个产品对应详情 item.path每个产品路由*/}
                        <Route path="/product" exact={true} component={Product} />
                        {
                            this.state.center.map((item, index) => {
                                return <Route path={item.path} exact={true} component={ProductBase} key={index} />
                            })
                        }

                        {/* <Route path="/product2" exact={true} component={Productdetails} /> */}

                        <Route path="/project" component={Project} />
                        <Route path="/ypt" exact={true} component={Ypt} />
                        <Route path="/ShowYpt" exact={true} component={ShowYpt} />
                        <Route path="/us" exact={true} component={Us} />
                    </Content>
                    <Footer />
                </Layout>
            </HashRouter >
        )
    }
}

export default App;
// import { DomRender } from 'src/common/domrender'
import registerServiceWorker from 'src/common/registerServiceWorker'
// DomRender(App)
registerServiceWorker()
