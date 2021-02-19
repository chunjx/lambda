import React from 'react';
import lambda from './apis/lambda';

class App extends React.Component {

    componentDidMount = async () => {
        const response = await lambda.get('', {
            params: {
              
            }
        });
    };

    render(){
        return (
            <div>Hello!    </div>
        );
    };
};

export default App;

