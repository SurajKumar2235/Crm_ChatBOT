
# Add a Holiday

#### Purpose

Every business has its own holidays including the national holidays and the ones specific to the business or the region. Use this API to add holidays to your org.

#### Endpoints

[POST /settings/holidays](https://www.zoho.com/crm/developer/docs/api/v7/add-holiday.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/holidays

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-CRM-ORG:{your\_org\_id}

#### Scope

scope=ZohoCRM.settings.business\_hours.ALL

(or)

scope=ZohoCRM.settings.business\_hours.CREATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/holidays"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-CRM-ORG: {your_org_ID}"
-d "@input.json"
-X POST
```

#### Input JSON

- namestring, mandatory



The name of the holiday. Note that the special characters _~ , \` , # , % , & , \+ , = , \[ , \] , { , } , \| , ; , < , \> , ^_ are not allowed.

- datestring, mandatory



The date in the YYYY-MM-DD format that the holiday falls on.

- typestring, mandatory



The type of holiday. The possible values are **shift\_holiday** and **business\_holiday**. The default value is business\_holiday.

- shift\_hourstring, mandatory when type=shift\_holiday



The unique ID of the shift hour you want to associate this holiday with. Use the [Get Shift Hours API](https://www.zoho.com/crm/developer/docs/api/v7/get-shift-hours.html) to get the ID.


#### Input JSON

``` json
Copied{
    "holidays": [\
        {\
            "name": "Founder's Day",\
            "date": "2023-08-24",\
            "type": "business_holiday"\
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

**Resolution:** Create new token with ZohoCRM.settings.business\_hours.ALL or ZohoCRM.settings.business\_hours.CREATE scopes.

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
            "message": "Holiday created successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/add-holiday.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)