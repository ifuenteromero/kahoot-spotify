import TopBar from '../components/TopBar';
import useUserProfile from '../hooks/useUserProfile';
import '../styles/landing.scss';

const LandingPage = () => {
    const { isLoading, error } = useUserProfile();
    if (error) throw error;

    const buttonText = isLoading ? 'Loading...' : 'logged';

    return (
        <div className='landing'>
            <header>
                <TopBar />
            </header>
            <main>
                <p id='logged'>{buttonText}</p>
            </main>
        </div>
    );
};

export default LandingPage;
