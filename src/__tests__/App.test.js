import React from 'react';
import App from '../App';
import { shallow, mount } from 'enzyme';
import Title from '../components/Title';

import Spinner from '../components/Spinner';
import Form from '../components/Form';


it('App should render without crashing', () => {
    shallow(<App />)
})
it('Form should render without crashing', () => {
    shallow(<Form />)
})
it('Spinner should render without crashing', () => {
    shallow(<Spinner />)
})

it('Title should render without crashing', () => {
  shallow(<Title />)
})

// it('should update form submitted state with button click', () => {
//   const component = mount(<Form />);
//   component
//     .find('button.check')
//     .simulate('click');
 
//   expect(component.state('number')).toEqual(true);
//   component.unmount();
//  });
 
 


// it("App should render 'Here are interesting facts about cat'", ()=> {
//   const title = shallow (<Title />)
//   const paragraph = <h1>Cat Fact</h1>

//   expect(title.contains(paragraph)).toEqual(false);
// })

//simulating Events

// function Fixture(){
//     return (
//         <div>
//            <input id="checked" defaultChecked />
//            <input id ="not" defaultChecked={false} />
//            <input id ="tertiary" defaultChecked checked = {false} />
//         </div>
//     );
// }


