const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const login = async (credentials) => {
  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return { ...data, status: response.status };
};

export const createUser = async (credentials) => {
  try {
    const response = await fetch(`${apiUrl}/registerUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    return await { status: response.status, message: data.message };
  } catch (err) {
    console.error("Error in createUser:", err);
  }
};

export const auth = { login, createUser };
