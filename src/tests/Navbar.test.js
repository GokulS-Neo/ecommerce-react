
import { mount, shallow } from "enzyme";
import Navbar from "../Components/Navbar/Navbar";

const setUp = () => {
    const component = mount(<Navbar />);
    const verifyLoginAddition = jest.fn();
    const addUserToDb = jest.fn();
    const addToCart = jest.fn();
}

let wrapper;
let componentInstance;
beforeEach(() => {
    wrapper = shallow(<Navbar />);
    componentInstance = wrapper.instance();
})  

describe('Testing Navbar Component', () => {
    test('FE-D1-Test7', () => {
        expect(wrapper.instance()).toBeDefined();
    })

});

