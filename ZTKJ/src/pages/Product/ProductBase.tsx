import * as React from 'react';
import { Link } from 'react-router-dom';
import mystyle from './Product.scss';
import { Table, Button } from 'antd';
import reqwest from 'reqwest';

const columns = [
    {
        title: '图片',
        width: '180px',
        dataIndex: 'img',
        colSpan: 0
    },
    {
        title: '简述',
        dataIndex: 'des',
        colSpan: 0
    }]
interface ProjectProps {
}
class ProductBase extends React.Component<ProjectProps, any> {
    constructor(props: ProjectProps) {
        super(props)
        this.state = {
            info: []
        }
    }
    componentWillMount() {
        const search = this.props['location'].search;
        const index = search.indexOf('?');
        const id = search.slice(index + 1);

        reqwest({
            url: 'http://127.0.0.1:8000/product/list',
            method: 'post',
            data: { id: id },
            success: (res: any) => {
                this.setState({ info: res })
            }
        })
    }
    render() {
        const data = this.state.info.map((item, index) => {
            return (
                {
                    key: index,
                    img: <img src={require('../../img/product/' + item.src)} className={mystyle.img} />,
                    // 判断产品是否有更详细的信息参数，来显示是否有下一级链接
                    des: item.detailPath !== undefined ? (
                        <dl className={mystyle.right} >
                            <dt>
                                <Link to={{ pathname: item.detailPath, state: item }}>{item.name} </Link>
                            </dt>
                            <dd className={mystyle.p}>
                                {item.p}
                            </dd>
                            <dd className={mystyle.detail}>
                                <Link to={{ pathname: item.detailPath, state: item }}>产品详情&gt;</Link>
                            </dd>
                        </dl>) : (
                            <dl className={mystyle.right} >
                                <dt>
                                    <h2>{item.name} </h2>
                                </dt>
                                <dd className={mystyle.p}>
                                    {item.p}
                                </dd>
                            </dl>)
                }
            )
        })
        return (
            <div className={mystyle.wrapper}>
                <h3 className={mystyle.title}>
                    产品中心 / {this.state.info.length !== 0 ? this.state.info[0].parname : ''} /
                    </h3>
                <Link to="/product">
                    <Button
                        className={mystyle.icon}
                        type="primary"
                        icon="rollback"
                        size={'large'}
                    >
                        返回
                    </Button>
                </Link>
                <hr />
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default ProductBase