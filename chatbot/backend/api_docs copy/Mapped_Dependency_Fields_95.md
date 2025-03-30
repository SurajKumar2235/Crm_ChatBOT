
# Get Mapped Dependency Fields

## Map Dependency Fields

There are certain fields in a module whose values depend on another field's value. This can be defined as a parent-child relationship. For example, let's say there are two fields - Country and State - in your Leads module. The values in the State field will depend on the country that you select from the Country field. In Zoho CRM, you can define the values that are applicable to a child field based on the parent field's value. This is called mapping dependency fields.

**Note**

- A parent can have multiple child fields, but a child can have only one parent.

- Map dependency is layout-specific.


#### Purpose

To get the details of the parent and child fields configured for a module.

#### Endpoints

[GET /settings/layouts/{layout\_ID}/map\_dependency?module={module\_API\_name}](https://www.zoho.com/crm/developer/docs/api/v7/get-map-dependency.html)

[GET /settings/layouts/{layout\_ID}/map\_dependency/{map\_dependency\_ID}?module={module\_API\_name}](https://www.zoho.com/crm/developer/docs/api/v7/get-map-dependency.html)

### Request Details

#### Request URL

**Get specific mapped dependency detail:**

{api-domain}/crm/{version}/settings/layouts/{layout\_ID}/map\_dependency/{map\_dependency\_ID}

**Get all mapped dependency details:**

{api-domain}/crm/{version}/settings/layouts/{layout\_ID}/map\_dependency

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

ZohoCRM.settings.map\_dependency.READ

or

ZohoCRM.settings.map\_dependency.ALL

#### Parameters

- modulestring, mandatory



The API name of the module you want to fetch the mapped dependency fields from. Retrieve the module API names using the [GET - Modules Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html).


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/layouts/3652397000000091055/map_dependency/3652397000009835011?module=Leads"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- parentJSON object



The API name and ID of the field that is mapped as the parent in that module.

- sub\_moduleJSON object



The API name and ID of the field that is mapped as the parent in the subform of the module. For non-subforms, this value is null. This key is present only when you fetch all the mapped dependencies in a module.

- activeboolean



Represents whether map dependency is active or not.

- sourceinteger



Represents where the dependencies were mapped from. The default value 1 means that the dependencies were mapped in the CRM UI.

- categoryinteger



Represents whether the field is a pipeline or a map dependency. 0 represents map dependency, while 1 represents a pipeline.

- pick\_list\_valuesJSON array



Gives you the details of the parent field and the mapped child fields. This key is available in the response only when you fetch a specific mapped dependency details.

- childJSON object



The API name and ID of the field that is mapped as the child in that module.


#### Possible Errors

- REQUIRED\_PARAM\_MISSINGHTTP 400



You have not specified the **module** parameter in the request URL.

**Resolution:** The module name is mandatory to get the map dependency fields from that module.

- INVALID\_MODULEHTTP 400



The module name is invalid or the module is not supported in API.

**Resolution:** You must use the correct API name of the module.

- INVALID\_DATAHTTP 400



Reasons:



- The layout's ID is invalid.
- The layout is deactivated.
- The API name of the subform, it's fields, or the value of the field is invalid in the "filters" param.

**Resolution:** Refer to the "details" key in the response for the exact error and rectify it accordingly.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** You do not have ZohoCRM.settings.map\_dependency.READ scope. Create new tokens with valid scope. Refer to the scope section above.


#### Sample Response

``` json
Copied{
    "map_dependency": [\
        {\
            "parent": {\
                "api_name": "Lead_Status",\
                "id": "3652397000000002611"\
            },\
            "internal": false,\
            "active": true,\
            "id": "3652397000009835011",\
            "source": 1,\
            "category": 0,\
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
                        }\
                    ],\
                    "actual_value": "Contacted",\
                    "id": "3652397000000003399"\
                },\
                {\
                    "display_value": "Junk Lead",\
                    "maps": [],\
                    "actual_value": "Junk Lead",\
                    "id": "3652397000000003411"\
                },\
                {\
                    "display_value": "Lost Lead",\
                    "maps": [],\
                    "actual_value": "Lost Lead",\
                    "id": "3652397000000003407"\
                },\
                {\
                    "display_value": "Not Contacted",\
                    "maps": [],\
                    "actual_value": "Not Contacted",\
                    "id": "3652397000000003403"\
                },\
                {\
                    "display_value": "Pre-Qualified",\
                    "maps": [],\
                    "actual_value": "Pre Qualified",\
                    "id": "3652397000000003397"\
                },\
                {\
                    "display_value": "Not Qualified",\
                    "maps": [],\
                    "actual_value": "Not Qualified",\
                    "id": "3652397000000149001"\
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

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-map-dependency.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)