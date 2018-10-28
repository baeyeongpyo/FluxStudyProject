import AppDispatcher from './AppDispatcher';
import bankConstance from './constrants';
import {ReduceStore} from 'flux/utils';
import BankBalanceStore from './BankBalanceStore';

class BankRewardsStore extends ReduceStore{
    getInitialState(){
        return 'basic';
    }

    reduce(state, action){
        this.getDispatcher().waitFor([
            BankBalanceStore.getDispatchToken()
        ]);

        if ( action.type === bankConstance.DEPOSITED_INFO_ACCOUNT || action.type === bankConstance.WITHDREW_FROM_ACCOUNT ){
            let balance = BankBalanceStore.getState();
            if ( balance < 5000 ) return 'Basic';
            else if ( balance < 10000) return 'Silver';
            else if ( balance < 50000) return 'Gold';
            else return 'Platinum';
        }
        return state;
    }
}

export default new BankRewardsStore(AppDispatcher);

