
# Update Business Hours

#### Purpose

To update the details of the business hours of your org.

#### Endpoints

[PUT /settings/business\_hours](https://www.zoho.com/crm/developer/docs/api/v7/update-business-hours.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/business\_hours

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.business\_hours.ALL

(or)

scope=ZohoCRM.settings.business\_hours.UPDATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/business_hours"
-X PUT
-d "@update.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-CRM-ORG:{your_org_id}"
```

#### Input JSON

- idstring, mandatory



The unique ID of the business hour you want to update. Use the [Get Business Hours](https://www.zoho.com/crm/developer/docs/api/v7/get-business-hours.html) API to get this ID.

- typestring, mandatory



Represents whether you want to set the business hours for five or seven days a week, or a custom value. The possible values are **24\*7**, **24\*5**, and **custom**.

- week\_starts\_onstring, mandatory



The day of the week your business starts. The possible values include **Sunday** through **Saturday**.

- business\_daysJSON array, mandatory when you set **type=24\*5 or custom**



The days of the week your business operates on. This key is mandatory when **type=24\*5 or custom**.

- same\_as\_everydayboolean, optional



Represents whether the business hours are the same everyday. When this value is **false**, the JSON array **custom\_timing** becomes mandatory. When this value is **true**, the JSON array **daily\_timing** becomes mandatory.

- daily\_timingJSON array, mandatory when same\_as\_everyday is true



Represents the business timing for the week in the HH:mm format. For example: "daily\_timing":\["10:00","17:00"\].

- custom\_timingJSON array, mandatory when _same\_as\_everyday_ is false



Contains the following keys in every JSON object of the array:



- **\_delete** \- To delete a particular custom timing on a business day. The value for this key is **null**.
- **days** \- _string, mandatory_ \- The day of the week that has a custom time for business.Example: "days":"Monday".
- **business\_timing** \- _JSON array, mandatory_ \- The business timing on that day in the HH:MM format. For example: "business\_timing":\["10:00","17:00"\].

#### Input JSON

``` json
Copied{
    "business_hours": {
        "id":"3652397000001438001",
        "business_days": [\
            "Monday",\
            "Tuesday",\
            "Wednesday",\
            "Thursday"\
        ],
        "week_starts_on": "Monday",
        "custom_timing": [\
            {\
                "days": "Monday",\
                "business_timing": [\
                    "10:00",\
                    "17:00"\
                ]\
            },\
            {\
                "days": "Tuesday",\
                "business_timing": [\
                    "10:30",\
                    "17:00"\
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
                "days": "Thursday",\
                "business_timing": [\
                    "09:00",\
                    "18:30"\
                ]\
            },\
            {\
                "days": "Friday",\
                "business_timing": [\
                    "11:30",\
                    "18:30"\
                ],\
                "_delete":null\
            }\
        ],
        "same_as_everyday": false,
        "type": "custom"
    }
}
```

Show full

Show less

#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified either **type** or **week\_starts\_on** keys in the input.

**Resolution:** **type** and **week\_starts\_on** keys are mandatory in the input. Refer to the details key in the response to find out the missing key.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



You have not specified one or more of the dependent fields.

**Resolution:**



- For **type=24\*5 or custom**, **business\_days** is mandatory.
- For **type=custom**, **same\_as\_everyday** is mandatory.
- When **same\_as\_everyday=true**, **daily\_timing** is mandatory.
- When **same\_as\_everyday=false**, **custom\_timing** is mandatory.

Refer to the sample input for the structure of each of these keys.

- INVALID\_DATAHTTP 400



**Reasons and Resolutions:**



- For **type=24\*5**, you have specified more or less than five business days. You must input exactly five business days.
- The value for **type** is invalid. The possible values are **24\*7**, **24\*5**, and **custom**.
- You have specified invalid values for **business\_days**. The possible values are **Sunday**, **Monday**, **Tuesday**, **Wednesday**, **Thursday**, **Friday**, and **Saturday**.
- You have specified an invalid value for **week\_starts\_on**. The possible values are **Sunday**, **Monday**, **Tuesday**, **Wednesday**, **Thursday**, **Friday**, or **Saturday**.
- You have specified an invalid value for **business\_timing** or **daily\_timing**. The format is **HH:mm**.
- Either **custom\_timing** or **daily\_timing** falls outside the business hours of your org. If the business hours of your org is from 10AM to 5PM, then the business timing on any particular day must fall within this time period.
- The **business\_days** key has more than seven values in the input. The maximum number of values in this array can only be **seven**. Check your input for any duplicate or invalid values.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create new token with ZohoCRM.settings.business\_hours.ALL or ZohoCRM.settings.business\_hours.UPDATE scopes.


#### Sample Response

``` json
Copied{
    "business_hours": {
        "code": "SUCCESS",
        "details": {
            "id": "3652397000001438001"
        },
        "message": "Business Hours saved successfully",
        "status": "success"
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-business-hours.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)