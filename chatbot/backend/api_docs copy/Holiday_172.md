
# Delete a Holiday

#### Purpose

To delete the holidays set for your org.

#### Endpoint

[DELETE /settings/holidays/{holiday\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-holiday.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/holidays/{holiday\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-CRM-ORG:{your\_org\_id}

#### Scope

scope=ZohoCRM.settings.business\_hours.ALL

(or)

scope=ZohoCRM.settings.business\_hours.DELETE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/holidays/3652397000011199002"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-CRM-ORG: {your_org_ID}"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The holiday ID is invalid.



**Resolution:**

Use the [Get Holidays API](https://www.zoho.com/crm/developer/docs/api/v7/get-holidays.html) to get the ID of the holiday you want to delete.

- API\_NOT\_SUPPORTEDHTTP 400



You are trying the API from API version 2 or below.

**Resolution:** This API is supported only from API version 2.1 and up.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create new token with ZohoCRM.settings.business\_hours.ALL or ZohoCRM.settings.business\_hours.DELETE scopes.

- INACTIVE\_USERHTTP 403



You are an inactive user in the org.

**Resolution:** Inactive users cannot access this API. Contact the administrator.

- NO\_PERMISSIONHTTP 403



You are not an admin.

**Resolution:** Only admin users can set the holidays for the org.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.


#### Sample Response

``` json
Copied{
    "holidays": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000011199002"\
            },\
            "message": "Holiday deleted successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-holiday.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)