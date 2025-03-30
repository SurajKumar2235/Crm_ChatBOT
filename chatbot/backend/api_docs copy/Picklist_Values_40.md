
# Picklist Values

#### Purpose

To retrieve detailed information about the values in a picklist field, including _display value, reference value, colour code, actual value, ID, type, and associated layouts_ within a specific module.

#### Endpoints

[GET /settings/fields/{picklist\_field\_id}/pick\_list\_values?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/picklist-values.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/fields/{picklist\_field\_id}/pick\_list\_values

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.fields.READ  (or)

scope = ZohoCRM.settings.fields.ALL  (or)

scope = ZohoCRM.settings.ALL

#### Parameter

- modulestring, mandatory



Specify the module to which the picklist field belongs to.


#### Sample Request

``` curl
Copied"https://www.zohoapis.com/crm/v7/settings/fields/2423488000000000573/pick_list_values?module=Leads"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- sequence\_numberinteger



Represents the position of the picklist value field in the layout.

- display\_valuestring



Represents the display value of the picklist option.

- reference\_valuestring



Represents the reference value of the picklist option.

- colour\_codestring



Represents the hex color code used for the picklist option.

- actual\_valuestring



Represents the actual value of the picklist option.

- idinteger



Represents the unique ID of the picklist option.

- typestring



Represents the type of the picklist option. **Possible values :** used and unused.

- layout\_associationsstring



Represents the layout details with which the picklist option is associated.



  - api\_namestring



    Represents the API name of the lyout.

  - namestring



    Represents the name of the layout.

  - idinteger



    Represents the unique ID of the layout.

#### Possible Errors

- INVALID\_DATAHTTP 400



The ID given seems to be invalid

**Resolution:** Specify a valid picklist field ID. Use the [GET Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to retrieve picklist field IDs.

- INVALID\_MODULEHTTP 400



The given module seems to be invalid

**Resolution:** Specify a valid module API name. Use the [GET Modules Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to retrieve modules API names.

- REQUIRED\_PARAM\_MISSINGHTTP 400



Required parameter is missing

**Resolution:** Specify a value for the **module** parameter.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to retrieve the picklist details. Create a new token with valid scope. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- NO\_PERMISSIONHTTP 403



No permission

**Resolution:** The user does not have permission to view the picklist options associations.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "pick_list_values": [\
        {\
            "sequence_number": 1,\
            "display_value": "Referral",\
            "reference_value": "Referral",\
            "colour_code": null,\
            "actual_value": "Referral",\
            "id": "2423488000000002313",\
            "type": "used",\
            "layout_associations": [\
                {\
                    "api_name": "Standard__s",\
                    "name": "Standard",\
                    "id": "2423488000000095055"\
                },\
                {\
                    "api_name": "testing_layout",\
                    "name": "testing layout",\
                    "id": "2423488000000771002"\
                }\
            ]\
        },\
        {\
            "sequence_number": 2,\
            "display_value": "Advertisement",\
            "reference_value": "Advertisement",\
            "colour_code": null,\
            "actual_value": "Advertisement",\
            "id": "2423488000000002315",\
            "type": "used",\
            "layout_associations": [\
                {\
                    "api_name": "Standard__s",\
                    "name": "Standard",\
                    "id": "2423488000000095055"\
                }\
            ]\
        },\
        {\
            "sequence_number": 3,\
            "display_value": "Cold Call",\
            "reference_value": "Cold Call",\
            "colour_code": null,\
            "actual_value": "Cold Call",\
            "id": "2423488000000002317",\
            "type": "used",\
            "layout_associations": [\
                {\
                    "api_name": "Standard__s",\
                    "name": "Standard",\
                    "id": "2423488000000095055"\
                },\
                {\
                    "api_name": "testing_layout",\
                    "name": "testing layout",\
                    "id": "2423488000000771002"\
                }\
            ]\
        },\
        {\
            "sequence_number": 4,\
            "display_value": "Employee Referral",\
            "reference_value": "Employee Referral",\
            "colour_code": null,\
            "actual_value": "Employee Referral",\
            "id": "2423488000000002319",\
            "type": "used",\
            "layout_associations": [\
                {\
                    "api_name": "Standard__s",\
                    "name": "Standard",\
                    "id": "2423488000000095055"\
                },\
                {\
                    "api_name": "testing_layout",\
                    "name": "testing layout",\
                    "id": "2423488000000771002"\
                }\
            ]\
        },\
        {\
            "sequence_number": 5,\
            "display_value": "External Referral",\
            "reference_value": "External Referral",\
            "colour_code": null,\
            "actual_value": "External Referral",\
            "id": "2423488000000002321",\
            "type": "used",\
            "layout_associations": [\
                {\
                    "api_name": "Standard__s",\
                    "name": "Standard",\
                    "id": "2423488000000095055"\
                },\
                {\
                    "api_name": "testing_layout",\
                    "name": "testing layout",\
                    "id": "2423488000000771002"\
                }\
            ]\
        },\
        {\
            "sequence_number": 6,\
            "display_value": "Online Store",\
            "reference_value": "Online Store",\
            "colour_code": null,\
            "actual_value": "OnlineStore",\
            "id": "2423488000000172095",\
            "type": "used",\
            "layout_associations": [\
                {\
                    "api_name": "Standard__s",\
                    "name": "Standard",\
                    "id": "2423488000000095055"\
                },\
                {\
                    "api_name": "testing_layout",\
                    "name": "testing layout",\
                    "id": "2423488000000771002"\
                }\
            ]\
        },\
        .\
        .\
        .\
\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/picklist-values.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)