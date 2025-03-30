
# Appointments Rescheduled History APIs

Appointments Rescheduled History holds the rescheduled data of all the appointments. It works as a tracker within the Appointments module, which helps you to record the reschedule activity. You can fetch, create, update and delete the records in the rescheduled history using Appointment Rescheduled History APIs.

### Get Appointments Rescheduled History

#### Purpose

To get appointments rescheduled history data.

#### Endpoints

[GET /Appointments\_Rescheduled\_History\_\_s?fields={field1,field2..}](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments-rescheduled-history.html)

[GET /Appointments\_\_s/{appointment\_id}/Appointments\_Rescheduled\_History\_\_s](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments-rescheduled-history.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Appointments\_Rescheduled\_History\_\_s

**To fetch the rescheduled history of a specific appointment**

{api-domain}/crm/{version}/Appointments\_\_s/{appointment\_id}/Appointments\_Rescheduled\_History\_\_s

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.appointments\_rescheduled\_history.{operation\_type}

#### Possible operation types

ALL - Full access to appointments rescheduled history data

READ - Get appointments rescheduled history data

##### Parameters

- fieldsstring, mandatory when fetching all the rescheduled history data



To list all the rescheduled history data with respect to the fields that you specify in this parameter. Note that you can include a maximum of 50 field API names in this parameter. The [GET Fields API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) will give you the existing field API names in the Appointments Rescheduled History module.

**Possible values**: Multiple field API names, comma separated. For example: Rescheduled\_From,Rescheduled\_To.

- pageinteger, optional



To get the list of rescheduled history from the respective pages. The default value is **1**.

**Possible values**: Positive integer values only.

- per\_pageinteger, optional



To get the list of appointments rescheduled history available per page. The default and the maximum possible value is **200**.

**Possible values**: Positive integer values only.

- sort\_orderstring, optional



To sort the appointments rescheduled history in either ascending or descending order.

**Possible values**: **asc** \- ascending order, **desc** \- descending order. The default value is 'desc'.

- sort\_bystring, optional



To sort the rescheduled history based on the fields like **Rescheduled\_From**, **Created\_Time**, and **Modified\_Time**. The default field is 'id'.


**Note**

- **sort\_order** applies to given **sort\_by** field.
- Appointment Rescheduled History API tracks only the recent 20 rescheduled details of an appointment.
- The rescheduled history will not have the current appointment time, which is the last rescheduled time of the appointment. You can fetch the last rescheduled time from the [GET Appointments](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html) API. 'No Content' response will be thrown if the reschedule count of the specific appointment is 1.

#### Sample Request

``` curl
Copiedcurl "https://crm.zoho.com/crm/v6/Appointments__s/5545974000002323027/Appointments_Rescheduled_History__s?fields=Rescheduled_To, Rescheduled_By,Reschedule_Reason"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



You have specified either an incorrect or a deleted appointment ID in the request URL.

**Solution:** Make a [GET Appointments API](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html) call and provide a valid appointment ID.

- INVALID\_MODULEHTTP 400



You have given an invalid module name in the request URL.

**Solution:** Use _**Appointments\_Rescheduled\_History\_\_s**_ in the request URL. You can also use _**Appointments\_\_s**_ along with this module, when fetching the rescheduled history of a particular appointment.

- INVALID\_REQUEST\_METHODHTTP 400



You have given an invalid http request method type.

**Solution:** Use only the GET method in the request URL to access this API.

- REQUIRED\_PARAM\_MISSINGHTTP 400



You failed to specify the field API names in the parameter.

**Solution:** It is mandatory to specify the field API names when you want to get the rescheduled history data of all the appointments.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The access token you used has expired. Kindly refresh your token and retry.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You created the grant token using the wrong oauth scope.

**Solution:** Use either ZohoCRM.modules.appointments\_rescheduled\_history.READ or ZohoCRM.modules.appointments\_rescheduled\_history.ALL scope to create a new valid grant token.

- NO\_PERMISSIONHTTP 403



You do not have permission to get any data of appointments rescheduled history.

**Solution:** Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Check if you are trying to access the correct URL.

**Solution:** You have given an invalid request URL. Refer to the endpoints section above and provide a valid URL.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Solution:** Unexpected and unhandled exception in the server. Please contact our support team.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Rescheduled_To": "2023-04-10T16:00:00+05:30",\
            "id": "5545974000002323058",\
            "Reschedule_Reason": "By Team"\
        },\
        {\
            "Rescheduled_To": "2023-04-07T14:00:00+05:30",\
            "id": "5545974000002323051",\
            "Reschedule_Reason": "By Team"\
        },\
        {\
            "Rescheduled_To": "2023-04-07T13:30:00+05:30",\
            "id": "5545974000002323044",\
            "Reschedule_Reason": "By Customer"\
        }\
    ],
    "info": {
        "per_page": 200,
        "next_page_token": null,
        "count": 3,
        "page": 1,
        "previous_page_token": null,
        "page_token_expiry": null,
        "more_records": false
    }
}

```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments-rescheduled-history.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)