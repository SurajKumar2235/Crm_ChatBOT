
# Enable Duplicate Check Option

#### Purpose

To enable the [**Duplicate Check Preference**](https://help.zoho.com/portal/en/kb/crm/manage-crm-data/duplication-management/articles/check-duplicate-records) in the Leads module.

You can enable the Duplicate Check Preference option in the UI by following steps:

1. Go to **Setup**.
2. Select **Customization**.
3. Choose **Modules and Fields**.
4. Click on the **Leads** module.
5. **Right-click** the **Leads** module and enable the **Duplicate Check Preference** option.

There are **two** types you can configure the **Duplicate Check Preference** :

i. Converted Leads (converted\_records)

ii. Contacts (mapped\_module\_records)

[POST /settings/duplicate\_check\_preference?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/enable-duplicate-record-check.html)

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

CREATE - Enable duplicate record check preference

#### Supported module

Leads

#### Parameter

- modulestring, mandatory



Represents the module API name where you want to enable the duplicate check preference. **Supported module:** Leads.



To avoid duplicate entries, check for duplicates in the **Leads** module using unique field values. In the **Contacts** module, **map the unique fields** from the Leads module with the unique fields in the Contacts module to cross-check for duplicate records in the org.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/duplicate_check_preference?module=Leads"
-X POST
-d "@input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxd"

```

#### Input JSON Keys for the "type" : "converted\_records" (Converted Leads)

The system will always check for duplicates on all the Leads using the unique fields. By selecting this option, the duplicates will be checked on all the Converted Leads as well. This configuration is applicable across all the layouts.

![modules_API_changes](https://www.zohowebstatic.com/sites/zweb/images/crm/img/converted_records.gif)

- duplicate\_check\_preferenceJSON object, mandatory



Represents the duplicate record check preference details in the Leads module.



  - typestring, mandatory



    Represents the type of duplicate record check preference. Here, it is " **converted\_records**" i.e., Converted Leads.

#### Sample Input to enable Duplicate check preference for the "type":"Converted Record"

``` json
Copied{
    "duplicate_check_preference": {
        "type": "converted_records",
    }
}
```

#### Sample Response

``` json
Copied{
    "duplicate_check_preference": {
        "code": "SUCCESS",
        "details": {},
        "message": "Duplicate check enabled for converted_records successfully.",
        "status": "success"
    }
}
```

#### Input JSON Keys for the "type" : "mapped\_module\_records" (Contacts)

By selecting this option, the system will check for duplicates  in the **Contacts** module using mapped fields.

![modules_API_changes](https://www.zohowebstatic.com/sites/zweb/images/crm/img/contacts_1.gif)

- duplicate\_check\_preferenceJSON object



Represents the details of the duplicate record check preference in the "Contacts" module.

- typestring, mandatory



Represents the type of duplicate record check preference. Here, it is " **mapped\_module\_records**"  i.e., Contacts.

- type\_configurationsJSON array, mandatory



Represents the configuration type.



  - field\_mappingJSON array, mandatory



    Represents the unique fields mapping in **Leads** and **Contacts** modules.



    - current\_fieldJSON object, mandatory



      Represents the unique fields in the **Leads** module that are mapped to the unique fields in the **Contacts** module.



      - api\_namestring, mandatory(either ID or or API name of the unique field is mandatory to map unique fields)



        Represents the **API name of the unique field** in the Leads module. Use the [GET Fields Metadata](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html)  to retrieve the API names of the unique fields.

      - idstring, mandatory(either ID or or API name of the unique field is mandatory to map unique fields)



        Represents the **ID of the unique field** in the Leads module. Use the [GET Fields Metadata](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html)  to retrieve IDs of the unique fields.
    - mapped\_fieldJSON object, mandatory



      Represents the unique fields in the Contacts module to which the unique fields in the Leads module are mapped to.



      - api\_namestring, mandatory(either ID or or API name of the unique field is mandatory to map unique fields)



        Represents the **API name of the unique field** in the Contacts module. Use the [GET Fields Metadata](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html)  to retrieve the API names of the unique fields.

      - idstring, mandatory(either ID or or API name of the unique field is mandatory to map unique fields)



        Represents the **ID of the unique** field in the Contacts module. Use the [GET Fields Metadata](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html)  to retrieve IDs of the unique fields.
  - mapped\_moduleJSON object, mandatory



    Represents the details of the mapped module i.e., the module to which the unique fields in the Leads module are mapped to. In this case, Contacts module.



    - api\_namestring, mandatory (either ID or or API name of the unique field is mandatory to map unique fields)



      Represents the **API name of the mapped module**. Use the [GET Module Metadata](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html) to retrieve the _API name_ of the mapped module. (API name of the Contacts module)

    - idstring, mandatory (either ID or or API name of the unique field is mandatory to map unique fields)



      Represents the **ID of the mapped module**. Use the [GET Module Metadata](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html) to retrieve the ID of the mapped module (ID of the Contacts module).

#### Sample Input to enable Duplicate check preference for the "type" : "Mapped Module Records"

``` json
Copied{
    "duplicate_check_preference": {
        "type": "mapped_module_records",
        "type_configurations": [\
            {\
                "field_mappings": [\
                    {\
                        "current_field": {\
                            "api_name": "Email",\
                            "id": "2276164000000000563"\
                        },\
                        "mapped_field": {\
                            "api_name": "Email",\
                            "id": "2276164000000000449"\
                        }\
                    }\
                ],\
                "mapped_module": {\
                    "api_name": "Contacts",\
                    "id": "2423488000000000129"\
                }\
            }\
        ]
    }
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



- The module API names given in the input seem to be invalid

**Resolution :** Specify a valid module API name. Use the [GET Module Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html) to retrieve module API names.
- The given field IDs or API names seem to be invalid

**Resolution :** Specify valid unique IDs or API names of the unique fields, using the [GET - Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html).
- The given field IDs or API names seem to be invalid

**Resolution :** Specify the correct IDs or API names of the unique and other fields. Retrieve those details using the [GET Module Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html) and [GET Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html).
- Invalid data

**Resolutions :**
  - Specify valid _values_ for the **mapped\_field**, **mapped\_module**, and **current\_field** keys. Refer to the [Sample Input section](https://www.zoho.com/crm/developer/docs/api/v7/enable-duplicate-record-check.html#input) above.
  - Specify valid _data types_ for the **mapped\_field, mapped\_module**, and **current\_field** keys, and their respective fields. Refer to the [Sample Input section](https://www.zoho.com/crm/developer/docs/api/v7/enable-duplicate-record-check.html#input) above.

- NOT\_SUPPORTEDHTTP 400



This API does not support the specified module

**Resolution:** Specify the supported module. **Supported Module :** Leads

- ALREADY\_CONFIGUREDHTTP 400



Already configured

**Resolution:** The duplicate check preference you are trying to enable is already configured.

- FEATURE\_NOT\_SUPPORTEDHTTP 400



Feature not supported for the module specified in the "mapped\_module" key

**Resolution:** Please specify a valid module. **Supported Module :** Contacts

- NOT\_ALLOWEDHTTP 400



The specified API names or IDs of the unique fields for mapping are not valid unique field API names

**Resolutions:**



- Specify only the unique fields for mapping.
- Specify only the IDs or API names of unique fields, using the [GET - Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html).

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



- Ambiguity while processing the request

**Resolution:** Verify input fields before sending the request. Refer to the [Sample Input section](https://www.zoho.com/crm/developer/docs/api/v7/enable-duplicate-record-check.html#input) above.
- Two different CRM fields are found

**Resolution:** The fields you are trying to map seem to be different. Map only the valid unique fields.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



Dependent fields missing

**Resolutions:**



- Specify all mandatory fields. Refer to the [Sample Input section](https://www.zoho.com/crm/developer/docs/api/v7/enable-duplicate-record-check.html#input) above.
- To configure the duplicate check option for Contacts or mapped\_module\_records, it is mandatory to use the "type\_configurations" JSON array to map unique fields. Refer to the [Sample Input section](https://www.zoho.com/crm/developer/docs/api/v7/enable-duplicate-record-check.html#input) above.

- MANDATORY\_NOT\_FOUND HTTP 400



Mandatory fields are missing

**Resolution:** Specify all mandatory fields. Refer to the Sample Input sections above.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to the endpoints section above.

- EXPECTED\_FIELD\_MISSINGHTTP 400



One or more expected fields missing

**Resolution:** Specify all required fields. Refer to the sample input section above.

- REQUIRED\_PARAM\_MISSING HTTP 400



Required parameter is missing

**Resolutions:**



Specify the module API name in which you are trying to enable duplicate check option. Supported module : Leads.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to enable duplicate record check option. Create a new token with the required scopes. Refer to the scope section above.

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


#### Sample Response

``` json
Copied{
    "duplicate_check_preference": {
        "code": "SUCCESS",
        "details": {},
        "message": "Duplicate check enabled for mapped_module_records successfully.",
        "status": "success"
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/enable-duplicate-record-check.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)