
# Create Scoring Rules

Scoring rules can be layout-specific or global rules that can be applied to all layouts. A scoring rule can be defined using both field rules and signal rules, or just one of them. The limitations regarding the number of rules per module, number of active rules for different editions and more are explained [here](https://www.zoho.com/crm/developer/docs/api/v7/scoring-rules.html).

#### Purpose

To create a scoring rule for a module in the organization.

**Note**

Only leads and contacts (the people modules) can have signal rules. The non-people modules (Deals, Accounts and Custom Modules) do not support signal rules.

#### Endpoints

[POST /settings/automation/scoring\_rules](https://www.zoho.com/crm/developer/docs/api/v7/create-scoring-rules.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/automation/scoring\_rules

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

CREATE - Create scoring rules

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/automation/scoring_rules"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d @createrules.json
-X POST
```

#### Input JSON Keys

- namestring, mandatory



Represents the unique name of the current scoring rule. The maximum possible length for this field is 25 characters.

- descriptionstring, optional



Represents the description of the current rule. The maximum possible length for this field is 500 characters.

- moduleJSON object, mandatory



Represents the module the scoring rule is defined for.

- layoutJSON object, optional



Represents the layout the rule is associated with.

- activeBoolean, optional



Represents whether the current scoring rule is active or not. Default value is **true**.

- field\_rulesJSON array, optional



Represents the field rules for the scoring rule.

- scorenumber, mandatory



Represents the score assigned for the specific rule. The value of this keys ranges from -10 to 10.

- criteriaJSON object, mandatory



Represents the rule criteria details.

- group\_operatorstring, mandatory



Represents the operator. Possible values are **and** or **or**.

- groupJSON array, mandatory



Represents the fields to be joined using the group operator for the current criterion.

- signal\_rulesJSON array, optional



Represents the signal rules defined.


#### Sample Input

``` json
Copied{
   "scoring_rules":[\
      {\
         "name":"Rule 9",\
         "description":"Rule for Module Leads",\
         "module":{\
            "id":"4876876000000002175",\
            "api_name":"Leads"\
         },\
         "layout":{\
            "id":"4876876000000091055",\
            "api_name":"Standard"\
         },\
         "active":false,\
         "field_rules":[\
            {\
               "score":10,\
               "criteria":{\
                  "group_operator":"OR",\
                  "group":[\
                     {\
                        "field":{\
                           "api_name":"Company"\
                        },\
                        "comparator":"equal",\
                        "value":"zoho"\
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
            }\
         ]\
      }\
   ],
   "signal_rules":[\
      {\
         "score":10,\
         "signal":{\
            "namespace":"Email_Incoming__s",\
            "id":"1000000000037"\
         }\
      },\
      {\
         "score":8,\
         "signal":{\
            "namespace":"EmailInsight_Click__s",\
            "id":"1000000000038"\
         }\
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

**Resolution:** Client does not have ZohoCRM.settings.scoring\_rules.CREATE scope. Create a new client with valid scope. Refer to scope section above for more details.

- NO\_PERMISSIONHTTP 403



Permission denied to create

**Resolution:** The user does not have permission to create scoring rules. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- INVALID\_DATAHTTP 400



You have specified an invalid or unsupported module, or an invalid layout.

**Resolution:** Specify valid module and layout details.

- INVALID\_DATAHTTP 400



You have either specified a rule name exceeding 25 characters or description exceeding 500 characters.

**Resolution:** Please specify the name and description within their respective limits of 25 characters and 500 characters.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified a mandatory field in the input.

**Resolution:** Please specify all mandatory fields. Refer to the input JSON keys section to know more.

- EXPECTED\_FIELD\_MISSINGHTTP 400



You have not specified fields rule or signal rule.

**Resolution:** Specify the field rules and/or signal rules to create the scoring rule.

- DUPLICATE\_DATAHTTP 400



A scoring rule with the specified criteria or the same name already exists

**Resolution:** Specify a different criterion or name for the rule.

- ALREADY\_USEDHTTP 400



The specified criteria is already given in the same rule under different index.

**Resolution:** Please specify a different criteria.

- NOT\_SUPPORTEDHTTP 400



You have specified Signal rules for non-people module. Signal rules are not supported for non-people modules.

**Resolution:** Use field rules for the specified module.

- INVALID\_DATAHTTP 400



You have specified an invalid value for the score key. Specify a valid value for the key.

**Resolution:** Please refer to input JSON keys section for more details.

- ACTIVE\_STATE\_LIMIT\_EXCEEDEDHTTP 400



You have exceeded the number of active rules possible for your account.

**Resolution:** Limit the number of active rules within the permissible limit. Refer [the limits](https://www.zoho.com/crm/developer/docs/api/v7/scoring-rules.html) for more details.

- LIMIT\_EXCEEDEDHTTP 400



You have already created the maximum number of scoring rules possible.

**Resolution:** Limit the number of rules within the maximum possible limit. Please refer to the [Get Scoring Rules](https://www.zoho.com/crm/developer/docs/api/v7/scoring-rules.html) for more details.

- FEATURE\_NOT\_SUPPORTEDHTTP 400



You are trying to create multiple scoring rules for an unsupported edition.

**Resolution:** Contact system administrator.

- NOT\_SUPPORTEDHTTP 400



Given field is not available with the given layout

**Resolution:** Specify fields available in the given layout.

- NOT\_SUPPORTEDHTTP 400



Layout or score fields is specified in the criteria

**Resolution:** Specify valid fields in the criteria.


#### Sample Response

``` json
Copied{
    "scoring_rules": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000000965383"\
            },\
            "message": "scoring rule created successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-scoring-rules.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)