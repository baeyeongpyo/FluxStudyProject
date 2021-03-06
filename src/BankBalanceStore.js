import AppDispatcher from './AppDispatcher';
import bankConstants from './constrants';
import {ReduceStore} from 'flux/utils';

class BankBalanceStore extends ReduceStore{
    getInitialState(){
        return 0;
    }

    reduce(state, action){
        switch(action.type){
            case bankConstants.CREATE_ACCOUNT:
            return 0;

            case bankConstants.DEPOSITED_INFO_ACCOUNT:
            return state + action.amount;

            case bankConstants.WITHDREW_FROM_ACCOUNT:
            return state - action.amount;

            default:
        }
    }
}
export default new BankBalanceStore(AppDispatcher);



/* import AppDispatcher from './AppDispatcher';
import {Store} from 'flux/utils';
import bankConstants from './constrants';

let balance = 0;

class BankBalanceStore extends Store{
    getState(){
        return balance;
    }

    __onDispatch(action){
        switch(action.type){
            case bankConstants.CREATE_ACCOUNT:
            balance = 0;
            this.__emitChange();
            break;

            case bankConstants.DEPOSITED_INFO_ACCOUNT:
            balance = balance + action.amount;
            this.__emitChange();
            break;

            case bankConstants.WITHDREW_FROM_ACCOUNT:
            balance = balance - action.amount;
            this.__emitChange();
            break;

            default:
        
        }
    }
}

export default new BankBalanceStore(AppDispatcher);
 */



/* import {EventEmitter} from 'fbemitter';
import AppDispatcher from './AppDispatcher';
import bankConstants from './constrants';

const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let balance = 0;

let BankBalanceStore = {
    addListener : (callback) => {
        return __emitter.addListener(CHANGE_EVENT, callback)
    },
    getState(){
        return balance;
    }
};

BankBalanceStore.dispatchToken = AppDispatcher.register((action) => {
    switch(action.type){
        case bankConstants.CREATE_ACCOUNT:
        balance = 0;
        __emitter.emit(CHANGE_EVENT);
        break;

        case bankConstants.DEPOSITED_INFO_ACCOUNT:
        balance = balance + action.amount;
        __emitter.emit(CHANGE_EVENT);
        break;

        case bankConstants.WITHDREW_FROM_ACCOUNT:
        balance = balance - action.amount;
        __emitter.emit(CHANGE_EVENT);
        break;

        default:
    }
});

export default BankBalanceStore; */