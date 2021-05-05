import Dash from "dash";

const client = new Dash.Client({
  network: "testnet",

  wallet: {
    mnemonic:
      "flip people atom run accuse hockey foster fruit exclude myth miracle echo",
    unsafeOptions: {
      skipSynchronizationBeforeHeight: 415000,
    },
  },
});

const sendFunds = async () => {
  const account = await client.getWalletAccount();

  const transaction = account.createTransaction({
    recipient: "yP8A3cbdxRtLRduy5mXDsBnJtMzHWs6ZXr",
    satoshis: (6.64759753 - 0.00000247) * 1e8,
  });

  return account.broadcastTransaction(transaction);
};

sendFunds()
  .then((res) => console.log("transation broadcasted", res))
  .catch((e) => console.error(e))
  .finally(() => client.disconnect());
