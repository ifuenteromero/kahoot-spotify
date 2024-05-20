import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../components/App';
import { projectName } from '../../projectName';

describe('App', () => {
    const renderComponent = () => {
        render(<App />);
        const user = userEvent.setup();
        return {
            user,
        };
    };
    it('should show a title ', () => {
        renderComponent();
        const title = screen.getByRole('heading');
        expect(title).toBeInTheDocument();
        expect(title.textContent).toBe(projectName);
    });

    // it('should toggle on-off when button is clicked', async () => {
    //     const { user } = renderComponent();
    //     const button = screen.getByRole('button');
    //     expect(button.textContent).toBe('on');
    //     await user.click(button);
    //     screen.debug();
    //     expect(button.textContent).toBe('off');
    // });
});
