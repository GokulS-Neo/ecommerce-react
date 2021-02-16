
import { mount, shallow } from "enzyme";
import Model from "../Components/Model/Model";


describe('Testing Model Component', () => {
    test('FE - Model', () => {
        const wrapper = shallow(<Model />);   
        expect(wrapper.instance()).toBeDefined();
    })
});


