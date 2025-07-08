import getApiUrl from "../utils/get-api-url";
import httpService from "./instance";

class NumberService {
  static async getNumberInfo(
    num: string | number,
    group: number,
    month?: number,
    day?: number
  ): Promise<any> {
    const url = getApiUrl(num, group, month, day);
    if (!url) return;

    return httpService.get(url);
  }

  static async getRandomNumber(itemName: string): Promise<any> {
    const url = `/random/${itemName}`;

    return httpService.get(url);
  }
}

export default NumberService;
