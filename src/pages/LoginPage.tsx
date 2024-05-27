import endpoints from '../services/endpoints';
import '../styles/login.scss';

const LoginPage = () => {
    const text = 'login with spotify';

    return (
        <div className='login'>
            <a className='button--primary' href={endpoints.login}>
                {text}
            </a>
        </div>
    );
};

export default LoginPage;
