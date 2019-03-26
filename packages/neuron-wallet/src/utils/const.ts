export enum Channel {
  SetLanguage = 'setLanguage',
  GetTipBlockNumber = 'getTipBlockNumber',

  DeleteWallet = 'deleteWallet',
  EditWallet = 'editWallet',
  SwitchWallet = 'switchWallet',
  GetBalance = 'getBalance',
  GetTransactions = 'getTransactions',
  CheckWalletPassword = 'checkWalletPassword',
  GetWallets = 'getWallets',
  SendCapacity = 'sendCapacity',
  NavTo = 'navTo',
  Terminal = 'terminal',
  Networks = 'networks',
  Wallet = 'wallet',
  Transactions = 'transactions',
}

export default {
  Channel,
}
