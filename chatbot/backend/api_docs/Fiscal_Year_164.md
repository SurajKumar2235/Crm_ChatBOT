
# Fiscal Year

In Zoho CRM, the fiscal year setting helps organizations to configure their fiscal cycle based on the selected start month or end month.

### Get Fiscal Year Settings

#### Purpose

To retrieve the details of fiscal year settings of your organization.

#### Endpoints

[GET /settings/fiscal\_year](https://www.zoho.com/crm/developer/docs/api/v7/get-fiscal-year.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/fiscal\_year

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.fiscal\_year.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/fiscal_year
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X GET
```

#### Response JSON Keys

- display\_based\_onstring



Represents whether the fiscal year is based on start month or end month.

- start\_monthstring



Represents the start month of the fiscal year.


#### Sample Response

``` json
Copied{
    "fiscal_year": {
        "display_based_on": "start_month",
        "start_month": "JANUARY",
        "id": "431581000000004272"
    }
}
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.fiscal\_year.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read fiscal year settings. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read fiscal year settings

**Resolution:** The user does not have the permission to retrieve fiscal year settings. Contact your system administrator.


© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-fiscal-year.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)