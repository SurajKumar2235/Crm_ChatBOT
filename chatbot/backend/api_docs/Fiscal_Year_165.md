

# Update Fiscal Year Settings

#### Purpose

To update the details of fiscal year settings of your organization.

#### Endpoints

[PUT /settings/fiscal\_year](https://www.zoho.com/crm/developer/docs/api/v7/put-fiscal-year.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/fiscal\_year

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.fiscal\_year.UPDATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/fiscal_year
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X PUT
-d "@updatefiscalyear.json"
```

In the request, "@updatefiscalyear.json" contains the sample input data.

##### Request JSON

- **fiscal\_year**JSON Object, mandatory

To update the fiscal year settings you must specify a valid **start\_month** or **display\_based\_on** value or both inside this JSON object.

  - **start\_month**string, optional



    Represents the start month of the year and the allowed values are valid month names (eg: January, February)

  - **display\_based\_on**string, optional



    This value represents whether the name of the fiscal year is based on starting month or ending month of the fiscal period. For example, assume your fiscal year start in April 2023 and ends in March 2024. If you choose to name the year based on the start month (April) the fiscal year will be 2023; If you choose to name the year based on the end month (April) the fiscal year will be 2024

#### Sample Input

``` json
Copied{
  "fiscal_year": {
    "start_month": "April",
    "display_based_on": "end_month"
  }
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The start\_month or display\_based\_on key 's value is incorrect.

**Resolution:** Give correct values for the key

- INVALID\_DATAHTTP 400



Please give a valid start month or display\_based\_on value.

**Resolution:** Give a valid start month or display\_based\_on value or both.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read fiscal year settings

**Resolution:** The user does not have the permission to retrieve fiscal year settings. Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.fiscal\_year.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to update fiscal year settings. Contact your system administrator.

- NOT\_ALLOWEDHTTP 403



The Fiscal year settings can be modified only through forecast settings

**Resolution:** If forecast enabled, fiscal year settings can be modified only through forecast settings.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.


#### Sample Respose

``` json
Copied{
   "fiscal_year": {
        "code": "SUCCESS",
        "details": {},
        "message": "Updated Successfully",
        "status": "success"
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/put-fiscal-year.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)