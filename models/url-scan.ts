export interface UrlScanResponse {
  data: {
    id: string;
    type: string;
    links: {
      self: string;
      item: string;
    };
    attributes: {
      results: UrlScanResults;
      stats: {
        malicious: number;
        suspicious: number;
        undetected: number;
        harmless: number;
        timeout: number;
      };
      date: number;
      status: string;
    };
  };
  meta: {
    url_info: {
      id: string;
      url: string;
    };
  };
}

export interface UrlScanResultItem {
  method: string;
  engine_name: string;
  category: string;
  result: string;
}

export interface UrlScanStats {
  malicious: number;
  suspicious: number;
  undetected: number;
  harmless: number;
  timeout: number;
}

export interface UrlScanResults {
  [key: string]: UrlScanResultItem;
}
