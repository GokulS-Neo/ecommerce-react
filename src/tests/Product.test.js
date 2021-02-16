
import { mount, shallow } from "enzyme";
import Product from "../Components/Products/Product/Product";


describe('Testing Product Component', () => {
    test('fe_d1_test8', () => {
        const wrapper = shallow(<Product product={{}}/>);   
        expect(wrapper.instance()).toBeDefined();
    })
});

