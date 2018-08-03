import * as React from 'react';
import { Link } from 'react-router-dom';
import same from '../../same/same.scss';
import mystyle from './Product.scss';
import reqwest from 'reqwest';

interface PropsConfigure {
}
class Product extends React.Component<PropsConfigure, any> {
    constructor(props: PropsConfigure) {
        super(props)
        this.state = {
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
    render() {
        return (
            <div className={mystyle.wrap}>
                <div className={same.tit}>
                    <img
                        src={require('../../img/product_tit.png')}
                        alt=""
                        style={{ width: '100%', height: '300px' }}
                    />
                </div>
                <div className={mystyle.wrapper}>
                    <h3 className={mystyle.title}> 产品中心  / </h3>
                    <hr />
                </div>
                {
                    this.state.center.map((item, index) => {
                        return (
                            <div className={same.center} key={index}>
                                <div className={mystyle.left}>
                                    <Link to={{ pathname: item.path, search: '?' + item.id }} ><img src={require('../../img/product/' + item.src)} /></Link>
                                </div>
                                <dl className={mystyle.right} >
                                    <dt>
                                        <Link to={{ pathname: item.path, search: '?' + item.id }} >{item.name}</Link>
                                    </dt>
                                    <dd className={mystyle.p}>
                                        {item.p}
                                    </dd>
                                    <dd className={mystyle.detail}>
                                        <Link to={{ pathname: item.path, search: '?' + item.id }} >产品详情&gt;</Link>
                                    </dd>
                                </dl>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Product