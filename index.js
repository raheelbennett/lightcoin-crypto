
class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
  this.transactions.forEach( transaction => {
    balance += transaction.value; // I am accessing the get value method from each of the transaction objects in the transactions array.
  })
   return balance;
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (!this.isAllowed ) {
      return `insufficinet funds `;
    }
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.transactions.push(this);
    return "Successful";
    }
  
}

class Withdrawal extends Transaction {
  
  get value () {
    return -this.amount
  }
 get isAllowed() {
    if(this.amount > this.account.balance){
      return false;
    } return true;
  }
  
}

class Deposit extends Transaction {

  get value () {
    return this.amount
  }
 get isAllowed() {
   return true; 
  }
  
}





// DRIVER CODE BELOW
// // We use the code below to "drive" the application logic above and make sure it's working as expected
// myAccount = new Account("snow-patrol");
// console.log('New Account:', myAccount);

// const t1 = new Withdrawal(50.25, myAccount);
// t1.commit();
// console.log('Transaction 1:', t1);

// const t2 = new Withdrawal(9.99, myAccount);
// t2.commit();
// console.log('Transaction 2:', t2);

// console.log('Balance:', myAccount.balance);

// const t3 = new Deposit(120.00, myAccount);
// t3.commit();
// console.log('Transaction 3:', t3);

// console.log("transactions", myAccount.transactions);
// // console.log(t2);
// console.log('Balance:', myAccount.balance);


// DRIVER CODE from solution file to test my code:
const myAccount = new Account("snow-patrol");

console.log('Starting Account Balance: ', myAccount.balance);

console.log('Attempting to withdraw even $1 should fail...');
const t1 = new Withdrawal(1.00, myAccount);
console.log('Commit result:', t1.commit());
console.log('Account Balance: ', myAccount.balance);

console.log('Depositing should succeed...');
const t2 = new Deposit(9.99, myAccount);
console.log('Commit result:', t2.commit());
console.log('Account Balance: ', myAccount.balance);

console.log('Withdrawal for 9.99 should be allowed...');
const t3 = new Withdrawal(9.99, myAccount);
console.log('Commit result:', t3.commit());

console.log('Ending Account Balance: ', myAccount.balance);
console.log("Lookings like I'm broke again");

console.log('Account Transaction History: ', myAccount.transactions);
