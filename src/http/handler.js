import Cookies from "js-cookie";

const API_BASE_URL ="https://flask-test-5dde.onrender.com/";
const API_USER_URL = `${API_BASE_URL}/api/users`;
const API_PRODUCT_URL = `${API_BASE_URL}/api/products`;
const API_LOGIN_URL = `${API_BASE_URL}/login`;
const API_REGISTER_URL = `${API_BASE_URL}/register`;
const API_STRIPE_URL = API_BASE_URL;

export function HttpHandler() {
  function getToken() {
    const access_token = Cookies.get("access_token");
    if (access_token) {
      return `Bearer ${access_token}`;
    } else {
      return "";
    }
  }

  const contentType = {
    "Content-Type": "application/json",
  };

  async function getUser() {
    const response = await fetch(API_USER_URL, {
      method: "GET",
    });
    return await response.json();
  }

  async function getUserById(id) {
    const response = await fetch(`${API_USER_URL}/${id}`, {
      method: "GET",
    });
    return await response.json();
  }

  async function postUser(payload) {
    const response = await fetch(API_USER_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: contentType,
    });
    return await response.json();
  }

  async function putUserById(id, payload) {
    const response = await fetch(`${API_USER_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: contentType,
    });
  }

  async function deleteUserById(id) {
    const response = await fetch(`${API_USER_URL}/${id}`, {
      method: "DELETE",
      headers: contentType,
    });

    return response.status === 200 ? true : false;
  }

  async function getProduct() {
    const response = await fetch(API_PRODUCT_URL, {
      method: "GET",
    });
    return await response.json();
  }

  async function getProductById(id) {
    const response = await fetch(`${API_PRODUCT_URL}/${id}`, {
      method: "GET",
    });
    return await response.json();
  }

  async function postProduct(payload) {
    const response = await fetch(API_PRODUCT_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();
    if (response.ok) {
      return jsonResponse;
    } else {
      console.error(
        `Request failed with status ${response.status}: ${jsonResponse.message}`
      );
    }
  }

  async function putProductById(id, payload) {
    try {
      const response = await fetch(`${API_PRODUCT_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: contentType,
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async function deleteProductById(id) {
    const response = await fetch(`${API_PRODUCT_URL}/${id}`, {
      method: "DELETE",
      headers: contentType,
    });

    return response.status === 200 ? true : false;
  }

  async function register(email, password) {
    try {
      const response = await fetch(API_REGISTER_URL, {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: contentType,
      });

      const data = await response.json();

      if (response.ok) {
        Cookies.set("access_token", data.access_token, { expires: 1 });
      }

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async function login(email, password) {
    try {
      const response = await fetch(API_LOGIN_URL, {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: contentType,
      });

      const data = await response.json();

      if (response.ok) {
        Cookies.set("access_token", data.access_token, { expires: 1 });
      }

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async function postStripePayment(payload) {
    const response = await fetch(`${API_STRIPE_URL}/api/stripe`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
    });
    return await response.json();
  }

  async function postShoppingProduct(payload) {
    const response = await fetch(`${API_STRIPE_URL}/api/purchases`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
    });
    return await response.json();
  }

  return {
    getUser,
    getUserById,
    postUser,
    putUserById,
    deleteUserById,
    getProduct,
    getProductById,
    postProduct,
    putProductById,
    deleteProductById,
    login,
    register,
    postStripePayment,
    postShoppingProduct,
  };
}
