# Wizards API

A Wizard helps you divide a long form into a series of screens, where users can enter data on each screen as they proceed to the next step until completion. Wizards reduce the chances of errors during data entry as the screens can be partially saved as a draft and submitted later. For more details, refer to [Wizards in Zoho CRM](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/wizards/articles/wizards).

#### Endpoints

[GET /settings/wizards](https://www.zoho.com/crm/developer/docs/api/v7/get-wizards.html)

[GET /settings/wizards/{wizard\_ID}?layout\_id={layout\_ID}](https://www.zoho.com/crm/developer/docs/api/v7/get-wizards.html)

#### Purpose

To get the details of the wizards in a module.

### Request Details

#### Request URL

**All wizards** \- {api-domain}/crm/{version}/settings/wizards

**Layout-specific wizard** \- {api-domain}/crm/{version}/settings/wizards/{wizard\_ID}?layout\_id={layout\_ID}

##### Supported modules

Leads, Contacts, Deals, Accounts, and custom

#### Header

**Authorization**: Zoho-oauthtoken <access\_token>

#### Scope

Scope = ZohoCRM.settings.wizards.READ

##### Parameters

- layout\_idstring, mandatory when you want to fetch a layout-specific wizard



The ID of the layout that you want to fetch the wizard's details from. Use the [Layouts MetaData API](https://www.zoho.com/crm/developer/docs/api/v2.1/layouts-meta.html) to obtain the ID of the layout.


**Note**

- When you set up conditional rules for a wizard, the response contains the keys **execute\_on** and **type**.
- **execute\_on** represents when the conditional rule is executed. The values are **create**, **edit**, and **create\_edit**.
- **type** represents the action you want to take when the condition is met. The values are **set\_values**, **set\_lock**, **show\_component**, and **show\_widget**.
- When **type=set\_lock**, the response contains the key **exempted\_profiles**. This array contains the list of profiles that allow edits even after locking specific fields.
- The **color\_palette** key is added that displays the colors available for a button on a screen. Note that this key is available in the response only if you have chosen at least one custom color for the button on a screen.
- The following are the changes made to this API from version 5 when you fetch a specific wizard in a layout:
  - A new JSON array **portal\_user\_types** is added to the response that displays the list of portal user types that have access to the buttons in the wizard.
  - A new JSON array **exempted\_portal\_user\_types** is added to the response that represents the list of portal user types that have access to buttons in wizards that are blocked for other user types.
  - Under the **segments**, for **buttons**, the **Profiles** JSON array is added. This indicates the profiles that have access to that button in that screen.
  - In the **Screens** JSON array, the "type" of **segments** JSON object is changed from fields to **composite**.
  - In the **segments** JSON array, the **fields** JSON array is renamed to **elements**.
  - Each object in the **elements** JSON array contains the sequence number, **resource**, and **type** keys. **resource** includes the "name" and "id" of the field or the query component on the screen. **type** indicates whether the resource is a **field** or **query\_component**.
- From V6, you can get the **list of available screens** in Wizards. See the sample response for reference.

#### Sample Request to Get All Wizards in a Module

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/wizards"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "wizards": [\
        {\
            "created_time": "2021-02-16T14:51:28+05:30",\
            "modified_time": "2022-11-16T05:58:29+05:30",\
            "module": {\
                "api_name": "Leads",\
                "id": "3652397000000002175"\
            },\
            "name": "wizard 2 leads",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "profiles": [\
                {\
                    "display_label": "Administrator",\
                    "name": "Administrator",\
                    "id": "3652397000000026011"\
                },\
                {\
                    "display_label": "admin clone",\
                    "name": "admin clone",\
                    "id": "3652397000005787196"\
                },\
                {\
                    "display_label": "Sales Manager",\
                    "name": "Sales Manager",\
                    "id": "3652397000009590009"\
                }\
            ],\
            "active": true,\
            "containers": [\
                {\
                    "layout": {\
                        "name": "Standard",\
                        "id": "3652397000000091055"\
                    },\
                    "id": "3652397000000091055"\
                }\
            ],\
            "id": "3652397000003875019",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            }\
        },\
        {\
            "created_time": "2021-01-21T06:28:21+05:30",\
            "modified_time": "2021-01-21T06:28:21+05:30",\
            "module": {\
                "api_name": "Leads",\
                "id": "3652397000000002175"\
            },\
            "name": "wizard1",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "profiles": [\
                {\
                    "display_label": "Administrator",\
                    "name": "Administrator",\
                    "id": "3652397000000026011"\
                },\
                {\
                    "display_label": "Standard",\
                    "name": "Standard",\
                    "id": "3652397000000026014"\
                },\
                {\
                    "display_label": "Free",\
                    "name": "Free",\
                    "id": "3652397000001614008"\
                },\
                {\
                    "display_label": "admin clone",\
                    "name": "admin clone",\
                    "id": "3652397000005787196"\
                },\
                {\
                    "display_label": "Sales Manager",\
                    "name": "Sales Manager",\
                    "id": "3652397000009590009"\
                },\
                {\
                    "display_label": "test23_$",\
                    "name": "test23_$",\
                    "id": "3652397000009593001"\
                }\
            ],\
            "active": true,\
            "containers": [\
                {\
                    "layout": {\
                        "name": "Standard",\
                        "id": "3652397000000091055"\
                    },\
                    "id": "3652397000000091055"\
                }\
            ],\
            "id": "3652397000003677001",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            }\
        },\
        {\
            "created_time": "2021-01-21T07:11:06+05:30",\
            "modified_time": "2021-01-21T07:11:06+05:30",\
            "module": {\
                "api_name": "Contacts",\
                "id": "3652397000000002179"\
            },\
            "name": "wizard2",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "profiles": [\
                {\
                    "display_label": "Administrator",\
                    "name": "Administrator",\
                    "id": "3652397000000026011"\
                },\
                {\
                    "display_label": "admin clone",\
                    "name": "admin clone",\
                    "id": "3652397000005787196"\
                },\
                {\
                    "display_label": "Sales Manager",\
                    "name": "Sales Manager",\
                    "id": "3652397000009590009"\
                }\
            ],\
            "active": true,\
            "containers": [\
                {\
                    "layout": {\
                        "name": "Standard",\
                        "id": "3652397000000091033"\
                    },\
                    "id": "3652397000000091033"\
                }\
            ],\
            "screens": [\
                {\
                    "display_label": "Screen 1",\
                    "api_name": "Screen_1",\
                    "id": "2423488000000709018"\
                },\
                {\
                    "display_label": "Screen 2",\
                    "api_name": "Screen_2",\
                    "id": "2423488000000709020"\
                },\
                {\
                    "display_label": "Screen 3",\
                    "api_name": "Screen_3",\
                    "id": "2423488000000709022"\
                }\
            ],\
            "id": "3652397000003677031",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            }\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- REQUIRED\_PARAM\_MISSINGHTTP 400



You have not specified the layout ID in the request.



**Resolution:** "layout\_id" is a mandatory parameter when you want to fetch the details of a particular wizard in a module.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the scope required to use this API.

**Resolution:** Use the correct scope and generate the grant and access tokens to use this API.

- NO\_PERMISSIONHTTP 403



You do not have permission to use this API.

**Resolution:** Contact your administrator.


#### Sample Request to Get a Layout-specific Wizard

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/wizards/3652397000003875019?layout_id=3652397000000091055"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "wizards": [\
        {\
            "created_time": "2023-12-06T16:56:25+05:30",\
            "modified_time": "2023-12-06T18:40:27+05:30",\
            "portal_user_types": null,\
            "module": {\
                "api_name": "Leads",\
                "id": "2423488000000000125"\
            },\
            "name": "test",\
            "modified_by": {\
                "name": "Patricia",\
                "id": "2423488000000483001"\
            },\
            "profiles": [\
                {\
                    "display_label": "Administrator",\
                    "name": "Administrator",\
                    "id": "2423488000000015972"\
                },\
                {\
                    "display_label": "Standard",\
                    "name": "Standard",\
                    "id": "2423488000000015975"\
                }\
            ],\
            "active": true,\
            "containers": [\
                {\
                    "layout": {\
                        "name": "Standard",\
                        "id": "2423488000000095055"\
                    },\
                    "chart_data": {\
                        "nodes": [\
                            {\
                                "pos_y": 300,\
                                "pos_x": 618,\
                                "start_node": true,\
                                "screen": {\
                                    "display_label": "Screen 1",\
                                    "id": "2423488000000709018"\
                                }\
                            },\
                            {\
                                "pos_y": 480,\
                                "pos_x": 998,\
                                "start_node": false,\
                                "screen": {\
                                    "display_label": "Screen 2",\
                                    "id": "2423488000000709020"\
                                }\
                            },\
                            {\
                                "pos_y": 440,\
                                "pos_x": 1498,\
                                "start_node": false,\
                                "screen": {\
                                    "display_label": "Screen 3",\
                                    "id": "2423488000000709022"\
                                }\
                            }\
                        ],\
                        "connections": [\
                            {\
                                "source_screen": {\
                                    "display_label": "Screen 1",\
                                    "id": "2423488000000709018"\
                                },\
                                "target_screen": {\
                                    "display_label": "Screen 2",\
                                    "id": "2423488000000709020"\
                                },\
                                "id": "2423488000000709080"\
                            },\
                            {\
                                "source_screen": {\
                                    "display_label": "Screen 2",\
                                    "id": "2423488000000709020"\
                                },\
                                "target_screen": {\
                                    "display_label": "Screen 3",\
                                    "id": "2423488000000709022"\
                                },\
                                "id": "2423488000000709082"\
                            }\
                        ],\
                        "color_palette": {\
                            "button_background": [\
                                "#ADD9FF",\
                                "#C4F0B3",\
                                "#FFD6BC",\
                                "#F8E199",\
                                "#FFC6C6"\
                            ]\
                        }\
                    },\
                    "screens": [\
                        {\
                            "display_label": "Screen 1",\
                            "api_name": "Screen_1",\
                            "id": "2423488000000709018",\
                            "conditional_rules": null,\
                            "segments": [\
                                {\
                                    "sequence_number": 1,\
                                    "display_label": "Lead Image",\
                                    "tab_traversal": "left_to_right",\
                                    "column_count": 1,\
                                    "elements": [\
                                        {\
                                            "sequence_number": 1,\
                                            "resource": {\
                                                "name": "Record_Image",\
                                                "id": "2423488000000179001"\
                                            },\
                                            "type": "field"\
                                        }\
                                    ],\
                                    "id": "2423488000000712004",\
                                    "type": "composite"\
                                },\
                                {\
                                    "sequence_number": 2,\
                                    "display_label": "Segment Title",\
                                    "tab_traversal": "left_to_right",\
                                    "column_count": 2,\
                                    "elements": [\
                                        {\
                                            "sequence_number": 0,\
                                            "resource": {\
                                                "name": "Salutation",\
                                                "id": "2423488000000000601"\
                                            },\
                                            "type": "field"\
                                        },\
                                        {\
                                            "sequence_number": 1,\
                                            "resource": {\
                                                "name": "Last_Name",\
                                                "id": "2423488000000000559"\
                                            },\
                                            "type": "field"\
                                        },\
                                        {\
                                            "sequence_number": 3,\
                                            "resource": {\
                                                "name": "First_Name",\
                                                "id": "2423488000000000557"\
                                            },\
                                            "type": "field"\
                                        },\
                                        {\
                                            "sequence_number": 5,\
                                            "resource": {\
                                                "name": "Email",\
                                                "id": "2423488000000000563"\
                                            },\
                                            "type": "field"\
                                        },\
                                        {\
                                            "sequence_number": 7,\
                                            "resource": {\
                                                "name": "Image_Upload",\
                                                "id": "2423488000000534029"\
                                            },\
                                            "type": "field"\
                                        }\
                                    ],\
                                    "id": "2423488000000709024",\
                                    "type": "composite"\
                                },\
                                {\
                                    "sequence_number": 3,\
                                    "display_label": "Dummy",\
                                    "buttons": [\
                                        {\
                                            "color": "#fff",\
                                            "shape": "square",\
                                            "visibility": "show",\
                                            "resource": null,\
                                            "criteria": null,\
                                            "profiles": null,\
                                            "target_screen": {\
                                                "name": "Screen 2",\
                                                "id": "2423488000000709020"\
                                            },\
                                            "type": "transition",\
                                            "transition": null,\
                                            "sequence_number": 1,\
                                            "display_label": "Screen1",\
                                            "background_color": "#00A3F3",\
                                            "name": "WB_Screen1",\
                                            "id": "2423488000000709038",\
                                            "category": "wizard_button"\
                                        }\
                                    ],\
                                    "tab_traversal": "left_to_right",\
                                    "column_count": 2,\
                                    "id": "2423488000000709036",\
                                    "type": "buttons"\
                                }\
                            ]\
                        },\
                        {\
                            "display_label": "Screen 2",\
                            "api_name": "Screen_2",\
                            "id": "2423488000000709020",\
                            "conditional_rules": null,\
                            "segments": [\
                                {\
                                    "sequence_number": 1,\
                                    "display_label": "Lead Image",\
                                    "tab_traversal": "left_to_right",\
                                    "column_count": 1,\
                                    "elements": [\
                                        {\
                                            "sequence_number": 1,\
                                            "resource": {\
                                                "name": "Record_Image",\
                                                "id": "2423488000000179001"\
                                            },\
                                            "type": "field"\
                                        }\
                                    ],\
                                    "id": "2423488000000712012",\
                                    "type": "composite"\
                                },\
                                {\
                                    "sequence_number": 2,\
                                    "display_label": "Lead came from",\
                                    "tab_traversal": "left_to_right",\
                                    "column_count": 2,\
                                    "elements": [\
                                        {\
                                            "sequence_number": 1,\
                                            "resource": {\
                                                "name": "Lead_Source",\
                                                "id": "2423488000000000573"\
                                            },\
                                            "type": "field"\
                                        },\
                                        {\
                                            "sequence_number": 3,\
                                            "resource": {\
                                                "name": "Lead_Status",\
                                                "id": "2423488000000000575"\
                                            },\
                                            "type": "field"\
                                        }\
                                    ],\
                                    "id": "2423488000000709046",\
                                    "type": "composite"\
                                },\
                                {\
                                    "sequence_number": 3,\
                                    "display_label": "Dummy",\
                                    "buttons": [\
                                        {\
                                            "color": "#fff",\
                                            "shape": "square",\
                                            "visibility": "show",\
                                            "resource": null,\
                                            "criteria": null,\
                                            "profiles": null,\
                                            "target_screen": {\
                                                "name": "Screen 3",\
                                                "id": "2423488000000709022"\
                                            },\
                                            "type": "transition",\
                                            "transition": null,\
                                            "sequence_number": 1,\
                                            "display_label": "screen2",\
                                            "background_color": "#00A3F3",\
                                            "name": "WB_screen2",\
                                            "id": "2423488000000709056",\
                                            "category": "wizard_button"\
                                        }\
                                    ],\
                                    "tab_traversal": "left_to_right",\
                                    "column_count": 2,\
                                    "id": "2423488000000709054",\
                                    "type": "buttons"\
                                }\
                            ]\
                        },\
                        {\
                            "display_label": "Screen 3",\
                            "api_name": "Screen_3",\
                            "id": "2423488000000709022",\
                            "conditional_rules": null,\
                            "segments": [\
                                {\
                                    "sequence_number": 1,\
                                    "display_label": "Revenue",\
                                    "tab_traversal": "left_to_right",\
                                    "column_count": 2,\
                                    "elements": [\
                                        {\
                                            "sequence_number": 1,\
                                            "resource": {\
                                                "name": "Annual_Revenue",\
                                                "id": "2423488000000000581"\
                                            },\
                                            "type": "field"\
                                        }\
                                    ],\
                                    "id": "2423488000000709064",\
                                    "type": "composite"\
                                },\
                                {\
                                    "sequence_number": 2,\
                                    "display_label": "Dummy",\
                                    "buttons": [\
                                        {\
                                            "color": "#fff",\
                                            "shape": "square",\
                                            "visibility": "show",\
                                            "resource": null,\
                                            "criteria": null,\
                                            "profiles": null,\
                                            "target_screen": null,\
                                            "type": "save",\
                                            "message": null,\
                                            "transition": null,\
                                            "sequence_number": 1,\
                                            "display_label": "Screen 3",\
                                            "background_color": "#00A3F3",\
                                            "name": "WB_Screen_3",\
                                            "id": "2423488000000709072",\
                                            "category": "wizard_button"\
                                        }\
                                    ],\
                                    "tab_traversal": "left_to_right",\
                                    "column_count": 2,\
                                    "id": "2423488000000709070",\
                                    "type": "buttons"\
                                }\
                            ]\
                        }\
                    ],\
                    "id": "2423488000000095055"\
                }\
            ],\
            "id": "2423488000000709012",\
            "created_by": {\
                "name": "Patricia",\
                "id": "2423488000000483001"\
            }\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-wizards.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)