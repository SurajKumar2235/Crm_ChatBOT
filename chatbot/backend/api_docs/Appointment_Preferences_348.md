

# Get Appointment Preferences

#### Purpose

To get the details of appointment preferences in your organization.

#### Endpoints

[GET /settings/appointment\_preferences](https://www.zoho.com/crm/developer/docs/api/v7/get-appointment-preferences.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/appointment\_preferences

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.modules.{operation\_type}

#### Possible operation types

ALL - Full access to appointment preferences data

READ - Retrieve appointment preferences

#### Parameters

- includeoptional



To fetch deal record configuration when **when\_appointment\_completed:create\_deal**.

**Possible Value**: deal\_record\_configuration


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/appointment_preferences?include=deal_record_configuration"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- allow\_booking\_outside\_businesshoursBoolean



Denotes if you can create appointments outside business hours.

Possible Values:

**true**: You can create appointments outside business hours.

**false**: You cannot create appointments outside business hours.

- allow\_booking\_outside\_service\_availabilityBoolean



Denotes if you can create appointments outside service availability.

Possible Values:

**true**: You can create appointments outside service availability.

**false**: You cannot create appointments outside service availability.

- when\_duration\_exceeds sstring



Represents who has to mark the appointment as 'Completed' when the service duration gets over.

Possible Values:

**ask\_appointment\_provider\_to\_complete** \- User has to manually mark the appointment as 'completed'.

**mark\_as\_complete** -



The appointment is automatically marked as 'completed'.

- show\_job\_sheetBoolean



Represents whether filling out the job sheet is mandatory for marking an appointment as 'completed'.

Possible Values:

**true**: Job sheet is mandatory for appointment completion.

**false**: Job sheet is not mandatory for appointment completion.

- when\_appointment\_completedstring



Represents whether a deal has to be created when an appointment is completed.

Possible Values:

**create\_deal** \- Deal is created when any appointment is marked 'Completed'.

**do\_not\_create\_deal** \- Deal is not created when any appointment is marked 'Completed'.

- deal\_record\_configurationJSON object



Contains the field mappings and layout details for record configuration in Deals from the Appointments module.


#### Possible Errors

- API\_NOT\_SUPPORTEDHTTP 400



The API is not supported in this version.

**Solution:** This API is supported only from Version 3.

- INVALID\_REQUEST\_METHODHTTP 400



You have given an invalid http request method type.

**Solution:** Use only GET method in the request URL to access this API.

- INVALID\_REQUESTHTTP 400



You have given an invalid value either in the parameter or in the parameter value.

**Solution:** Use only 'include' parameter with 'deal\_record\_configuration' as parameter value to access this API.

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
                        "name": "Patricia Boyle",\
                        "id": "5545974000001170042"\
                    }\
                },\
                {\
                    "field": {\
                        "api_name": "Amount",\
                        "id": "5545974000000002557"\
                    },\
                    "type": "merge_field",\
                    "value": "${!Services__s.Price}"\
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
                        "api_name": "Closing_Date",\
                        "id": "5545974000000002561"\
                    },\
                    "type": "merge_field",\
                    "value": "${!Appointments__s.Appointment_Start_Time}"\
                },\
                {\
                    "field": {\
                        "api_name": "Account_Name",\
                        "id": "5545974000000002563"\
                    },\
                    "type": "static",\
                    "value": {\
                        "name": "Morlong Associates",\
                        "id": "5545974000000407007"\
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
                        "api_name": "Currency",\
                        "id": "5545974000000050013"\
                    },\
                    "type": "static",\
                    "value": "INR"\
                },\
                {\
                    "field": {\
                        "api_name": "Pipeline",\
                        "id": "5545974000000193001"\
                    },\
                    "type": "static",\
                    "value": "Standard (Standard)"\
                }\
            ],
            "id": "5545974000002135059"
        },
        "show_job_sheet": false,
        "when_duration_exceeds": "mark_as_complete",
        "when_appointment_completed": "create_deal",
        "allow_booking_outside_service_availability": true
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-appointment-preferences.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)