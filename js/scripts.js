'use strict';

// Sample
const account1 = {
  owner: 'Febby Gunawan',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Mai lisa',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Felisha',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Hailey',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements) {
  //empty container before displaying movement
  containerMovements.innerHTML = ''
  
  movements.forEach(function (mov,i) {
    //check for movemement type
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `<div class="movements__row">  
    <div class="movements__type movements__type--${type}">${type}</div>
    <div class="movements__date">TBU</div>
    <div class="movements__value">${mov}</div>
  </div>`
   containerMovements.insertAdjacentHTML('afterbegin', html)
  });

  //Deposits

const deposits = movements.filter(function (mov) {
  return mov > 0;
})

console.log("This is the movements: "+ movements);
console.log("This is the deposits: "+ deposits);

const depositsFor = [];

for (const mov of movements ) if (mov > 0) depositsFor.push(mov);

console.log("Deposits for: " + depositsFor)

// Withdrawals

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
})

console.log("Withdrawals -> "+ withdrawals)

const withdrawalsFor = []

for (const mov of movements) if(mov < 0) withdrawalsFor.push(mov)

console.log("Withdrawals for -> " + withdrawalsFor)



}


displayMovement(account1.movements)

const calcDisplayBalance= function(movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${balance} EUR`
  
}


const createUsernames = function (accs) {
  accs.forEach(function(acc){
      acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  })
  
}
createUsernames(accounts);

console.log('This are the accounts: ' + accounts)

calcDisplayBalance(account1.movements)

//reduce 



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

