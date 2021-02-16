import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../App';


describe('Testing App Component', () => {

  test('fe_d1_test1', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance()).toBeDefined();
  })

})