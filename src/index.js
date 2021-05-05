import Dash from "dash";

const client = new Dash.Client({
  network: "testnet",

  wallet: {
    mnemonic: null,

    offlineMode: true,
  },
});

const createWallet = async () => {
  const account = await client.getWalletAccount();

  const mnemonic = client.wallet.exportWallet();

  const address = account.getUnusedAddress();

  console.log("mnemonic", mnemonic);
  console.log("address", address);
};

createWallet()
  .catch((e) => console.error(e))
  .finally(() => client.disconnect());
