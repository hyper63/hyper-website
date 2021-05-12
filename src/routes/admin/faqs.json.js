import fetch from 'node-fetch'

export async function get() {
  // call api
  const faqs = await fetch('https://webcms-api.hyper.io/api/faqs').then(r => r.json())
    .then(r => r.docs)
  return {
    body: faqs
  }
}