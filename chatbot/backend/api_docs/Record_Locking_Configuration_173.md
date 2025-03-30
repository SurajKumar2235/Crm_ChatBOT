
# Record Locking Configuration APIs

Record locking configuration allows you to set up the configuration needed to lock the records in modules manually or automatically when certain conditions are met.

### GET Record Locking Configuration

##### Purpose

To retrieve the record locking configuration for different modules.

#### Endpoints

[GET /settings/record\_locking\_configurations?module={module\_API\_name}](https://www.zoho.com/crm/developer/docs/api/v7/get-record-locking-config.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/record\_locking\_configurations?module={module\_API\_name}

##### Supported modules

Leads, Accounts, Contacts, Deals, Tasks, Cases, Solutions, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom

**Note**

- For custom modules, only those created by users will support record locking. Custom modules created through extensions, integrations, or other means are not supported.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.record\_locking\_configurations.Read

(or)

scope=ZohoCRM.settings.record\_locking\_configurations.ALL

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/record_locking_configurations?module=Leads"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X GET
```

##### Parameters

- modulestring, mandatory



Specify the API name of the required module to retrieve record-locking configuration with respect to that module.

- feature\_typestring, optional



Use this parameter for filtering the required record-locking configurations.

**Possible values:** record\_locking


#### Response JSON Keys

- created\_time string



Represents the date and time at which the record-locking configuration was created.

- locked\_for string



Represents whether records are locked for all profiles or all profiles with a few exceptions.

**Possible values:** all\_profiles\_except\_excluded\_profile, all\_profiles

- excluded\_fieldsJSON Array



Represents the fields that are excluded from record locking



  - api\_namestring



    Represents the API name of the fields that are excluded from record locking.

  - id long



    Represents the ID of the fields that are excluded from record locking.
- created\_byJSON Object



Represents the name and ID of the user who created the record locking configuration.



  - name string



    Represents the name of the user who created the record locking configuration.

  - idlong



    Represents the ID of the user who created the record locking configuration.
- feature\_typestring



Represents the feature type of record locking configuration.

- locking\_rules JSON Array



Represents the details of rules added to lock the records in the module automatically.



  - namestring



    Represents the name of the record locking rule

  - idlong



    Represents the ID of the record locking rule.

  - lock\_existing\_recordsboolean



    Indicates whether the existing record must be locked or not.

  - criteriaJSON Object



    Specifies the criteria for record locking rule.



- group\_operatorstring



Specifies the group operator used in the criteria.

**Possible values:** AND,OR

- groupJSON Array



Represents the group of criteria for the record locking rule.



- comparatorstring



Represents the comparison operator used in the criteria.

- fieldJSON Object



Represents the field details for the criteria.



- api\_namestring



Specifies the API name of the field.

- idlong



Specifies the ID of the field.


- valuestring



Specifies the value used in the criteria.
- restricted\_actionsJSON Array



Specifies the actions that are restricted for locked records.

- lock\_for\_portal\_usersboolean



Indicates whether locked records are restricted for portal users as well.

- modified\_timestring



Represents the date and time at which the record-locking configuration was modified.

- restricted\_communicationsJSON Array



Specifies types of communication that are restricted for locked records.

- system\_definedboolean



Indicates whether the record configurations are system defined.

- modified\_byJSON Object



Represents the name and ID of the user who modified the record locking configuration.



  - name string



    Represents the name of the user who modified the record locking configuration

  - idlong



    Represents the ID of the user who modified the record locking configuration.
- lock\_typestring



Represents the type of the record locking configuration.

**Possible values:** manual, automatic,both

When lock type is automatic, records will be locked automatically when the criteria for locking is matched. When lock type is manual, users with lock permissions in their profile can lock records manually.

- restricted\_custom\_buttonsJSON Array



Represents the custom buttons that are restricted for locked records.



  - namestring



    Represents the API name of the custom buttons that are restricted for locked records.

  - idlong



    Represents the ID of the custom buttons that are restricted for locked records.
- lock\_excluded\_profilesJSON Array



Represents the profiles that are restricted from locking.



  - api\_namestring



    Represents the API name of the profiles that are restricted from locking.

  - idlong



    Represents the ID of the profiles that are restricted from locking.

#### Possible Errors

- NO\_CONTENTHTTP 204



Record locking configuration is not configured in your org.

**Resolution:** Configure record locking configuration in your org.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameters is missing.

**Resolution:** The "details" key in the response gives the missing param in the request. Ensure that you include the params marked "mandatory" in the "Parameters" section.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid.

**Resolution:** Specify a valid module API name.

- NOT\_SUPPORTEDHTTP 400



The module name given is not supported for the feature.

**Resolution:** Specify a supported module API name.

- INVALID\_DATAHTTP 400



The id given seems to be invalid.

**Resolution:** Specify a valid record config id.

- FEATURE\_NOT\_SUPPORTEDHTTP 400



Record Locking Configuration is not supported in your edition.

**Resolution:** Contact your administrator.

- INVALID\_REQUEST\_METHODHTTP 403



The http request method type is not a valid one.

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error.

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "record_locking_configurations": [\
        {\
            "created_time": "2023-08-26T18:11:14-04:00",\
            "locked_for": "all_profiles",\
            "excluded_fields": [\
                {\
                    "api_name": "Description",\
                    "id": "5843104000000002645"\
                }\
            ],\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5843104000000424672"\
            },\
            "feature_type": "record_locking",\
            "locking_rules": [\
                {\
                    "name": "lead conversion rule",\
                    "id": "5843104000000820017",\
                    "lock_existing_records": false,\
                    "criteria": {\
                        "comparator": "greater_than",\
                        "field": {\
                            "api_name": "Lead_Conversion_Time",\
                            "id": "5843104000000280013"\
                        },\
                        "value": "10"\
                    }\
                },\
                {\
                    "name": "Last activity rule",\
                    "id": "5843104000000820018",\
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
                                "value": "2018-09-01T01:00:00-04:00"\
                            },\
                            {\
                                "comparator": "less_than",\
                                "field": {\
                                    "api_name": "Created_Time",\
                                    "id": "5843104000000002627"\
                                },\
                                "value": "2018-09-01T01:00:00-04:00"\
                            }\
                        ]\
                    }\
                }\
            ],\
            "restricted_actions": [\
                "update",\
                "tags",\
                "convert",\
                "delete",\
                "change_owner"\
            ],\
            "lock_for_portal_users": true,\
            "modified_time": "2023-09-07T22:31:35-04:00",\
            "restricted_communications": [\
                "send_mail"\
            ],\
            "system_defined": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "5843104000000424672"\
            },\
            "id": "5843104000000758004",\
            "lock_type": "both",\
            "restricted_custom_buttons": [\
                {\
                    "name": "Send with Zoho Sign",\
                    "id": "5843104000000485570"\
                },\
                {\
                    "name": "Send with Zoho Sign",\
                    "id": "5843104000000485606"\
                }\
            ],\
            "lock_excluded_profiles": null\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-record-locking-config.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)