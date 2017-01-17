var React = require('react');
var CodeMirror = require('react-codemirror');

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

var defaults = {
    markdown: '# Heading',
    javascript: '//code'
};

var CodeMirrorEditor = React.createClass({
    getInitialState: function () {
        return {
            code: defaults.markdown,
            mode: 'markdown'
        }
    },
    updateCode: function (newCode) {
        this.setState({
            code: newCode
        })
    },
    changeMode: function (e) {
        var mode = e.target.value;
        this.setState({
            mode: mode,
            code: defaults[mode]
        });
    },
    render: function () {
        var options = {
            lineNumbers: true
        };

        return (
            <div className="container">
                <div className="container jumbotron">
                    <h3>Code Mirror Online Code Editor</h3>
                    <h5>For those lil code snippets that need work when on the go!</h5>
                </div>
                <div style={{border: '1px solid lightgray'}}>
                    <CodeMirror value={this.state.code} onChange={this.updateCode} options={options}/>
                </div>
                <div style={{marginTop: 10}}>
                    <select onChange={this.changeMode} value={this.state.mode}>
                        <option value="markdown">Markdown</option>
                        <option value="javascript">JavaScript</option>
                    </select>
                </div>
            </div>
        )
    }
});

module.exports = CodeMirrorEditor;