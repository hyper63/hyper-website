import { connect } from "hyper-connect";
import { PublicKey } from "@solana/web3.js";
import * as R from "ramda";

const { trim } = R;
const hyper = connect(import.meta.env.VITE_HYPER_TOKEN);

// test to see if wallet address is valid
function validateSolAddress(address) {
  try {
    let pubkey = new PublicKey(address);
    let isSolana = PublicKey.isOnCurve(pubkey.toBuffer());
    return isSolana;
  } catch (e) {
    return false;
  }
}

export async function post({ body }) {
  const address = trim(body.address);
  // check and make sure wallet is valid
  if (validateSolAddress(address)) {
    // set default response
    let result = { ok: true };
    // if valid, make sure it has not already been added.
    const doc = await hyper.data.get(address);
    // if doc does not exist then add wallet doc
    if (doc.ok === false) {
      result = await hyper.data.add({
        _id: address,
        type: "token",
        address,
        dropped: false,
        createdAt: new Date().toISOString(),
      });
    }
    return {
      body: result,
    };
  } else {
    // invalid wallet
    return {
      status: 500,
      body: { ok: false },
    };
  }
}
