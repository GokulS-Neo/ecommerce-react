
import { mount, shallow } from "enzyme";
import Registration from "../Components/Registration/Registration";


describe('Testing Registration Component', () => {
    test('BE - D2 Test10', () => {
        const wrapper = shallow(<Registration />);   
        expect(wrapper.instance()).toBeDefined();
    })
});

