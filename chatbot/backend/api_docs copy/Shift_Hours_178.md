
# Shift Hours

Shift hours allow you to assign shifts based on employees' work hours or time zone and enable you to assign activities based on a user's availability.

#### Purpose

To set shift hours for your organization through an API. Note that the shift hours must fall under the business hours configured for your org.

#### Endpoints

[POST   /settings/business\_hours/shift\_hours](https://www.zoho.com/crm/developer/docs/api/v7/add-shift-hours.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/business\_hours/shift\_hours

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-CRM-ORG:{your\_org\_id}

#### Scope

scope=ZohoCRM.settings.business\_hours.ALL

(or)

scope=ZohoCRM.settings.business\_hours.CREATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/business_hours/shift_hours"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-CRM-ORG: {your_org_ID}"
-d "@input.json"
-X POST
```

#### Input JSON

- timezonestring, mandatory



Represents the time zone you want to set the shift hours for.

- namestring, mandatory



The name of the shift hours. Note that the special characters _~ , \` , # , % , & , \+ , = , \[ , \] , { , } , \| , ; , < , \> , ^_ are not allowed.

- shift\_daysJSON array, mandatory



The days of the week you want to set the shift hours for. Note that you can set shift timing only on the days your business operates on.

- same\_as\_everydayBoolean, mandatory



Represents whether the shift hours are the same everyday. When this value is **false**, the JSON array **custom\_timing** becomes mandatory. When this value is **true**, the JSON array **daily\_timing** becomes mandatory.

- daily\_timingJSON array, mandatory when same\_as\_everyday is true



Represents the shift timing for the week in the HH:mm format. For example: "daily\_timing":\["10:00","17:00"\].

- custom\_timingJSON array, mandatory when _same\_as\_everyday_ is false



Contains the following keys in every JSON object of the array:



- **days** \- _string, mandatory_ \- The day of the week that has a custom time for the shift. Example: "days":"Monday".
- **shift\_timing** \- _JSON array, mandatory_ \- The shift timing on that day in the HH:MM format. For example: "shift\_timing":\["10:00","17:00"\].

- break\_hoursJSON array, optional



Contains the following keys in every JSON object of the array:



- **same\_as\_everyday** \- _Boolean, mandatory_ \- **true** represents that the break hours are the same everyday, and **daily\_timing** is mandatory. When this value is **false**, the **custom\_timing** array becomes mandatory.
- **break\_days** \- _JSON array, mandatory_ \- The days of the week break hours are allowed.
- **daily\_timing**(when same\_as\_everyday is true) - _JSON array, mandatory_ \- The break timing on that day in the HH:MM format. For example: "daily\_timing":\["10:00","10:30"\]. Note that break hours cannot exceed two hours per day, and a day can have only two breaks.
- **custom\_timing**(when same\_as\_everyday is false) - _JSON array, mandatory_ \- The break timing on a day in the HH:MM format. For example: "custom\_timing":\["11:00","01:00"\]. Note that break hours cannot exceed two hours per day, and a day can have only two breaks.



**days** \- _string, mandatory_ \- The day of the shift the custom break timing applies to.


- holidaysJSON array, optional



Use this array to create a new holiday while creating a shift hour.

This array must contain the following keys:



- **name** \- _string, mandatory_ \- The unique name of the holiday. Note that the special characters _~ , \` , # , % , & , \+ , = , \[ , \] , { , } , \| , ; , < , \> , ^_ are not allowed.
- **date** \- _string, mandatory_ \- The date in the YYYY-MM-DD format that the holiday falls on.

- usersJSON array, optional



The ID of the user who you want to assign these shift hours to. Use the key **effective\_from** to assign this shift to the user on this date. The format is **YYYY-DD-MM**.

When you do not specify this key, the user gets assigned to the shift immediately.


**Note**

- You can create a maximum of **50 shift hours** for your org.

#### Input JSON

``` json
Copied{
    "shift_hours": [\
        {\
            "timezone": "Etc/GMT+12",\
            "name": "shift hours with holiday10",\
            "shift_days": [\
                "Monday"\
            ],\
            "same_as_everyday": true,\
            "daily_timing": [\
                "10:00",\
                "17:00"\
            ],\
            "holidays": [\
                {\
                    "year": "2023",\
                    "name": "Holi10",\
                    "date": "2023-04-24",\
                    "id":"23456"\
\
                }\
            ],\
            "users": [\
                {\
                    "id": "3652397000001464001",\
                    "effective_from": "2023-04-23"\
                }\
            ],\
            "id": "3652397000001438001"\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



**Reasons:**



- One or more of these data is invalid - shift timing, timezone, break timing, effective from date.
- The input contains more than two break hour timings.
- The input contains more than seven shift days or break days.
- The shift name contains one or more special characters - _~ , \` , # , % , & , \+ , = , \[ , \] , { , } , \| , ; , < , \> , ^_.
- The break hours overlap.
- The break hours fall outside the shift hours.
- The effective from date is not greater than the current date.

**Resolution:**

Refer to the "details" key in the response for the API name of the field that has the error in the input.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified either the name of the shift hour or the timezone in the input.

**Resolution:** The name and the timezone of the shift hours are mandatory in the input. Refer to the details key in the response to find out the missing key.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



You have not specified one or more of the dependent fields.

**Resolution:**



- For custom shift hours, **days** is mandatory.
- When **same\_as\_everyday=true**, **daily\_timing** is mandatory.
- When **same\_as\_everyday=false**, **custom\_timing** is mandatory.

Refer to the sample input for the structure of each of these keys.

- LIMIT\_EXCEEDEDHTTP 400



You are trying to create more than 50 shift hours for your org.

**Resolution:** An org can have a maximum of 50 shift hours.

- NOT\_ALLOWEDHTTP 400



You are trying to set shift hours before setting up business hours for your org.

**Resolution:** You can add shift hours only after you add business hours.

- NOT\_ALLOWEDHTTP 400



You are trying to set break hours for more than two hours.

**Resolution:** Each shift can have a break timing of a maximum of two hours.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create new token with ZohoCRM.settings.business\_hours.ALL or ZohoCRM.settings.business\_hours.CREATE scopes.


#### Sample Response

``` json
Copied{
    "shift_hours": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000011173006"\
            },\
            "message": "Shift Hours created successfully.",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/add-shift-hours.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)