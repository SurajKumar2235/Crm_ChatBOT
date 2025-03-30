
# Modules API

Zoho CRM has standard modules such as Leads, Accounts, Contacts, Deals, Forecasts, Activities, and so on. Using Zoho CRM REST API, you can retrieve the list of available modules through the Get List of Modules API.

### Get List of Modules

#### Purpose

To retrieve the list of all the modules available in your CRM account.

#### Endpoints

[GET /settings/modules](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/modules

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

- Refer to the key **api\_name** in the JSON data while accessing the resource. Every module, field, and related list will have an API name, which you can use in the third-party integrations. For example, if you want to access the Leads module, use “Leads" which is the api\_name every time you access the resource. The Zoho CRM generates an API name internally while creating a custom module, custom field, or related list label. Please note that you cannot alter the API Names for the default modules, fields, and related list. You can change the API names only for custom modules, fields, and related lists.
- The generated API name can contain only alphabets, numbers, and underscores. The API name should start with an alphabet and should not have two consecutive underscores or end with an underscore.
- For the Events module,
  - The **singular\_label** and **plural\_label** will be **Meeting** and **Meetings**, respectively.
  - The **module\_name** will be **Meetings**.
  - The api\_name will remain Events.
- The modules removed from **Organize** will also be fetched in the response.
- Use the **profiles** key in the response to know the profiles that have permission to view a particular module.
- New modules are added when a new file upload / image upload fields are added to a module.

#### Parameters

- **status**

The status parameter can be used to retrieve specific types of modules. Valid values for status are **user\_hidden,system\_hidden,scheduled\_for\_deletion,visible.** eg:status=user\_hidden,system\_hidden can be used to retrieve all modules that are hidden to user and system. Status parameter is not mandatory.


#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/modules"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.03xxxxxxxxxxxxxxxxxa5317.dxxxxxxxxxxxxxxxxxfa"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/settings/modules"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON Keys

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

- idstring



Represents the unique ID of the module. For instance, 4150868000000002173

- visibleboolean



Represents if the module is visible to the current user's profile.

- visibilityinteger



Represents the visibility of the module to the current user.



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

- api\_supportedboolean



Describes if the current module is accessible via API.

**Possible values- true:** The current module is accessible via API. For instance, Leads, Quotes.

**false:** The current module is not accessible via API. For instance, Feeds, Documents, and so on.

- profilesJSON array



Each object in the array represents the details of the profile that has access to the module. Example: {

"name": "Administrator",

"id": "4150868000000026011"

},

- show\_as\_tabboolean



Represents if the module is displayed as a tab in the CRM UI.

**Possible values- true:** The module is displayed as a tab in the CRM UI. For instance, Contacts, Accounts, and so on.

**false:** The module is not displayed as a tab in the CRM UI. For instance, Notes, Attachments, Linking modules, and so on.

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



Represents the display name of the module.

- business\_card\_field\_limitinteger



Represents the number of fields you can have in the business card details.

**Note:** Business card details are displayed on the "Details View" page of a record. This is also the information shown when you hover over a lookup field.

- custom\_viewJSON object



Represents the details of the custom views created for this module. If you pass the custom view ID, the response contains the details of that custom view. Otherwise, the system fetches the details of the default view in that module.

- parent\_moduleJSON object



Represents the details of the parent module, if any. For instance, Activities is the parent module for Tasks, Calls, and Events.

- statusboolean



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
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-07-21T15:19:45+05:30",\
            "plural_label": "Vehicles",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Vehicles",\
            "id": "4876876000002670002",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Vehicle",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "singular_label": "Vehicle",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Vehicles",\
            "quick_create": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "custom",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "CustomModule3",\
            "profile_count": 1,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "user_hidden"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Home",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Home",\
            "id": "4876876000000002173",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Home",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
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
            "arguments": [],\
            "module_name": "Home",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-03-27T20:33:50+05:30",\
            "plural_label": "Leads",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Leads",\
            "id": "4876876000000002175",\
            "visibility": 1,\
            "convertable": true,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Lead",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
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
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Leads",\
            "profile_count": 1,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-03-27T20:33:50+05:30",\
            "plural_label": "Contacts",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Contacts",\
            "id": "4876876000000002179",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Contact",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
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
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Contacts",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-05-11T18:43:31+05:30",\
            "plural_label": "Deals",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Deals",\
            "id": "4876876000000002181",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Deal",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 4,\
            "singular_label": "Deal",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Deals",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": true,\
            "arguments": [],\
            "module_name": "Deals",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-03-07T00:10:23+05:30",\
            "plural_label": "Tasks",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Tasks",\
            "id": "4876876000000002193",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Task",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 5,\
            "singular_label": "Task",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Tasks",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Tasks",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-03-07T00:10:24+05:30",\
            "plural_label": "Meetings",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Meetings",\
            "id": "4876876000000002195",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Meeting",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 5,\
            "singular_label": "Meeting",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Events",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Meetings",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-03-07T00:10:24+05:30",\
            "plural_label": "Calls",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Calls",\
            "id": "4876876000000033015",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Call",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 5,\
            "singular_label": "Call",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Calls",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Calls",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Reports",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Reports",\
            "id": "4876876000000002185",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Report",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 6,\
            "singular_label": "Report",\
            "viewable": true,\
            "api_supported": false,\
            "api_name": "Reports",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Reports",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Analytics",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Analytics",\
            "id": "4876876000000002187",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Analytics",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 7,\
            "singular_label": "Analytics",\
            "viewable": true,\
            "api_supported": false,\
            "api_name": "Analytics",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Dashboards",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-04-04T10:47:58+05:30",\
            "plural_label": "Products",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Products",\
            "id": "4876876000000002213",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Product",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 8,\
            "singular_label": "Product",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Products",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Products",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-03-19T15:37:55+05:30",\
            "plural_label": "Quotes",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Quotes",\
            "id": "4876876000000002219",\
            "visibility": 1,\
            "convertable": true,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Quote",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 9,\
            "singular_label": "Quote",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Quotes",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Quotes",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-03-07T00:10:26+05:30",\
            "plural_label": "Sales Orders",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Sales Orders",\
            "id": "4876876000000002221",\
            "visibility": 1,\
            "convertable": true,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Sales Order",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 10,\
            "singular_label": "Sales Order",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Sales_Orders",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "SalesOrders",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "plural_label": "Purchase Orders",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Purchase Orders",\
            "id": "4876876000000002223",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Purchase Order",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 11,\
            "singular_label": "Purchase Order",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Purchase_Orders",\
            "quick_create": true,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "PurchaseOrders",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-03-07T00:10:27+05:30",\
            "plural_label": "Invoices",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Invoices",\
            "id": "4876876000000002225",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Invoice",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 12,\
            "singular_label": "Invoice",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Invoices",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Invoices",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "SalesInbox",\
            "presence_sub_menu": false,\
            "actual_plural_label": "SalesInbox",\
            "id": "4876876000000118001",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "SalesInbox",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 13,\
            "singular_label": "SalesInbox",\
            "viewable": true,\
            "api_supported": false,\
            "api_name": "SalesInbox",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "SalesInbox",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Feeds",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Feeds",\
            "id": "4876876000000071001",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Feeds",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 14,\
            "singular_label": "Feeds",\
            "viewable": true,\
            "api_supported": false,\
            "api_name": "Feeds",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Feeds",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "plural_label": "Campaigns",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Campaigns",\
            "id": "4876876000000002183",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Campaign",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 15,\
            "singular_label": "Campaign",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Campaigns",\
            "quick_create": true,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Campaigns",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "plural_label": "Vendors",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Vendors",\
            "id": "4876876000000002215",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Vendor",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 16,\
            "singular_label": "Vendor",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Vendors",\
            "quick_create": true,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Vendors",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2022-08-29T10:28:24+05:30",\
            "plural_label": "Price Books",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Price Books",\
            "id": "4876876000000002217",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Price Book",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 17,\
            "singular_label": "Price Book",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Price_Books",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "PriceBooks",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "plural_label": "Cases",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Cases",\
            "id": "4876876000000002209",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Case",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 18,\
            "singular_label": "Case",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Cases",\
            "quick_create": true,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Cases",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "plural_label": "Solutions",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Solutions",\
            "id": "4876876000000002211",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Solution",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 19,\
            "singular_label": "Solution",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Solutions",\
            "quick_create": true,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Solutions",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Documents",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Documents",\
            "id": "4876876000000056001",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Documents",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 20,\
            "singular_label": "Documents",\
            "viewable": true,\
            "api_supported": false,\
            "api_name": "Documents",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Documents",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Forecasts",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Forecasts",\
            "id": "4876876000000002201",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": false,\
            "actual_singular_label": "Forecast",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 21,\
            "singular_label": "Forecast",\
            "viewable": true,\
            "api_supported": false,\
            "api_name": "Forecasts",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Forecasts",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Visits",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Visits",\
            "id": "4876876000000077007",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Visit",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 22,\
            "singular_label": "Visit",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Visits",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Visits",\
            "profile_count": 1,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Social",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Social",\
            "id": "4876876000000065001",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Social",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 23,\
            "singular_label": "Social",\
            "viewable": true,\
            "api_supported": false,\
            "api_name": "Social",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Social",\
            "profile_count": 1,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-03-08T16:34:18+05:30",\
            "plural_label": "Quoted Item",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Quoted Item",\
            "id": "4876876000000233001",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Quoted Item",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 23,\
            "singular_label": "Quoted Item",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Quoted_Items",\
            "quick_create": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "subform",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "QuotedItems",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Quotes",\
                "id": "4876876000000002219"\
            },\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Google Ads",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Google AdWords",\
            "id": "4876876000000073001",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Google AdWord",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 24,\
            "singular_label": "Google AdWord",\
            "viewable": true,\
            "api_supported": false,\
            "api_name": "Google_AdWords",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Google AdWords",\
            "profile_count": 1,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "track_current_data": true,\
            "plural_label": "Stage History",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Stage History",\
            "id": "4876876000000174001",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Stage History",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 24,\
            "singular_label": "Stage History",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "DealHistory",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "field_tracker",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "DealHistory",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Deals",\
                "id": "4876876000000002181"\
            },\
            "status": "system_hidden"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "EmailSentiment",\
            "presence_sub_menu": false,\
            "actual_plural_label": "EmailSentiment",\
            "id": "4876876000000197001",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "EmailSentiment",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 24,\
            "singular_label": "EmailSentiment",\
            "viewable": false,\
            "api_supported": true,\
            "api_name": "Email_Sentiment",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "EmailSentiment",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "plural_label": "Ordered Items",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Ordered Items",\
            "id": "4876876000000233419",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Ordered Item",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 24,\
            "singular_label": "Ordered Item",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Ordered_Items",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "subform",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "OrderedItems",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Sales_Orders",\
                "id": "4876876000000002221"\
            },\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Email Analytics",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Email Analytics",\
            "id": "4876876000000246017",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Email Analytics",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 24,\
            "singular_label": "Email Analytics",\
            "viewable": false,\
            "api_supported": true,\
            "api_name": "Email_Analytics",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Email Analytics",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Email Template Analytics",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Email Template Analytics",\
            "id": "4876876000000246114",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Email Template Analytics",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 24,\
            "singular_label": "Email Template Analytics",\
            "viewable": false,\
            "api_supported": true,\
            "api_name": "Email_Template_Analytics",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Email Template Analytics",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "plural_label": "Purchase Items",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Purchase Items",\
            "id": "4876876000000233837",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Purchase Item",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 25,\
            "singular_label": "Purchase Item",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Purchase_Items",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "subform",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "PurchaseItems",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Purchase_Orders",\
                "id": "4876876000000002223"\
            },\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2022-05-18T11:44:16+05:30",\
            "plural_label": "Alternate Address",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Alternate Address",\
            "id": "4876876000001241027",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Alternate Address",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 25,\
            "singular_label": "Alternate Address",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Alternate_Address",\
            "quick_create": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "subform",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "LinkingModule2",\
            "profile_count": 1,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Leads",\
                "id": "4876876000000002175"\
            },\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-09-13T17:12:37+05:30",\
            "plural_label": "Contact details",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Contact details",\
            "id": "4876876000004950005",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Contact details",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 25,\
            "singular_label": "Contact details",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Contact_details",\
            "quick_create": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "subform",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "LinkingModule9",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Accounts",\
                "id": "4876876000000002177"\
            },\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "plural_label": "Invoiced Items",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Invoiced Items",\
            "id": "4876876000000234255",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Invoiced Item",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 26,\
            "singular_label": "Invoiced Item",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Invoiced_Items",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "subform",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "InvoicedItems",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Invoices",\
                "id": "4876876000000002225"\
            },\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "My Jobs",\
            "presence_sub_menu": false,\
            "actual_plural_label": "My Jobs",\
            "id": "4876876000000425139",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "My Jobs",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 26,\
            "singular_label": "My Jobs",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Approvals",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Approvals",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Projects",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Projects",\
            "id": "4876876000001732029",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": true,\
            "actual_singular_label": "Projects",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 27,\
            "singular_label": "Projects",\
            "viewable": true,\
            "api_supported": false,\
            "api_name": "Projects",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Projects",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "plural_label": "Services",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Services",\
            "id": "4876876000002362022",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Service",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 28,\
            "singular_label": "Service",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Services__s",\
            "quick_create": true,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Services",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-09-14T02:12:34+05:30",\
            "plural_label": "Notes",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Notes",\
            "id": "4876876000000002197",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": true,\
            "actual_singular_label": "Note",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 29,\
            "singular_label": "Note",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Notes",\
            "quick_create": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Notes",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "system_hidden"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "plural_label": "Appointments",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Appointments",\
            "id": "4876876000002362026",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Appointment",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 29,\
            "singular_label": "Appointment",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Appointments__s",\
            "quick_create": true,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Appointments",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Attachments",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Attachments",\
            "id": "4876876000000002227",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Attachment",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 33,\
            "singular_label": "Attachment",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Attachments",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Attachments",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "system_hidden"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-07-13T18:17:36+05:30",\
            "plural_label": "Repairs",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Repairs",\
            "id": "4876876000004300003",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Repairs",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 33,\
            "singular_label": "Repairs",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Repairs",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "custom",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "CustomModule4",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-09-14T12:52:45+05:30",\
            "plural_label": "Accounts",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Accounts",\
            "id": "4876876000000002177",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Account",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 34,\
            "singular_label": "Account",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Accounts",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Accounts",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": "2023-03-07T00:10:22+05:30",\
            "plural_label": "Emails",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Emails",\
            "id": "4876876000000014163",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Email",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 34,\
            "singular_label": "Email",\
            "viewable": true,\
            "api_supported": false,\
            "api_name": "Emails",\
            "quick_create": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Emails",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2023-08-08T15:36:51+05:30",\
            "plural_label": "Contacts X Accounts",\
            "presence_sub_menu": true,\
            "actual_plural_label": "Contacts X Accounts",\
            "id": "4876876000002442012",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Contacts X Accounts",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 36,\
            "singular_label": "Contacts X Accounts",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Contacts_X_Accounts",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "linking",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "LinkingModule5",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Actions Performed",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Actions Performed",\
            "id": "4876876000000137005",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Actions Performed",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 39,\
            "singular_label": "Actions Performed",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Actions_Performed",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Actions Performed",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "system_hidden"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "ShiftHours",\
            "presence_sub_menu": false,\
            "actual_plural_label": "ShiftHours",\
            "id": "4876876000000284011",\
            "visibility": 14334,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "ShiftHour",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 56,\
            "singular_label": "ShiftHour",\
            "viewable": false,\
            "api_supported": false,\
            "api_name": "ShiftHours",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "ShiftHours",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Forecast Quotas",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Forecast Quotas",\
            "id": "4876876000000308015",\
            "visibility": 736,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Forecast Quota",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 57,\
            "singular_label": "Forecast Quota",\
            "viewable": false,\
            "api_supported": false,\
            "api_name": "Forecast_Quotas",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Forecast Quotas",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "system_hidden"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Forecast Items",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Forecast Items",\
            "id": "4876876000000308017",\
            "visibility": 736,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Forecast Item",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 57,\
            "singular_label": "Forecast Item",\
            "viewable": false,\
            "api_supported": false,\
            "api_name": "Forecast_Items",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Forecast Items",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "system_hidden"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Forecast Groups",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Forecast Groups",\
            "id": "4876876000000308025",\
            "visibility": 2044,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Forecast Group",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 57,\
            "singular_label": "Forecast Group",\
            "viewable": false,\
            "api_supported": false,\
            "api_name": "Forecast_Groups",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Forecast Groups",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "system_hidden"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Consents",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Consents",\
            "id": "4876876000000338132",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": true,\
            "actual_singular_label": "Consent",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 59,\
            "singular_label": "Consent",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Consents",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Consents",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Data Subject Requests",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Data Subject Requests",\
            "id": "4876876000000338579",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Data Subject Request",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 60,\
            "singular_label": "Data Subject Request",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Data_Subject_Requests",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Data_Subject_Requests",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Scoring Rules",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Scoring Rules",\
            "id": "4876876000000511001",\
            "visibility": 8194,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Scoring Rule",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 61,\
            "singular_label": "Scoring Rule",\
            "viewable": false,\
            "api_supported": true,\
            "api_name": "Scoring_Rules__s",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Scoring Rules",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Entity Scores",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Entity Scores",\
            "id": "4876876000000511009",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Entity Score",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 62,\
            "singular_label": "Entity Score",\
            "viewable": false,\
            "api_supported": true,\
            "api_name": "Entity_Scores__s",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Entity Scores",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2022-05-13T12:05:26+05:30",\
            "track_current_data": true,\
            "plural_label": "Quote Stage History",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Quote Stage History",\
            "id": "4876876000001190002",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Quote Stage History",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 63,\
            "singular_label": "Quote Stage History",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Quote_Stage_History",\
            "quick_create": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "field_tracker",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "LinkingModule1",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Quotes",\
                "id": "4876876000000002219"\
            },\
            "status": "user_hidden"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": "contains monthly stats of data enrichment for an enabled module",\
            "creatable": true,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Data Enrichment Stats",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Data Enrichment Stats",\
            "id": "4876876000002090021",\
            "visibility": 2046,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": true,\
            "actual_singular_label": "Data Enrichment Stats",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 84,\
            "singular_label": "Data Enrichment Stats",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Data_Enrichment_Stats__s",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "DataEnrichmentStats",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": null,\
            "track_current_data": false,\
            "plural_label": "Appointments Rescheduled History",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Appointments Rescheduled History",\
            "id": "4876876000002365262",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": true,\
            "actual_singular_label": "Appointments Rescheduled History",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 92,\
            "singular_label": "Appointments Rescheduled History",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Appointments_Rescheduled_History__s",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "field_tracker",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "LinkingModule4",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {\
                "api_name": "Appointments__s",\
                "id": "4876876000002362026"\
            },\
            "status": "user_hidden"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": "2023-04-04T12:18:54+05:30",\
            "plural_label": "Locking Information",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Locking Information",\
            "id": "4876876000001839001",\
            "visibility": 2,\
            "convertable": false,\
            "sub_menu_available": false,\
            "editable": false,\
            "actual_singular_label": "Locking Information",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                },\
                {\
                    "name": "Standard",\
                    "id": "4876876000000026014"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 100,\
            "singular_label": "Locking Information",\
            "viewable": false,\
            "api_supported": true,\
            "api_name": "Locking_Information__s",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "LockingInformation",\
            "profile_count": 2,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "File Upload 1",\
            "presence_sub_menu": false,\
            "actual_plural_label": "File Upload 1",\
            "id": "4876876000003933050",\
            "visibility": 2046,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": false,\
            "actual_singular_label": "File Upload 1",\
            "profiles": [],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 103,\
            "singular_label": "File Upload 1",\
            "viewable": false,\
            "api_supported": false,\
            "api_name": "File_Upload_1__s",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Fileupload1",\
            "profile_count": 0,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "File Upload",\
            "presence_sub_menu": false,\
            "actual_plural_label": "File Upload",\
            "id": "4876876000003933052",\
            "visibility": 2046,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": false,\
            "actual_singular_label": "File Upload",\
            "profiles": [],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 104,\
            "singular_label": "File Upload",\
            "viewable": false,\
            "api_supported": false,\
            "api_name": "File_Upload_2__s",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Fileupload2",\
            "profile_count": 0,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Image Upload",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Image Upload",\
            "id": "4876876000003933113",\
            "visibility": 2046,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": false,\
            "actual_singular_label": "Image Upload",\
            "profiles": [],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 106,\
            "singular_label": "Image Upload",\
            "viewable": false,\
            "api_supported": false,\
            "api_name": "Image_Upload_1__s",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Imageupload1",\
            "profile_count": 0,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Image Upload",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Image Upload",\
            "id": "4876876000003933115",\
            "visibility": 2046,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": false,\
            "actual_singular_label": "Image Upload",\
            "profiles": [],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 107,\
            "singular_label": "Image Upload",\
            "viewable": false,\
            "api_supported": false,\
            "api_name": "Image_Upload_2__s",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Imageupload2",\
            "profile_count": 0,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": false,\
            "description": null,\
            "creatable": false,\
            "recycle_bin_on_delete": false,\
            "modified_time": null,\
            "plural_label": "Image Upload 2",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Image Upload 2",\
            "id": "4876876000003933117",\
            "visibility": 2046,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": false,\
            "actual_singular_label": "Image Upload 2",\
            "profiles": [],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 108,\
            "singular_label": "Image Upload 2",\
            "viewable": false,\
            "api_supported": false,\
            "api_name": "Image_Upload_3__s",\
            "quick_create": false,\
            "modified_by": null,\
            "generated_type": "default",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "Imageupload3",\
            "profile_count": 0,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-03-14T12:28:04+05:30",\
            "plural_label": "LeadsXProducts",\
            "presence_sub_menu": true,\
            "actual_plural_label": "LeadsXProducts",\
            "id": "4876876000006805007",\
            "visibility": 1,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "LeadsXProducts",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                }\
            ],\
            "show_as_tab": true,\
            "web_link": null,\
            "sequence_number": 111,\
            "singular_label": "LeadsXProducts",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "LeadsXProducts",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "linking",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "LinkingModule10",\
            "profile_count": 1,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-03-18T20:29:03+05:30",\
            "plural_label": "Leads X Users",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Leads X Users",\
            "id": "4876876000006873010",\
            "visibility": 8194,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Leads X Users",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 112,\
            "singular_label": "Leads X Users",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Leads_X_Users",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "linking",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "LinkingModule11",\
            "profile_count": 1,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        },\
        {\
            "has_more_profiles": false,\
            "access_type": "org_based",\
            "private_profile": null,\
            "deletable": true,\
            "description": null,\
            "creatable": true,\
            "recycle_bin_on_delete": true,\
            "modified_time": "2024-03-27T20:33:49+05:30",\
            "plural_label": "Contacts X Leads",\
            "presence_sub_menu": false,\
            "actual_plural_label": "Contacts X Leads",\
            "id": "4876876000007050006",\
            "visibility": 8194,\
            "convertable": false,\
            "sub_menu_available": true,\
            "editable": true,\
            "actual_singular_label": "Contacts X Leads",\
            "profiles": [\
                {\
                    "name": "Administrator",\
                    "id": "4876876000000026011"\
                }\
            ],\
            "show_as_tab": false,\
            "web_link": null,\
            "sequence_number": 113,\
            "singular_label": "Contacts X Leads",\
            "viewable": true,\
            "api_supported": true,\
            "api_name": "Contacts_X_Leads",\
            "quick_create": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "generated_type": "linking",\
            "feeds_required": false,\
            "arguments": [],\
            "module_name": "LinkingModule8",\
            "profile_count": 1,\
            "business_card_field_limit": 5,\
            "parent_module": {},\
            "status": "visible"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)