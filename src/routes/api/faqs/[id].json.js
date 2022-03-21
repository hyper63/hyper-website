import { token } from "$lib/config.js";
import fetch from "node-fetch";

const url = "https://webcms-api.hyper.io/api/faqs";

export async function get({ params }) {
  const bearer = token();
  const faq = await fetch(url + "/" + params.id, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${bearer}`,
    },
  }).then((r) => r.json());
  return {
    body: faq,
  };
}

export async function put({ params, body }) {
  const bearer = token();
  const result = await fetch(`${url}/${params.id}`, {
    method: "PUT",
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

export async function del({ params }) {
  const bearer = token();

  const result = await fetch(`${url}/${params.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
  }).then((r) => r.json());

  return {
    body: result,
  };
}
