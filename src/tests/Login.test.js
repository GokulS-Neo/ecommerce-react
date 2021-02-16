
import { mount, shallow } from "enzyme";
import Login from "../Components/Login/Login";


describe('Testing Login Component', () => {
    test('be_d2_test5', () => {
        const wrapper = shallow(<Login />);   
        expect(wrapper.instance()).toBeDefined();
    })
});

