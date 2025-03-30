
# Update Appointments

#### Purpose

To update the details of an existing appointment in your organization.

#### Endpoints

[PUT /Appointments\_\_s](https://www.zoho.com/crm/developer/docs/api/v7/update-appointments.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Appointments\_\_s

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.appointments.{operation\_type}

#### Possible operation types

ALL - Full access to appointments data

UPDATE - Update appointments data

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Appointments__s"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Request JSON Keys

- idstring, mandatory



Denotes the distinctive ID of the appointment which has to be updated. You can obtain this ID from the [GET Appointments](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html) API.

- Statusstring, mandatory for cancellation and completion



Denotes the status of the appointment.

**Possible Values**: 'Cancelled', 'Completed', 'Overdue' and 'Scheduled'.

- Cancellation\_ReasonString, optional



Denotes who cancelled the appointment.

**Possible Values**: 'By Customer' and 'By Team'. The default value is 'By Customer'.

- Cancellation\_NoteString, optional



Represents the reason for canceling the appointment.

- Appointment\_Start\_Timestring, mandatory for rescheduling appointments



Denotes the starting date and time of the appointment. The value should be given in the **ISO 8601 format**. In the sample input, an existing appointment is rescheduled using this key.

- Rescheduled\_Fromstring, optional



Denotes the previous appointment time from which the appointment is being rescheduled to the new time. The Rescheduled\_From time should be lesser than the new appointment time. The value should be given in the **ISO 8601 format**.

- Reschedule\_ReasonString, Optional



Denotes who rescheduled the appointment.

**Possible Values**: 'By Customer' and 'By Team'. The default value is 'By Customer'.

- Reschedule\_NoteString, Optional



Represents the reason for rescheduling the appointment.

- Job\_Sheet\_NameString, optional



Represents the name of the job sheet as specified by the member at the end of an appointment. It is the documentation of tasks performed in the service. This key becomes mandatory when Job Sheet is mandated in the appointment preferences. Make a [GET Appointment Preferences](https://www.zoho.com/crm/developer/docs/api/v7/get-appointment-preferences.html) API call to know if the job sheet is mandated in your organization.

- Job\_Sheet\_Description\_\_sstring, optional



Description of the service performed for the appointment. This key is mandatory when Job Sheet is mandated for your organization through appointment preferences.


**Note**

- You can also pass the record ID in the request. Example: {api-domain}/crm/v6/Appointments\_\_s/{appointment\_id}
- Except for the Service\_Name key you can update all other Request JSON keys from the [Create Appointments](https://www.zoho.com/crm/developer/docs/api/v7/create-appointments.html) API.
- You can update a maximum of 100 appointments per API call.
- 'Scheduled' is the default status for upcoming appointments. The 'Overdue' status is usually auto-populated when the appointment\_start\_time exceeds the present time. The 'Completed' status is auto-populated only when the appointment preferences of "Ask the user to mark the Appointment as completed" is not configured for your organization. You can get these details using the [GET Appointment Preferences](https://www.zoho.com/crm/developer/docs/api/v7/get-appointment-preferences.html) API.

#### Sample Input

``` json
Copied{
    "data":[\
        {\
            "id": "5545974000002254155",\
            "Appointment_Start_Time": "2023-04-05T10:00:00+05:30",\
            "Reschedule_Reason": "By Team",\
            "Reschedule_Note": "Member is unavailable due to unexpected reasons"\
        },\
        {\
            "id": "5545974000002254060",\
            "Status": "Cancelled",\
            "Cancellation_Reason": "By Customer",\
            "Cancellation_Note": "Customer Unavailable"\
        },\
        {\
            "id": "5545974000002254135",\
            "Status": "Completed",\
            "Job_Sheet_Name": "Delivered",\
            "Job_Sheet_Description__s": "Delivered on time"\
        }\
    ]
}
```

#### Possible Errors

- DEPENDENT\_FIELD\_MISSINGHTTP 400



You are trying to reschedule the appointment without specifying value for Appointment\_Start\_Time.

**Solution:** The Appointment\_Start\_Time key is mandatory to reschedule an appointment. You can update the Reschedule\_Reason and Reschedule\_Note keys only when you have already rescheduled the appointment. To know the rescheduled count of an appointment, make a [GET Appointments](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html) API call.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



You are trying to cancel an appointment without specifying the 'Cancelled' status.

**Solution:** The 'Cancelled' status is mandatory to cancel an appointment.

- DEPENDENT\_FIELD\_UNCHANGEDHTTP 400



You are trying to reschedule the appointment to the existing Appointment\_Start\_Time.

**Solution:** The new appointment time has to be greater than the existing Appointment\_Start\_Time to reschedule the appointment.

- DEPENDENT\_MISMATCHHTTP 400



You are trying to cancel an appointment with an invalid status.

**Solution:** To cancel an appointment, the only valid value for the Status key is 'Cancelled'.

- DEPENDENT\_MISMATCHHTTP 400



You have specified either 'Completed' or 'Overdue' status before the appointment time ends.

**Solution:** You can mark an appointment as 'completed' or 'Overdue' only after the appointment time has ended.

- INVALID\_DATAHTTP 400



You have specified an invalid appointment ID.

**Solution:** Make a [GET Appointments](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html) API call to get valid IDs of the appointments in your organization.

- INVALID\_DATAHTTP 400



You have given an invalid value for the status key.

**Solution:** The only possible values are 'Scheduled', 'Cancelled', 'Overdue' and 'Completed'.

- INVALID\_MODULEHTTP 400



You have given an invalid module name in the request URL.

**Solution:** You can use only _**Appointments\_\_s**_ in the request URL.

- INVALID\_REQUEST\_METHODHTTP 400



You have specified an invalid http request method type.

**Solution:** Use only the PUT method in the request URL to access this API.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have failed to provide the ID of the appointment which has to be updated.

**Solution:** Make a [GET Appointments](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html) API call to obtain the IDs of the existing appointments in your organization.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The access token you used has expired. Kindly refresh your token and retry.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You created the grant token using wrong oauth scope.

**Solution:** Use either ZohoCRM.modules.appointments.UPDATE or ZohoCRM.modules.appointments.ALL scope to create a new valid grant token.

- NO\_PERMISSIONHTTP 403



You do not have permission to update any appointments.

**Solution:** Contact your system administrator.

- NOT\_ALLOWEDHTTP 403



You have tried to reschedule either a completed or cancelled appointment.

**Solution:** You cannot reschedule an appointment which is already marked as completed or cancelled.

- NOT\_ALLOWEDHTTP 403



You have tried to mark a cancelled appointment as 'Scheduled' or 'Completed' or 'Overdue'.

**Solution:** You cannot change the Status of a cancelled appointment.

- NOT\_ALLOWEDHTTP 403



You have tried to mark a completed appointment as 'Scheduled' or 'Cancelled' or 'Overdue'.

**Solution:** You cannot change the Status of a completed appointment.

- NOT\_ALLOWEDHTTP 403



You have tried to mark an appointment as 'Completed'.

**Solution:** You cannot mark an appointment as 'Completed', if the "Ask the user to mark the Appointment as completed" is not configured in the appointment preferences for your organization. You can update this preference using the [Update Appointment Preferences](https://www.zoho.com/crm/developer/docs/api/v7/update-appointment-preferences.html) API.

- INVALID\_URL\_PATTERNHTTP 404



Check if you are trying to access the correct URL.

**Solution:** You have given an invalid request URL. Use only **/Appointments\_\_s** endpoint in the URL.

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
                "Modified_Time": "2023-04-04T16:10:09+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                },\
                "Created_Time": "2023-04-04T15:50:27+05:30",\
                "id": "5545974000002254155",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                }\
            },\
            "message": "record updated",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "Modified_Time": "2023-04-04T16:10:09+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                },\
                "Created_Time": "2023-04-04T16:01:27+05:30",\
                "id": "5545974000002254060",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                }\
            },\
            "message": "record updated",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "Modified_Time": "2023-04-04T16:10:09+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                },\
                "Created_Time": "2023-04-04T16:07:54+05:30",\
                "id": "5545974000002254135",\
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

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-appointments.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)