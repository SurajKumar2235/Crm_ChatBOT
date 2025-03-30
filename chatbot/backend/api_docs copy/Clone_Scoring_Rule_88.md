
# Clone Scoring Rule

#### Purpose

To clone a scoring rule.

#### Endpoints

[POST /settings/automation/scoring\_rules/{rule\_id}/actions/clone](https://www.zoho.com/crm/developer/docs/api/v7/clone-scoring-rule.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/automation/scoring\_rules/{rule\_id}/actions/clone

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.scoring\_rules.ALL

(or)

scope=ZohoCRM.settings.scoring\_rules.{operation\_type}

#### Possible operation types

ALL - Full access to scoring rules

CREATE - Create scoring rules

**Note**

A cloned rule will always be in active state regardless of the status of the rule it was cloned from.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/automation/scoring_rules/4876876000000965467/actions/clone"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X POST
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.scoring\_rules.CREATE scope. Create a new client with valid scope. Refer to scope section above for more details.

- NO\_PERMISSIONHTTP 403



Permission denied to clone

**Resolution:** The user does not have permission to clone scoring rules data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- INVALID\_DATAHTTP 400



The id given seems to be invalid

**Resolution:** Specify a valid rule id for cloning.

- LIMIT\_EXCEEDEDHTTP 400



You have exceeded the maximum number of rules possible for a layout.

**Resolution:** Limit the number of rules to be within the permissible limit. Refer [the limits](https://www.zoho.com/crm/developer/docs/api/v7/scoring-rules.html) for more details.


#### Sample Response

``` json
Copied{
    "scoring_rules": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000000965594"\
            },\
            "message": "scoring rule cloned successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/clone-scoring-rule.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)