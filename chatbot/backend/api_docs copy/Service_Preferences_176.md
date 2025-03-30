
# Get Service Preferences

#### Purpose

To get the details of service preferences in your organization.

#### Endpoints

[GET /settings/service\_preferences](https://www.zoho.com/crm/developer/docs/api/v7/get-service-preferences.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/service\_preferences

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.modules.{operation\_type}

#### Possible operation types

ALL - Full access to service preferences data

READ - Retrieve service preferences

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/service_preferences"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

#### Response JSON Keys

- job\_sheet\_enabledBoolean



Denotes whether the job sheet is enabled for your organization.

**Possible Values**:

**true** \- Job Sheet is enabled. This is the default value.

**false** \- Job sheet is disabled.


#### Possible Errors

- API\_NOT\_SUPPORTEDHTTP 400



The API is not supported in this version.

**Solution:** This API is supported only from Version 3.

- INVALID\_REQUEST\_METHODHTTP 400



You have given an invalid http request method type.

**Solution:** Use only GET method in the request URL to access this API.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The access token you used has expired. Kindly refresh your token and retry.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You created the grant token using the wrong oauth scope.

**Solution:** Use either ZohoCRM.settings.modules.READ or ZohoCRM.settings.modules.ALL scope to create a new valid grant token.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Solution:** Unexpected and unhandled exception in the server. Please contact our support team.


#### Sample Response

``` json
Copied{
    "service_preferences": {
        "job_sheet_enabled": true
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-service-preferences.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)