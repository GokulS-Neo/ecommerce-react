
import { mount, shallow } from "enzyme";
import Login from "../Components/Login/Login";


describe('Testing Login Component', () => {
    test('FE - D2', () => {
        const wrapper = shallow(<Login />);   
        expect(wrapper.instance()).toBeDefined();
    })
});

