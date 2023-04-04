import { cleanup, render, screen } from '@testing-library/react';
import App from './App';
import renderer from "react-test-renderer";

afterEach(()=>{
  cleanup();
})

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('todo-1');
  expect(linkElement).toBeInTheDocument();
  // expect(linkElement).toHaveTextContent('h');
  // expect(linkElement).toContainHTML('h1');
});

test('matches snapshot', () => {
 const tree= renderer.create(<App />).toJSON();
  // console.log(tree);
  expect(tree).toMatchSnapshot();
});