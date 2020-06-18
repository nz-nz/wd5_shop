import React from 'react';
import * as ActionCreator from "../../../../../../store/action_creator";
import {connect} from "react-redux";

class Index extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            leftButtonX: '',
            leftButtonPosition: 0,
            leftButtonPrice: parseInt(this.props.priceMin),
            rightButtonX: '',
            rightButtonPosition: 100,
            rightButtonPrice: parseInt(this.props.priceMax),
            isReady: false,
        }
        this.componentRef = React.createRef();
    }

    handleEnter = (e) => {
        // console.log(e.screenX, "enter");
        switch (e.target.getAttribute("name")) {
            case "leftButton":
                this.setState({
                    leftButtonX: e.screenX,
                    isReady: true,
                })
                break;
            case "rightButton":
                this.setState({
                    rightButtonX: e.screenX,
                    isReady: true,
                })
                break;
            default:
                break;
        }
        // console.log(e.target.getAttribute("name"));
        if (!this.props.isFilterNotEmpty){
            this.setState({
                leftButtonPrice: parseInt(this.props.priceMin),
                rightButtonPrice: parseInt(this.props.priceMax),
                leftButtonPosition: 0,
                rightButtonPosition: 100,
            })
        }
        const {
            leftButtonPrice,
            rightButtonPrice,
        } = this.state;
        this.props.priceRangeFromWidgetAct([leftButtonPrice, rightButtonPrice]);

    };

    handleMove = (e) => {
        if (this.state.isReady === true) {
            const width = this.componentRef.current.offsetWidth;
            switch (e.target.getAttribute("name")) {
                case "leftButton":
                    // console.log(width);
                    // console.log(e.screenX, "move");

                    let shiftLeft = e.screenX - this.state.leftButtonX;
                    const newLeftX = this.state.leftButtonX + shiftLeft;
                    const newLeftButton = (shiftLeft/width*100) + this.state.leftButtonPosition;

                    let leftButtonPrice = parseInt(this.props.priceMin) + Math.round((this.props.priceMax - this.props.priceMin) * this.state.leftButtonPosition/100)
                    // console.log(newLeftButton, "newLeftBut")
                    // console.log(shiftLeft, "shift", newLeftX)

                    if (newLeftButton <= this.state.rightButtonPosition && this.state.leftButtonPosition >= 0) {
                        this.setState({
                            leftButtonX: newLeftX,
                            leftButtonPosition: newLeftButton,
                            leftButtonPrice
                        })
                    } else if (this.state.leftButtonPosition < 0) {
                        this.setState({
                            leftButtonPosition: 0,
                        })
                    }
                    break;
                case "rightButton":
                    // console.log(width);
                    // console.log(e.screenX, "move");

                    let shiftRight = e.screenX - this.state.rightButtonX;
                    const newRightX = this.state.rightButtonX + shiftRight
                    const newRightButton = (shiftRight/width*100) + this.state.rightButtonPosition
                    let rightButtonPrice = parseInt(this.props.priceMax) - Math.round((this.props.priceMax - this.props.priceMin) * (1 - this.state.rightButtonPosition/100))

                    // console.log(newRightButton, "newLeftBut")
                    // console.log(shiftRight, "shift", newRightX)

                    if (newRightButton >= this.state.leftButtonPosition && this.state.rightButtonPosition <=100) {
                        this.setState({
                            rightButtonX: newRightX,
                            rightButtonPosition: newRightButton,
                            rightButtonPrice
                        })
                    } else if (this.state.rightButtonPosition > 100) {
                        this.setState({
                            rightButtonPosition: 100,
                        })
                    }
                    break;
                default:
                    break

            }
        }
        // const {
        //     leftButtonPrice,
        //     rightButtonPrice,
        // } = this.state;
        // this.props.priceRangeFromWidgetAct([leftButtonPrice, rightButtonPrice]);
    };

    handleLeave = (e) => {
        this.setState({ isReady: false });
    }

    handleUp = (e) => {
        const {
            leftButtonPrice,
            rightButtonPrice,
        } = this.state;
        this.setState({ isReady: false });
        this.props.priceRangeFromWidgetAct([leftButtonPrice, rightButtonPrice]);
    };

    render() {
        const {
            priceMin,
            priceMax,
            isFilterNotEmpty,
    } = this.props;
        // console.log(isFilterNotEmpty);
        const {
            leftButtonPosition,
            leftButtonPrice,
            rightButtonPosition,
            rightButtonPrice,
        } = this.state;

        return (
            <div className="widget-desc" ref={ this.componentRef }>
                <div className="slider-range">
                    <div data-min={ priceMin } data-max={ priceMax } data-unit="$"
                         className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                         data-value-min={ priceMin } data-value-max={ priceMax } data-label-result="">
                        <div className="ui-slider-range ui-widget-header ui-corner-all"/>
                        <span name="leftButton" className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0"
                              style={ { left: `${ isFilterNotEmpty ? leftButtonPosition : 0 }%`, cursor: "pointer" } }
                              onMouseDown={ this.handleEnter }
                              onMouseMove={ this.handleMove }
                              onMouseLeave={ this.handleLeave }
                              onMouseUp={ this.handleUp }

                        />
                        <span name="rightButton" className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0"
                              style={ { left: `${ isFilterNotEmpty ? rightButtonPosition : 100 }%`, cursor: "pointer" } }
                              onMouseDown={ this.handleEnter }
                              onMouseMove={ this.handleMove }
                              onMouseLeave={ this.handleLeave }
                              onMouseUp={ this.handleUp }
                        />
                        <div className="ui-slider-range ui-corner-all ui-widget-header"
                             style={ {
                                 left: `${ isFilterNotEmpty ? leftButtonPosition : 0 }%`,
                                 width:`${ 100 - (isFilterNotEmpty ? leftButtonPosition : 0) - (100 - (isFilterNotEmpty ? rightButtonPosition : 100)) }%`,
                             } }/>
                    </div>
                    <div className="range-price">{ `$${ isFilterNotEmpty ? leftButtonPrice : priceMin } - $${ isFilterNotEmpty ? rightButtonPrice : priceMax }` }</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store
    }
}

const mapDispatchToProps = (dispatcher) => {
    return {
        priceRangeFromWidgetAct: (payload) => dispatcher(ActionCreator.priceRangeFromWidgetAct(payload)),
    }
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Index);
export default connected;