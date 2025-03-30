
# Get Shift Hours

#### Purpose

To get the details of the shift hours configured for your organization.

#### Endpoints

[GET /settings/business\_hours/shift\_hours](https://www.zoho.com/crm/developer/docs/api/v7/get-shift-hours.html)

[GET /settings/business\_hours/shift\_hours/{shift\_hour\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-shift-hours.html)

### Request Details

#### Request URL

**To get all shift hours:** {api-domain}/crm/{version}/settings/business\_hours/shift\_hours

**To get a specific shift hour:** {api-domain}/crm/{version}/settings/business\_hours/shift\_hours/{shift\_hour\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-CRM-ORG:{your\_org\_id}

#### Scope

scope=ZohoCRM.settings.business\_hours.ALL

(or)

scope=ZohoCRM.settings.business\_hours.READ

**Note**

- When users in the "Admin" profile and those with "Manage Users" permission fetch a specific shift hour, the response will have the "users" array populated with the details of the user such as their email ID, ZUID, role etc,. For others, this key will hold the value "null".

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/business_hours/shift_hours/3652397000011179005"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-CRM-ORG:{your_org_id}"
-X GET
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The ID of the shift hour you want to fetch is incorrect.

**Resolution:** Give the right ID of the shift hour.

- INVALID\_REQUEST\_METHODHTTP 404



The HTTP request method is incorrect.

**Resolution:** The HTTP method is GET to fetch the details of a shift hour.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create new token with ZohoCRM.settings.business\_hours.ALL or ZohoCRM.settings.business\_hours.READ scopes.

- NO\_PERMISSIONHTTP 403



You d not have the "Manage Users" permission.

**Resolution:** Contact your administrator to obtain the necessary permission to perform this action.


#### Sample Response

``` json
Copied{
    "shift_count": {
        "total_shift_with_user": 2,
        "total_shift": 15
    },
    "shift_hours": [\
        {\
            "custom_timing": null,\
            "users_count": 1,\
            "holidays": null,\
            "daily_timing": [\
                "10:00",\
                "17:00"\
            ],\
            "timezone": "Etc/GMT+12",\
            "name": "shift hours with holiday11",\
            "break_hours": null,\
            "shift_days": [\
                "Monday"\
            ],\
            "same_as_everyday": true,\
            "id": "3652397000011179005",\
            "users": [\
                {\
                    "role": {\
                        "name": "null",\
                        "id": "null"\
                    },\
                    "name": "patboyle",\
                    "id": "3652397000001464001",\
                    "effective_from": "2023-04-23",\
                    "email": "patboyle@gmail.com",\
                    "zuid": "698789031"\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-shift-hours.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)