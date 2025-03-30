
# Update a Shift Hour

#### Purpose

To update the shift hours for your organization through an API.

#### Endpoints

[PUT /settings/business\_hours/shift\_hours](https://www.zoho.com/crm/developer/docs/api/v7/update-shift-hours.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/business\_hours/shift\_hours

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-CRM-ORG:{your\_org\_id}

#### Scope

scope=ZohoCRM.settings.business\_hours.ALL

(or)

scope=ZohoCRM.settings.business\_hours.UPDATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/business_hours/shift_hours"
-X PUT
-d "@update.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-CRM-ORG:{your_org_id}"
```

#### Input JSON

- idstring, mandatory



The unique ID of the shift hours you want to update. Use the [Get Shift Hours API](https://www.zoho.com/crm/developer/docs/api/v7/get-shift-hours.html) to get this ID.

- timezonestring



Represents the time zone you want to set the shift hours for.

- namestring



The name of the shift hours. Must not contain these special characters: _~ , \` , # , % , & , \+ , = , \[ , \] , { , } , \| , ; , < , \> , ^_

- shift\_daysJSON array



The days of the week you want to set the shift hours for. Note that you can set shift timing only on the days your business operates on.

- week\_starts\_onstring



The day of the week your business starts. The possible values include **Sunday** through **Saturday**.

- same\_as\_everydayBoolean



Represents whether the shift hours are the same everyday. When this value is **false**, the JSON array **custom\_timing** becomes mandatory. When this value is true, the JSON array **daily\_timing** becomes mandatory.

- custom\_timingJSON array, mandatory when _same\_as\_everyday_ is false



Contains the following keys in every JSON object of the array:



- **\_delete** \- To delete a particular custom timing of the shift on a business day. The value for this key is **null**.
- **days** \- _string_ \- The day of the week that has a custom time for the shift. Example: "days":"Monday".
- **shift\_timing** \- _JSON array_ \- The shift timing on that day in the HH:MM format. For example: "shift\_timing":\["10:00","17:00"\].

- break\_hoursJSON array



Contains the following keys in every JSON object of the array:



- **\_delete** \- To delete a particular break hour in a shift. The value for this key is **null**.
- **same\_as\_everyday** \- _Boolean_ \- **true** represents that the break hours are the same everyday and **daily\_timing** is mandatory. When this value is **false**, the **custom\_timing** array becomes mandatory.
- **break\_days** \- _JSON array_ \- The days of the week break hours are allowed.
- **daily\_timing**(when same\_as\_everyday is true) - _JSON array_ \- The break timing on that day in the HH:MM format. For example: "daily\_timing":\["10:00","10:30"\]. Note that break hours cannot exceed two hours per day, and a day can have only two breaks.
- **custom\_timing**(when same\_as\_everyday is false) - _JSON array_ \- The break timing on a day in the HH:MM format. For example: "custom\_timing":\["11:00","01:00"\]. Note that break hours cannot exceed two hours per day, and a day can have only two breaks.



**days** \- _string_ \- The day of the shift the custom break timing applies to.


- holidaysJSON array, optional



Use this array to associate an existing holiday or create a new holiday while creating a shift hour.

This array must contain the following keys:



- **name** \- _string, mandatory_ \- The unique name of the holiday. Note that the special characters _~ , \` , # , % , & , \+ , = , \[ , \] , { , } , \| , ; , < , \> , ^_ are not allowed.
- **date** \- _string, mandatory_ \- The date in the YYYY-MM-DD format that the holiday falls on.
- **id** \- _string, mandatory when you want to associate an existing holiday_ \- The unique ID of the holiday you have already created. Pass the ID of the holiday from the [Get Holidays API](https://www.zoho.com/crm/developer/docs/api/v7/get-holidays.html).
- **\_delete** \- _mandatory when you want to delete a holiday from the shift_ \- The value **null** deletes the holiday from that shift.

- usersJSON array



The ID of the user who you want to assign these shift hours to. Use the key **effective\_from** to assign this shift to the user on this date. The format is **YYYY-DD-MM**.

When you do not specify this key, the user gets assigned to the shift immediately.


#### Input JSON

``` json
Copied{
    "shift_hours": [\
        {\
            "id":"3652397000011137072",\
            "holidays": [\
                {\
                    "id": "3652397000011137047",\
                    "_delete": null\
                }\
            ],\
            "users": [\
                {\
                    "id": "554023000002209087"\
                }\
            ]\
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
- The shift name contains the special characters _~ , \` , # , % , & , \+ , = , \[ , \] , { , } , \| , ; , < , \> , ^_.
- The break hours overlap.
- The break hours fall outside the shift hours.
- The effective from date is not greater than the current date.

**Resolution:**

Refer to the "details" key in the response for the API name of the field that has the error in the input.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified the ID of the shift hour you want to update in the input.

**Resolution:** ID of the shift hour is mandatory.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



You have not specified one or more of the dependent fields.

**Resolution:**



- For custom shift hours, **days** is mandatory.
- When **same\_as\_everyday=true**, **daily\_timing** is mandatory.
- When **same\_as\_everyday=false**, **custom\_timing** is mandatory.

Refer to the sample input for the structure of each of these keys.

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

**Resolution:** Create new token with ZohoCRM.settings.business\_hours.ALL or ZohoCRM.settings.business\_hours.UPDATE scopes.


#### Sample Response

``` json
Copied{
    "shift_hours": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000011137072"\
            },\
            "message": "Shift Hours updated successfully.",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-shift-hours.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)