
# Add Appointments Rescheduled History

#### Purpose

To add new records in the appointments rescheduled history.

#### Endpoints

[POST /Appointments\_Rescheduled\_History\_\_s](https://www.zoho.com/crm/developer/docs/api/v7/add-appointments-rescheduled-history.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Appointments\_Rescheduled\_History\_\_s

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.appointments\_rescheduled\_history.{operation\_type}

#### Possible operation types

ALL - Full access to appointments rescheduled history data

CREATE - Create new records in appointments rescheduled history

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Appointments_Rescheduled_History__s "
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Request JSON Keys

- Appointment\_NameJSON object, mandatory



Contains the name and distinctive ID of the appointment for which you are creating the rescheduled history. You can obtain these details from [GET Appointments](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html) API.

- Rescheduled\_Timestring, mandatory



Represents the date and time at which the appointment was rescheduled. The value should be given in the ISO 8601 format.

- Rescheduled\_ByJSON object, mandatory



Contains the name and ID of the user who rescheduled the appointment. You can fetch the user details by making a [GET Users](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) API call.

- Rescheduled\_Fromstring, mandatory



Represents the date and time from which the appointment was recheduled. The value should be given in the ISO 8601 format.

- Rescheduled\_Tostring, mandatory



Represents the date and time to which the appointment was rescheduled. The value should be given in the ISO 8601 fromat.

- Reschedule\_NoteString, optional



Represents the reason for rescheduling the appointment.

- Reschedule\_ReasonString, optional



Represents who was the reason for rescheduling the appointment.

**Possible Values**: 'By Customer' and 'By Team'.


#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Rescheduled_From": "2023-05-02T09:30:00+05:30",\
            "Rescheduled_To": "2023-05-02T10:30:00+05:30",\
            "Appointment_Name": {\
                "name": "AC Repair - James",\
                "id": "5545974000002555001"\
            },\
            "Rescheduled_Time": "2023-05-02T11:00:46+05:30",\
            "Rescheduled_By": {\
                "name": "Patricia Boyle",\
                "id": "5545974000000393001"\
            },\
            "Reschedule_Note": "Customer unavailable",\
            "Reschedule_Reason": "By Customer"\
        }\
    ]
}
```

**Note**

- You can create a maximum of 100 records per API call and **only 20 rescheduled history records** for a single appointment.

#### Possible Errors

- INVALID\_DATAHTTP 400



You have specified an invalid ID either in the Rescheduled\_By key or the Appointment\_Name key.

**Solution:** Make a [GET Appointments](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html) API call to provide a valid rescheduled user and appointment ID.

- INVALID\_DATAHTTP 400



The Rescheduled\_Time key has a time greater than the current time.

**Solution:** The Rescheduled\_Time value should be lesser than the current time.

- IN\_REQUEST\_LIMIT\_EXCEEDEDHTTP 400



You have tried to create more than 20 rescheduled history records for an appointment.

**Solution:** Only 20 rescheduled history records can be created for an appointment using this API.

- INVALID\_MODULEHTTP 400



You have given an invalid module name in the request URL.

**Solution:** You can use only _**Appointments\_Rescheduled\_History\_\_s**_ in the request URL.

- INVALID\_REQUEST\_METHODHTTP 400



You have given an invalid http request method type.

**Solution:** Use only the POST method in the request URL to access this API.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have failed to specify any of the mandatory fields.

**Solution:** The 'details' key in the error response will provide the missing mandatory field. You can also refer to the above Request JSON Keys section to find other mandatory fields.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The access token you used has expired. Kindly refresh your token and retry.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You created the grant token using the wrong oauth scope.

**Solution:** Use either ZohoCRM.modules.appointments\_rescheduled\_history.CREATE or ZohoCRM.modules.appointments\_rescheduled\_history.ALL scope to create a new valid grant token.

- NO\_PERMISSIONHTTP 403



You do not have permission to create any appointments rescheduled history records.

**Solution:** Contact your system administrator.

- NOT\_ALLOWEDHTTP 403



You have tried to make an entry without rescheduling the appointment.

**Solution:** Any appointment must be rescheduled atleast once to add new rescheduled history records.

- INVALID\_URL\_PATTERNHTTP 404



Check if you are trying to access the correct URL.

**Solution:** You have given an invalid request URL. Use only **/Appointments\_Rescheduled\_History\_\_s** endpoint in the URL.

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
                "Modified_Time": "2023-05-02T12:35:36+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                },\
                "Created_Time": "2023-05-02T12:35:36+05:30",\
                "id": "5545974000002556034",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                },\
                "$approval_state": "approved"\
            },\
            "message": "record added",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/add-appointments-rescheduled-history.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)