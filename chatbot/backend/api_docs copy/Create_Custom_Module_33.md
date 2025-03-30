
# Create Custom Module

#### Purpose

To create a new custom module in Zoho CRM.

#### Endpoints

[POST /settings/modules](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-module-api.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/modules

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.modules.CREATE (or)

scope = ZohoCRM.settings.modules.ALL  (or)

scope = ZohoCRM.settings.ALL

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/modules"
-X POST
-d "@input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Common Input JSON Keys

- plural\_labelstring, mandatory



Represents the unique plural name of the module. A maximum of **25** characters, including _spaces_, is allowed. Note that the value of this field should not be empty, and only _letters, numbers,_ and _spaces_ are supported.

- singular\_labelstring, mandatory



Represents the unique singular name of the module. A maximum of **25** characters, including _spaces_, is allowed. Note that the value of this field should not be empty, and only _letters, numbers,_ and _spaces_ are supported.

- profilesstring, mandatory



Specify the profiles that should have access to the module. It is mandatory to specify at least one profile.  Refer to the [GET Profiles API](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html) to retrieve the profiles available in your org.

- api\_namestring, optional



Represents the unique API name of the module. A maximum of **50 characters** are allowed which can include _alphabets_, _numbers_, spaces, and _underscore_.



- The API name should start with an **English alphabet** character.
- The API name should not end with an **underscore (\_)** and should not contain **two consecutive underscores (\_\_)**.

Note that if you skip this key, the system will generate the API name based on the value given in the plural\_label field.

- display\_fieldJSON object, optional



Represents the details of the display field of a module. There are two supported values for the " **display\_field**" key.



**Possible values:**



**autonumber** \- Use the autonumber data type when you want the display field to automatically generate a unique number sequence for each record. You can set the start number, prefix, and suffix for the auto-number sequence.



**text** \- Use the text data type when you want the display field to be a text field that users can manually enter values.



The following sections are specific to each data type. Note that by default the system will generate " **Text**" data type for the display field.


#### Input JSON Keys for "Auto Number" ("data\_type" : "autonumber")

- display\_fieldJSON object, optional



Represents the details of the display field of a module.



  - field\_labelstring, mandatory (either **field\_label** or **data\_type** is mandatory when you specify the display field)



    Represents the display name of the field.

  - data\_typestring, mandatory (either **data\_type** or **field\_label** is mandatory when you specify the display field)



    Represents the data type of the field.

  - auto\_numberJSON object, mandatory



    Contains the details of the auto number field.



    - start\_numberinteger, mandatory



      It specifies the starting number for the auto number sequence. A maximum of **16** digits are allowed, and only _numeric_ characters are allowed. Ensure there are no spaces in the key.

    - prefixstring, optional



      It represents the prefix value to be added to the _autonumber_ field value. A maximum of **50** characters are allowed, and only _alphanumeric_ characters are allowed.

    - suffixstring, optional



      It represents the suffix value to be added to the _autonumber_ field value. A maximum of **50** characters are allowed, and only _alphanumeric_ characters are allowed.

#### Input JSON Keys for "Text" ("data\_type" : "text")

- display\_fieldJSON object, optional



Represents the details of the display field of a module.



  - field\_labelstring, mandatory (either **field\_label** or **data\_type** is mandatory when you specify the display field)



    It represents the unique display label of the field.

  - data\_typestring, mandatory (either **data\_type** or **field\_label** is mandatory when you specify the display field)



    Represents the data type of the field.

**Notes**

- You can create **one** custom module in a single API call.
- You can create custom fields in the custom module using the [POST Custom Field API](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html).

#### Sample input for creating a module with a display label's datatype as "autonumber"

``` json
Copied{
    "modules": [\
        {\
            "plural_label": "Stocks",\
            "singular_label": "Stock",\
            "profiles": [\
                {\
                    "id": "2423488000000015972"\
                }\
            ],\
            "api_name": "stock",\
            "display_field": {\
                "field_label": "My name field label",\
                "data_type": "autonumber",\
                "auto_number": {\
                    "prefix": "ZOHOCRM",\
                    "start_number": "1003",\
                    "suffix": "BRANCH"\
                }\
            }\
        }\
    ]
}
```

#### Sample input for creating a module with a display label's datatype as "text"

``` json
Copied{
    "modules": [\
        {\
            "plural_label": "Zylkers",\
            "singular_label": "Zylker",\
            "profiles": [\
                {\
                    "id": "2423488000000015972"\
                }\
            ],\
            "display_field": {\
                "field_label": "Zylker",\
                "data_type": "text"\
            }\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



- The API name given seems to be invalid

**Resolution :** Specify a valid API name.
- Invalid data type for the field given in the request body

**Resolution :** Specify a valid data type for the field. Possible data types are " **autonumber**" or " **text**".
- The number of characters provided in either the **plural\_label** or **singular\_label** exceeds the allowed limits.

**Resolution :** The **singular\_label** and **plural\_label** keys allow a maximum of **25 characters each**.
- Invalid profile ID

**Resolution :** Specify a valid Profile ID.
- Special characters are found in the singular\_label or plural\_label

**Resolution :** Special characters are **not allowed** in the module **singular\_label** and **plural\_label** keys. Specify a valid value.
- System-defined keywords are not supported for either **plural\_label** or **singular\_label**

**Resolution :** Specify a valid name for the module.

The system-defined Keywords are CustomTab, CustomModule, Fileupload, Imageupload, General, Approvals, SalesInbox, Unsubscribe, CheckLists, Blueprints, ConsentForm, Datarequest, Organization, ZSURVEY, Role, Roles, Profile, Profiles, Report Folders, Report Folder, Blueprint Transitions, Blueprint States, Blueprint Logs, Blueprint Transition Logs, Blueprint State Logs Forecast Quotas, Forecast Items, Fiscal Periods, Forecast Quota, Forecast Item, Fiscal Period, Forecast Types, Forecast Type, Forecast Predictions, Forecast Prediction, Forecast Groups, Forecast Group, Locking Information, and LockingInformation.

- MANDATORY\_NOT\_FOUNDHTTP 400



Mandatory fields are missing

**Resolution:** Specify all the mandatory fields to create a custom module. Refer to the [Input JSON Keys](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-module-api.html#Input) section above.

- DUPLICATE\_DATAHTTP 400



- Duplicate values have been found for the singular\_label or plural\_label

**Resolution :** Specify a unique value.
- Duplicate value for the **api\_name** has been found

**Resolution :** Specify a unique API name.

- API\_NOT\_SUPPORTEDHTTP 400



The API is not supported for the requested version

**Resolution:** The API is supported in **version 6** and above. Try from a supported version.

- MINIMUM\_DATA\_NOT\_FOUNDHTTP 400



Minimum one profile is needed

**Resolution:** Assign atleast one profile to a created module. The **profile key** should not be empty or null.

- RESERVED\_KEYWORD\_NOT\_ALLOWEDHTTP 403



System-defined keywords given for api\_name key

**Resolution:** You have sepcified a system-defined keyword. Specify a valid name for the API name. The System-defined keywords are settings, signals, Last\_Follow\_Up\_By, Number\_Of\_Followups, Last\_Follow\_Up\_Time, First\_Follow\_Up\_By, First\_Follow\_Up\_Time, Notes, nearby\_distance\_\_s, Quoted\_Items, Discount\_Percentage\_\_s, Discount\_Type\_\_s, ChronologicalView, nearby\_distance\_\_s, Ordered\_Items, Discount\_Percentage\_\_s, ShiftHours, nearby\_distance\_\_s, Converted\_Account, Converted\_Contact, Converted\_Deal, Converted\_Potential, ChronologicalView, nearby\_distance\_\_s, Mailchimp, nearby\_distance\_\_s, Status, ChronologicalView.

- NOT\_SUPPORTEDHTTP 400



Module creation is not supported for the current edition

**Resolution:** To create a custom module, upgrade to **Enterprise edition or above.**

- LIMIT\_EXCEEDEDHTTP 400



Module creation limit has been reached for the current edition

**Resolution:** Upgrade to a higher edition to create more number of custom modules. See more [information](https://www.zoho.com/crm/help/complete-feature-list.html) about edition wise limits.

- EXPECTED\_FIELD\_MISSINGHTTP 400



One or more expected fields are missing.

**Resolution:** If the **display\_field** is specified in the request body, then specify at least any one of the following keys: **field\_label** and **data\_type**.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



One or more dependent keys are missing for the field you specified in the request body

**Resolution:** Refer to the [Input JSON Keys](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-module-api.html#Input) above to know the dependent keys.

- NO\_PERMISSIONHTTP 403



No permission to create custom module

**Resolution:** Contact the administrator.

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
            "message": "module created successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-module-api.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)