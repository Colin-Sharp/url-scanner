import type { UrlScanResponse } from "~/models/url-scan";

export const phishingResponse = {
    data: {
        "type": "analysis",
        "id": "u-afeb8a5f7b5a6f1547b9f3a2c7e8d9b3-1234567890",
        "links": {
            "self": "https://www.virustotal.com/api/v3/analyses/u-afeb8a5f7b5a6f1547b9f3a2c7e8d9b3-1234567890",
            "item": "https://www.virustotal.com/api/v3/urls/u-afeb8a5f7b5a6f1547b9f3a2c7e8d9b3"
        },
        "attributes": {
            "date": 1678901234,
            "status": "completed",
            "stats": {
                "harmless": 12,
                "malicious": 18,
                "suspicious": 3,
                "undetected": 7,
                "timeout": 0
            },
            "results": {
                "Google Safebrowsing": {
                    "category": "malicious",
                    "result": "phishing",
                    "method": "blacklist",
                    "engine_name": "Google Safebrowsing"
                },
                "Microsoft": {
                    "category": "malicious",
                    "result": "Phishing",
                    "method": "blacklist",
                    "engine_name": "Microsoft"
                },
                "CLEAN MX": {
                    "category": "malicious",
                    "result": "phishing",
                    "method": "blacklist",
                    "engine_name": "CLEAN MX"
                },
                "PhishLabs": {
                    "category": "malicious",
                    "result": "phishing",
                    "method": "blacklist",
                    "engine_name": "PhishLabs"
                },
                "OpenPhish": {
                    "category": "malicious",
                    "result": "phishing",
                    "method": "blacklist",
                    "engine_name": "OpenPhish"
                },
                "Forcepoint": {
                    "category": "malicious",
                    "result": "phishing",
                    "method": "blacklist",
                    "engine_name": "Forcepoint"
                },
                "ESET": {
                    "category": "malicious",
                    "result": "Phishing",
                    "method": "blacklist",
                    "engine_name": "ESET"
                },
                "Kaspersky": {
                    "category": "malicious",
                    "result": "Phishing",
                    "method": "blacklist",
                    "engine_name": "Kaspersky"
                },
                "Sophos": {
                    "category": "malicious",
                    "result": "Phishing",
                    "method": "blacklist",
                    "engine_name": "Sophos"
                },
                "Malwarebytes": {
                    "category": "malicious",
                    "result": "Phishing",
                    "method": "blacklist",
                    "engine_name": "Malwarebytes"
                },
                "Avast": {
                    "category": "malicious",
                    "result": "Phishing",
                    "method": "blacklist",
                    "engine_name": "Avast"
                },
                "BitDefender": {
                    "category": "malicious",
                    "result": "Phishing",
                    "method": "blacklist",
                    "engine_name": "BitDefender"
                },
                "TrendMicro": {
                    "category": "malicious",
                    "result": "Phishing",
                    "method": "blacklist",
                    "engine_name": "TrendMicro"
                },
                "Cisco": {
                    "category": "malicious",
                    "result": "phishing",
                    "method": "blacklist",
                    "engine_name": "Cisco"
                },
                "Palo Alto Networks": {
                    "category": "malicious",
                    "result": "phishing",
                    "method": "blacklist",
                    "engine_name": "Palo Alto Networks"
                },
                "Trustwave": {
                    "category": "harmless",
                    "result": "clean",
                    "method": "blacklist",
                    "engine_name": "Trustwave"
                },
                "VIPRE": {
                    "category": "harmless",
                    "result": "clean",
                    "method": "blacklist",
                    "engine_name": "VIPRE"
                },
                "Comodo": {
                    "category": "suspicious",
                    "result": "suspicious",
                    "method": "blacklist",
                    "engine_name": "Comodo"
                }
            }
        }
    },
    meta: {
        url_info: {
            id: "u-afeb8a5f7b5a6f1547b9f3a2c7e8d9b3",
            url: "https://phishing.testing.google.test"
        }
    }
} as UrlScanResponse;

export const malwareResponse = {
  "data": {
    "type": "analysis",
    "id": "u-malware1234567890abcdef1234567890-987654321",
    "links": {
      "self": "https://www.virustotal.com/api/v3/analyses/u-malware1234567890abcdef1234567890-987654321",
      "item": "https://www.virustotal.com/api/v3/urls/u-malware1234567890abcdef1234567890"
    },
    "attributes": {
      "date": 1678912345,
      "status": "completed",
      "stats": {
        "harmless": 8,
        "malicious": 22,
        "suspicious": 4,
        "undetected": 6,
        "timeout": 0
      },
      "results": {
        "Kaspersky": {
          "category": "malicious",
          "result": "Malware",
          "method": "blacklist",
          "engine_name": "Kaspersky"
        },
        "Malwarebytes": {
          "category": "malicious",
          "result": "Malware.AI.1234",
          "method": "blacklist",
          "engine_name": "Malwarebytes"
        },
        "ESET": {
          "category": "malicious",
          "result": "Malware",
          "method": "blacklist",
          "engine_name": "ESET"
        },
        "Sophos": {
          "category": "malicious",
          "result": "Mal/Generic-R",
          "method": "blacklist",
          "engine_name": "Sophos"
        },
        "Microsoft": {
          "category": "malicious",
          "result": "Malware",
          "method": "blacklist",
          "engine_name": "Microsoft"
        },
        "Avast": {
          "category": "malicious",
          "result": "Malware",
          "method": "blacklist",
          "engine_name": "Avast"
        },
        "BitDefender": {
          "category": "malicious",
          "result": "Malware",
          "method": "blacklist",
          "engine_name": "BitDefender"
        },
        "TrendMicro": {
          "category": "malicious",
          "result": "Malware",
          "method": "blacklist",
          "engine_name": "TrendMicro"
        },
        "CrowdStrike": {
          "category": "malicious",
          "result": "Malware",
          "method": "blacklist",
          "engine_name": "CrowdStrike"
        },
        "Cisco": {
          "category": "malicious",
          "result": "malware",
          "method": "blacklist",
          "engine_name": "Cisco"
        },
        "Google Safebrowsing": {
          "category": "malicious",
          "result": "malware",
          "method": "blacklist",
          "engine_name": "Google Safebrowsing"
        },
        "Palo Alto Networks": {
          "category": "malicious",
          "result": "malware",
          "method": "blacklist",
          "engine_name": "Palo Alto Networks"
        },
        "DrWeb": {
          "category": "malicious",
          "result": "Malware",
          "method": "blacklist",
          "engine_name": "DrWeb"
        },
        "McAfee": {
          "category": "malicious",
          "result": "Malware",
          "method": "blacklist",
          "engine_name": "McAfee"
        },
        "VIPRE": {
          "category": "harmless",
          "result": "clean",
          "method": "blacklist",
          "engine_name": "VIPRE"
        },
        "Trustwave": {
          "category": "harmless",
          "result": "clean",
          "method": "blacklist",
          "engine_name": "Trustwave"
        }
      }
    }
  },
  meta: {
    url_info: {
        id: "u-afeb8a5f7b5a6f1547b9f3a2c7e8d9b3",
        url: "https://malware.testing.google.test"
    }
}
} as UrlScanResponse;