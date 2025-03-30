
# Update Custom Fields

#### Purpose

To update custom fields in your Zoho CRM.

#### Endpoints

[PATCH /settings/fields?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-fields.html)

[PATCH /settings/fields/{field\_id}?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-fields.html)

### Request Details

#### Request URL

**To update multiple fields:**

{api-domain}/crm/{version}/settings/fields

**To update a single field:**

{api-domain}/crm/{version}/settings/fields/{field\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.fields.UPDATE (or)

scope=ZohoCRM.settings.fields.ALL (or)

scope=ZohoCRM.settings.ALL

#### Supported modules

Leads, Contacts, Accounts, Campaigns, Cases, Invoices, Deals, Price Books, Products, Purchase Orders, Quotes, Sales Orders, Solutions, Vendors, Calls, Tasks, Events, Users, DealHistory, QuotedItems, OrderedItems, PurchaseItems, InvoicedItems, Visits, Services, Appointments, and Custom.

#### Sample request to update a single field

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/fields/111112000000067259?module=Leads"
-X PATCH
-d "input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

#### Parameter

- modulestring, mandatory



Specify the module in which you want to update custom fields, such as Leads, Contacts, etc. Use the [GET - Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to retrieve modules API names and IDs.


**Notes**

- Please note that all the field types and cases explained in the [Create Custom Field](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html) help document are supported by Update Custom Field API.
- The field label for system-defined fields cannot be updated.
- A maximum of **five** field can be updated in a single call.
- Conversion of one field type to another is not possible.
- **External** attribute cannot be updated.
- In **text area** data type:
  - The **length** value cannot be updated.
  - The **type** value cannot be updated to another type, for example, from small to rich\_text.

    Sample: **"textarea" : { "type": "small" }**
- The **API name** of a field can only be changed in the UI.
- The **HIPAA** attribute can be updated if the particular module has HIPAA field allowed, and privacy settings are enabled.

#### Sample input to update to "Text" data type

``` json
Copied{
    "fields": [\
        {\
            "length": 200, //updating the value of length\
            "unique": {\
                "case_sensitive": false,\
                "_disable": null //marking the field is not a unique key.\
            }\
        }\
    ]
}
```

#### Sample response

``` json
Copied{
    "fields": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111112000000067259"\
            },\
            "message": "field updated",\
            "status": "success"\
        }\
    ]
}
```

#### Input JSON Keys

- idstring, mandatory



It represents the ID of the field type you want to update.


#### Sample request to update multiple fields

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/fields?module=Leads"
-X PUT
-d "input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample input to update multiple fields

``` json
Copied{
    "fields": [\
        {\
            "id": "111112000000069633",  //Field Type: Lookup\
            "lookup": {\
                "query_details": {\
                    "criteria": {\
                        "field": {\
                            "api_name": "Email"\
                        },\
                        "comparator": "ends_with",\
                        "value": "@zohocorp.com"\
                    }\
                }\
            }\
        },\
        {\
            "id": "111112000000070141", //Field Type: Currency\
            "currency": {\
                "rounding_option": "normal",\
                "precision": 2\
            }\
        },\
        {\
            "id": "111111000000166083", //Field Type : User Lookup\
            "sharing_properties": {\
                "share_preference_enabled": true,\
                "share_permission": "full-access"\
            }\
        }\
    ]
}
```

Show full

Show less

#### Updating the picklist ("datatype" : "picklist") field

**Notes**

- Use the "actual\_value" or unique ID of a picklist option to update its display value.

#### Sample request to update the "picklist" datatype

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/fields/111112000000067259?module=Leads"
-X PATCH
-d "input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample input to add a new option to the picklist field

``` json
Copied{
    "fields": [\
        {\
            "pick_list_values": [\
                {\
                    "display_value": "North_East",\
                    "actual_value": "IN_North_East",\
                } //Adding options to an existing picklist\
            ]\
        }\
    ]
}
```

#### Sample input to update existing picklist data

``` json
Copied{
    "fields": [\
        {\
            "profiles": [\
\
                {\
                    "id": "5725767000000026011",\
                    "permission_type": "read_write" //updating the permission_type\
                }\
            ],\
           "pick_list_values": [\
                {\
                     "display_value": "East Zone East Zone", // updating the display value\
                    "actual_value": "IN_EastZone",\
                    "id": "5725767000003489002"\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- INVALID\_DATAHTTP 400



- The ID given seems to be invalid

**Resolution:** Specify a valid field ID.
- Special characters have been found in the field label

**Resolution:** The field label does not support special characters.
- Invalid formula expression

**Resolution:** Specify a valid formula expression.

- NOT\_ALLOWEDHTTP 400



- Lookup module cannot be updated

**Resolution:** Once the lookup module is associated with the field, it cannot be updated.
- Formula field does not support updating the return type

**Resolution:** Updating the return type in the formula field is not supported.
- Private is not allowed

**Resolution:** Enable the privacy setting and update the private value.
- Unique case is not allowed

**Resolution:** The field you are trying to update does not support the unique key.

- RESERVED\_KEYWORD\_NOT\_ALLOWEDHTTP 400



System-defined keywords not allowed in the API name

**Resolution:** Specify a non-system-defined keyword for the API name.

- DUPLICATE\_DATAHTTP 400



- Duplicate field label

**Resolution:** The field label seems to be a duplicate of another field's label. Specify a unique field label.
- Duplicate display\_value has been found among the picklist options

**Resolution:** One or more picklist option values have been found to be the same. Please specify a unique display value.
- Duplicate API name has been found for a field creation

**Resolution:** Specify a unique API name for a field.
- Duplicate data has been found

**Resolution:** Specify a unique value to update the field.

- MANDATORY\_NOT\_FOUNDHTTP 400



Required fields not found

**Resolution:** Specify the require fields to update. Refer to the [Create Custom Field API](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html) to know the mandatory fields.

- REQUIRED\_PARAM\_MISSINGHTTP 400



Required paramter is missing

**Resolution:** Please specify the **modules** parameter and its corresponding value.

- INVALID\_DATAHTTP 400



The job\_id is invalid.

**Resolution:** Specify a valid job ID.

- DEPENDENT\_MISMATCHHTTP 400



- The given length value seems to be invalid.

**Resolution:** The value given in the length attribute seems to be
- The dependent fields seems to be invalid or missing

**Resolution:** Specify the valid dependent keys along with their corresponding valid values.

Refer to the [Create Custom Field API](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html) to know the dependent fields.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to update custom fields. Create a new token with the required scope. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample response

``` json
Copied{
    "fields": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111112000000069633"\
            },\
            "message": "field updated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-fields.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)