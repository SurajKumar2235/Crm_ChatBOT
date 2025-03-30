
#### Response JSON Keys

- created\_timestring



Represents the date and time at which the inventory template was created.

- modified\_timestring



Represents the date and time at which the inventory template was last modified.

- folderJSON object



Represents the name and unique ID of the template folder.

- last\_usage\_timestring



Represents the date and time at which the inventory template was last used.

- moduleJSON object



Represents the API name and unique ID of the module with which the inventory template is associated.

- namestring



Represents the name of the template.

- modified\_byJSON object



Represents the name and ID of the user who last modified the inventory template.

- idstring



Represents the unique ID of the inventory template.

- editor\_modestring



Represents the mode in which the inventory template is created. The possible values are **gallery:** the template is chosen from the template gallery and is customized, **rich\_text**: a pre-designed custom template, **plain\_text**: the template is built from scratch.

To know more about the editor modes, refer to [Creating Inventory Templates](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/customizing-templates/articles/inventory-templates#From_the_Scratch).

- favoriteboolean



Represents if the inventory template is marked as favorite.

- categorystring



Represents the category of the template. The possible values are **custom\_templates**: the templates created by a user, **system\_templates**: the templates present in the system by default, **plugin\_templates**: the templates that are created and installed from the Zoho CRM extension, **marketplace\_templates**: the templates that are created and installed from the published plugins.

- created\_byJSON object



Represents the name and ID of the user who created the inventory template.


#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name specified is invalid.

**Resolution:** Specify the valid module API name. Refer to the _Supported modules_ section above.

- PATTERN\_NOT\_MATCHEDHTTP 400



You have specified incorrect values for the key specified in "api\_name" of the response.

**Resolution:** Input correct values.

- FEATURE\_NOT\_SUPPORTEDHTTP 403



This feature is not supported for your edition.

**Resolution:** Contact your administrator.

- NO\_PERMISSIONHTTP 403



You do not have permission to view the templates of this module.

**Resolution:** Contact your administrator.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one.

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the _Request URL_ section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.templates.inventory.READ scope. Create a new client with valid scope. Refer to the _Scope_ section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to the _Endpoints_ section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read records data

**Resolution:** The user does not have the permission to retrieve records data. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "inventory_templates": [\
        {\
            "created_time": "2021-08-09T09:52:11+05:30",\
            "modified_time": "2021-08-09T09:52:11+05:30",\
            "folder": {\
                "name": "Public Templates",\
                "id": "4876876000000329734"\
            },\
            "last_usage_time": null,\
            "module": {\
                "api_name": "Purchase_Orders",\
                "id": "4876876000000002223"\
            },\
            "name": "Purchase Order Template",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "id": "4876876000000329743",\
            "editor_mode": "rich_text",\
            "category": "system_templates",\
            "favorite": false,\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            }\
        },\
        {\
            "created_time": "2021-08-09T09:52:11+05:30",\
            "modified_time": "2021-08-09T09:52:11+05:30",\
            "folder": {\
                "name": "Public Templates",\
                "id": "4876876000000329734"\
            },\
            "last_usage_time": null,\
            "module": {\
                "api_name": "Sales_Orders",\
                "id": "4876876000000002221"\
            },\
            "name": "Sales Order Template",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "id": "4876876000000329741",\
            "editor_mode": "rich_text",\
            "category": "system_templates",\
            "favorite": false,\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            }\
        },\
        {\
            "created_time": "2021-08-09T09:52:11+05:30",\
            "modified_time": "2021-08-09T09:52:11+05:30",\
            "folder": {\
                "name": "Public Templates",\
                "id": "4876876000000329734"\
            },\
            "last_usage_time": null,\
            "module": {\
                "api_name": "Invoices",\
                "id": "4876876000000002225"\
            },\
            "name": "Invoice Template",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "id": "4876876000000329739",\
            "editor_mode": "rich_text",\
            "category": "system_templates",\
            "favorite": false,\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            }\
        },\
        {\
            "created_time": "2021-08-09T09:52:10+05:30",\
            "modified_time": "2021-08-09T09:52:10+05:30",\
            "folder": {\
                "name": "Public Templates",\
                "id": "4876876000000329734"\
            },\
            "last_usage_time": null,\
            "module": {\
                "api_name": "Quotes",\
                "id": "4876876000000002219"\
            },\
            "name": "Quote Template",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "id": "4876876000000329737",\
            "editor_mode": "rich_text",\
            "category": "system_templates",\
            "favorite": false,\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            }\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 4,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/inventory_templates.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)