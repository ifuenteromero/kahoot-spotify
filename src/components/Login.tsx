import '../styles/login.scss';

const Login = () => {
    const text = 'login with spotify';
    return (
        <div className='login'>
            <a className='button--primary'>{text}</a>
        </div>
    );
};

export default Login;
