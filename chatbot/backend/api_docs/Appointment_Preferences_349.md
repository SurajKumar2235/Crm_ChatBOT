

# Update Appointment Preferences

#### Purpose

To update the appointment preferences in your organization.

#### Endpoints

[PUT /settings/appointment\_preferences](https://www.zoho.com/crm/developer/docs/api/v7/update-appointment-preferences.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/appointment\_preferences

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.modules.{operation\_type}

#### Possible operation types

ALL - Full access to appointment preferences data

UPDATE - Update appointment preferences

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/appointment_preferences"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Request JSON Keys

- allow\_booking\_outside\_service\_availabilityBoolean, optional



Denotes if you can create appointments outside service availability.

Possible Values:

**true**: You can create appointments outside service availability.

**false**: You cannot create appointments outside service availability.

- allow\_booking\_outside\_businesshoursBoolean, optional



Denotes if you can create appointments outside business hours. You can configure this preference only when **allow\_booking\_outside\_service\_availability:true**.

Possible Values:

**true**: You can create appointments outside business hours.

**false**: You cannot create appointments outside business hours.

- when\_duration\_exceedsString, optional



Represents who has to mark the appointment as 'Completed' when the service duration gets over.

Possible Values:

**ask\_appointment\_provider\_to\_complete** \- User have to manually mark the appointment as 'completed'.

**mark\_as\_complete** \- The appointment is automatically marked as 'completed'.

- show\_job\_sheetBoolean, optional



Represents whether filling out the job sheet is mandatory for marking an appointment as 'completed'. You can mandate job sheets only when **when\_duration\_exceeds: ask\_appointment\_provider\_to\_complete**.

Possible Values:

**true**: Job sheet is mandatory for appointment completion.

**false**: Job sheet is not mandatory for appointment completion.

- when\_appointment\_completedString, optional



Represents whether a deal has to be created, when an appointment is completed.

Possible Values:

**create\_deal** \- Deal is created when any appointment is marked 'Completed'.

**do\_not\_create\_deal** \- Deal is not created when any appointment is marked 'Completed'.

- deal\_record\_configurationJSON object, mandatory for deal creation



Contains the field mappings and layout details for record configuration in the Deals from Appointments module. The key is mandatory when **when\_appointment\_completed:create\_deal**.



- **layout** _(JSON object, mandatory)_ \- Contains the Deals layout ID and name of the layout to which you want to map the appointment fields. You can get these details from [Layouts Metadata](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html) API.
- **field\_mappings** _(JSON array, mandatory)_ \- Contain the fields from Deals module which have to be mapped with Appointments and Services module fields to create deals automatically when an application is completed. This field mapping is bounded to the specified layout and you have to create a new field mapping for different layouts. **Deal\_Name, Account\_Name, Closing\_Date, Pipeline and Stage** fields are mandatory for field\_mappings.
  - **field** _(JSON object, mandatory)_ \- Represents the API name and ID of the field present in the Deals module that you want to fill in using the data from the Appointments module. Refer to the [Fields Metadata](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) API to get the list of fields available in a module. Ensure that you do not feed an invalid field API name or the ID as it will throw an error.
  - **type** _(string, mandatory)_ \- The Deals field can either be merged with the Appointments field or made a static field.

    Possible Values:

    **merge\_field** \- The Appointments field values are mapped to the Deals field values.

    **static** \- The values given in this type are standard for all the deals.
  - **value** _(string, mandatory)_ \- Denotes the value of the Deals fields. The value is different for each specified type.

    **Value for merge\_field**: The datatype of this value is a string. To merge any field from a module, it should be specified like this **${module\_api\_name.field\_api\_name}**.

    Example: ${Appointments\_\_s.Appointment\_Name}

    **Value for static**: The datatype of this value is a JSON object. It contains the name and ID of the entity.

    When you want to give static values that look up to a different module, make a GET API call of the specific module and provide the relevant ID and name of the record. You can also give standard text values enclosed in a string.

**Note**

- The system-defined field mappings are specified below. This mapping cannot be changed and it is a read-only field.
  - **Amount** \- The amount field in the Deals module is mapped with the Price field in the Services module.
  - **Closing\_Date** \- The closing date field in the Deals module is mapped with the Appointment\_Start\_Time field in the Appointments module.
- **"when\_duration\_exceeds":"ask\_appointment\_provider\_to\_complete"** is the default Appointment preference for any organization.
- A few fields are given default field mappings and are listed below.
  - **Owner** \- Super admin of the organization.
  - **currency** \- The configured home currency of your organization.
  - **Pipeline** \- The standard pipeline of the specified layout.
  - **Deal\_Name** \- The Appointment\_Name field in the Appointments module.
- The type of 'Owner' field is **static** only when you choose either Super Admin or Users from the picklist. The type should be **merge\_field** for 'Member', 'Appointment created by' and 'Appointment modified by' picklist values.

#### Sample Input

``` json
Copied{
    "appointment_preferences": {
        "allow_booking_outside_businesshours": false,
        "deal_record_configuration": {
            "layout": {
                "name": "Standard",
                "id": "5545974000000091023"
            },
            "field_mappings": [\
                {\
                    "field": {\
                        "api_name": "Owner",\
                        "id": "5545974000000002555"\
                    },\
                    "type": "static",\
                    "value": {\
                        "name": "James Smith",\
                        "id": "5545974000001170042"\
                    }\
                },\
                {\
                    "field": {\
                        "api_name": "Deal_Name",\
                        "id": "5545974000000002559"\
                    },\
                    "type": "merge_field",\
                    "value": "${!Appointments__s.Appointment_Name}"\
                },\
                {\
                    "field": {\
                        "api_name": "Account_Name",\
                        "id": "5545974000000002563"\
                    },\
                    "type": "static",\
                    "value": {\
                        "name": "Printing Dimensions",\
                        "id": "5545974000000407008"\
                    }\
                },\
                {\
                    "field": {\
                        "api_name": "Stage",\
                        "id": "5545974000000002565"\
                    },\
                    "type": "static",\
                    "value": "Closed Won"\
                },\
                {\
                    "field": {\
                        "api_name": "currency",\
                        "id": "5545974000000050013"\
                    },\
                    "type": "static",\
                    "value": {\
                        "name": "SAR",\
                        "id": "5545974000000407008"\
                    }\
                },\
                {\
                    "field": {\
                        "api_name": "Pipeline",\
                        "id": "5545974000000193001"\
                    },\
                    "type": "static",\
                    "value": {\
                        "name": "Service Pipeline",\
                        "id": "5545974000000407008"\
                    }\
                }\
            ]
        },
        "show_job_sheet": true,
        "when_duration_exceeds": "ask_appointment_provider_to_complete",
        "when_appointment_completed": "create_deal",
        "allow_booking_outside_service_availability": false
    }
}

```

#### Possible Errors

INVALID\_DATAHTTP 400

You have given an invalid field ID for field key.

**Solution:** Make a [GET Fields Metadata](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) API call and provide a valid field ID.

- API\_NOT\_SUPPORTEDHTTP 400



The API is not supported in this version.

**Solution:** This API is supported only from Version 3.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



You have specified the layout ID but not the field\_mappings.

**Solution:** You have to configure a new field mapping, whenever you change the layout ID of the Deals module.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



You have given null for the deal\_record\_configuration key.

**Solution:** The deal\_record\_configuration key cannot be null if the when\_appointment\_completed key is given create\_deal value.

- DEPENDENT\_MISMATCHHTTP 400



You have tried to enable the allow\_booking\_outside\_businesshours key without enabling the allow\_booking\_outside\_service\_availability key.

**Solution:** The "allow\_booking\_outside\_service\_availability": true is mandatory to enable the allow\_booking\_outside\_businesshours key.

- DEPENDENT\_MISMATCHHTTP 400



You are trying to mandate job sheets without specifying the ask\_appointment\_provider\_to\_complete value.

**Solution:** The when\_duration\_exceeds key must be given ask\_appointment\_provider\_to\_complete value to mandate job sheets in the appointment preferences.

- INVALID\_DATAHTTP 400



You have mapped two different datatype fields in the fields\_mappings key.

**Solution:** You can only map similar datatype fields in the field\_mappings for deal record configuration.

- INVALID\_DATAHTTP 400



You have specified an invalid value for either when\_appointment\_completed key or when\_duration\_exceeds key.

**Solution:** Possible values for **when\_appointment\_completed** key: 'create\_deal' and 'do\_not\_create\_deal'.

Possible values for **when\_duration\_exceeds** key: 'ask\_appointment\_provider\_to\_complete' and 'mark\_as\_complete'.

- INVALID\_DATAHTTP 400



You have specified an invalid value for the type key in the field mappings.

**Solution:** The only possible values are 'merge\_field' and 'static'.

- INVALID\_DATAHTTP 400



You have mandated job sheets without enabling Job Sheets in the Service Preferences.

**Solution:** You cannot mandate job sheets, if they are not enabled for services. Make an [Update Service Preferences](https://www.zoho.com/crm/developer/docs/api/v7/update-service-preferences.html) API call to enable job sheets for services.

- INVALID\_DATAHTTP 400



You have given an invalid layout ID.

**Solution:** Make a [GET Layouts](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html) API call and provide a valid layout ID.

- INVALID\_DATAHTTP 400



You have specified Date or DateTime or Unique field value for static type in field\_mappings.

**Solution:** Date, DateTime and Unique fields are not supported in static type. Use **merge\_field** type.

- INVALID\_MAPPINGHTTP 400



You have specified a value with length greater than the Deals field length.

**Solution:** In static type, the length of the value should be less than or equal to the maximum length of the Deals field.

- INVALID\_REQUEST\_METHODHTTP 400



You have given an invalid http request method type.

**Solution:** Use only the PUT method in the request input to access this API.

- MAPPING\_MISMATCHHTTP 400



You have specified a different pipeline which is not present in the layout.

**Solution:** Make a [GET Pipelines](https://www.zoho.com/crm/developer/docs/api/v7/get-pipelines.html) API call with the correct layout ID which is mentioned in the request body.

- MAPPING\_MISMATCHHTTP 400



You specified a stage which is not in the given pipeline.

**Solution:** Make a [GET Pipelines](https://www.zoho.com/crm/developer/docs/api/v7/get-pipelines.html) API call and provide a valid stage.

- REQUIRED\_DATA\_NOT\_FOUNDHTTP 400



You failed to map the mandatory fields in the deal\_record\_configuration key.

**Solution:** Deal Name, Account Name, Closing Date, Pipeline and Stage fields are mandatory for field mappings in the deal\_record\_configuration key.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The access token you used has expired. Kindly refresh your token and retry.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You created the grant token using the wrong oauth scope.

**Solution:** Use either ZohoCRM.settings.modules.UPDATE or ZohoCRM.settings.modules.ALL scope to create a new valid grant token.

- NO\_PERMISSIONHTTP 403



You do not have permission to update the appointment preferences.

**Solution:** Contact your system administrator.

- NOT\_ALLOWEDHTTP 403



You have tried to map either the Closing\_Date or Amount key with a different field.

**Solution:** The Closing\_Date and Amount key have system-defined field mappings with Appointment\_Start\_Time and Price fields respectively. You cannot remap them to different fields.

- NOT\_ALLOWEDHTTP 403



You have tried to specify a new stage in the pipeline.

**Solution:** Only closed won stages are allowed to map with the Stage field.

- NOT\_ALLOWEDHTTP 403



You have tried to remove either the Amount or Closing\_Date field from the deal\_record\_configuration key.

**Solution:** The Amount and Closing\_Date field mapping cannot be removed.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Solution:** Unexpected and unhandled exception in the server. Please contact our support team.


#### Sample Response

``` json
Copied{
    "appointment_preferences": {
        "code": "SUCCESS",
        "details": {},
        "message": "Appointments preferences updated successfully",
        "status": "success"
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-appointment-preferences.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)