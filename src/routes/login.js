const github = 'https://github.com/login/oauth/authorize'
const clientId = import.meta.env.VITE_CLIENT_ID

export async function get(req) {
  const sessionId = '1234'
  return {
    status: 302,
    headers: {
      location: `${github}?client_id=${clientId}&state=${sessionId}`
    },
    body: 'redirecting...'
  }
}