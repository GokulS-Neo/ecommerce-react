
import { mount, shallow } from "enzyme";
import Registration from "../Components/Registration/Registration";


describe('Testing Registration Component', () => {
    test('FE - D2', () => {
        const wrapper = shallow(<Registration />);   
        expect(wrapper.instance()).toBeDefined();
    })
});

