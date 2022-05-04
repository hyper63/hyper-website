import { connect } from "hyper-connect";
const hyper = connect(process.env.HYPER);

export async function updateAvatar(userId, stream) {
  await hyper.storage.upload(`${userId}-avatar.png`, stream);
  return stream;
}

export async function getAvatar(userId) {
  const stream = await hyper.storage.download(`${userId}-avatar.png`);
  return stream;
}
