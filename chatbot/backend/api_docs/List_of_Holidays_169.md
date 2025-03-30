
# Get the List of Holidays

#### Purpose

To get the details of the holidays set for your org.

#### Endpoint

[GET /settings/holidays](https://www.zoho.com/crm/developer/docs/api/v7/get-holidays.html)

[GET /settings/holidays/{holiday\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-holidays.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/holidays

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-CRM-ORG:{your\_org\_id}

#### Scope

scope=ZohoCRM.settings.business\_hours.ALL

(or)

scope=ZohoCRM.settings.business\_hours.READ

#### Parameters

- yearoptional



The year that the holiday falls in.

- typeoptional



The type of holiday that you want to fetch. The possible values are **business\_holiday** and **shift\_holiday**.

- shift\_idoptional



The ID of the shift hour whose holidays you want to fetch. Use the [Get Shift Hours API](https://www.zoho.com/crm/developer/docs/api/v7/get-shift-hours.html) to get the ID of the shift hour.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/holidays?shift_id=3652397000011173006"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-CRM-ORG:{your_org_id}"
-X GET
```

#### Possible Errors

- API\_NOT\_SUPPORTEDHTTP 400



You are trying the API from API version 2 or below.

**Resolution:** This API is supported only from API version 2.1 and up.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create new token with ZohoCRM.settings.business\_hours.ALL or ZohoCRM.settings.business\_hours.READ scopes.

- INACTIVE\_USERHTTP 403



You are an inactive user in the org.

**Resolution:** Inactive users cannot access this API. Contact the administrator.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.


#### Sample Response

``` json
Copied{
    "holidays": [\
        {\
            "date": "2023-04-24",\
            "year": 2023,\
            "name": "Founder's Day",\
            "id": "3652397000011173008",\
            "type": "shift_holiday",\
            "shift_hour": {\
                "name": "shift hour for TX",\
                "id": "3652397000011173006"\
            }\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 1,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-holidays.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)