
# Update Custom Module

#### Purpose

To update a custom module in your Zoho CRM.

#### Endpoints

[PUT /settings/modules/{module\_id}](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-module-api.html)

[PUT /settings/modules/{module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-module-api.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/modules/{module\_id}    (or)

{api-domain}/crm/{version}/settings/modules/{module\_api\_name}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.modules.UPDATE   (or)

scope = ZohoCRM.settings.modules.ALL   (or)

scope = ZohoCRM.settings.ALL

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/modules/2423488000000834002"
-X PUT
-d "@input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Input JSON Keys

- plural\_labelstring, mandatory



Represents the unique plural name of the module. A maximum of **25** characters, including _spaces_, is allowed. Note that the value of this field should not be empty, and only _letters, numbers,_ and _spaces_ are supported.

- singular\_labelstring, mandatory



Represents the unique singular name of the module. A maximum of **25** characters, including _spaces_, is allowed. Note that the value of this field should not be empty, and only _letters, numbers,_ and _spaces_ are supported.

- profilesstring, mandatory



Specify the profiles that should have access to the module. It is mandatory to specify at least one profile.  Refer to the [GET Profiles API](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html) to retrieve the profiles available in your org.


**Notes**

- The module API name can be updated  only through the **UI**.
- To create or update custom modules, you need  the **Enterprise** edition or higher.
- You can update **one** module in a single API call.
- Assign at least **one** profile to each module.

#### Sample Input

``` json
Copied{
    "modules": [\
        {\
             "plural_label": "Digital Marketings",\
             "singular_label": "Digital Marketing",\
\
            "profiles": [\
                {\
                    "id": "2423488000000015972",\
                      "_delete": null\
                },\
\
                {\
                    "id": "2423488000000015975"\
                }\
\
        ]\
    }\
]
}
```

#### Possible Errors

- INVALID\_MODULEHTTP 400



The URL contains invalid module data

**Resolution:** Specify the correct API name or module ID in the URL. Refer to the [GET Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to retrieve the module details.

- NOT\_ALLOWEDHTTP 400



API name cannot be updated for module

**Resolution:** The module API name can be updated  only through the UI.

- MINIMUM\_DATA\_NOT\_FOUNDHTTP 400



Minimum one profile is needed

**Resolution:** The profile key should not be _empty_ or _null_. Assign atleast one profile to update a module.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to update a custom module. Create a new token with the required scopes. Refer to scope section above.

- MANDATORY\_NOT\_FOUNDHTTP 400



Mandatory fields are missing

**Resolution:** Specify all the mandatory fields to create a custom module. Refer to the above [Input JSON Keys](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-module-api.html#Input).

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "modules": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "2423488000000834002"\
            },\
            "message": "module updated successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-module-api.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)