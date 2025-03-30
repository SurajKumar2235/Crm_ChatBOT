
# Get Duplicate Check Option

#### Purpose

To **retrieve** the **Duplicate Check Preference Options** configured in your account.

#### Endpoints

[GET /settings/duplicate\_check\_preference?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/get-duplicate-record-check.html)

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

READ - Get duplicate record check preference

#### Supported module

Leads

#### Parameter

- modulestring, mandatory



Represents the module whose Duplicate Check Preference details you want to retrieve.  **Supported module:** Leads.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/duplicate_check_preference?module=Leads"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxd"
```

#### Response JSON Keys

You can retrieve the following Duplicate Check Preference configurations:

- **converted\_records**(Converted Leads in UI) - The system will always check for duplicates on all the Leads using the unique fields (e.g., Email).
- **mapped\_module\_records** (Contacts in UI) - The system will check for duplicates  in the Contacts module using mapped fields.

#### Response JSON Keys for the "type" : "converted\_records" (Converted Leads)

- duplicate\_check\_preferenceJSON object



Represents the duplicate record check preference details in the Leads module.



  - typestring



    Represents the type of duplicate record check preference. Here, it is " **converted\_records**" i.e., Converted Leads.

  - type\_configurationsJSON array



    Represents the configuration type.

#### Response JSON Keys for the "type" : "mapped\_module\_records" (Contacts)

If the duplicate check preference is enabled for Contacts (mapped\_module\_records), the response will be as below.

- duplicate\_check\_preferenceJSON object



Represents the details of the duplicate record check preference in the "Contacts" module.

- typestring



Represents the type of duplicate record check preference. Here, it is " **mapped\_module\_records**"  i.e., Contacts.

- type\_configurationsJSON array



Represents the configuration type.



  - field\_mappingJSON array



    Represents the unique fields mapping in **Leads** and **Contacts** modules.



    - current\_fieldJSON object



      Represents the unique fields in the **Leads** module that are mapped to the unique fields in the **Contacts** module.



      - api\_namestring, mandatory



        Represents the **API name of the unique field** in the Leads module.

      - idstring



        Represents the **ID of the unique field** in the Leads module.
    - mapped\_fieldJSON object



      Represents the unique fields in the Contacts module to which the unique fields in the **Leads** module are mapped to.



      - api\_namestring



        Represents the **API name of the unique field** in the Contacts module.

      - idstring



        Represents the **ID of the unique** field in the Contacts module.
  - mapped\_moduleJSON object



    Represents the details of the mapped module i.e., the module to which the unique fields in the Leads module are mapped to. In this case, **Contacts** module.



    - api\_namestring



      Represents the **API name of the mapped module**.

    - idstring



      Represents the **ID of the mapped module**.

#### Possible Errors

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- NOT\_SUPPORTEDHTTP 400



The API does not support the specified module

**Resolution:** Please specify a valid module. **Supported Module :** Leads

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to retrieve duplicate check preference option. Create a new token with the required scopes. Refer to the scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- NO\_PERMISSIONHTTP 403



No permission to access the module

**Resolution:** Contact the administrator.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Referto the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample response for the "type" : "converted\_records"

``` json
Copied{
    "duplicate_check_preference": {
        "type": "converted_records",
        "type_configurations": null
    }
}

```

#### Sample response for the "type" : "mapped\_module\_records"

``` json
Copied{
    "duplicate_check_preference": {
        "type": "mapped_module_records",
        "type_configurations": [\
            {\
                "field_mappings": [\
                    {\
                        "mapped_field": {\
                            "api_name": "Email",\
                            "name": "Contacts",\
                            "id": "2423488000000000449"\
                        },\
                        "current_field": {\
                            "api_name": "Email",\
                            "name": "Leads",\
                            "id": "2423488000000000563"\
                        }\
                    }\
                ],\
                "mapped_module": {\
                    "api_name": "Contacts",\
                    "name": "Contacts",\
                    "id": "2423488000000000129"\
                }\
            }\
        ]
    }
}

```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-duplicate-record-check.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)