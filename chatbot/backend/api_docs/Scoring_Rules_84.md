
# Delete Scoring Rules

#### Purpose

To delete scoring rules.

#### Endpoints

[DELETE /settings/automation/scoring\_rules/{rule\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-scoring-rules.html)

[DELETE /settings/automation/scoring\_rules?ids=rule\_id1, rule\_id2, rule\_id3, ...](https://www.zoho.com/crm/developer/docs/api/v7/delete-scoring-rules.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/automation/scoring\_rules/{rule\_id}

**To delete multiple scoring rules:**

{api-domain}/crm/{version}/settings/automation/scoring\_rules?ids = rule\_id1, rule\_id2,...

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.scoring\_rules.ALL

(or)

scope=ZohoCRM.settings.scoring\_rules.{operation\_type}

#### Possible operation types

ALL - Full access to scoring rules

DELETE - Delete scoring rules

#### Parameters

- idsstring, optional



Unique IDs of the scoring rules to be deleted, comma separated.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/automation/scoring_rules?ids=4876876000000965489,4876876000000965499,4876876000000965509"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X DELETE
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.scoring\_rules.DELETE scope. Create a new client with valid scope. Refer to scope section above for more details.

- NO\_PERMISSIONHTTP 403



Permission denied to delete

**Resolution:** The user does not have permission to delete scoring rules data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- INVALID\_DATAHTTP 400



Scoring Rule Id seems to be invalid

**Resolution:** You have specified an invalid rule id. Please specify a valid rule id.


#### Sample Response

``` json
Copied{
    "scoring_rules": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000000965489"\
            },\
            "message": "scoring rule deleted successfully",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000000965499"\
            },\
            "message": "scoring rule deleted successfully",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000000965509"\
            },\
            "message": "scoring rule deleted successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-scoring-rules.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)