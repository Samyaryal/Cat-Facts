import React from 'react';
import renderer from 'react-test-renderer';

//snapshot Testing with Jest 
test('Title Component should be rendered', () => {
    const output = renderer
    .create(<div>
        <h1>Cat Fact</h1>
        <img alt="cat-fact" />
        <p>Here are somee intersting facts about cat</p>
        </div>)
        .toJSON();
        expect(output).toMatchSnapshot();
})

//if testing has to be done with teesting library of React "@testing-library/jest-dom/extend-expect" it can 
// done in below mentioned ways. 

//import '@testing-library/jest-dom/extend-expect';
// import {render} from '@testing-library/react';
// import {prettyDOM} from '@testing-library/dom';

// test('renders the Title with react testing library', () => {
//     const cat = {
//         h1: 'Cat Fact',
//         para: 'Here are somee intersting facts about cat'
//     }
//     const component = render(
//         <Title  container ={cat}/>
//     )
//     expect(component.container).toHaveTextContent('Cat Fact')
// })


// test ('renders Heading', () => {
//     const cat ={
//         h1: 'Cat fact',
//         para: 'Here are somee intersting facts about cat'
//     }
//     const component = render (
//         <Title containeer ={cat} />
//     )
//     const p = component.container.querySelector('p')
// })