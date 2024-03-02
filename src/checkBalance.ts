import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from '@solana/web3.js';

export const checkBalance = async (publicKeyString: string) => {
  const publicKey = new PublicKey(publicKeyString);

  const endpoint = clusterApiUrl('mainnet-beta');
  const connection = new Connection(endpoint, 'confirmed');

  const balanceInLamports = await connection.getBalance(publicKey);

  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(
    `💰The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
  );
};
