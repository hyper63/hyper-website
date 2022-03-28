<script>
  import Input from "$lib/input.svelte";
  import Button from "$lib/button.svelte";

  import { PublicKey } from "@solana/web3.js";

  let disabled = false;

  function validateSolAddress(address) {
    try {
      let pubkey = new PublicKey(address);
      let isSolana = PublicKey.isOnCurve(pubkey.toBuffer());
      return isSolana;
    } catch (e) {
      return false;
    }
  }

  function submit(e) {
    disabled = true;
    if (validateSolAddress(e.target.address.value)) {
      // store wallet address for sending H63 Coin
    } else {
      alert("The address you entered is not a valid solana address, please try again.");
      e.target.address.value = "";
    }
    console.log(e.target.address.value);
    console.log("Valid Address", validateSolAddress(e.target.address.value));
  }
</script>

<main class="min-h-screen flex flex-col items-center justify-center mx-200">
  <img src="/logo.svg" class="rounded-full" />
  <h1>hyper coin</h1>
  <p class="mt-16 w-1/2">
    As a sponsor of the <a class="underline" href="https://opensource101.com">OpenSource 101</a> conference,
    team hyper is giving away 1 hyper coins to the first 800 OS101 participants. A hyper coin is a electronic
    social token on the Solana Blockchain, this token has no real value, but may be useful in the future
    for hyper service discounts.
  </p>
  <h3 class="mt-8">How do I get a hyper coin?</h3>
  <p class="mt-16 w-1/2">
    First, you need a solana wallet, if you do not have a wallet, register for one at <a
      href="https://phantom.app"
      target="_blank"
      class="underline">Phantom.app</a
    >, the phantom wallet is one of the most popular wallets on the Solana blockchain. Remember to
    write down your seed words and store them somewhere safe.
  </p>
  <p class="mt-16 w-1/2">
    Now that you have your solana wallet, lets get a hyper coin added to it.
  </p>
  <p class="mt-8 w-1/2">
    In your solana wallet, copy the public address and paste it in the form below and click the
    submit button.
  </p>
  <form class="w-1/2" on:submit|preventDefault={submit}>
    <div class="form-control">
      <label for="address" class="label">Address</label>
      <Input name="address" styles="w-full" />
    </div>
    <div class="mt-8">
      <Button type="submit" {disabled}>Submit</Button>
    </div>
  </form>
  <div class="mt-8">
    <a class="underline" href="https://dashboard.hyper.io">Give hyper a try!</a>
  </div>
</main>
