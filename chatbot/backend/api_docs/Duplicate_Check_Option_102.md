
# Disable Duplicate Check Option

#### Purpose

To **disable** the **Duplicate Check Preference** option.

#### Endpoints

[DELETE /settings/duplicate\_check\_preference?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/disable-duplicate-record-check.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/duplicate\_check\_preference

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.ALL  (or)

scope = ZohoCRM.settings.duplicate\_check\_preference.{operation\_type}

#### Possible operation types

ALL - Full data access

DELETE - Disable duplicate record check preference

#### Supported module

Leads

#### Parameter

- modulestring, mandatory



Specify the API name of the Leads module to disable the **"Duplicate Check Preference"** option. **Supported module:** Leads.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/duplicate_check_preference?module=Leads"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxd"
```

#### Possible Errors

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- NOT\_SUPPORTEDHTTP 400



This API does not support the given module

**Resolution:** Please specify the supported module. **Supported Module :** Leads

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to disable duplicate check preference option. Create a new token with the required scopes. Refer to the scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- FEATURE\_NOT\_SUPPORTEDHTTP 400



Feature not enabled

**Resolution:** Enable the Duplicate Check Preference Option, using the [Enable Duplicate Record Check Option API](https://www.zoho.com/crm/developer/docs/api/v7/enable-duplicate-record-check.html).

- NO\_PERMISSIONHTTP 403



No permission to access the module

**Resolution:** Contact the administrator.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Referto the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response for disabling Duplicate Check Preference Option for "Converted Leads"

``` json
Copied{
    "duplicate_check_preference": {
        "code": "SUCCESS",
        "details": {},
        "message": "Duplicate check disabled for converted_records successfully.",
        "status": "success"
    }
}
```

#### Sample Response for disabling Duplicate Check Preference Option for "Contacts"

``` json
Copied{
    "duplicate_check_preference": {
        "code": "SUCCESS",
        "details": {},
        "message": "Duplicate check disabled for mapped_module_records successfully.",
        "status": "success"
    }
}

```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/disable-duplicate-record-check.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)