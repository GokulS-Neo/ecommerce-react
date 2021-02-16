
import { mount, shallow } from "enzyme";
import Login from "../Components/Login/Login";


describe('Testing Login Component', () => {
    test('BE-D2-Test5', () => {
        const wrapper = shallow(<Login />);   
        expect(wrapper.instance()).toBeDefined();
    })
});

