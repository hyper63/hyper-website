export async function get(req) {
  // clear session
  req.locals.logout = true;
  // redirect
  return {
    status: 302,
    headers: {
      location: "/admin",
    },
    body: "logging out!",
  };
}
