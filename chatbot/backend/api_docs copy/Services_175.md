
# Delete Services

#### Purpose

To delete existing services in your organization.

#### Endpoints

[DELETE /Services\_\_s?ids={service\_id1,service\_id2,...service\_id100}](https://www.zoho.com/crm/developer/docs/api/v7/delete-services.html)

[DELETE /Services\_\_s/{service\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-services.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Services\_\_s?ids={service\_id1,service\_id2,...service\_id100}

**To delete a specific service:**

{api-domain}/crm/{version}/Services\_\_s/{service\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.services.{operation\_type}

#### Possible operation types

ALL - Full access to services data

DELETE - Delete services data

#### Parameters

- idsstring, mandatory (only when deleting more than one service)



Specify the distinctive IDs of the services that have to be deleted.

You can obtain the service ID from [GET Services API](https://www.zoho.com/crm/developer/docs/api/v7/get-services.html).


**Note**

- You can delete a maximum of 100 services per API call.
- All the appointments related to the deleted service will defaultly get deleted.
- Deals created on completion of an appointment under the deleted service will not be deleted.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Services__s?ids=5545974000002109065,5545974000002109033,5545974000002109001"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The Service ID given in the request URL is either incorrect or already deleted.

**Solution:** Make a [GET Services API](https://www.zoho.com/crm/developer/docs/api/v7/get-services.html) call and provide a valid Service ID.

- INVALID\_REQUEST\_METHODHTTP 400



The given http request method type is invalid.

**Solution:** Use only the DELETE method in the request URL to access this API.

- REQUIRED\_PARAM\_MISSINGHTTP 400



You failed to specify the ID of the service which has to be deleted.

**Solution:** Specify the service ID in the request URL.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The token you used has expired. Kindly refresh your token and retry.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



The token you used has been created using the wrong oauth scope.

**Solution:** Use either ZohoCRM.modules.services.Delete or ZohoCRM.modules.services.ALL scope to create a new valid token.

- NO\_PERMISSIONHTTP 403



You do not have permission to delete any services.

**Solution:** Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Check if you are trying to access the correct URL.

**Solution:** You have given an invalid request URL. Use either /Services\_\_s?ids={service\_id1,service\_id2,...service\_id100} or /Services\_\_s/{service\_id} endpoints to provide a valid URL.

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
                "id": "5545974000002109065"\
            },\
            "message": "record deleted",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5545974000002109033"\
            },\
            "message": "record deleted",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5545974000002109001"\
            },\
            "message": "record deleted",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-services.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)