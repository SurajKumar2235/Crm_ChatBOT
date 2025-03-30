
# Delete Appointments Rescheduled History

#### Purpose

To delete a record from the appointments rescheduled history.

#### Endpoints

[DELETE /Appointments\_Rescheduled\_History\_\_s/{record\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-appointments-rescheduled-history.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Appointments\_Rescheduled\_History\_\_s/{record\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.appointments\_rescheduled\_history.{operation\_type}

#### Possible operation types

ALL - Full access to appointments rescheduled history data

DELETE - Delete appointments rescheduled history data

**Note**

- You can delete only one record from the appointments rescheduled history per API call.
- All the rescheduled history records of an appointment will be deleted when you delete the particular appointment from the organization's recycle bin.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Appointments_Rescheduled_History__s/5545974000002324052"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

#### Possible Errors

- INVALID\_DATAHTTP 400



You have specified either an incorrect or an already deleted record ID.

**Solution:** Make a [GET Appointments Rescheduled History](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments-rescheduled-history.html) API call and provide a valid record ID.

- INVALID\_REQUEST\_METHODHTTP 400



You have given an invalid http request method type.

**Solution:** Use only the DELETE method in the request URL to access this API.

- REQUIRED\_PARAM\_MISSINGHTTP 400



You failed to specify the record ID, which has to be deleted.

**Solution:** Specify a record ID from the appointments rescheduled history in the request URL.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The access token you used has expired. Kindly refresh your token and retry.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You created the grant token using the wrong oauth scope.

**Solution:** Use either ZohoCRM.modules.appointments\_rescheduled\_history.DELETE or ZohoCRM.modules.appointments\_rescheduled\_history.ALL scope to create a new valid grant token.

- NO\_PERMISSIONHTTP 403



You do not have permission to delete any records from the appointments rescheduled history.

**Solution:** Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Check if you are trying to access the correct URL.

**Solution:** You have given an invalid request URL. Use either /Appointments\_Rescheduled\_History\_\_s?ids={record\_id} or /Appointments\_Rescheduled\_History\_\_s/{record\_id} endpoints in the request URL.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Solution:** Unexpected and unhandled exception in server. Please contact our support team.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5545974000002324052"\
            },\
            "message": "record deleted",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-appointments-rescheduled-history.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)