tags_list.add(tag2);

param = Map();
param.put("tags", tags_list);

res = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/settings/tags?module=Leads"\
	type :PUT\
	parameters: param.toString()\
	connection:"crm_oauth_connection"\
];
info res;
```

In the input, @multipletagupdate.json contains the sample input data.

#### Input JSON Keys

- idstring, mandatory for updating multiple tags



Specify the unique ID of the tag that you want to update.

- color\_codestring, optional



Specify the hex value of the color you want to add to the tag. The allowed color codes are "#F17574","#F48435","#E7A826","#A8C026","#63C57E","#1DB9B4","#57B1FD","#879BFC","#D297EE","#FD87BD","#969696","#658BA8","#B88562". If you do not include this key in the input, the color code will be set as null.


#### Sample Input

``` json
Copied{
    "tags": [\
        {\
            "id": "3652397000007505226",\
            "name": "Nurture2",\
            "colour_code":"#57B1FD"\
        }\
    ]
}
```

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

**Resolution:** Client does not have ZohoCRM.settings.tags.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update tag details

**Resolution:** The user does not have permission to update tags. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update tags

**Resolution:** The user does not have the permission to update tags. Contact your system administrator.

- INVALID\_DATAHTTP 400



- The color is not supported.
- The tag's name has exceeded 25 characters in length.
- The tag's name has one or more special characters <, >, or a comma.
- The tag's name has emojis.
- The ID of the tag is invalid.

**Resolutions:**

- You can add only one of the colors specified in the list of allowed colors.
- The tag's name must not exceed 25 characters in length.
- The tag's name must not contain these special characters: <, >, or a comma.
- You cannot have emojis in the tag name.
- Specify a valid tag ID to update it.

- DUPLICATE\_DATAHTTP 400



duplicate data

**Resolution:** You have specified a duplicate value for one or more unique fields. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the unique fields.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** You have not specified one or more mandatory fields in the input. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the mandatory fields.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** 'module' parameter is missing in the request. Please specify the API name of the module. Refer to [Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to get valid module API names.


#### Sample Response

``` json
Copied{
    "tags": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "created_time": "2022-03-13T16:29:23+05:30",\
                "modified_time": "2022-03-13T01:15:43+05:30",\
                "modified_by": {\
                    "name": "Patricia Boyle",\
                    "id": "3652397000000186017"\
                },\
                "id": "3652397000007505226",\
                "created_by": {\
                    "name": "Patricia Boyle",\
                    "id": "3652397000000186017"\
                },\
                "color_code": null\
            },\
            "message": "tags updated successfully",\
            "status": "success"\
        }\
    ]
}

```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-tags.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)