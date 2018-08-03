import * as React from 'react';
import mystyle from './Product.scss';
import { Button } from 'antd';

class ProductDetail extends React.Component {
    handleGoback = () => {
        history.go(-1)
    }
    render() {
        const detail = this.props['location'].state ? this.props['location'].state : {}
        return (
            <div className={mystyle.wrapper}>
                <h3 className={mystyle.title}>
                    产品中心 / {detail.parname} / {detail.name}
                </h3>
                <Button
                    className={mystyle.icon}
                    type="primary"
                    icon="rollback"
                    size={'large'}
                    onClick={this.handleGoback}
                >
                    返回
                </Button>
                <hr />
                <div className={mystyle.content}>
                    <img src={require('../../img/product/' + detail.src)} />
                    <h3>{detail.name}</h3>
                    <p>{detail.p}</p>
                    <div className={mystyle.argument}>
                        {
                            detail.detailargument ? (
                                <img src={require('../../img/product/' + detail.detailargument)} />
                            ) : (
                                    null
                                )
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail