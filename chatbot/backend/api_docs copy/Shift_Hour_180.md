
# Delete a Shift Hour

#### Purpose

To delete the shift hours configured for your organization.

#### Endpoints

[DELETE /settings/business\_hours/shift\_hours/{shift\_hour\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-shift-hours.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/business\_hours/shift\_hours/{shift\_hour\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-CRM-ORG:{your\_org\_id}

#### Scope

scope=ZohoCRM.settings.business\_hours.ALL

(or)

scope=ZohoCRM.settings.business\_hours.DELETE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/business_hours/shift_hours/3652397000011179005"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-CRM-ORG: {your_org_ID}"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The ID of the shift hour you want to delete is incorrect.

**Resolution:** Use the [Get Shift Hours API](https://www.zoho.com/crm/developer/docs/api/v7/get-shift-hours.html) to get the ID of each shift hour in your org.

- INVALID\_REQUEST\_METHODHTTP 404



The HTTP request method is incorrect.

**Resolution:** The HTTP method is DELETE to delete a shift hour.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create new token with ZohoCRM.settings.business\_hours.ALL or ZohoCRM.settings.business\_hours.DELETE scopes.

- NO\_PERMISSIONHTTP 403



You d not have the "Manage Users" permission.

**Resolution:** Contact your administrator to obtain the necessary permission to perform this action.


#### Sample Response

``` json
Copied{
    "shift_hours": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000011179005"\
            },\
            "message": "shift hours deleted successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-shift-hours.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)