
# Layouts Metadata

#### Purpose

To get details of the layouts associated with a particular module.

#### Endpoints

[GET /settings/layouts?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html)

[GET /settings/layouts/{layout\_id}?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/layouts?module={module\_api\_name}

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom, Appointments, Services and Activities

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.layouts.READ

(or)

scope=ZohoCRM.settings.layouts.ALL

(or)

scope=ZohoCRM.settings.ALL

#### Parameters

- modulestring, mandatory



Specify the API name of the required module. For example, Leads, Contacts, Accounts, Deals, and so on.


**Note**

- In the Deals module, the "forecast\_category" key is changed from string to a JSON Object.
- In the Events module, a new data type "multireminder" is introduced for the "Remind\_At" key.
- When the pipeline feature is enabled, a new field "Pipeline" is added in the response.

The **pick\_list\_values** for a pipeline inside the **maps** key represent the stages that are available in the pipeline.
- When you have created a wizard in the module, the "fields" array will have an object for wizard.
- The "fields" array will also contain an object each for image upload, multi-select lookup, and multi-select user lookup fields with the data types imageupload, multiselectlookup, and mutliuserlookup, respectively.
- The sections related to Score Summary and Visit Summary will be rendered in the response only when you enable these features.
- For the Users module,
  - Timezone offset varies based on daylight settings. So, the picklist field's display\_value will change accordingly.
  - In the Country\_Locale field, the picklist values are translated if translation is enabled.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/layouts?module=Leads"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/settings/layouts?module=Leads"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON Keys

- created\_timestring



Represents the date and time at which the current layout was created.

- convert\_mappingJSON object



Represents the base layout details.

- modified\_timestring



Represents the date and time at which the layout was last modified.

- visibleboolean



Represents if the current layout is visible to the user.

**true:** The current layout is visible to the user.

**false:** The current layout is not visible to the user.

- namestring



Represents the name of the layout.

- modified\_byJSON object



Represents the name and ID of the user who last modified the layout.

- profilesJSON array



Each object in the array represents the name and ID of the profile that has access to the current layout. The value of this key will be null when the user does not have the Module Customization permission.

- \_default\_viewJSON object



Represents the ID and name of the default layout for each profile.

- \_default\_assignment\_viewJSON object



Represents the details of a default canvas assignment details of the profiles if a canvas view is selected as default view for a layout of a module. This key's response will be same as default\_view key if default view is Standard View ./p>

- idstring



Represents the unique ID of the layout.

- created\_byJSON object



Represents the name and ID of the user who created the layout.

- sectionsJSON array



Each object in the array represents the details of sections in the current layout. The following section represents the keys in this JSON array.

- api\_nameJSON array



Represent the name of the layout.


#### Keys in 'sections' JSON array

- display\_labelstring



Represents the display name of the section.

- modestring



Represents the section's mode in the layout.



  - **Possible values :**

    - **All modules except :** default\_create, quick\_create, and business\_card.

    - **Events module :** create, view, and quick\_view.

    - **Subforms**: create and view.

    - **Wizards** : create
- sequence\_numberinteger



Represents the position of the section in the layout.

- isSubformSectionboolean



Represents if the section is the subform section.

**true:** The current section is a subform section.

**false:** The current section is not a subform section.

- api\_namestring



Represents the API name of the section.

- namestring



Represents the display name of the current section.

- generated\_typestring



Represents if the section is system-defined or custom.

- typestring



Represents if the section is used or not in the layout.

- show\_business\_cardboolean



Represents whether the business card section must be displayed or not in the layout.

- fieldsJSON array



Each object in the array represents the details of a field in the section. Refer to [fields metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know more about the keys in this array.

- searchableBoolean



Represents whether the field is supported in a search.

- enable\_colour\_codeboolean



Represents if the field can be color-coded.

- statusstring



Represents the status of the layout. The possible values are "active", "inactive", "downgrade", and "hidden".

- sourcestring



Represents the source the layout originated from. The possible values are "crm", "platform\_plugin", "marketplace\_plugin", and "campaign\_integration".


#### Possible Errors

- REQUIRED\_PARAM\_MISSINGHTTP 400



Bad Request

**Resolution:** You have not specified the mandatory parameter. Refer to parameters section above.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.layouts.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read layouts data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read layouts data

**Resolution:** The user does not have the permission to retrieve layouts data. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "layouts": [\
        {\
            "has_more_profiles": false,\
            "created_time": null,\
            "convert_mapping": {\
                "Contacts": {\
                    "name": "Standard",\
                    "id": "2276164000000095059"\
                },\
                "Deals": {\
                    "name": "Standard",\
                    "id": "2276164000000095023",\
                    "fields": [\
                        {\
                            "api_name": "Amount",\
                            "field_label": "Amount",\
                            "id": "2276164000000000517",\
                            "required": false\
                        },\
                        {\
                            "api_name": "Deal_Name",\
                            "field_label": "Potential Name",\
                            "id": "2276164000000000519",\
                            "required": true\
                        },\
                        {\
                            "api_name": "Closing_Date",\
                            "field_label": "Closing Date",\
                            "id": "2276164000000000521",\
                            "required": false\
                        },\
                        {\
                            "api_name": "Stage",\
                            "field_label": "Stage",\
                            "id": "2276164000000000525",\
                            "required": true\
                        }\
                    ]\
                },\
                "Accounts": {\
                    "name": "Standard",\
                    "id": "2276164000000095047"\
                }\
            },\
            "visible": true,\
            "created_for": null,\
            "profiles": [\
                {\
                    "_default_assignment_view": {\
                        "name": "Standard",\
                        "id": "2276164000000095055",\
                        "type": "layout"\
                    },\
                    "default": true,\
                    "name": "Administrator",\
                    "id": "2276164000000015972",\
                    "_default_view": {\
                        "name": "Standard",\
                        "id": "2276164000000095055",\
                        "type": "layout"\
                    }\
                },\
                {\
                    "_default_assignment_view": {\
                        "name": "Standard",\
                        "id": "2276164000000095055",\
                        "type": "layout"\
                    },\
                    "default": true,\
                    "name": "Standard",\
                    "id": "2276164000000015975",\
                    "_default_view": {\
                        "name": "Standard",\
                        "id": "2276164000000095055",\
                        "type": "layout"\
                    }\
                }\
            ],\
            "source": "crm",\
            "created_by": null,\
            "sections": [\
                {\
                    "isSubformSection": false,\
                    "type": "used",\
                    "display_label": "Lead Image",\
                    "mode": "default_create",\
                    "sequence_number": 1,\
                    "tab_traversal": "left_to_right",\
                    "api_name": "Lead Image",\
                    "column_count": 1,\
                    "name": "Record Image",\
                    "generated_type": "default",\
                    "id": "2276164000000266005",\
                    "fields": [\
                        {\
                            "associated_module": null,\
                            "webhook": false,\
                            "operation_type": {\
                                "web_update": true,\
                                "api_create": true,\
                                "web_create": true,\
                                "api_update": true\
                            },\
                            "colour_code_enabled_by_system": false,\
                            "field_label": "Lead Image",\
                            "tooltip": null,\
                            "type": "used",\
                            "field_read_only": false,\
                            "customizable_properties": [\
                                "image_enable",\
                                "add_to_other_layouts"\
                            ],\
                            "required": false,\
                            "display_label": "Record Image",\
                            "read_only": false,\
                            "association_details": null,\
                            "businesscard_supported": false,\
                            "multi_module_lookup": {},\
                            "id": "2276164000000179001",\
                            "created_time": null,\
                            "filterable": false,\
                            "visible": true,\
                            "profiles": [\
                                {\
                                    "permission_type": "read_write",\
                                    "name": "Administrator",\
                                    "id": "2276164000000015972"\
                                },\
                                {\
                                    "permission_type": "read_write",\
                                    "name": "Standard",\
                                    "id": "2276164000000015975"\
                                }\
                            ],\
                            "view_type": {\
                                "view": true,\
                                "edit": true,\
                                "quick_create": false,\
                                "create": true\
                            },\
                            "separator": false,\
                            "searchable": false,\
                            "external": null,\
                            "api_name": "Record_Image",\
                            "unique": {},\
                            "enable_colour_code": false,\
                            "pick_list_values": [],\
                            "system_mandatory": false,\
                            "virtual_field": false,\
                            "json_type": "string",\
                            "crypt": null,\
                            "created_source": "default",\
                            "display_type": -1,\
                            "ui_type": 66,\
                            "validation_rule": null,\
                            "modified_time": null,\
                            "section_id": 5,\
                            "email_parser": {\
                                "fields_update_supported": false,\
                                "record_operations_supported": false\
                            },\
                            "currency": {},\
                            "custom_field": false,\
                            "lookup": {},\
                            "convert_mapping": {\
                                "Contacts": null,\
                                "Deals": null,\
                                "Accounts": null\
                            },\
                            "rollup_summary": {},\
                            "length": 255,\
                            "display_field": false,\
                            "pick_list_values_sorted_lexically": false,\
                            "default_value": null,\
                            "sortable": false,\
                            "sequence_number": 1,\
                            "global_picklist": null,\
                            "history_tracking": null,\
                            "data_type": "profileimage",\
                            "formula": {},\
                            "decimal_place": null,\
                            "mass_update": false,\
                            "multiselectlookup": {},\
                            "auto_number": {}\
                        }\
                    ],\
                    "properties": null\
                },\
                .\
                .\
                .\
            ],\
            "display_label": "Standard",\
            "show_business_card": true,\
            "actions_allowed": {\
                "edit": true,\
                "rename": true,\
                "clone": true,\
                "downgrade": false,\
                "delete": false,\
                "deactivate": false,\
                "set_layout_permissions": true\
            },\
            "modified_time": "2024-07-11T11:52:38+05:30",\
            "api_name": "Standard__s",\
            "name": "Standard",\
            "modified_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "generated_type": "system",\
            "id": "2276164000000095055",\
            "status": "active"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)