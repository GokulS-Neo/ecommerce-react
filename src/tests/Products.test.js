
import { mount, shallow } from "enzyme";
import Products from "../Components/Products/Products";


describe('Testing Products Component', () => {
    test('fe_d1_test9', () => {
        const wrapper = shallow(<Products products={[]} />);   
        expect(wrapper.instance()).toBeDefined();
    })
});

