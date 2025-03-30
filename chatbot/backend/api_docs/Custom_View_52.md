
# Custom Views Metadata

#### Purpose

To get the custom views data of a particular module.

#### Endpoints

[GET /settings/custom\_views?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/custom-view-meta.html)

[GET /settings/custom\_views/{custom\_view\_id}?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/custom-view-meta.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/custom\_views?module={module\_api\_name}

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom, Appointments, Services and Activities

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.custom\_views.READ

(or)

scope=ZohoCRM.settings.custom\_views.ALL

(or)

scope=ZohoCRM.settings.ALL

#### Parameters

- modulestring, mandatory



Specify the API name of the required module. For example, Leads, Contacts, Accounts, Deals, and so on.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/custom_views?module=Leads"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- display\_valuestring



Represents the display name of the current custom view.

- created\_timestring



Represents the date and time in the ISO8601 format at which the custom view was created.

- defaultboolean



Represents if the current custom view is the default one.

**true:** The current custom view is the default one.

**false:** The current custom view is not the default one.

- modified\_timestring



Represents the date and time at which the custom view was modified. The value of this key will be null when custom view was not modified.

- system\_namestring



Represents the system reference name of the current custom view.

- system\_definedboolean



Represents if the current custom view is a system-defined view.

**true:** The current custom view is system-defined.

**false:** The current custom view is not system-defined.

- namestring



Represents the name of the current custom view.

- modified\_byJSON object



Represents the name and ID of the user that modified the custom view. The value of this key will be null when custom view was not modified.

- idstring



Represents the unique ID of the current custom view.

- categorystring



Represents the category of the current custom view. The value can be: public\_views, other\_users\_views, shared\_with\_me, or created\_by\_me.

- last\_accessed\_timestring



Represents the date and time at which the custom view was last accessed. The value of this key will be null until the custom view is accessed.

- lockedboolean



Represents if the current custom view is locked for editing. When a custom view is locked, only Admins and creators can modify it.

- favoriteinteger



Represents if the current custom view is marked as favorite.

- created\_byJSON object



Represents the name and ID of the user that created the custom view. The value of this key will be null for a system-defined custom view.

- infoJSON object



this object contains the following details.



- **per\_page**: Represents the maximum number of records that can be fetched in an API call.
- **default**: Represents the ID of the default custom view.
- **count**: Represents the total number of custom views records in that module.
- **page**: Represents the page number.
- **more\_records**: Represents if there are more records to be fetched.

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

**Resolution:** Client does not have ZohoCRM.settings.custom\_views.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read custom view data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read custom views data

**Resolution:** The user does not have the permission to retrieve custom views data. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "custom_views": [\
        {\
            "display_value": "All Leads",\
            "created_time": null,\
            "system_name": "ALLVIEWS",\
            "created_by": null,\
            "default": false,\
            "modified_time": "2020-04-13T11:52:02+05:30",\
            "name": "All Open Leads",\
            "system_defined": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000000087501",\
            "category": "public_views",\
            "last_accessed_time": "2022-12-20T13:52:45+05:30",\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Co-Owner Leads",\
            "created_time": null,\
            "system_name": "COOWNERVIEW",\
            "created_by": null,\
            "default": false,\
            "modified_time": "2019-05-09T11:39:20+05:30",\
            "name": "Co-Owner Leads",\
            "system_defined": true,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000281001"\
            },\
            "id": "3652397000000747007",\
            "category": "public_views",\
            "last_accessed_time": "2022-11-21T09:44:18+05:30",\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Converted Leads",\
            "created_time": null,\
            "system_name": "CONVERTEDVIEWS",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "Converted Leads",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000000089005",\
            "category": "public_views",\
            "last_accessed_time": "2022-11-21T22:48:08+05:30",\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Email Opt Out",\
            "created_time": "2019-02-14T17:32:37+05:30",\
            "system_name": null,\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "default": false,\
            "modified_time": "2019-02-19T12:03:07+05:30",\
            "name": "Email Opt Out",\
            "system_defined": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000000538003",\
            "category": "created_by_me",\
            "last_accessed_time": "2022-09-14T10:18:25+05:30",\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Junk Leads",\
            "created_time": null,\
            "system_name": "JUNKLEADVIEWS",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "Junk Leads",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000000149020",\
            "category": "public_views",\
            "last_accessed_time": "2019-12-31T15:52:00+05:30",\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Leads in Review",\
            "created_time": null,\
            "system_name": "REVIEWPROCESS LEADS",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "Leads in Review",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000001424014",\
            "category": "public_views",\
            "last_accessed_time": null,\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Mailing Labels",\
            "created_time": null,\
            "system_name": "ALLVIEWS",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "Mailing Labels",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000000087503",\
            "category": "public_views",\
            "last_accessed_time": null,\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Leads Shared by Me",\
            "created_time": null,\
            "system_name": "LEADSSHAREDBYME",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "Module Shared by Me",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000001615027",\
            "category": "public_views",\
            "last_accessed_time": "2022-06-13T15:18:11+05:30",\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Leads Shared to Me",\
            "created_time": null,\
            "system_name": "LEADSSHAREDTOME",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "Module Shared to Me",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000001615021",\
            "category": "public_views",\
            "last_accessed_time": null,\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "My Converted Leads",\
            "created_time": null,\
            "system_name": "MYCONVERTEDVIEWS",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "My Converted Leads",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000000089007",\
            "category": "public_views",\
            "last_accessed_time": null,\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "My Leads",\
            "created_time": null,\
            "system_name": "MYVIEWS",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "My Leads",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000000087563",\
            "category": "public_views",\
            "last_accessed_time": "2021-02-16T14:45:44+05:30",\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Not Qualified Leads",\
            "created_time": null,\
            "system_name": "NOTQUALIFIEDLEADVIEWS",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "Not Qualified Leads",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000000149031",\
            "category": "public_views",\
            "last_accessed_time": null,\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Open Leads",\
            "created_time": null,\
            "system_name": "OPENLEADVIEWS",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "Open Leads",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000000149042",\
            "category": "public_views",\
            "last_accessed_time": null,\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Recently Created Leads",\
            "created_time": null,\
            "system_name": "RECENTLYCREATED",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "Recently Created Leads",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000000087509",\
            "category": "public_views",\
            "last_accessed_time": null,\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Recently Modified Leads",\
            "created_time": null,\
            "system_name": "RECENTLYMODIFIED",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "Recently Modified Leads",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000000087511",\
            "category": "public_views",\
            "last_accessed_time": null,\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Today's Leads",\
            "created_time": null,\
            "system_name": "today",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "Todays Leads",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000000087507",\
            "category": "public_views",\
            "last_accessed_time": "2019-03-21T17:51:43+05:30",\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Unread Leads",\
            "created_time": null,\
            "system_name": "UNREADVIEWS",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "Unread Leads",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000000087505",\
            "category": "public_views",\
            "last_accessed_time": null,\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Unsubscribed Leads",\
            "created_time": null,\
            "system_name": "UNSUBSCRIBED",\
            "created_by": null,\
            "default": false,\
            "modified_time": null,\
            "name": "Unsubscribed Leads",\
            "system_defined": true,\
            "modified_by": null,\
            "id": "3652397000002569003",\
            "category": "public_views",\
            "last_accessed_time": null,\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Untitled View",\
            "created_time": "2019-12-20T13:38:08+05:30",\
            "system_name": null,\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "default": false,\
            "modified_time": "2019-12-20T13:39:58+05:30",\
            "name": "Untitled View",\
            "system_defined": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000001459041",\
            "category": "created_by_me",\
            "last_accessed_time": "2019-12-31T15:51:43+05:30",\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Untitled View1",\
            "created_time": "2020-01-16T10:40:17+05:30",\
            "system_name": null,\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "default": false,\
            "modified_time": "2020-01-16T10:40:17+05:30",\
            "name": "Untitled View1",\
            "system_defined": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000001592009",\
            "category": "created_by_me",\
            "last_accessed_time": "2020-01-28T17:20:45+05:30",\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Untitled View2",\
            "created_time": "2022-10-26T11:55:08+05:30",\
            "system_name": null,\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "default": false,\
            "modified_time": "2022-10-26T11:55:08+05:30",\
            "name": "Untitled View2",\
            "system_defined": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000009568003",\
            "category": "created_by_me",\
            "last_accessed_time": "2022-10-26T11:55:10+05:30",\
            "locked": false,\
            "favorite": null\
        },\
        {\
            "display_value": "Untitled View3",\
            "created_time": "2022-12-20T13:53:17+05:30",\
            "system_name": null,\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "default": true,\
            "modified_time": "2022-12-20T13:53:17+05:30",\
            "name": "Untitled View3",\
            "system_defined": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000010185003",\
            "category": "created_by_me",\
            "last_accessed_time": "2022-12-20T13:53:19+05:30",\
            "locked": false,\
            "favorite": null\
        }\
    ],
    "info": {
        "per_page": 22,
        "default": "3652397000010185003",
        "count": 22,
        "translation": {
            "public_views": "Public Views",
            "other_users_views": "Other Users' Views",
            "shared_with_me": "Shared With Me",
            "created_by_me": "Created By Me"
        },
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/custom-view-meta.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)