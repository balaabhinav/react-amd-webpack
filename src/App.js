// const React = require('react');
// const createClass = require('create-react-class');
define(['react', 'create-react-class'], function(React, createClass){
    const SomeComp = function(props){
        return props.data.map(function(d, key){
            return React.createElement('h1', {key : key}, d);
        })
    }
    const App = createClass({
            render : function(){
                let a = ["My first react element", "My second react element"]
                return (
                        <div>
                            <SomeComp data={ a } />
                        </div>
                    )
            }
        })

    return App;

})