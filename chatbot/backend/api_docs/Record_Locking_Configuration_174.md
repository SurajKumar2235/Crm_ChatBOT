
# Add Record Locking Configuration

#### Purpose

To add record locking configuration for different modules.

#### Endpoints

[POST /settings/record\_locking\_configurations?module={module\_API\_name}](https://www.zoho.com/crm/developer/docs/api/v7/add-record-locking-config.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/record\_locking\_configurations?module={module\_API\_name}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.record\_locking\_configurations.Create

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/record_locking_configurations?module=Leads"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X POST
-d "@addrecordlockconfig.json"
```

##### Parameters

- modulestring, mandatory



Specify the API name of the module for which you want to add record-locking configuration.


**Note**

- For custom modules, only those created by users will support record locking. Custom modules created through extensions, integrations, or other means are not supported.

#### Input JSON Keys

- lock\_typestring, mandatory



Represents the type of the record locking configuration.

**Possible values:** manual, automatic,both.

When lock type is automatic, records will be locked automatically if the specified criteria are matched on creating or updating records. When lock type is manual, users with lock permissions in their profile can lock records manually.

- locking\_rules JSON Array, mandatory when "lock\_type" is "both" or "automatic"



Specify the details of rules added to lock the records in the module automatically.



  - namestring, mandatory when "lock\_type" is "both" or "automatic"



    Specify the name of the record locking rule.

  - lock\_existing\_records boolean,optional



    Specify whether the existing record must be locked or not.

  - criteria JSON Object, mandatory when "lock\_type" is "both" or "automatic"



    Specifies the criteria for record locking rule.



- group\_operatorstring



Specifies the group operator used in the criteria

**Possible values:** AND, OR

- group JSON Array



Represents the group of criteria for the record locking rule.



- comparatorstring



Represents the comparison operator used in the criterion.

- fieldJSON Object



Represents the field details for the criteria.



- api\_namestring



Specifies the API name of the field.

- idlong



Specifies the ID of the field.


- value string



Specifies the value used in the criteria.
- locked\_for string, optional



Specify whether records are locked for all profiles or all profiles with a few exceptions.

**Possible values:** all\_profiles\_except\_excluded\_profile, all\_profiles.

**Default value:** all\_profiles.

- lock\_excluded\_profilesJSON Array,mandatory when locked\_for value is "all\_profiles\_except\_excluded\_profiles"



Represents the profiles that are restricted from locking.



  - api\_namestring



    Represents the API name of the profiles that are restricted from locking.

  - idlong



    Represents the ID of the profiles that are restricted from locking.
- excluded\_fields JSON Array, optional



Specify the fields that are excluded from record locking.



  - api\_namestring



    Specify the API name of the fields that are excluded from record locking.

  - idlong



    Specify the id of the fields that are excluded from record locking.
- feature\_typestring, optional



Specify the feature type of record locking configuration.

**Possible value:** record\_locking

- restricted\_actionsJSON Array, optional



Specify the actions that are restricted for locked records.

**Possible values:** update, tags, convert, delete, change\_owner

**Default value:** update

- lock\_for\_portal\_usersboolean, optional



Indicates whether locked records are restricted for portal users.

**Default value:** true

- restricted\_communicationsJSON Array, optional



Specifies types of communication that are restricted for locked records.

**Possible value:** send\_mail

- restricted\_custom\_buttonsJSON Array,optional



Represents the custom buttons that are restricted for locked records.



  - namestring



    Represents the API name of the custom buttons that are restricted for locked records.

  - idlong



    Represents the ID of the custom buttons that are restricted for locked records.

**Note**

- When only one of the API name or ID given in the criteria is valid, the record will be processed with the valid value.
- Edit action is always restricted in record locking configuration. i.e. **Restricted\_actions** always contains the value **update**.

#### Sample Input

``` json
Copied{
    "record_locking_configurations": [\
        {\
            "lock_type": "both",\
            "locking_rules": [\
                {\
                    "name": "Select leads lock",\
                    "lock_existing_records": false,\
                    "criteria": {\
                        "group_operator": "AND",\
                        "group": [\
                            {\
                                "comparator": "less_than",\
                                "field": {\
                                    "api_name": "Last_Activity_Time",\
                                    "id": "5843104000000052001"\
                                },\
                                "value": "2018-10-01T01:00:00+05:30"\
                            },\
                            {\
                                "comparator": "less_than",\
                                "field": {\
                                    "api_name": "Created_Time",\
                                    "id": "5843104000000002627"\
                                },\
                                "value": "2018-10-01T01:00:00+05:30"\
                            }\
                        ]\
                    }\
                }\
            ],\
           "locked_for": "all_profiles_except_excluded_profiles",\
            "lock_excluded_profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5843104000000026011"\
                }\
            ],\
            "excluded_fields": [\
                {\
                    "api_name": "Annual_Revenue",\
                    "id": "5843104000000002617"\
                }\
            ],\
            "feature_type": "record_locking",\
            "restricted_actions": [\
                "update",\
                "delete",\
                "change_owner"\
            ],\
            "lock_for_portal_users": true,\
            "restricted_communications": [\
                "send_mail"\
            ],\
            "system_defined": false,\
            "restricted_custom_buttons": [\
                {\
                    "name": "Send Doc",\
                    "id": "5843104000000485570"\
                }\
            ]\
        }\
    ]
}
```

#### Possible Errors

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameters is missing.

**Resolution:** The "details" key in the response gives the missing param in the request. Ensure that you include the params marked "mandatory" in the "Parameters" section.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid.

**Resolution:** Specify a valid module API name.

- NOT\_SUPPORTEDHTTP 400



- The given module is not supported.
- The API name given in the criteria is not supported.
- The value given in the criteria is not supported.
- For task module api\_name task status and value closed are the only accepted values. Any other criteria will throw this error.
- Field in criteria is not supported.
- Value in criteria is not supported.

**Resolution:** Specify corresponding supported values.

- FEATURE\_NOT\_SUPPORTEDHTTP 400



Record locking configuration is not supported in the user's current edition.

- INVALID\_DATAHTTP 400



- The API name specified in record locking rule criteria is invalid.
- The **feature\_type** is not **record\_locking**.
- Value given in the request body for restricted\_communications is invalid.Valid values are **send\_mail, send\_survery, send\_portal\_invitation**.
- Value given in the request body for restricted\_actions is invalid.Valid values are **convert, update, delete, change\_owner, tags**.
- Value given for **restricted\_button** is invalid.
- Value given in the request body for lock\_type is invalid.Valid values are **manual, automatic or both**.
- Value given in the request body for **locked\_for** is invalid.Valid values are **all\_profiles** or **all\_profiles\_except\_excluded\_profiles**.
- Value given for **lock\_excluded\_profiles** is invalid.
- Value given for **excluded\_fields** is invalid.

**Resolution:** Specify corresponding valid values in the request

- LIMIT\_EXCEEDEDHTTP 400



- The maximum limit for locking rules is exceeded.
- The maximum limit for custom buttons is exceeded.
- The maximum limit for excluded fields is exceeded.
- The maximum limit for excluded profiles is exceeded.
- When you try to add locking rule configuration but it is already configured.

**Resolution:** Refer to the "details" key in the response to know the available\_limit and modify the request body.

- MANDATORY\_NOT\_FOUNDHTTP 400



The mandatory field **lock\_type** is not present.



**Resolution:** Provide the mandatory fields in the request body.

- EXPECTED\_FIELD\_MISSINGHTTP 400





The id or api\_name of field is missing in criteria for the record locking rule.

**Resolution:** Give criteria with necessary fields.

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400





The id and api\_name of field in criteria for the record locking rule belongs to different fields.

**Resolution:** Give criteria with the correct api\_name and id.

- DEPENDENT\_FIELD\_MISSINGHTTP 400





- The key 'locking\_rules' is not given in the request body when "lock\_type" is "both" or "automatic".
- The key "lock\_excluded\_profiles" is not given in the request body when locked\_for value is "all\_profiles\_except\_excluded\_profiles".

**Resolution:** Give the dependent field in the request body.

- DUPLICATE\_DATAHTTP 400





- Duplicate value is found in criteria.
- Duplicate value is found in rule name.

**Resolution:** Give unique values for the corresponding fields.

- INVALID\_REQUEST\_METHODHTTP 403



The http request method type is not a valid one.

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- NO\_PERMISSIONHTTP 403



Permission denied to customize record lock configurations. The user do not have permission.

**Resolution:** Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error.

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "record_locking_configurations": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5843104000000758004"\
            },\
            "message": "record locking configuration created successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/add-record-locking-config.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)