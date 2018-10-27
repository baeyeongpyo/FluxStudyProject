import AppDispatcher from './AppDispatcher';
import backConstants from './constrants';

let BackActions = {
    createAccount(){
        AppDispatcher.dispatch({
            type : backConstants.CREATE_ACCOUNT,
            amount : 0
        });
    },
    depositIntoAccount(amount){
        AppDispatcher.dispatch({
            type : backConstants.DEPOSITED_INFO_ACCOUNT,
            amount: amount
        });
    },
    withdrawFromAccount(amount){
        AppDispatcher.dispatch({
            type : backConstants.WITHDREW_FROM_ACCOUNT,
            amount : amount
        });
    }
};

export default BackActions;