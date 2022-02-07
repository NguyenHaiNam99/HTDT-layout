import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Button, Table, Space } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

const {Column, ColumnGroup} = Table;

const { SubMenu } = Menu;

const ItemCS = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        }, {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
    ];

    return <Table dataSource={dataSource} style={{ marginTop: 100, marginLeft: 100 }} >
        
    <Column title="Name" dataIndex="name" key="name" />
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column title="Cơ sở" dataIndex="cs" key="cs" />
    <Column title="Khoá học" dataIndex="khoa" key="khoa" />
    <Column title="Trạng thái" dataIndex="pendding" key="pendding" />
    <Column title="Học Phí" dataIndex="phi" key="phi" />
    <Column
      title="Action"
      key="action"
      render={() => (
        <Space size="middle">
          <a>Duyệt</a>
          <a>Từ chối</a>
        </Space>
      )}
    />
    </Table>
}

const ItemHĐ = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đã xong',
            phi: '2 triệu'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đã xong',
            phi: '2 triệu'
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        }, {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            cs: 'Cơ sở 1',
            khoa: 'Khoá học 1',
            pendding: 'Đang chờ',
            phi: '2 triệu'
        },
    ];

    return <Table dataSource={dataSource} style={{ marginTop: 100, marginLeft: 100 }} >
        
    <Column title="Name" dataIndex="name" key="name" />
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column title="Cơ sở" dataIndex="cs" key="cs" />
    <Column title="Khoá học" dataIndex="khoa" key="khoa" />
    <Column title="Trạng thái" dataIndex="pendding" key="pendding" />
    <Column title="Học Phí" dataIndex="phi" key="phi" />
    <Column
      title="Action"
      key="action"
      render={() => (
        <Space size="middle">
          <Button type='primary'>Xuất hoá đơn</Button>
        </Space>
      )}
    />
    </Table>
}

const FormDK = () => {
    return (
        <div style={{marginTop: 100, marginLeft: 100}}>
            <div style={{ marginBottom: '20px', display:'flex' }}>
                <span style={{ fontSize: '18px', fontFamily: '-moz-initial', width: 200 }}>Họ tên: </span>
                <input style={{width: 300}}/>
            </div>
            <div style={{ marginBottom: '20px', display:'flex' }}>
                <span style={{ fontSize: '18px', fontFamily: '-moz-initial', width: 200 }} >Cơ sở công tác: </span>
                <input style={{width: 300}}/>            </div>
            <div style={{ marginBottom: '20px', display:'flex' }}>
                <span style={{ fontSize: '18px', fontFamily: '-moz-initial', width: 200 }} >Địa chỉ: </span>
                <input style={{width: 300}}/>            </div>
            <div style={{ marginBottom: '20px', display:'flex' }}>
                <span style={{ fontSize: '18px', fontFamily: '-moz-initial', width: 200 }} >Cơ sở đăng ký: </span>
                <input style={{width: 300}}/>            </div>
            <div style={{ marginBottom: '20px', display:'flex' }}>
                <span style={{ fontSize: '18px', fontFamily: '-moz-initial', width: 200 }} >Khoá đào tạo: </span>
                <input style={{width: 300}}/>            </div>
            <div style={{ marginBottom: '20px', display:'flex' }}>
                <span style={{ fontSize: '18px', fontFamily: '-moz-initial', width: 200 }} >Chi phí phụ cấp: </span>
                <input style={{width: 300}}/>            </div>
            <Button
                type='primary'
                style={{ marginTop: '40px', fontSize: '15px' }}
                onClick={()=> alert('Đăng ký thành công !!!')}
            >
                Đăng ký
            </Button>
        </div>
    )
}

const Admin = () => {
    const [isClose, setIsClose] = React.useState(false);
    const [target, setTarget] = React.useState('default');

    const toggleCollapsed = () => setIsClose(!isClose)
    const changeTarget = (value) => setTarget(value);

    const menu = (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={isClose}
        >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                Trang chủ
            </Menu.Item>
            <Menu.Item key="4" onClick={()=>changeTarget('default')} icon={<ContainerOutlined />}>
                Hồ sơ cá nhân
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Thông tin các cơ sở dào tạo">
                <Menu.Item key="11" onClick={() => changeTarget('CS')}>Cơ sở 1</Menu.Item>
                <Menu.Item key="6" onClick={() => changeTarget('CS')}>Cơ sở 2</Menu.Item>
                <Menu.Item key="7" onClick={() => changeTarget('CS')}>Cơ sở 3</Menu.Item>
                <Menu.Item key="8" onClick={() => changeTarget('CS')}>Cơ sở 4</Menu.Item>
                <Menu.Item key="9" onClick={() => changeTarget('CS')}>Cơ sở 5</Menu.Item>
                <Menu.Item key="10" onClick={() => changeTarget('CS')} >Cơ sở 6</Menu.Item>
                <Menu.Item key="12" onClick={() => changeTarget('CS')}>Cơ sở 7</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Thông tin các khoá đào tạo">
                <Menu.Item key="9">Khoá 1</Menu.Item>
                <Menu.Item key="20">Khoá 2</Menu.Item>
                <Menu.Item key="21">Khoá 3</Menu.Item>
                <Menu.Item key="22">Khoá 4</Menu.Item>
                <Menu.Item key="23">Khoá 5</Menu.Item>
                <Menu.Item key="24">Khoá 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </SubMenu>
            <Menu.Item key="30" onClick={() => changeTarget('CS')} icon={<ContainerOutlined />}>
                Thông tin đăng ký của nhân viên
            </Menu.Item>
            <Menu.Item key="31" onClick={() => changeTarget('HD')} icon={<ContainerOutlined />}>
                Thông tin nhân viên đang học
            </Menu.Item>
            <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub4" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub5" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub5" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub6" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub6" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </SubMenu>
        </Menu>
    )

    let contentDisplay;
    switch (target) {
        case 'default':
            contentDisplay = (
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 50 }}>
                        <span style={{ fontSize: 30, fontFamily: '-moz-initial' }} >Thông tin cá nhân</span>
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4W_iq-9RiYwn8Y62JpEmjJ6HqRw6h7RwY1GgoPDt7Q3kxd93_6YRLxKyQiYa-reNWy0&usqp=CAU'
                            style={{ width: 250, height: 300, marginTop: 50, marginLeft: 50 }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 150, marginLeft: 100 }}>
                        <span style={{ fontSize: 25, fontFamily: '-moz-initial' }}>Chức vụ: Phụ trách đào tạo</span>
                        <span style={{ fontSize: 25, fontFamily: '-moz-initial' }}>Họ và tên: Nguyễn Văn B</span>
                        <span style={{ fontSize: 25, fontFamily: '-moz-initial' }}>Ngày sinh: 11/11/1999</span>
                        <span style={{ fontSize: 25, fontFamily: '-moz-initial' }}>Quê quán: Việt Nam</span>
                        <span style={{ fontSize: 25, fontFamily: '-moz-initial' }}>Đơn vị công tác: Phòng B</span>
                    </div>
                </div>
            )
            break;
        case 'CS':
            contentDisplay = <ItemCS/>
            break;
        case 'DK':
            contentDisplay = <FormDK/>
            break;
        case 'HD':
            contentDisplay = <ItemHĐ />
            break;
    }
    console.log(contentDisplay)
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#1890ff' }}>
                <Button type="primary" onClick={toggleCollapsed} style={{ width: 50, height: 40 }}>
                    {
                        isClose ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                </Button>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <span style={{ fontSize: 25, fontFamily: '-moz-initial', color:'white' }}>Hệ thống quản lý đào tạo</span>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: 256 }}>
                    {menu}
                </div>
                {contentDisplay}
            </div>
        </div>
    );
}

export default Admin;