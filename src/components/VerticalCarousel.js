import React, {Component} from 'react'

class VerticalCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeID: 0,
            wrapperStyle: {
                backgroundImage: `url('${this.props.data[0].img}')`
            },
            panelStyle: {
                background: this.props.data[0].colour
            },
            buttonHover: false,
            buttonStyle: {
                color: '#ffffff'
            }
        };
    }
    _changeActive(id) {
        this.setState({
            activeID: id,
            wrapperStyle: {
                backgroundImage: `url('${this.props.data[id].img}')`
            },
            panelStyle: {
                backgroundColor: this.props.data[id].colour
            }
        });
    }
    _buttonColour() {
        if(!this.state.buttonHover){
            this.setState({
                buttonHover: true,
                buttonStyle: {
                    color: this.props.data[this.state.activeID].colour
                }
            });
        } else {
            this.setState({
                buttonHover: false,
                buttonStyle: {
                    color: '#ffffff'
                }
            });
        }
    }



    render() {
        return (
            <section className="wrapper" style={this.state.wrapperStyle} onChange={this._changeSlideOverTime}>
                <Selectors
                    data={this.props.data}
                    activeID={this.state.activeID}
                    _changeActive={this._changeActive.bind(this)}
                />
                <Panel
                    data={this.props.data[this.state.activeID]}
                    panelStyle={this.state.panelStyle}
                    buttonStyle={this.state.buttonStyle}
                    _buttonColour={this._buttonColour.bind(this)}
                    activeID={this.state.activeID}
                />
            </section>
        );
    }
}
class Panel extends Component {

    downloadResume = () => {
        fetch('../files/resume.pdf')
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'resume';
                    a.click();
                });
                //window.location.href = response.url;
            });
    };

    render() {
        return (
            <aside className={'panel panel' + this.props.activeID} style={this.props.panelStyle}>
                <h2 className="panel-header">{this.props.data.header}</h2>
                <p className="panel-info">{this.props.data.body}</p>
                <button className="panel-button"
                        style={this.props.buttonStyle}
                        onMouseEnter={this.props._buttonColour}
                        onMouseLeave={this.props._buttonColour}
                        onClick={this.downloadResume}>
                    View <br/> my Resume
                </button>
            </aside>
        );
    }
}

class Selectors extends Component {
    _handleClick() {
        if (this.props.id !== this.props.activeID) {
            this.props._changeActive(this.props.id);
        }
    }
    render() {
        return (
            <div className="selectors">
                {this.props.data.map((item) =>
                    <Selector
                        key={item.id}
                        id={item.id}
                        _handleClick={this._handleClick}
                        _changeActive={this.props._changeActive}
                        activeID={this.props.activeID}
                    />
                )}
            </div>
        );
    }
}
class Selector extends Component {
    render() {
        let componentClass = 'selector';
        if (this.props.activeID === this.props.id) {
            componentClass = 'selector active';
        }
        return (
            <div className={componentClass} onClick={this.props._handleClick.bind(this)}></div>
        );
    }
}
export default VerticalCarousel

