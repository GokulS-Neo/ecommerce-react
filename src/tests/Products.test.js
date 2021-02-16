
import { mount, shallow } from "enzyme";
import Products from "../Components/Products/Products";


describe('Testing Products Component', () => {
    test('FE - D1', () => {
        const wrapper = shallow(<Products products={[]} />);   
        expect(wrapper.instance()).toBeDefined();
    })
});

