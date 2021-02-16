
import { mount, shallow } from "enzyme";
import Registration from "../Components/Registration/Registration";


describe('Testing Registration Component', () => {
    test('be_d2_test10', () => {
        const wrapper = shallow(<Registration />);   
        expect(wrapper.instance()).toBeDefined();
    })
});

