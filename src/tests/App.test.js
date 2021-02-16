import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../App';


describe('Testing App Component', () => {

  test('FE - D1 Test1', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance()).toBeDefined();
  })

})