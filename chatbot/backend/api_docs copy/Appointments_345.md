

# Create Appointments

#### Purpose

To add new appointments to your organization.

#### Endpoints

[POST /Appointments\_\_s](https://www.zoho.com/crm/developer/docs/api/v7/create-appointments.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Appointments\_\_s

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.appointments.{operation\_type}

#### Possible operation types

ALL - Full access to appointments data

CREATE - Create new appoitments

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Appointments__s "
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Request JSON Keys

- Service\_NameJSON object, mandatory



Contains the name and distinctive ID of the service for which you are creating the appointment. You can fetch these details from the [GET Services](https://www.zoho.com/crm/developer/docs/api/v7/get-services.html) API.

- Appointment\_Namestring, mandatory



Represents the name of the appointment and it accepts alphanumeric characters.

- Appointment\_ForJSON object, mandatory



Contains the name, ID and the module's API name of the customer for whom you are creating the appointment. The customers can be from Contacts, Leads, Accounts and other custom modules which hold customer data.

- Ownerbigint, mandatory



Represents the ID of the service member who will provide the service for this appointment. Make a [GET Services](https://www.zoho.com/crm/developer/docs/api/v7/get-services.html) API call to obtain the IDs of service members. You can add only one owner to an appointment.

- Appointment\_Start\_Timestring, mandatory



Denotes the starting date and time of the appointment. The value should be given in the **ISO 8601 format**.

- Locationstring, mandatory



Represents the location where the service is offered. The [GET Services](https://www.zoho.com/crm/developer/docs/api/v7/get-services.html) API will provide you the available location of the service you have specified.

**Possible Values**: 'Client Address' and 'Business Address' that matches the service Location.

- Addressstring, mandatory for Client Address



Provides the address of the customer, where the service will be offered. Make a GET Contacts API call to get the address of the specified contact. You can also provide a different address as demanded by the customer.

- Additional\_Informationstring, optional



Provides more information about the customer needs and the service, if any.

- Remind\_AtJSON array, optional



Contains the list of units and period of when you want to get the reminders for the appointment.

The value of a unit key can be only from **0 to 100**.

The possible values for period key are **minutes, hours and days**.

- Statusstring, optional



Denotes the status of the appointment.

**Possible Values**: 'Cancelled', 'Completed', 'Overdue' and 'Scheduled'.


**Note**

- You can create a maximum of 100 appointments per API call.

#### Sample Input

``` json
Copied{
    "data":[\
        {\
            "Appointment_Name":"James - AC Repair",\
            "Appointment_For": {\
                "module": {\
                    "api_name": "Contacts"\
                },\
                "name": "James Smith",\
                "id": "5545974000000955056"\
            },\
            "Service_Name": {\
                "name": "AC Repair",\
                "id": "5545974000002180641"\
            },\
            "Appointment_Start_Time": "2023-04-04T11:00:00+05:30",\
            "Owner": "5545974000000393001",\
            "Location" : "Client Address",\
            "Address":"7 W Jackson Blvd, San Jose",\
            "Additional_Information":"Water leakage from the machine",\
            "Remind_At": [\
                {\
                    "unit":30,\
                    "period": "minutes"\
                }\
            ]\
        }\
    ]
}

```

#### Request JSON Keys to Create a Rescheduled Appointment

- Rescheduled\_Fromstring, mandatory to create rescheduled appointments



Denotes the previous appointment time from which the appointment was rescheduled to the new time. The Rescheduled\_From time should be lesser than the new appointment time. The value should be given in the **ISO 8601 format**.

- Reschedule\_ReasonString, Optional



Denotes who rescheduled the appointment.

**Possible Values**: 'By Customer' and 'By Team'. The default value is 'By Customer'.

- Reschedule\_NoteString, Optional



Represents the reason for rescheduling the appointment.


#### Sample Input to Create a Rescheduled Appointment

``` json
Copied{
    "data": [\
        {\
            "Appointment_Name": "James - AC Repair",\
            "Appointment_For": {\
                "module": {\
                    "api_name": "Contacts"\
                },\
                "name": "James Smith",\
                "id": "5545974000000955056"\
            },\
            "Service_Name": {\
                "name": "AC Repair",\
                "id": "5545974000002180641"\
            },\
            "Appointment_Start_Time": "2023-04-21T13:00:00+05:30",\
            "Owner": "5545974000000393001",\
            "Location": "Client Address",\
            "Address": "7 W Jackson Blvd, San Jose",\
            "Additional_Information": "Water leakage from the machine",\
            "Remind_At": [\
                {\
                    "unit": 30,\
                    "period": "minutes"\
                }\
            ],\
            "Rescheduled_From":"2023-04-21T12:00:00+05:30",\
            "Reschedule_Reason": "By Team",\
            "Reschedule_Note": "Member is unavailable due to unexpected reasons"\
        }\
    ]
}
```

Show full

Show less

#### Request JSON Keys to Create a Cancelled Appointment

- Statusstring, mandatory to create a cancelled appointment



Denotes the status of the appointment. The possible value to create a cancelled appointment is **Cancelled**.

- Cancellation\_ReasonString, optional



Denotes who cancelled the appointment.

**Possible Values**: 'By Customer' and 'By Team'. The default value is 'By Customer'.

- Cancellation\_NoteString, optional



Represents the reason for canceling the appointment.


#### Sample Input to Create a Cancelled Appointment

``` json
Copied{
    "data": [\
        {\
            "Appointment_Name": "James - AC Repair",\
            "Appointment_For": {\
                "module": {\
                    "api_name": "Contacts"\
                },\
                "name": "James Smith",\
                "id": "5545974000000955056"\
            },\
            "Service_Name": {\
                "name": "AC Repair",\
                "id": "5545974000002180641"\
            },\
            "Appointment_Start_Time": "2023-04-21T13:00:00+05:30",\
            "Owner": "5545974000000393001",\
            "Location": "Client Address",\
            "Address": "7 W Jackson Blvd, San Jose",\
            "Additional_Information": "Water leakage from the machine",\
            "Remind_At": [\
                {\
                    "unit": 30,\
                    "period": "minutes"\
                }\
            ],\
            "Status": "Cancelled",\
            "Cancellation_Reason": "By Customer",\
            "Cancellation_Note": "Customer Unavailable"\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- DEPENDENT\_FIELD\_MISSINGHTTP 400



You are trying to create a cancelled appointment without specifying the 'Cancelled' status.

**Solution:** The 'Cancelled' status is mandatory to create a cancelled appointment.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



You are trying to create a rescheduled appointment without specifying the Rescheduled\_From key.

**Solution:** The **Rescheduled\_From** key is mandatory to create a rescheduled appointment.

- DEPENDENT\_MISMATCHHTTP 400



You have specified 'Scheduled' status for an appointment with past time.

**Solution:** You cannot schedule an appointment for a past date and time. You can only specify either 'Overdue' or 'Completed' for an appointment in the past time.

- INVALID\_DATAHTTP 400



You have specified either an invalid User ID or the user is not a part of the service members.

**Solution:** Make a [GET Services](https://www.zoho.com/crm/developer/docs/api/v7/get-services.html) API call to provide a valid owner ID who is a part of the service member.

- INVALID\_DATAHTTP 400



You have specified the value of Remind\_At key in the wrong format.

**Solution:** The value of Remind\_At key should be given in a JSON array, within which it should hold the unit and period keys.

The data type of **unit** key is numbers and it should be between 0 to 100.

The data type of **period** key is string and the only possible values are 'minutes', 'hours' and 'days'.

- INVALID\_DATAHTTP 400



You have given invalid values for Location key.

**Solution:** The only possible values are 'Client Address' and 'Business Address'.

- INVALID\_DATAHTTP 400



The appointment's Location that you specified mismatches with the service's Location.

**Solution:** Make a [GET Services](https://www.zoho.com/crm/developer/docs/api/v7/get-services.html) API call to get the location of the service for which you want to create the appointment.

- INVALID\_DATAHTTP 400



You have given an invalid value for the Appointment\_Start\_Time key.

**Solution:** Before providing value for the Appointment\_Start\_Time key, make a [GET Services](https://www.zoho.com/crm/developer/docs/api/v7/get-services.html) API call to know the available timings of the particular service. Ensure the appointment start time falls under the available timings of the service.

- INVALID\_MODULEHTTP 400



You have given an invalid module name in the request URL.

**Solution:** You can use only _**Appointments\_\_s**_ in the request URL.

- INVALID\_REQUEST\_METHODHTTP 400



You have specified an invalid http request method type.

**Solution:** Use only the POST method in the request URL to access this API.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have failed to specify any of the mandatory fields.

**Solution:** The 'details' key in the error response will provide the missing mandatory field. You can also refer to the above Request JSON Keys section to find other mandatory fields.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The access token you used has expired. Kindly refresh your token and retry.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You created the grant token using the wrong oauth scope.

**Solution:** Use either ZohoCRM.modules.appointments.CREATE or ZohoCRM.modules.appointments.ALL scope to create a new valid grant token.

- NO\_PERMISSIONHTTP 403



You do not have permission to create any appointments.

**Solution:** Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Check if you are trying to access the correct URL.

**Solution:** You have given an invalid request URL. Use only **/Appointments\_\_s** endpoint in the request URL.

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
                "Modified_Time": "2023-04-03T20:22:18+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                },\
                "Created_Time": "2023-04-03T20:22:18+05:30",\
                "id": "5545974000002242004",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5545974000000393001"\
                }\
            },\
            "message": "record added",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-appointments.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)