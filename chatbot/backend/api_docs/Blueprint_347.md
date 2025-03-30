
# Blueprint APIs

Zoho CRM's Blueprint is simply an online replica of a business process. It captures every detail of your entire offline process within the software. It facilitates automation, validation, and collaboration of teams, thus making your process more efficient and free from loopholes.

### Get Blueprint Data

#### Purpose

To get the next available transitions for that record, fields available for each transitions, current value of each field, and their validation(if any).

#### Endpoints

[GET /{module\_api\_name}/{record\_id}/actions/blueprint](https://www.zoho.com/crm/developer/docs/api/v7/blueprint-details.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/actions/blueprint

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom, Notes, and Activities

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, custom, notes, and activities

#### Possible operation types

ALL - Full access to records

READ - Get records from a module

Note

- A transition can be either **automatic** or **manual**. In an automatic transition, a record moves to the next stage automatically after the set time period in the current stage has elapsed. The **type** key under **transitions** refers to the type of transition in the current state, while the **type** key under **next\_transitions** represents the transition type in the next transition.
- You can choose the escalation time period for a state. You can perform actions such as sending an email alert, triggering a webhook etc,. once it reaches the escalation time. This time period is defined in the **escalation** key under **process\_info**.
- In a parallel transition, a transition can have multiple child transitions. The parent transition gets completed automatically only when all its child transitions are completed. We will introduce this feature later. Refer to [this announcement](https://help.zoho.com/portal/en/community/topic/parallel-transitions-widgets-support-and-more-a-heads-up-on-upcoming-blueprint-enhancements-3-11-2020) for more details.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3652397000003917041/actions/blueprint"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Leads/3652397000003917041/actions/blueprint"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read records

**Resolution:** The user does not have permission to read blueprint data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- RECORD\_NOT\_IN\_PROCESSHTTP 400



Record not in process

**Resolution:** You have specified a record that is not in any process. Specify another record id.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read records

**Resolution:** The user does not have the permission to read blueprint data. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "blueprint": {
        "process_info": {
            "field_id": "1065415000000000575",
            "escalation": null,
            "is_continuous": false,
            "api_name": "Lead_Status",
            "continuous": false,
            "field_label": "Lead Status",
            "name": "Lead nurturing process",
            "column_name": "STATUS",
            "field_value": "Not Contacted",
            "id": "1065415000000342585",
            "field_name": "Lead Status"
        },
        "transitions": [\
            {\
                "next_transitions": [],\
                "data": {\
                    "Multi_User_Lookup": [],\
                    "Multi_Select_Lookup_Contacts": []\
                },\
                "next_field_value": "Contacted",\
                "name": "Establish contact",\
                "criteria_matched": true,\
                "id": "1065415000000342606",\
                "fields": [\
                    {\
                        "system_mandatory": false,\
                        "private": null,\
                        "webhook": false,\
                        "json_type": "jsonarray",\
                        "crypt": null,\
                        "field_label": "Multi-User Lookup",\
                        "tooltip": null,\
                        "created_source": "default",\
                        "layouts": {\
                            "name": "Standard",\
                            "id": "1065415000000095055"\
                        },\
                        "field_read_only": false,\
                        "content": [],\
                        "display_label": "Multi-User Lookup",\
                        "display_type": -1,\
                        "ui_type": 445,\
                        "validation_rule": null,\
                        "read_only": false,\
                        "association_details": null,\
                        "multi_module_lookup": {},\
                        "currency": {},\
                        "id": "1065415000003443727",\
                        "multiuserlookup": {\
                            "display_label": "Users",\
                            "linking_module": "Leads_X_Users",\
                            "lookup_apiname": "userlookup221_5",\
                            "connected_module": null,\
                            "api_name": "Users5",\
                            "connectedlookup_apiname": "Multi_User_Lookup",\
                            "id": "1065415000003443859"\
                        },\
                        "custom_field": true,\
                        "lookup": {},\
                        "convert_mapping": {\
                            "Contacts": null,\
                            "Deals": null,\
                            "Accounts": null\
                        },\
                        "visible": false,\
                        "profiles": [\
                            {\
                                "permission_type": "read_write",\
                                "name": "Administrator",\
                                "id": "1065415000000015972"\
                            },\
                            {\
                                "permission_type": "read_write",\
                                "name": "Standard",\
                                "id": "1065415000000015975"\
                            },\
                            {\
                                "permission_type": "read_write",\
                                "name": "custom profile",\
                                "id": "1065415000003074751"\
                            }\
                        ],\
                        "length": 50,\
                        "column_name": "MXNDUMMYCOLUMN5",\
                        "_type": "fields",\
                        "view_type": {\
                            "view": true,\
                            "edit": true,\
                            "quick_create": false,\
                            "create": true\
                        },\
                        "pick_list_values_sorted_lexically": false,\
                        "sortable": false,\
                        "transition_sequence": 4,\
                        "external": null,\
                        "api_name": "Multi_User_Lookup",\
                        "unique": {},\
                        "history_tracking": null,\
                        "data_type": "multiuserlookup",\
                        "formula": {},\
                        "decimal_place": null,\
                        "pick_list_values": [],\
                        "auto_number": {}\
                    },\
                    {\
                        "system_mandatory": false,\
                        "private": null,\
                        "webhook": false,\
                        "json_type": "jsonarray",\
                        "crypt": null,\
                        "field_label": "Multi-Select-Lookup-Contacts",\
                        "tooltip": null,\
                        "created_source": "default",\
                        "layouts": {\
                            "name": "Standard",\
                            "id": "1065415000000095055"\
                        },\
                        "field_read_only": false,\
                        "content": [],\
                        "display_label": "Multi-Select-Lookup-Contacts",\
                        "display_type": -1,\
                        "ui_type": 444,\
                        "validation_rule": null,\
                        "read_only": false,\
                        "association_details": null,\
                        "multi_module_lookup": {},\
                        "currency": {},\
                        "id": "1065415000003446220",\
                        "custom_field": true,\
                        "lookup": {},\
                        "convert_mapping": {\
                            "Contacts": null,\
                            "Deals": null,\
                            "Accounts": null\
                        },\
                        "visible": false,\
                        "profiles": [\
                            {\
                                "permission_type": "read_write",\
                                "name": "Administrator",\
                                "id": "1065415000000015972"\
                            },\
                            {\
                                "permission_type": "read_write",\
                                "name": "Standard",\
                                "id": "1065415000000015975"\
                            },\
                            {\
                                "permission_type": "read_write",\
                                "name": "custom profile",\
                                "id": "1065415000003074751"\
                            }\
                        ],\
                        "length": 50,\
                        "column_name": "MXNDUMMYCOLUMN6",\
                        "_type": "fields",\
                        "view_type": {\
                            "view": true,\
                            "edit": true,\
                            "quick_create": false,\
                            "create": true\
                        },\
                        "pick_list_values_sorted_lexically": false,\
                        "sortable": false,\
                        "transition_sequence": 5,\
                        "external": null,\
                        "api_name": "Multi_Select_Lookup_Contacts",\
                        "unique": {},\
                        "history_tracking": null,\
                        "data_type": "multiselectlookup",\
                        "formula": {},\
                        "decimal_place": null,\
                        "multiselectlookup": {\
                            "display_label": "Contacts",\
                            "linking_module": "Lead_Contact_Linking_Modu",\
                            "lookup_apiname": "Multi_Select_Lookup_Leads",\
                            "connected_module": "Contacts",\
                            "api_name": "Contacts6",\
                            "connectedlookup_apiname": "Multi_Select_Lookup_Contacts",\
                            "id": "1065415000003446352"\
                        },\
                        "pick_list_values": [],\
                        "auto_number": {}\
                    }\
                ],\
                "type": "manual",\
                "criteria_message": null,\
                "percent_partial_save": 0,\
                "execution_time": null\
            },\
            {\
                "next_transitions": [],\
                "data": {\
                    "widget": {\
                        "name": "Name1",\
                        "id": "1065415000003439878"\
                    }\
                },\
                "next_field_value": "Attempted to Contact",\
                "name": "No answer",\
                "criteria_matched": true,\
                "id": "1065415000000342609",\
                "fields": [\
                    {\
                        "display_label": null,\
                        "data_type": "widget",\
                        "_type": "widget",\
                        "column_name": null,\
                        "personality_name": null,\
                        "id": "0",\
                        "transition_sequence": 1,\
                        "mandatory": true,\
                        "layouts": null\
                    }\
                ],\
                "type": "manual",\
                "criteria_message": null,\
                "percent_partial_save": 0,\
                "execution_time": null\
            }\
        ]
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/blueprint-details.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)