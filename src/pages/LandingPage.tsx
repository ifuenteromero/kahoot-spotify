import TopBar from '../components/TopBar';
import WithLoading from '../components/WithLoading';
import useUserProfile from '../hooks/useUserProfile';
import '../styles/landing.scss';

const LandingPage = () => {
    const { isLoading, error } = useUserProfile();
    if (error) throw error;

    const buttonText = 'logged';

    return (
        <div className='landing'>
            <header>
                <TopBar />
            </header>
            <main>
                <WithLoading isLoading={isLoading}>
                    <p id='logged'>{buttonText}</p>
                </WithLoading>
            </main>
        </div>
    );
};

export default LandingPage;
