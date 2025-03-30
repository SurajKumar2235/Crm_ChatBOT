
# Scoring Rules API

Zoho CRM provides a system for ranking different records in a module governed by rules that you define based on your specific needs. A record's scoring is a value calculated based on the rules. With this feature, the system assists you in locating the most valuable records.

Multiple scoring rules are not supported in the Standard and Professional editions. Other higher editions allow for 5 active rules for each layout and 5 rules that can run across all layouts. The limitations for various editions are listed below.

#### Supported Editions and Limits:

| Edition | Multiple Layout Support | Active Rules per Module | Total Rules per Module | Number of Criteria per Rule |
| --- | --- | --- | --- | --- |
| Standard (S) | NO | 1 | 1 | 10 |
| ZohoOne Standard (Y) | NO | 1 | 1 | 10 |
| Professional (P, R) | NO | 1 | 1 | 20 |
| Developer (D) | YES - 2 layouts | 15 | 30 | 5 |
| Enterprise (E, A) | YES - 4 layouts | 25 | 50 | 30 |
| ZohoOne Enterprise (Z) | YES - 4 layouts | 25 | 50 | 30 |
| CrmPlus (C) | YES - 7 layouts | 40 | 80 | 50 |
| Ultimate (U) | YES - 7 layouts | 40 | 80 | 50 |

Refer to [Multiple Scoring Rules](https://help.zoho.com/portal/en/kb/crm/automate-business-processes/scoring-rules/articles/multiple-scoring-rule) to learn more about scoring rules.

### Scoring Rules API

#### Purpose

To get the list of scoring rules defined for the organization.

#### Endpoints

[GET /settings/automation/scoring\_rules](https://www.zoho.com/crm/developer/docs/api/v7/scoring-rules.html)

[GET /settings/automation/scoring\_rules/{rule\_id}](https://www.zoho.com/crm/developer/docs/api/v7/scoring-rules.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/automation/scoring\_rules

**To get a specific scoring rule:**

{api-domain}/crm/{version}/settings/automation/scoring\_rules/{rule\_id}

#### Supported modules

Leads, Accounts, Contacts, Deals and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.scoring\_rules.ALL

(or)

scope=ZohoCRM.settings.scoring\_rules.{operation\_type}

#### Possible operation types

ALL - Full access to scoring rules

READ - Get scoring rules

#### Parameters

- modulestring, optional



To get the scoring rules for the specific module.

- layout\_idstring, optional



To get the scoring rules for the specific layout.

- activeboolean, optional



To specify whether to fetch active or inactive scoring rules.

- namestring, optional



Specify the name of the scoring rule to be fetched.

- pagenumber, optional



To get the list of records from the respective pages.

- per\_pagenumber, optional



To get the list of records available per page.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/automation/scoring_rules/4876876000000945002"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X GET
```

#### Response JSON Keys

- layoutJSON object



Represents the layout the rule is associated with.

- created\_timestring



Represents the date and time at which the current rule was created.

- modified\_timestring



Represents the date and time at which the current rule was last modified.

- field\_rulesJSON array



Represents the field rules defined.

- scorenumber



Represents the score assigned for the specific rule.

- criteriaJSON object



Represents the rule criteria details.

- idstring



Represents the unique id of the scoring rule.

- moduleJSON object



Represents the module the scoring rule is defined for.

- namestring



Represents the unique name of the current scoring rule.

- modified\_byJSON object



Represents the name and ID of the user who modified the current scoring rule.

- activeBoolean



Represents whether the current scoring rule is active or not.

- descriptionstring



Represents the description of the current rule.

- signal\_rulesJSON array



Represents the signal rules defined.

- signalJSON object



Represents the id and namespace of the signal.

- created\_byJSON object



Represents the name and ID of the user who created the rule.


#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.scoring\_rules.READ scope. Create a new client with valid scope. Refer to scope section above for more details.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read scoring rules data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.


#### Sample Response

``` json
Copied{
    "scoring_rules": [\
        {\
            "layout": {\
                "api_name": "Standard",\
                "id": "4876876000000091055"\
            },\
            "created_time": "2022-04-06T15:19:51+05:30",\
            "modified_time": "2022-04-06T16:56:04+05:30",\
            "field_rules": [\
                {\
                    "score": 10,\
                    "criteria": {\
                        "group_operator": "AND",\
                        "group": [\
                            {\
                                "group_operator": "AND",\
                                "group": [\
                                    {\
                                        "comparator": "equal",\
                                        "field": {\
                                            "api_name": "Company",\
                                            "id": "4876876000000002591"\
                                        },\
                                        "value": "Zoho"\
                                    },\
                                    {\
                                        "comparator": "equal",\
                                        "field": {\
                                            "api_name": "Phone",\
                                            "id": "4876876000000002601"\
                                        },\
                                        "value": "123456890"\
                                    }\
                                ]\
                            },\
                            {\
                                "comparator": "equal",\
                                "field": {\
                                    "api_name": "Designation",\
                                    "id": "4876876000000002597"\
                                },\
                                "value": "review"\
                            }\
                        ]\
                    },\
                    "id": "4876876000000945003"\
                },\
                {\
                    "score": 10,\
                    "criteria": {\
                        "group_operator": "AND",\
                        "group": [\
                            {\
                                "group_operator": "AND",\
                                "group": [\
                                    {\
                                        "comparator": "contains",\
                                        "field": {\
                                            "api_name": "Company",\
                                            "id": "4876876000000002591"\
                                        },\
                                        "value": "Zoho"\
                                    },\
                                    {\
                                        "comparator": "equal",\
                                        "field": {\
                                            "api_name": "Phone",\
                                            "id": "4876876000000002601"\
                                        },\
                                        "value": "123456890"\
                                    }\
                                ]\
                            },\
                            {\
                                "comparator": "equal",\
                                "field": {\
                                    "api_name": "Designation",\
                                    "id": "4876876000000002597"\
                                },\
                                "value": "review"\
                            }\
                        ]\
                    },\
                    "id": "4876876000000945014"\
                }\
            ],\
            "module": {\
                "api_name": "Leads",\
                "id": "4876876000000002175"\
            },\
            "name": "Rule 1",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "active": true,\
            "description": "Rule for Module Leads",\
            "id": "4876876000000945002",\
            "signal_rules": [\
                {\
                    "score": 10,\
                    "id": "4876876000000945016",\
                    "signal": {\
                        "namespace": "Email_Incoming__s",\
                        "id": "4876876000000112019"\
                    }\
                },\
                {\
                    "score": 8,\
                    "id": "4876876000000945017",\
                    "signal": {\
                        "namespace": "EmailInsight_Click__s",\
                        "id": "4876876000000112023"\
                    }\
                }\
            ],\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            }\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/scoring-rules.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)