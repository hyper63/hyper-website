import { connect, createHyperVerify } from "hyper-connect";
const hyper = connect(process.env.HYPER);

export async function handleSignup(userId) {
  await hyper.queue.enqueue({ type: "START_SIGNUP_EMAIL_CAMPAIGN", userId });
  await hyper.queue.enqueue({ type: "UPDATE_CRM", userId });
}

export async function retryFailedJobs() {
  const { jobs: errored } = await hyper.queue.errors();
  const jobs = errored.map(({ job }) => job);
  await Promise.all(jobs.map((job) => hyper.queue.enqueue(job)));
  return jobs;
}

export async function findQueuedJobs() {
  const { jobs: queued } = await hyper.queue.queued();
  return queued.map(({ job }) => job);
}

// Your Queue Target Worker
const verifySignature = createHyperVerify(process.env.QUEUE_SECRET, "5m");
export async function checkAndProcessJob(signature, payload) {
  const { ok } = verifySignature(signature, payload);
  if (!ok) return { ok: false, status: 403, msg: "signature mismatch" };
  await processJob(payload);
}
