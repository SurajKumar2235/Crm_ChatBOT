
The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name. Refer to the possible module names section above.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.DELETE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to delete images

**Resolution:** The user does not have permission to delete images. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to delete images

**Resolution:** The user does not have the permission to delete images. Contact your system administrator.

- INVALID\_DATAHTTP 400



the id given seems to be invalid

**Resolution:** The record ID specified in the URL is invalid. Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get valid record IDs.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.


#### Sample Response

``` json
Copied{
    "code": "SUCCESS",
    "details": {},
    "message": "Photo deleted",
    "status": "success"
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-image.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)