

You have specified an invalid value for the job\_sheet\_enabled key.

**Solution:** The datatype of job\_sheet\_enabled key is Boolean and the only possible values are **true** and **false**.

- INVALID\_REQUEST\_METHODHTTP 400



You have given an invalid http request method type.

**Solution:** Use only PUT method in the request input to access this API.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The access token you used has expired. Kindly refresh your token and retry.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You created the grant token using the wrong oauth scope.

**Solution:** Use either ZohoCRM.settings.modules.UPDATE or ZohoCRM.settings.modules.ALL scope to create a new valid grant token.

- NO\_PERMISSIONHTTP 403



You do not have permission to update service preferences.

**Solution:** Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Solution:** Unexpected and unhandled exception in the server. Please contact our support team.


#### Sample Response

``` json
Copied{
    "service_preferences": {
        "code": "SUCCESS",
        "details": {},
        "message": "Services preferences updated successfully",
        "status": "success"
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-service-preferences.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)