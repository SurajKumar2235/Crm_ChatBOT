
- fieldsstring, mandatory



Specify the API names of the fields whose details you want to receive in the response.


**Note**

- You can fetch a maximum of 200 records per API call. Use the page and per\_page parameters to paginate and fetch the remaining records in subsequent calls.
- By default, the notes are sorted and displayed chronologically in the API response, i.e, the oldest note is displayed first. However, if you choose "Recent First" in CRM's web UI, sorting happens based on the newest note first. Note that the option you choose in the web UI is user-specific, and applies to all the modules that have Notes as a related list.
- Users with an admin profile can access the following endpoint: **GET /Notes**.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Notes?fields=Parent_Id,Owner,Created_Time,Note_Title"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Notes?fields=Owner,Created_Time,Note_Title"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON Keys

- OwnerJSON object



Represents the name, ID, and email of the record owner.

- Modified\_Timestring



Represents the date and time at which the current note was last modified.

- $attachmentsJSON array



Represents the details of the attachment, if the current note has any.

- Created\_Timestring



Represents the date and time at which the note was created.

- Parent\_Idstring



Represents the display **name** and **unique ID** of the **parent record**, as well as the **API name** and **ID** of the **parent module**.

- $editableboolean



Represents if the user can edit the current note.

**true:** The user can edit the current note.

**false:** The user cannot edit the current note.

- Modified\_ByJSON object



Represents the name, ID, and email of the user who last modified the note.

- idstring



Represents the unique ID of the current note.

- Created\_ByJSON object



Represents the name, ID, and email of the user who created the current note.

- Note\_Titlestring



Represents the title of the current note.

- Note\_Contentstring



Represents the content of the current note.

- $is\_shared\_to\_clientboolean



Represents if the note is shared with a [client portal user](https://help.zoho.com/portal/en/kb/crm/connect-with-customers/portals/articles/setting-up-portals#Defining_Portal_user_type).

- sizeinteger



Represents the size of the voice note in bytes, if any.

- $voice\_noteboolean



Represents if the current note has a voice note attached.


#### Possible Errors

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

**Resolution:** Client does not have ZohoCRM.modules.notes.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read notes details

**Resolution:** The user does not have permission to retrieve notes data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read notes

**Resolution:** The user does not have the permission to retrieve notes data. Contact your system administrator.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** Specify the mandatory parameters. Refer to the Parameters section above for more details.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-10-24T15:32:55+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Contacts",\
                    "id": "2423488000000000129"\
                },\
                "name": "John Butt",\
                "id": "2423488000000495515"\
            },\
            "id": "2423488000000496148",\
            "Note_Title": "Follow up call"\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-10-24T15:32:55+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Contacts",\
                    "id": "2423488000000000129"\
                },\
                "name": "Josephine Darakjy",\
                "id": "2423488000000495516"\
            },\
            "id": "2423488000000496149",\
            "Note_Title": "Call scheduled"\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-10-24T15:32:55+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Contacts",\
                    "id": "2423488000000000129"\
                },\
                "name": "James Venere",\
                "id": "2423488000000495517"\
            },\
            "id": "2423488000000496150",\
            "Note_Title": "Call notes"\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-10-24T15:32:55+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Contacts",\
                    "id": "2423488000000000129"\
                },\
                "name": "Capla Paprocki",\
                "id": "2423488000000495518"\
            },\
            "id": "2423488000000496151",\
            "Note_Title": "Info"\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-10-24T15:32:55+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Contacts",\
                    "id": "2423488000000000129"\
                },\
                "name": "Donette Foller",\
                "id": "2423488000000495519"\
            },\
            "id": "2423488000000496152",\
            "Note_Title": "Deal details"\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-10-30T21:38:28+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "2423488000000000125"\
                },\
                "name": "Chau Kitzman  ",\
                "id": "2423488000000495872"\
            },\
            "id": "2423488000000551003",\
            "Note_Title": null\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-10-30T21:38:39+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "2423488000000000125"\
                },\
                "name": "Chau Kitzman  ",\
                "id": "2423488000000495872"\
            },\
            "id": "2423488000000551008",\
            "Note_Title": null\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-10-30T21:38:59+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "2423488000000000125"\
                },\
                "name": "Chau Kitzman  ",\
                "id": "2423488000000495872"\
            },\
            "id": "2423488000000551013",\
            "Note_Title": null\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-10-31T11:37:38+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "2423488000000000125"\
                },\
                "name": "Theola Frey  ",\
                "id": "2423488000000495873"\
            },\
            "id": "2423488000000556003",\
            "Note_Title": null\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-11-24T12:03:14+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "2423488000000000125"\
                },\
                "name": "testbulk4",\
                "id": "2423488000000569124"\
            },\
            "id": "2423488000000657003",\
            "Note_Title": null\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-11-24T12:05:44+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "2423488000000000125"\
                },\
                "name": "testbulk4",\
                "id": "2423488000000569124"\
            },\
            "id": "2423488000000657008",\
            "Note_Title": null\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-12-05T08:18:57+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "2423488000000000125"\
                },\
                "name": "testing ",\
                "id": "2423488000000696016"\
            },\
            "id": "2423488000000699007",\
            "Note_Title": null\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-12-18T18:45:43+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "2423488000000000125"\
                },\
                "name": "jame",\
                "id": "2423488000000771297"\
            },\
            "id": "2423488000000776001",\
            "Note_Title": null\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-12-18T18:48:25+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "2423488000000000125"\
                },\
                "name": "jame",\
                "id": "2423488000000771297"\
            },\
            "id": "2423488000000776006",\
            "Note_Title": null\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "aaa@zoho.com"\
            },\
            "Created_Time": "2023-12-18T19:23:31+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "2423488000000000125"\
                },\
                "name": "ghj",\
                "id": "2423488000000771297"\
            },\
            "id": "2423488000000776011",\
            "Note_Title": null\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "patricia@zohotest.com"\
            },\
            "Created_Time": "2023-12-18T19:23:38+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "2423488000000000125"\
                },\
                "name": "ghj",\
                "id": "2423488000000771297"\
            },\
            "id": "2423488000000776016",\
            "Note_Title": null\
        },\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "patricia@zohotest.com"\
            },\
            "Created_Time": "2023-12-18T19:23:47+05:30",\
            "Parent_Id": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "2423488000000000125"\
                },\
                "name": "James",\
                "id": "2423488000000771297"\
            },\
            "id": "2423488000000776021",\
            "Note_Title": null\
        }\
    ],
    "info": {
        "per_page": 200,
        "next_page_token": null,
        "count": 17,
        "sort_by": "id",
        "page": 1,
        "previous_page_token": null,
        "page_token_expiry": null,
        "sort_order": "asc",
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-notes.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)