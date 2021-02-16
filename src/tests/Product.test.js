
import { mount, shallow } from "enzyme";
import Product from "../Components/Products/Product/Product";


describe('Testing Product Component', () => {
    test('FE - Product', () => {
        const wrapper = shallow(<Product product={{}}/>);   
        expect(wrapper.instance()).toBeDefined();
    })
});

