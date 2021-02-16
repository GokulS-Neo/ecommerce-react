
import { mount, shallow } from "enzyme";
import Products from "../Components/Products/Products";


describe('Testing Products Component', () => {
    test('FE - Products', () => {
        const wrapper = shallow(<Products products={[]} />);   
        expect(wrapper.instance()).toBeDefined();
    })
});

