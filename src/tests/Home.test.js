import { mount } from "enzyme";
import Home from "../Components/Home/Home";

describe('Testing Home Component', () => {
    const wrapper = mount(<Home />);
    const wrapperInstance = wrapper.instance();
    
    test('FE-D1-Test4', () => {
        expect(wrapperInstance).toBeDefined();
    })

});
