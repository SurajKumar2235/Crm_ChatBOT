
# Metadata APIs

Returns the metadata for fields, layouts, and related lists for the specified module. It lists the entire fields available and related list for that module.

### Module Metadata

#### Purpose

To get the metadata for a specific module. Specify the API name of the module, such as Leads, Accounts or Deals in your API request.

#### Endpoints

[GET /settings/modules/{module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/modules/{module\_api\_name}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.ALL

(or)

scope=ZohoCRM.settings.modules.{operation\_type}

#### Possible operation types

ALL - Full data access

READ - Get module data

**Note**

- Refer to the key **api\_name** in the JSON data while accessing the resource. Every module, field, and related lists will have an API name, which you can use in the third-party integrations. For example, if you want to access the Leads module, use “Leads" which is the api\_name every time you access the resource. The Zoho CRM generates an API name internally while creating a custom module, custom field, or related list label. Please note that you cannot alter the API Names for the default modules, fields, and related lists. You can change the API names only for custom modules, fields, and related lists.
- The generated API name can contain only alphabets, numbers, and underscores. The API name should start with an alphabet and should not have two consecutive underscores or end with an underscore.
- The response contains only those modules that the user's profile has permission to view.
- New modules are added when a new file upload / image upload fields are added to a module.

#### Parameters

- **status**

The status parameter can be used to retrieve specific types of modules. Valid values for status are **user\_hidden,system\_hidden,scheduled\_for\_deletion,visible.** eg:status=user\_hidden,system\_hidden can be used to retrieve all modules that are hidden to user and system. Status parameter is not mandatory.


#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/modules/Leads"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/settings/modules/Leads"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON Keys

- global\_search\_supportedboolean



Represents if the current module has global search support.

**Possible values- true:** The current module has global search support.

**false:** The current module does not have global search support.

- deletableboolean



Describes if the user can delete a record in the current module.

**Possible values- true:** The user can delete a record in the current module.

**false:** The user cannot delete a record in the current module.

- descriptionstring



Represents the description of the module, if any.

- creatableboolean



Represents if the user can create records in the current module.

**Possible values- true:** The user can create records in the current module.

**false:** The user cannot create records in the current module.

- inventory\_template\_supportedboolean



Represents the module supports inventory template. The value will be true only for Quotes, Invoices, Purchase Orders, and Sales Orders modules.

**Possible values- true:** The current module supports inventory template.

**false:** The current module does not support inventory template.

- modified\_timedate and time in ISO8601 format



Represents the date and time of when the module properties were last modified.

- plural\_labelstring



Represents the plural of the module name. Example: Leads.

- singular\_labelstring



Represents the singular of the module name. Example: Lead.

- presence\_sub\_menuboolean



Represents if the module has a submenu. For instance, Tasks in Activities is a submenu.

**Possible values- true:** The current module has a submenu.

**false:** The current module does not have a submenu.

- triggers\_supportedboolean



Represents if the module supports triggers from custom buttons, workflows, approval etc.

**Possible values- true:** The current module supports triggers. For instance, Contacts, Accounts,and so on.

**false:** The current module does not support triggers. For instance, Activities, Feeds, and so on.

- idstring



Represents the unique ID of the module. For instance, 4150868000000002173

- visibilityinteger



Represents the visibility of the module to the current user.



- 2- The module is hidden in the UI, but is available in the API response
- 1- The module is visible
- 0- The module is hidden
- -1 - The module is unavailable/hidden by the system itself due to the downgrading of the plan.

- convertableboolean



Describes if the user can convert the record into another type of record. For example: Convert Leads into Deals.

**Possible values- true:** The user can convert the records in the current module into another type of record.

**false:** The user cannot convert the records in the current module into another type of record.

- viewableboolean



Represents if the user can view the records in the current module.

**Possible values- true:** The user can view the records in the current module.

**false:** The user cannot view the records in the current module.

- editableboolean



Describes if the user can edit a record in the current module.

**Possible values- true:** The user can edit a record in the current module.

**false:** The user cannot edit a record in the current module.

- emailTemplate\_supportboolean



Represents if the module supports the usage of the email templates.

**Possible values- true:** The module has email template support.

**false:** The module does not have email template support.

- api\_supportedboolean



Describes if the current module is accessible via API.

**Possible values- true:** The current module is accessible via API. For instance, Leads, Quotes.

**false:** The current module is not accessible via API. For instance, Feeds, Documents, and so on.

- profilesJSON array



Each object in the array represents the details of the profile that has access to the module. Example: {

"name": "Administrator",

"id": "4150868000000026011"

},

- filter\_supportedboolean



Represents if the module supports custom filters besides the system-defined ones in a custom view.

**Possible values- true:** The current module has custom-filter support.

**false:** The current module does not have custom-filter support.

- show\_as\_tabboolean



Represents if the module is displayed as a tab in the CRM UI.

**Possible values- true:** The module is displayed as a tab in the CRM UI. For instance, Contacts, Accounts, and so on.

**false:** The module is not displayed as a tab in the CRM UI. For instance, Tasks, linking modules, and so on.

- web\_linkstring



Represents the web link of the module, if any. For instance, https://extensions.zoho.com/plugin/facebook

- sequence\_numberinteger



Represents the position of the module in the CRM.

- api\_namestring



Represents the API name of the module. Example: Leads.

- quick\_createboolean



Represents if the module supports quick create.

**Possible values- true:** The user can add records using quick create in the current module. For instance, Contacts, Accounts, and so on.

**false:** The user cannot add records using quick create in the current module. For instance, Feeds, Forecasts, and so on.

- modified\_byJSON object



Represents the name and ID of the user who last modified the module properties. For example: "modified\_by": {

"name": "Patricia Boyle",

"id": "4150868000000225013"

}

- generated\_typestring



Represents how the module was created.

**Possible values- default:** It is a default module. For instance, Contacts, Accounts, and so on.

**linking:** It is a linking module.

**subform:** It is a line item subform in one of the inventory modules.

**web:** It is a web-tab widget.

**custom:** It is a custom module.

- feeds\_requiredboolean



Represents if feeds is enabled for the module.

**Possible values- true:** Feeds is enabled for the current module.

**false:** Feeds is not enabled for the current module.

- scoring\_supportedboolean



Represents if the records of the module qualify for the scoring process, if there is one.

**Possible values- true:** The current module qualifies for the scoring process.

**false:** The current module does not qualify for the scoring process.

- webform\_supportedboolean



Represents if the records in the module can be created via web forms.

**Possible values- true:** The current module supports webforms.

**false:** The current module does not support webforms.

- argumentsJSON array



Represents the parameters for the link used in Web-tab. Each object represents display name and the value of the argument. Example: "arguments": \[\
\
{\
\
"name": "sample",\
\
"value": "users.city"\
\
}\
\
\]

- module\_namestring



Represents the unique module name.

- business\_card\_field\_limitinteger



Represents the number of fields you can have in the business card details.

**Note:** Business card details are displayed on the "Details View" page of a record. This is also the information shown when you hover over a lookup field.

- custom\_viewJSON object



Represents the details of the custom views created for this module. If you pass the custom view ID, the response contains the details of that custom view. Otherwise, the system fetches the details of the default view in that module.

- parent\_moduleJSON object



Represents the details of the parent module, if any. For instance, Activities is the parent module for Tasks, Calls, and Events.

- statusstring



Represents if the module is user\_hidden,system\_hidden,scheduled\_for\_deletion or visible .

- sub\_menu\_availableboolean



Represents if sub menu option is available for the module or not.


#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.modules.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- INVALID\_MODULEHTTP 400



The API name of the module is invalid.

**Resolution:** The key resource\_path\_index in the response gives the index at which the error has occurred. The index 0 starts after the version number in the URL. So, if the index in the response is 2, it means the error is three places after the version number.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read module details.

**Resolution:** The user does not have the permission to retrieve module details. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "modules": [\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": false,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Home",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Home",\
            "lookupable": false,\
            "id": "5725767000000002173",\
            "isBlueprintSupported": false,\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Home",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 1,\
            "singular_label": "Home",\
            "viewable": true,\
            "api_supported": false,\
            "api_name": "Home",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "Home",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": true,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-07-16T05:56:33-07:00",\
            "plural_label": "Leads",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Leads",\
            "lookupable": true,\
            "id": "5725767000000002175",\
            "isBlueprintSupported": true,\
            "visibility": 1,\
            "convertable": true,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Lead",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 2,\
            "singular_label": "Lead",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Leads",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "Leads",\
            "profile_count": 3,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": true,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-07-16T06:08:41-07:00",\
            "plural_label": "Contacts",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Contacts",\
            "lookupable": true,\
            "id": "5725767000000002179",\
            "isBlueprintSupported": true,\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Contact",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 3,\
            "singular_label": "Contact",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Contacts",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "Contacts",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": true,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-10-03T12:33:13-07:00",\
            "plural_label": "Accounts",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Accounts",\
            "lookupable": true,\
            "id": "5725767000000002177",\
            "isBlueprintSupported": true,\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Account",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 4,\
            "singular_label": "Account",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Accounts",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "Accounts",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": true,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-05-07T13:41:41-07:00",\
            "plural_label": "Deals",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Deals",\
            "lookupable": true,\
            "id": "5725767000000002181",\
            "isBlueprintSupported": true,\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Deal",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 5,\
            "singular_label": "Deal",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Deals",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "generated_type": "default",\
            "feeds_required": true,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "Deals",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": true,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-05-28T02:37:32-07:00",\
            "plural_label": "Tasks",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Tasks",\
            "lookupable": false,\
            "id": "5725767000000002193",\
            "isBlueprintSupported": true,\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Task",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 6,\
            "singular_label": "Task",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Tasks",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "Tasks",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": true,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "plural_label": "Meetings",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Meetings",\
            "lookupable": false,\
            "id": "5725767000000002195",\
            "isBlueprintSupported": true,\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Meeting",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 6,\
            "singular_label": "Meeting",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Events",\
            "quick_create": true,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "Meetings",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": true,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "plural_label": "Calls",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Calls",\
            "lookupable": false,\
            "id": "5725767000000033015",\
            "isBlueprintSupported": false,\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Call",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 6,\
            "singular_label": "Call",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Calls",\
            "quick_create": true,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "Calls",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": false,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Reports",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Reports",\
            "lookupable": false,\
            "id": "5725767000000002185",\
            "isBlueprintSupported": false,\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Report",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 7,\
            "singular_label": "Report",\
            "viewable": true,\
            "api_supported": false,\
            "api_name": "Reports",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "Reports",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": false,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Analytics",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Analytics",\
            "lookupable": false,\
            "id": "5725767000000002187",\
            "isBlueprintSupported": false,\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Analytics",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 8,\
            "singular_label": "Analytics",\
            "viewable": true,\
            "api_supported": false,\
            "api_name": "Analytics",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "Dashboards",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": true,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-05-28T02:37:54-07:00",\
            "plural_label": "Products",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Products",\
            "lookupable": true,\
            "id": "5725767000000002213",\
            "isBlueprintSupported": true,\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Product",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 9,\
            "singular_label": "Product",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Products",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "Products",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": true,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "plural_label": "Quotes",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Quotes",\
            "lookupable": true,\
            "id": "5725767000000002219",\
            "isBlueprintSupported": true,\
            "visibility": 1,\
            "convertable": true,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Quote",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 10,\
            "singular_label": "Quote",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Quotes",\
            "quick_create": true,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "Quotes",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": true,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-05-28T02:51:05-07:00",\
            "plural_label": "Sales Orders",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Sales Orders",\
            "lookupable": true,\
            "id": "5725767000000002221",\
            "isBlueprintSupported": true,\
            "visibility": 1,\
            "convertable": true,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Sales Order",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 11,\
            "singular_label": "Sales Order",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Sales_Orders",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "SalesOrders",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": false,\
            "deletable": true,\
            "description": "It contains insights about Leads.",\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-07-26T07:06:33-07:00",\
            "plural_label": "Lead Insights",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Leads Insights",\
            "lookupable": false,\
            "id": "5725767000001123001",\
            "isBlueprintSupported": false,\
            "visibility": 6142,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": true,\
            "actual_singular_label": "Leads Insight",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 92,\
            "singular_label": "Lead Insight",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Leads_Insights__s",\
            "quick_create": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "generated_type": "custom",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "CustomModule3",\
            "profile_count": 3,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Leads",\
                "id": "5725767000000002175"\
            },\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": false,\
            "deletable": true,\
            "description": "It contains insights about Accounts.",\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-09-02T22:12:55-07:00",\
            "plural_label": "Account Insights",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Accounts Insights",\
            "lookupable": false,\
            "id": "5725767000001124066",\
            "isBlueprintSupported": false,\
            "visibility": 6142,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": true,\
            "actual_singular_label": "Accounts Insight",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 93,\
            "singular_label": "Account Insight",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Accounts_Insights__s",\
            "quick_create": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "generated_type": "custom",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "CustomModule4",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Accounts",\
                "id": "5725767000000002177"\
            },\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": false,\
            "deletable": true,\
            "description": "It contains insights about Contacts.",\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-07-26T07:06:33-07:00",\
            "plural_label": "Contact Insights",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Contacts Insights",\
            "lookupable": false,\
            "id": "5725767000001125131",\
            "isBlueprintSupported": false,\
            "visibility": 6142,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": true,\
            "actual_singular_label": "Contacts Insight",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 94,\
            "singular_label": "Contact Insight",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Contacts_Insights__s",\
            "quick_create": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "generated_type": "custom",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "CustomModule5",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Contacts",\
                "id": "5725767000000002179"\
            },\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": false,\
            "deletable": true,\
            "description": "It contains insights about Tasks.",\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-09-02T22:12:56-07:00",\
            "plural_label": "Task Insights",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Tasks Insights",\
            "lookupable": false,\
            "id": "5725767000001126196",\
            "isBlueprintSupported": false,\
            "visibility": 6142,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": true,\
            "actual_singular_label": "Tasks Insight",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 95,\
            "singular_label": "Task Insight",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Tasks_Insights__s",\
            "quick_create": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "generated_type": "custom",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "CustomModule6",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Tasks",\
                "id": "5725767000000002193"\
            },\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "global_search_supported": false,\
            "deletable": true,\
            "description": "It contains insights about CustomModule1.",\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-09-02T22:12:57-07:00",\
            "plural_label": "Loan Insights",\
            "presence_sub_menu": false,\
            "actual_plural_label": "CustomModule1 Insights",\
            "lookupable": false,\
            "id": "5725767000001127261",\
            "isBlueprintSupported": false,\
            "visibility": 6142,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": true,\
            "actual_singular_label": "CustomModule1 Insight",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "5725767000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "5725767000000026014"\
                },\
                {\
                    "name": "Test1",\
                    "id": "5725767000000871001"\
                },\
                {\
                    "name": "Test",\
                    "id": "5725767000001085002"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 96,\
            "singular_label": "Loan Insight",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "CustomModule1_Insights__s",\
            "quick_create": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "generated_type": "custom",\
            "feeds_required": false,\
            "public_fields_configured": false,\
            "arguments": [],\
            "module_name": "CustomModule7",\
            "profile_count": 4,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Loans",\
                "id": "5725767000000767495"\
            },\
            "status": "visible"\
        },\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)