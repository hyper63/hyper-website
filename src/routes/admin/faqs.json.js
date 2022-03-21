import fetch from "node-fetch";
import { token } from "$lib/config.js";
const url = "https://webcms-api.hyper.io/api/faqs";

export async function get() {
  // call api
  const faqs = await fetch(url)
    .then((r) => r.json())
    .then((r) => r.docs);
  return {
    body: faqs,
  };
}

export async function post({ body }) {
  console.log("faqs.json.js body", { body });
  const bearer = token();
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
    body: JSON.stringify(body),
  }).then((r) => r.json());

  return {
    body: result,
  };
}
