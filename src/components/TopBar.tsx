import {
    ClickAwayListener,
    Grow,
    MenuItem,
    MenuList,
    Paper,
    Popper,
} from '@mui/material';
import { useRef, useState } from 'react';
import useUserProfile from '../hooks/useUserProfile';
import { logout } from '../utils/login';
import Avatar from './MUI/Avatar';

const TopBar = () => {
    const { data, isLoading } = useUserProfile();

    const [open, setOpen] = useState(false);
    const userRef = useRef<HTMLDivElement>(null);

    const userName = isLoading ? '' : data?.name || '';
    const userImage = isLoading ? '' : data?.image || '';

    const handleClose = () => setOpen(false);
    const handleToggle = () => setOpen((prevState) => !prevState);
    const handleUserClick = isLoading ? undefined : handleToggle;

    return (
        <>
            <div className='user-profile__avatar-container'>
                <Avatar
                    role='button'
                    name={userName}
                    image={userImage}
                    ref={userRef}
                    onClick={handleUserClick}
                    className='user-profile__avatar'
                />
            </div>
            <Popper
                open={open}
                anchorEl={userRef.current}
                placement='bottom-start'
                transition
                disablePortal
            >
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transform: 'translate(2px, 10px)',
                            transformOrigin: 'left top',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open}>
                                    <MenuItem onClick={logout}>Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
};

export default TopBar;
