import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';

function Login(props) {
    const [user, setUsr] = React.useState('');
    const [pass, setPass] = React.useState('');
    let history = useHistory();

    const onChangeUsr = e => setUsr(e.target.value);
    const onChangePass = e => setPass(e.target.value);

    const checkIsLogin = (user, pass) => {
        if (user === 'user' && pass === 'pass') history.push('/Home')
        else if (user === 'admin' && pass === 'pass') history.push('/Admin')
    }

    return (
        <div
            style={{
                backgroundColor: '#e6e6e6',
                width: 'auto',
                height: '789px',
            }}>
            <div
                style={{
                    width: '300px',
                    height: '300px',
                    backgroundColor: '#e6ffff',
                    boxShadow: '5px 10px #888888',
                    position: 'fixed',
                    left: '600px',
                    bottom: '300px',
                    borderRadius: '20px'
                }}>
                <p style={{ fontSize: '30px', fontFamily: '-moz-initial', margin: '40px' }}>Quản lý đào tạo</p>
                <div>
                    <div style={{ marginBottom: '20px' }}>
                        <span style={{ fontSize: '18px', fontFamily: '-moz-initial' }}>Tài khoản: </span>
                        <input value={user} onChange={onChangeUsr} />
                    </div>
                    <div>
                        <span style={{ fontSize: '18px', fontFamily: '-moz-initial' }} >Mật khẩu: </span>
                        <input value={pass} onChange={onChangePass} type="password"/>
                    </div>
                    <Button
                        type='primary'
                        style={{ marginTop: '40px', fontSize: '15px' }}
                        onClick={() => checkIsLogin(user, pass)}
                    >
                        Đăng nhập
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;