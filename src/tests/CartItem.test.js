import { mount } from "enzyme";
import CartItem from "../Components/Cart/CartItem/CartItem";

describe('Testing CardItem Component', () => {
    const wrapper = mount(<CartItem item={{}} />);
    const wrapperInstance = wrapper.instance();
    
    test('FE-D1-Test3', () => {
        expect(wrapperInstance).toBeDefined();
    });

});
