
import { mount, shallow } from "enzyme";
import Login from "../Components/Login/Login";


describe('Testing Login Component', () => {
    test('BE - Login', () => {
        const wrapper = shallow(<Login />);   
        expect(wrapper.instance()).toBeDefined();
    })
});

