
# Update Scoring Rules

#### Purpose

To update a scoring rule.

#### Endpoints

[PUT /settings/automation/scoring\_rules](https://www.zoho.com/crm/developer/docs/api/v7/update-scoring-rules.html)

[PUT /settings/automation/scoring\_rules/{rule\_id}](https://www.zoho.com/crm/developer/docs/api/v7/update-scoring-rules.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/automation/scoring\_rules

**To update a specific scoring rule:**

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

UPDATE - Update scoring rules

**Note**

The name and description of a scoring rule can be updated using the API. It is also possible to add new field and signal rules, as well as update or delete existing field rules and signal rules. If there are any module, layout, or status keys in the input body, they will be ignored and cannot be updated using the API.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/automation/scoring_rules"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d @updaterules.json
-X PUT
```

#### Input JSON Keys

- namestring, optional



Represents the unique name of the current scoring rule. The maximum possible length for this field is 25 characters.

- idstring, mandatory



Represents the unique id of the rule to be updated.

- descriptionstring, optional



Represents the description of the rule. The maximum possible length for this field is 500 characters.

- field\_rulesJSON array, optional



Represents the field rules for the scoring rule.

- scorenumber, optional



Represents the score assigned for the specific rule. The value of this keys ranges from -10 to 10.

- criteriaJSON object, optional



Represents the rule criteria details.

- signal\_rulesJSON array, optional



Represents the signal rules for the scoring rule.


#### Sample Input

``` json
Copied{
   "scoring_rules":[\
      {\
         "name":"Rule 1",\
         "id":"4876876000000945002",\
         "description":"Lead Module Scoring Rule",\
         "field_rules":[\
            {\
               "score":5,\
               "criteria":{\
                  "group_operator":"or",\
                  "group":[\
                     {\
                        "group_operator":"OR",\
                        "group":[\
                           {\
                              "field":{\
                                 "api_name":"Company"\
                              },\
                              "comparator":"equal",\
                              "value":"Villa Margarita"\
                           },\
                           {\
                              "field":{\
                                 "api_name":"Phone"\
                              },\
                              "comparator":"equal",\
                              "value":"5555555555"\
                           }\
                        ]\
                     },\
                     {\
                        "field":{\
                           "api_name":"Designation"\
                        },\
                        "comparator":"equal",\
                        "value":"review"\
                     }\
                  ]\
               }\
            },\
            {\
               "id":"4876876000000945014",\
               "score":7,\
               "criteria":{\
                  "group_operator":"and",\
                  "group":[\
                     {\
                        "group_operator":"OR",\
                        "group":[\
                           {\
                              "field":{\
                                 "api_name":"Company"\
                              },\
                              "comparator":"equal",\
                              "value":"Zylker"\
                           },\
                           {\
                              "field":{\
                                 "api_name":"Phone"\
                              },\
                              "comparator":"equal",\
                              "value":"123456890"\
                           }\
                        ]\
                     },\
                     {\
                        "field":{\
                           "api_name":"Designation"\
                        },\
                        "comparator":"equal",\
                        "value":"Executive Secretary"\
                     }\
                  ]\
               }\
            },\
            {\
               "id":"4876876000000945014",\
               "_delete":null\
            }\
         ],\
         "signal_rules":[\
            {\
               "score":2,\
               "signal":{\
                  "namespace":"Email_Incoming__s",\
                  "id":"4876876000000112019"\
               }\
            }\
         ]\
      }\
   ]
}
```

Show full

Show less

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.scoring\_rules.UPDATE scope. Create a new client with valid scope. Refer to scope section above for more details.

- NO\_PERMISSIONHTTP 403



Permission denied to update

**Resolution:** The user does not have permission to update scoring rules data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- INVALID\_DATAHTTP 400



You have either specified a rule name exceeding 25 characters or description exceeding 500 characters

**Resolution:** Specify the name and description within their respective limits of 25 characters and 500 characters.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified a mandatory field in the input

**Resolution:** Please specify all mandatory fields. Refer to the input JSON keys section to know more.

- DUPLICATE\_DATAHTTP 400



A scoring rule with the specified criteria or the same name already exists.

**Resolution:** A scoring rule with the specified criteria or the same name already exists. Specify a different criterion or name for the rule.

- INVALID\_DATAHTTP 400



The id given seems to be invalid

**Resolution:** You have specified an invalid rule id. Specify valid rule id in the request body.

- ALREADY\_USEDHTTP 400



The specified criteria is already given in the same rule under different index.

**Resolution:** Please specify a different criteria.

- NOT\_SUPPORTEDHTTP 400



You have specified Signal rules for non-people module. Signal rules are not supported for non-people modules.

**Resolution:** Use field rules for the specified module.

- INVALID\_DATAHTTP 400



You have specified an invalid value for the score key

**Resolution:** Specify a valid value for the key. Please refer to input JSON keys section for more details.


#### Sample Response

``` json
Copied{
    "scoring_rules": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000000945002"\
            },\
            "message": "scoring rule updated successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-scoring-rules.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)