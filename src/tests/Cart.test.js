import { mount, shallow } from "enzyme";
import Cart from "../Components/Cart/Cart";

const InitialProps = {
    cart : [],
    updateCartsData : jest.fn(),
    updateCartLength : 0,
    credentials : {
        authenticated : false,
        username : '',
        password : ''
    }
}


describe('Testing Card Component', () => {
    const wrapper = shallow(<Cart {...InitialProps}/>);
    const wrapperInstance = wrapper.instance();
    
    test('FE - D1', () => {
        expect(wrapperInstance).toBeDefined();
    })

});
