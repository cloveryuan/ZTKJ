import * as React from 'react';
import mystyle from './Project.scss';
import { Row, Col, Table } from 'antd';
import { Link } from 'react-router-dom';
import reqwest from 'reqwest';

interface ProjectProps {
}
interface ListProps {
    list: any,
}

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        width: '50px',
        colSpan: 0
    },
    {
        title: '标志',
        dataIndex: 'img',
        width: '30px',
        colSpan: 0
    },
    {
        title: '方案列',
        dataIndex: 'projectName',
        colSpan: 0,
        className: 'pointer',
        render: (text, row, index) => {
            return {
                children: (
                    <Link
                        to={{
                            pathname: '/project/detail' + row.index,
                            search: '?' + row.id,
                            // hash: '#' + row.id,
                            // state: { fromDashboard: true }
                        }}
                    >
                        {text}
                    </Link>
                ),
                props: {
                    colSpan: 5,
                },
            };
        },
    },
    {
        title: '时间',
        dataIndex: 'time',
        colSpan: 0
    }]

class ProjectIndex extends React.Component<ProjectProps, ListProps> {
    constructor(props: ProjectProps) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        new Promise((resolve, reject) => {
            reqwest({
                url: 'http://127.0.0.1:8000/project',
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
                this.setState({ list: res })
            },
            (err) => {
                console.log('失败:', err)
            })
    }
    click = (record, rowkey) => {
        console.log(record)
        console.log(rowkey)
    }

    render() {
        const data = this.state.list.map((item, index) => {
            return (
                {
                    key: index + 1,
                    index: index + 1,
                    img: <img src={require('../../img/project/biao.gif')} />,
                    projectName: item.name,
                    time: item.datetime,
                    id: item.id
                }
            )

        })
        return (
            <div>
                <Row type="flex" style={{ justifyContent: 'center' }}>
                    <Col md={20} xs={20}>
                        <div className={mystyle.title}>
                            <h3>解决方案</h3>
                            <hr />
                        </div>
                        <div >
                            <Table
                                columns={columns}
                                dataSource={data}
                                onRow={(record, rowkey) => {
                                    return {
                                        onClick: this.click.bind(this, record, rowkey)    // 点击行 record 指的本行的数据内容，rowkey指的是本行的索引

                                    }

                                }}

                            />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ProjectIndex;