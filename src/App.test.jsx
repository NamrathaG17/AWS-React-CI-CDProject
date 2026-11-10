import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders the title', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'String Tools' })).toBeInTheDocument();
  });

  it('lists every tool in the dropdown', () => {
    render(<App />);
    expect(screen.getAllByRole('option')).toHaveLength(6);
  });

  it('shows no result until text is entered', () => {
    render(<App />);
    expect(screen.queryByText('Result')).not.toBeInTheDocument();
  });

  it('uppercases text by default', async () => {
    render(<App />);
    await userEvent.type(screen.getByLabelText('Your text'), 'hello');
    expect(screen.getByText('HELLO')).toBeInTheDocument();
  });

  it('updates the result when another tool is chosen', async () => {
    render(<App />);
    await userEvent.type(screen.getByLabelText('Your text'), 'abc');
    await userEvent.selectOptions(screen.getByLabelText('Choose a tool'), 'reverse');
    expect(screen.getByText('cba')).toBeInTheDocument();
  });

  it('shows HTML as plain text, not as markup', async () => {
    render(<App />);
    await userEvent.type(screen.getByLabelText('Your text'), '<b>hi</b>');
    expect(screen.getByText('<B>HI</B>')).toBeInTheDocument();
  });
});
