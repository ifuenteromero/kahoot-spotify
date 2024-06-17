import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress/CircularProgress';
import { ReactNode, useEffect, useState } from 'react';

interface Props extends CircularProgressProps {
    children: ReactNode;
    isLoading: boolean;
}

const WithLoading = ({ children, isLoading, ...restProps }: Props) => {
    const [progressValue, setProgressValue] = useState(0);

    const [showLoading, setShowLoading] = useState(isLoading);

    const stepLength = 10;

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressValue((prevIndex) => prevIndex + stepLength);
        }, 100);
        // para que de vueltas completas
        if (
            !isLoading &&
            progressValue % (100 + stepLength) === 0 &&
            progressValue > 0
        ) {
            clearInterval(interval);
            setShowLoading(false);
        }

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progressValue]);

    return (
        <>
            {showLoading ? (
                <CircularProgress
                    variant='determinate'
                    size='8rem'
                    value={progressValue}
                    {...restProps}
                />
            ) : (
                children
            )}
        </>
    );
};

export default WithLoading;
