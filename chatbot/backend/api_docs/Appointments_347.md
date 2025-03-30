
# Delete Appointments

#### Purpose

To delete existing appointments in your organization.

#### Endpoints

[DELETE /Appointments\_\_s?ids={appointment\_id1,appointment\_id2,...appointment\_id100}](https://www.zoho.com/crm/developer/docs/api/v7/delete-appointments.html)

[DELETE /Appointments\_\_s/{appointment\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-appointments.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Appointments\_\_s?ids={appointment\_id1,appointment\_id2,...appointment\_id100}

**To delete a specific appointment:**

{api-domain}/crm/{version}/Appointments\_\_s/{appointment\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.appointments.{operation\_type}

#### Possible operation types

ALL - Full access to appointments data

DELETE - Delete appointments data

#### Parameters

- idsstring, mandatory (only when deleting more than one appointment)



Specify the distinctive IDs of the appointments that have to be deleted.

You can obtain the appointment ID from [GET Appointments API](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html).


**Note**

- You can delete a maximum of 100 appointments per API call.
- This API will not delete the deals created on completion of appointments.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Appointments__s?ids=5545974000002140053,5545974000002140009"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



You have given an invalid appointment ID in the request URL which is either incorrect or already deleted.

**Solution:** Make a [GET Appointments API](https://www.zoho.com/crm/developer/docs/api/v7/get-appointments.html) call and provide a valid appointment ID.

- INVALID\_REQUEST\_METHODHTTP 400



You have given an invalid http request method type.

**Solution:** Use only the DELETE method in the request URL to access this API.

- REQUIRED\_PARAM\_MISSINGHTTP 400



You have failed to specify the ID of appointment which has to be deleted.

**Solution:** Specify the appointment ID in the request URL.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The access token you used has expired. Kindly refresh your token and retry.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You created the grant token using the wrong oauth scope.

**Solution:** Use either ZohoCRM.modules.appointments.DELETE or ZohoCRM.modules.appointments.ALL scope to create a new valid grant token.

- NO\_PERMISSIONHTTP 403



You do not have permission to delete any appointments.

**Solution:** Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Check if you are trying to access the correct URL.

**Solution:** You have given an invalid request URL. Check the endpoints section above and provide a valid URL.

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
                "id": "5545974000002140053"\
            },\
            "message": "record deleted",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5545974000002140009"\
            },\
            "message": "record deleted",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-appointments.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)