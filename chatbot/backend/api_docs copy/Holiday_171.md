
# Update a Holiday

#### Purpose

To update the holidays set for your org.

#### Endpoint

[PUT /settings/holidays](https://www.zoho.com/crm/developer/docs/api/v7/update-holidays.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/holidays

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-CRM-ORG:{your\_org\_id}

#### Scope

scope=ZohoCRM.settings.business\_hours.ALL

(or)

scope=ZohoCRM.settings.business\_hours.UPDATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/holidays"
-X PUT
-d "@update.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-CRM-ORG:{your_org_id}"
```

#### Input JSON

- idstring, mandatory



The unique ID of the holiday that you want to update.

- namestring, mandatory



The name of the holiday. Note that the special characters _~ , \` , # , % , & , \+ , = , \[ , \] , { , } , \| , ; , < , \> , ^_ are not allowed.

- datestring, mandatory



The date in the YYYY-MM-DD format that the holiday falls on.


#### Input JSON

``` json
Copied{
    "holidays": [\
        {\
            "id": "3652397000011199002",\
            "name": "Founder's Day",\
            "date": "2023-08-24"\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



**Reasons:**



- The holiday name contains one or more of these special characters: _~ , \` , # , % , & , \+ , = , \[ , \] , { , } , \| , ; , < , \> , ^_.
- The date, shift's ID, holiday type, or name is invalid.

**Resolution:**

Refer to the "details" key in the response for the API name of the field that has the error in the input.

- MANDATORY\_NOT\_FOUNDHTTP 400



One or more of these data is invalid - name, date, type.



**Resolution:**

Refer to the "details" key in the response for the API name of the field that has the error in the input.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



You have not specified one or more of the dependent fields.

**Resolution:** When you add holidays to a shift hour, the "type" key is mandatory.

- API\_NOT\_SUPPORTEDHTTP 400



You are trying the API from API version 2 or below.

**Resolution:** This API is supported only from API version 2.1 and up.

- LIMIT\_EXCEEDEDHTTP 400



You are trying to create more than 52 holidays per year.

**Resolution:** A year cannot have more than 52 holidays.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create new token with ZohoCRM.settings.business\_hours.ALL or ZohoCRM.settings.business\_hours.UPDATE scopes.

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
            "message": "Holidays updated successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-holidays.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)