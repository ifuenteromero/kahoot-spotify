import AvatarMUI, { AvatarProps } from '@mui/material/Avatar';
import { forwardRef } from 'react';

interface Props extends AvatarProps {
    name: string;
    image: string;
}

const Avatar = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { name = 'user avatar', image, ...restProps } = props;
    return (
        <AvatarMUI
            alt={name}
            src={image}
            title={name}
            {...restProps}
            ref={ref}
        />
    );
});

export default Avatar;
