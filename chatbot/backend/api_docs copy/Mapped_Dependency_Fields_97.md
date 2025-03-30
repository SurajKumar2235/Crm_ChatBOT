
# Update Mapped Dependency Fields

#### Purpose

To update map dependency fields on a layout of the module in Zoho CRM.

**Note**

- A parent can have multiple child fields, but a child can have only one parent.
- Map dependency is layout-specific.

#### Endpoints

[PUT /settings/layouts/{layout\_ID}/map\_dependency/{map\_dependency\_ID}?module={module\_API\_name}](https://www.zoho.com/crm/developer/docs/api/v7/update-map-dependency.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/layouts/{layout\_ID}/map\_dependency/{map\_dependency\_ID}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

ZohoCRM.settings.map\_dependency.UPDATE

or

ZohoCRM.settings.map\_dependency.ALL

#### Parameters

- modulestring, mandatory



The API name of the module you want to update the map dependency fields in. Supported modules are Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Meetings, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Services, Appointments, and Custom modules. Retrieve the module API names using the [GET - Modules Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html).


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/layouts/3652397000000091055/map_dependency/3652397000009835011?module=Leads"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Input JSON

All keys used while mapping dependency can be updated using this API. Refer to the "Input JSON" section of the [Map Dependency API](https://www.zoho.com/crm/developer/docs/api/v7/map-dependency.html) for details.

To delete a picklist value of the child field and undo mapping, specify the key **"\_delete":null** in the **maps** JSON array of the corresponding picklist value. Refer to the sample on the right.

#### Sample Input

``` json
Copied{
    "map_dependency": [\
        {\
            "parent": {\
                "api_name": "Lead_Status",\
                "id": "3652397000000002611"\
            },\
            "pick_list_values": [\
                {\
                    "display_value": "-None-",\
                    "maps": [\
                        {\
                            "display_value": "Cold Call",\
                            "actual_value": "Cold Call",\
                            "id": "3652397000000003389"\
                        },\
                        {\
                            "display_value": "-None-",\
                            "actual_value": "-None-",\
                            "id": "3652397000000003391"\
\
                        }\
                    ],\
                    "actual_value": "-None-",\
                    "id": "3652397000000003409"\
                },\
                {\
                    "display_value": "Attempted to Contact",\
                    "maps": [\
                        {\
                            "display_value": "Employee Referral",\
                            "actual_value": "Employee Referral",\
                            "id": "3652397000000003369"\
                        },\
                        {\
                            "display_value": "Online Store",\
                            "actual_value": "OnlineStore",\
                            "id": "3652397000000003375"\
                        }\
                    ],\
                    "actual_value": "Attempted to Contact",\
                    "id": "3652397000000003405"\
                },\
                {\
                    "display_value": "Contact in Future",\
                    "maps": [\
                        {\
                            "display_value": "Facebook",\
                            "actual_value": "Facebook",\
                            "id": "3652397000000209013"\
                        },\
                        {\
                            "display_value": "Twitter",\
                            "actual_value": "Twitter",\
                            "id": "3652397000000209017"\
                        },\
                        {\
                            "display_value": "Google+",\
                            "actual_value": "Google+",\
                            "id": "3652397000000209021"\
                        }\
                    ],\
                    "actual_value": "Contact in Future",\
                    "id": "3652397000000003401"\
                },\
                {\
                    "display_value": "Contacted",\
                    "maps": [\
                        {\
                            "display_value": "Employee Referral",\
                            "actual_value": "Employee Referral",\
                            "id": "3652397000000003369"\
                        },\
                        {\
                            "display_value": "External Referral",\
                            "actual_value": "External Referral",\
                            "id": "3652397000000003379"\
                        },\
                        {\
                            "display_value": "ABC",\
                            "actual_value": "ABC",\
                            "id": "3652397000002244010",\
                            "_delete":null\
                        }\
                    ],\
                    "actual_value": "Contacted",\
                    "id": "3652397000000003399"\
                }\
            ],\
            "child": {\
                "api_name": "Lead_Source",\
                "id": "3652397000000002609"\
            }\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- REQUIRED\_PARAM\_MISSINGHTTP 400



You have not specified the **module** parameter in the request URL.

**Resolution:** The module name is mandatory to map the dependency fields from that module.

- INVALID\_MODULEHTTP 400



The module name is invalid or the module is not supported in API.

**Resolution:** You must use the correct API name of the module.

- INVALID\_DATAHTTP 400



Reasons:



- The layout's ID is invalid.
- The layout is deactivated.
- The parent and the child are the same fields.
- Either the ID of the parent, child or the picklist values is invalid.
- Either the API name of the child, parent, or the picklist values is invalid.
- You are trying to map dependency for more than one picklist/parent field, i.e., the root key "map\_dependency" has more than one JSON object.

**Resolution:** Refer to the "details" key in the response for the exact error and rectify it accordingly. Note that you can map the dependent fields for only one parent picklist field per API call.

- MAPPING\_EXISTSHTTP 400



The given parent and child fields are already associated in another map dependency created in this layout.

**Resolution:** Create map dependency for other fields.

- NOT\_ALLOWEDHTTP 400



Reasons:



- The parent and child mapping creates a loop, i.e., the parent field's value is given as a dependent value in the child field.
- Either the parent or the child field is in the unused section of the layout.
- The sandbox is not refreshed.
- Either the parent or the child is associated in a layout rule.
- You cannot update an internal map dependency. Internal map dependency means the fields and their dependent fields used in the review processes, Calls module, etc.

**Resolution:** Refer to the "details" key in the response for the exact error and rectify it accordingly.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified either the **maps** key or the **picklist\_values** key in the input.

**Resolution:** Refer to the "details" key in the response to know what is missing and include it in the input.

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



The API name and ID do not belong to the same parent or child.

**Resolution:** Specify the correct API name and ID of the parent and child fields. Refer to the [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) for details.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** You do not have ZohoCRM.settings.map\_dependency.CREATE scope. Create new tokens with valid scope. Refer to the scope section above.


#### Sample Response

``` json
Copied{
    "map_dependency": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000009835011"\
            },\
            "message": "map dependency updated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-map-dependency.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)