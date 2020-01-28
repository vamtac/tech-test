
import React from 'react';
import { connect } from "react-redux"
import Pin from "../modules/generate-pin";
import './generate.css';
import { startAddCombination } from "../actions/combinations"
import { Combination } from '../types/Combination';
import { bindActionCreators } from 'redux';
import { AppActions } from '../types/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../store/configureStore';


type Props = LinkDispatchProps & LinkStateProp;

export class Generate extends React.Component<Props, any>{
    render() {
        return (
            <div className="generatePinContent">
                <Pin parentCallback={this.getThePin} />
                <div className="pinButtons">
                    <button id="generateNewPin" >GENERATE</button>
                    <button onClick={() => this.onAdd()}>SAVE</button>
                </div>
            </div>
        );
    }
    onAdd = () => {
        if (this.state && this.state.message) {
            const combination: Combination = {
                pin: this.state.message
            }
            this.props.startAddCombination(combination)
        }
    }
    getThePin = (pin: Array<string>) => {
        this.setState({ message: pin })
    }

}

interface LinkStateProp {
    combinations: Combination[];
}
interface LinkDispatchProps {
    startAddCombination: (combination: Combination) => void;
}


const mapStateToProps = (state: AppState): LinkStateProp => ({
    combinations: state.combinations
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    startAddCombination: bindActionCreators(startAddCombination, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Generate);