import { mount } from "enzyme";
import CartItem from "../Components/Cart/CartItem/CartItem";

describe('Testing Card Component', () => {
    const wrapper = mount(<CartItem item={{}} />);
    const wrapperInstance = wrapper.instance();
    
    test('FE - CartItem', () => {
        expect(wrapperInstance).toBeDefined();
    });

});
