import React from 'react';
import { connect } from "react-redux"
import { Combination } from '../types/Combination';
import { AppActions } from '../types/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../store/configureStore';
import { startEditCombination } from "../actions/combinations";
import { startRemoveCombination} from "../actions/combinations";
import { bindActionCreators } from 'redux';
import './saved.css';

type Props = LinkDispatchProps & LinkStateProp;

export class Saved extends React.Component<Props, any>{
    
    render() {
        return (
            <div className="savedPinContent">
                {this.props.combinations.map(
                    pinCombination => {
                        return <div className="pinGroupInfo">
                            <input type="text" value={pinCombination.name} onChange={(e: React.FormEvent<HTMLInputElement>) => this.handleChange(e, pinCombination)} />
                            {pinCombination.pin.map((pinElement: string) => { return <li className="pin">{pinElement}</li> })}
                            <button className="deletePin" onClick={()=>this.props.startRemoveCombination(pinCombination.id!)}>DELETE</button>
                        </div>
                    })}
            </div>
        );
    }
    handleChange(e:React.FormEvent<HTMLInputElement>, pinCombination:Combination) {
        const target = e.target as HTMLTextAreaElement;
        pinCombination.name = target.value;
        this.props.startEditCombination(pinCombination)
    }

}
    
interface LinkStateProp {
    combinations: Combination[];
}
interface LinkDispatchProps{
    startEditCombination: (combination: Combination) => void;
    startRemoveCombination: (id:string) => void;
}


const mapStateToProps = (state: AppState): LinkStateProp => ({
    combinations: state.combinations
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps=> ({
    startEditCombination: bindActionCreators(startEditCombination, dispatch),
    startRemoveCombination: bindActionCreators(startRemoveCombination, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Saved);