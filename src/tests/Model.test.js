
import { mount, shallow } from "enzyme";
import Model from "../Components/Model/Model";


describe('Testing Model Component', () => {
    test('fe_d1_test6', () => {
        const wrapper = shallow(<Model />);   
        expect(wrapper.instance()).toBeDefined();
    })
});


