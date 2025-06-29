import type { UrlScanResponse } from "~/models/url-scan";

export const maliciousResponse = {
    "data": {
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
          "CLEAN MX": {
            "category": "malicious",
            "result": "phishing",
            "method": "blacklist",
            "engine_name": "CLEAN MX"
          },
          "DNS8": {
            "category": "malicious",
            "result": "malware_domain",
            "method": "blacklist",
            "engine_name": "DNS8"
          },
          "Google Safebrowsing": {
            "category": "malicious",
            "result": "malware",
            "method": "blacklist",
            "engine_name": "Google Safebrowsing"
          },
          "Kaspersky": {
            "category": "malicious",
            "result": "trojan.downloader",
            "method": "blacklist",
            "engine_name": "Kaspersky"
          },
          "Malwarebytes": {
            "category": "malicious",
            "result": "ransomware",
            "method": "blacklist",
            "engine_name": "Malwarebytes"
          },
          "ESET": {
            "category": "malicious",
            "result": "Win32/TrojanDropper.Agent",
            "method": "blacklist",
            "engine_name": "ESET"
          },
          "Sophos": {
            "category": "malicious",
            "result": "Mal/Generic-S",
            "method": "blacklist",
            "engine_name": "Sophos"
          },
          "Fortinet": {
            "category": "malicious",
            "result": "W32/Agent.CQJ!tr",
            "method": "blacklist",
            "engine_name": "Fortinet"
          },
          "BitDefender": {
            "category": "malicious",
            "result": "Trojan.Agent.BT",
            "method": "blacklist",
            "engine_name": "BitDefender"
          },
          "DrWeb": {
            "category": "malicious",
            "result": "Trojan.DownLoader.12345",
            "method": "blacklist",
            "engine_name": "DrWeb"
          },
          "Norton": {
            "category": "malicious",
            "result": "Trojan.Gen.2",
            "method": "blacklist",
            "engine_name": "Norton"
          },
          "Avast": {
            "category": "malicious",
            "result": "Win32:Malware-gen",
            "method": "blacklist",
            "engine_name": "Avast"
          },
          "Comodo": {
            "category": "malicious",
            "result": "TrojWare.Win32.Trojan.Agent",
            "method": "blacklist",
            "engine_name": "Comodo"
          },
          "Palo Alto Networks": {
            "category": "malicious",
            "result": "malware",
            "method": "blacklist",
            "engine_name": "Palo Alto Networks"
          },
          "Webroot": {
            "category": "malicious",
            "result": "W32.Trojan.Gen",
            "method": "blacklist",
            "engine_name": "Webroot"
          },
          "McAfee": {
            "category": "malicious",
            "result": "Artemis!Trojan",
            "method": "blacklist",
            "engine_name": "McAfee"
          },
          "Cynet": {
            "category": "malicious",
            "result": "Malicious",
            "method": "blacklist",
            "engine_name": "Cynet"
          },
          "Cylance": {
            "category": "malicious",
            "result": "Unsafe",
            "method": "blacklist",
            "engine_name": "Cylance"
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
          },
          "Cisco Talos": {
            "category": "suspicious",
            "result": "suspicious",
            "method": "blacklist",
            "engine_name": "Cisco Talos"
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
                    "result": "Phish:Win32/PhishyPage.A",
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
                    "result": "HTML/Phishing.Agent",
                    "method": "blacklist",
                    "engine_name": "ESET"
                },
                "Kaspersky": {
                    "category": "malicious",
                    "result": "HEUR:Phishing.WebPage",
                    "method": "blacklist",
                    "engine_name": "Kaspersky"
                },
                "Sophos": {
                    "category": "malicious",
                    "result": "Phish/Generic-A",
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
                    "result": "URL:Phishing",
                    "method": "blacklist",
                    "engine_name": "Avast"
                },
                "BitDefender": {
                    "category": "malicious",
                    "result": "Phishing.Agent.BT",
                    "method": "blacklist",
                    "engine_name": "BitDefender"
                },
                "TrendMicro": {
                    "category": "malicious",
                    "result": "PHISH_GEN.R123C0D456",
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
          "result": "HEUR:Trojan-Downloader.Win32.Generic",
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
          "result": "Win32/Filecoder.Trojan",
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
          "result": "Trojan:Win32/Wacatac.B!ml",
          "method": "blacklist",
          "engine_name": "Microsoft"
        },
        "Avast": {
          "category": "malicious",
          "result": "Win64:MalwareX-gen [Trj]",
          "method": "blacklist",
          "engine_name": "Avast"
        },
        "BitDefender": {
          "category": "malicious",
          "result": "Trojan.Agent.BTZ",
          "method": "blacklist",
          "engine_name": "BitDefender"
        },
        "TrendMicro": {
          "category": "malicious",
          "result": "TROJ_GEN.R002C0D123",
          "method": "blacklist",
          "engine_name": "TrendMicro"
        },
        "CrowdStrike": {
          "category": "malicious",
          "result": "win/malicious_confidence_100%",
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
          "result": "Trojan.Inject.12345",
          "method": "blacklist",
          "engine_name": "DrWeb"
        },
        "McAfee": {
          "category": "malicious",
          "result": "Artemis!Trojan",
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