
# Update Scoring Rule Status

#### Purpose

To activate or deactivate a scoring rule.

#### Endpoints

[PUT /settings/automation/scoring\_rules/{rule\_id}/actions/activate](https://www.zoho.com/crm/developer/docs/api/v7/update-rule-status.html)

[DELETE /settings/automation/scoring\_rules/{rule\_id}/actions/activate](https://www.zoho.com/crm/developer/docs/api/v7/update-rule-status.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/automation/scoring\_rules/{rule\_id}/actions/activate

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

The HTTP request method for activating a scoring rule is PUT, and DELETE is used to deactivate a rule.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/automation/scoring_rules/4876876000000965528/actions/activate"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X PUT
```

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

- ACTIVE\_STATE\_LIMIT\_EXCEEDEDHTTP 400



You have exceeded the number of active rules possible for your account.

**Resolution:** Limit the number of active rules to be within the permissible limit. Refer to [the limits](https://www.zoho.com/crm/developer/docs/api/v7/scoring-rules.html) for more details.


#### Sample Response

``` json
CopiedFor activation request:
{
    "scoring_rules": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000000965528"\
            },\
            "message": "scoring rule activated successfully",\
            "status": "success"\
        }\
    ]
}

For deactivation request:
{
    "scoring_rules": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000000965528"\
            },\
            "message": "scoring rule deactivated successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-rule-status.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)