
# Get Business Hours

#### Purpose

To get the details of the business hours of your org.

#### Endpoints

[GET /settings/business\_hours](https://www.zoho.com/crm/developer/docs/api/v7/get-business-hours.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/business\_hours

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-CRM-ORG:{your\_org\_id}

#### Scope

scope=ZohoCRM.settings.business\_hours.ALL

(or)

scope=ZohoCRM.settings.business\_hours.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/business_hours"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-CRM-ORG:{your_org_id}"
-X GET
```

#### Possible Errors

- NO\_CONTENTHTTP 204



There are no business hours configured for your org.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create new token with ZohoCRM.settings.business\_hours.ALL or ZohoCRM.settings.business\_hours.GET scopes.

- INTERNAL\_SERVER\_ERRORHTTP 500



Unhandled and unexpected exception in server.

**Resolution:** Contact support@zohocrm.com for assistance.


#### Sample Response

``` json
Copied{
    "business_hours": {
        "business_days": [\
            "Monday",\
            "Tuesday",\
            "Wednesday",\
            "Thursday"\
        ],
        "custom_timing": [\
            {\
                "days": "Monday",\
                "business_timing": [\
                    "10:00",\
                    "17:00"\
                ]\
            },\
            {\
                "days": "Thursday",\
                "business_timing": [\
                    "09:00",\
                    "18:30"\
                ]\
            },\
            {\
                "days": "Wednesday",\
                "business_timing": [\
                    "11:00",\
                    "17:00"\
                ]\
            },\
            {\
                "days": "Tuesday",\
                "business_timing": [\
                    "10:30",\
                    "17:00"\
                ]\
            }\
        ],
        "daily_timing": null,
        "week_starts_on": "Monday",
        "same_as_everyday": false,
        "id": "3652397000001438001",
        "type": "custom"
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-business-hours.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)