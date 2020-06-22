import axios from "axios";

// url の宣言
const apiUrl = "https://myy0zik5ri.execute-api.us-east-1.amazonaws.com/v3";

// カスタムヘッダー(必要に応じて)
const headers = {
  'Accept': "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
};

export default axios.create({
  baseURL: apiUrl,
  headers: headers,
  responseType: "json",
});
