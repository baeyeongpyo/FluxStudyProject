import React, { Component } from "react";
import "./App.css";
import BankBalanceStore from "./BankBalanceStore";
import BankRewardsStore from "./BankRewardsStore";
import BankActions from "./BankActions";

class App extends Component {

  constructor() {
    super(...arguments);
    BankActions.createAccount();
    this.state = {
      balance : BankBalanceStore.getState(),
      rewardTier : BankRewardsStore.getState()
    }
  }

  componentDidMount() {
    this.storeSubscription = BankBalanceStore.addListener(data =>
      this.handleStoreChane(data)
    );
  }

  componentWillUnmount() {
    this.storeSubscription.remove();
  }

  handleStoreChane() {
    this.setState({ 
      balance: BankBalanceStore.getState(),
      rewardTier : BankRewardsStore.getState()
    });
  }

  deposit() {
    BankActions.depositIntoAccount(Number(this.refs.amount.value));
    this.refs.amount.value = '';
  }

  withdraw() {
    BankActions.withdrawFromAccount(Number(this.refs.amount.value));
    this.refs.amount.value = '';
  }
  render() {
    return (
      <div className="App">
        <header> Flux Trust Bank</header>
        <h1>Your Balance is ${(this.state.balance).toFixed(2)}</h1>
        <h2>Yout Points Reward Tier Is {(this.state.rewardTier)}</h2>
        <div className="atm">
          <input type="text" placeholder="Enter Amount" ref="amount" />
          <br />
          <button onClick={this.withdraw.bind(this)}> With Draw </button>
          <button onClick={this.deposit.bind(this)}> Deposit </button>
        </div>
      </div>
    );
  }
  
}

export default App;

