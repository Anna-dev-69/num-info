type Method = "POST" | "GET" | "DELETE " | "PUT";

interface IFetchData {
  url: string;
  method: Method;
  body?: any;
}

class HttpService {
  private baseUrl = process.env.REACT_APP_BASE_URL || "";

  private async fetchData({ url, method, body }: IFetchData) {
    const fullUrl = this.baseUrl + url;

    try {
      const response = await fetch(fullUrl, {
        method,
        headers: {
          Accept: "text/plain",
        },

        body: body ? JSON.stringify(body) : undefined,
      });

      console.log("Response status:", response.status);

      const data = await response.text();

      if (!response.ok) {
        const errorMsg = data || "Ошибка при выполнении запроса";
        alert(errorMsg);
        throw new Error(errorMsg);
      }

      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  get(url: string) {
    if (!url) throw new Error("URL не указан");
    return this.fetchData({ url, method: "GET" });
  }
}

export default HttpService;
