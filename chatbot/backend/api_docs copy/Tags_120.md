```

#### Response JSON keys

- created\_timestring



Represents the date and time at which the tag was created.

- modified\_timestring



Represents the date and time at which the tag was last modified.

- namestring



Represents the name of the current tag.

- modified\_byJSON object



Represents the name and ID of the user who last modified the current tag.

- idstring



Represents the unique ID of the current tag.

- created\_byJSON object



Represents the name and ID of the user who created the tag.

- colour\_codestring



Represents the hex color code of the tag.


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

**Resolution:** Client does not have ZohoCRM.settings.tags.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read tag details

**Resolution:** The user does not have permission to read tag details. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read tag details

**Resolution:** The user does not have the permission to read tag details. Contact your system administrator.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** 'module' parameter is missing in the request. Please specify the API name of the module. Refer to [Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to get valid module API names.


#### Sample Response

``` json
Copied{
    "tags": [\
        {\
            "created_time": "2018-12-28T16:49:07+05:30",\
            "modified_time": "2019-02-18T23:17:47+05:30",\
            "name": "Pharma",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000000371014",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "color_code": “#57B1FD”\
        },\
        {\
            "created_time": "2018-12-28T16:49:07+05:30",\
            "modified_time": "2019-02-18T23:15:51+05:30",\
            "name": "Agricultural",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000000371015",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "color_code": null\
        },\
        {\
            "created_time": "2021-03-01T15:26:47+05:30",\
            "modified_time": "2021-03-01T15:26:47+05:30",\
            "name": "Agro",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000003983010",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "color_code": null\
        },\
        {\
            "created_time": "2021-03-01T15:26:58+05:30",\
            "modified_time": "2021-03-01T15:26:58+05:30",\
            "name": "Chem",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000003983017",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "color_code": null\
        },\
        {\
            "created_time": "2021-10-22T13:08:29+05:30",\
            "modified_time": "2021-10-22T13:08:29+05:30",\
            "name": "Nurturing Lead",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000005752002",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "color_code": null\
        },\
        {\
            "created_time": "2022-03-01T09:25:55+05:30",\
            "modified_time": "2022-03-01T09:25:55+05:30",\
            "name": "Nurture1",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000007430004",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "color_code": "#57B1FD"\
        }\
    ],
    "info": {
        "count": 6,
        "allowed_count": 200
    }
}

```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-tag-list.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)