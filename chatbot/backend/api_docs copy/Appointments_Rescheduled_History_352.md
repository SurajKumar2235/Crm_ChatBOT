
# Update Appointments Rescheduled History

#### Purpose

To update the rescheduled details of appointments.

#### Endpoints

[PUT /Appointments\_Rescheduled\_History\_\_s](https://www.zoho.com/crm/developer/docs/api/v7/update-appointments-rescheduled-history.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Appointments\_Rescheduled\_History\_\_s

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.appointments\_rescheduled\_history.{operation\_type}

#### Possible operation types

ALL - Full access to appointments rescheduled history data

UPDATE - Update appointments rescheduled history data

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Appointments_Rescheduled_History__s"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Request JSON Keys

- idstring, mandatory



Denotes the distinctive ID of the rescheduled history record which has to be updated. To get this ID, make a [GET Appointments Rescheduled History](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments-rescheduled-history.html) API call.

- Rescheduled\_Timestring, optional



Represents the date and time at which the appointment was rescheduled.

- Rescheduled\_ByJSON object, optional



Contains the name and ID of the user who rescheduled the appointment. You can fetch the user details from the [GET Users](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) API.

- Rescheduled\_Fromstring, optional



Represents the date and time from which the appointment was rescheduled.

- Rescheduled\_Tostring, optional



Represents the date and time to which the appointment was rescheduled.


**Note**

- You can also pass the record ID in the request. Example: {api-domain}/crm/v6/Appointments\_Rescheduled\_History\_\_s/{record\_id}
- You can update a maximum of 100 appointments rescheduled history records per API call.
- Except for the Appointment\_Name key you can update all other Request JSON keys from the [Add Appointments Rescheduled History](https://www.zoho.com/crm/developer/docs/api/v7/add-appointments-rescheduled-history.html) API.

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "id": "5545974000002324198",\
            "Rescheduled_By": {\
                "name": "Patricia Boyle",\
                "id": "5545974000001170042"\
            },\
            "Rescheduled_From": "2023-04-11T12:30:00+05:30",\
            "Rescheduled_To": "2023-04-11T12:45:00+05:30",\
            "Rescheduled_Time": "2023-04-07T17:25:13+05:30"\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



You have specified an invalid record ID.

**Solution:** Make a [GET Appointments Rescheduled History](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments-rescheduled-history.html) API call to get valid IDs.

- INVALID\_DATAHTTP 400



You have specified an invalid ID in the Rescheduled\_By key.

**Solution:** Make a [GET Appointments](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html) API call and provide a valid rescheduled user and appointment ID.

- INVALID\_DATAHTTP 400



The Rescheduled\_Time key has a time greater than the current time.

**Solution:** The Rescheduled\_Time value should be lesser than the current time.

- INVALID\_MODULEHTTP 400



You have given an invalid module name in the request URL.

**Solution:** You can use only _**Appointments\_Rescheduled\_History\_\_s**_ in the request URL.

- INVALID\_REQUEST\_METHODHTTP 400



You have given an invalid http request method type.

**Solution:** Use only PUT method in the request URL to access this API.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have failed to specify the record ID which has to be updated.

**Solution:** Make a [GET Appointments Rescheduled History](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments-rescheduled-history.html) API call to get valid IDs.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The access token you used has expired. Kindly refresh your token and retry.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You created the grant token using the wrong oauth scope.

**Solution:** Use either ZohoCRM.modules.appointments\_rescheduled\_history.UPDATE or ZohoCRM.modules.appointments\_rescheduled\_history.ALL scope to create a new valid grant token.

- NO\_PERMISSIONHTTP 403



You do not have permission to update any appointments rescheduled history records.

**Solution:** Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Check if you are trying to access the correct URL.

**Solution:** You have given an invalid request URL. Use only **/Appointments\_Rescheduled\_History\_\_s** endpoint in the request URL.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Solution:** Unexpected and unhandled exception in the server. Please contact our support team.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "Modified_Time": "2023-04-11T11:25:41+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                },\
                "Created_Time": "2023-04-07T17:26:30+05:30",\
                "id": "5545974000002324198",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                }\
            },\
            "message": "record updated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-appointments-rescheduled-history.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)