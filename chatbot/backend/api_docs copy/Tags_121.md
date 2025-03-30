
# Create Tags

#### Purpose

To create tags and color-code them.

#### Endpoints

[POST /settings/tags?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/create-tag.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/tags?module={module\_api\_name}

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.ALL

(or)

scope=ZohoCRM.settings.tags.{operation\_type}

#### Possible operation types

ALL - Full data access

WRITE - Edit tag data

CREATE - Create tag data

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/tags?module=Contacts"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@createnewtag.json"
```

``` deluge
Copiedtag1 = Map();
tag1.put("name", "Chems");

tag2 = Map();
tag2.put("name", "Agriculture");

tags_list = List();
tags_list.add(tag1);
tags_list.add(tag2);

param = Map();
param.put("tags", tags_list);

res = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/settings/tags?module=Leads"\
	type :POST\
	parameters: param.toString()\
	connection:"crm_oauth_connection"\
];
info res;
```

Show full

Show less

In the input, @createnewtag.json contains the sample input data.

#### Parameters

- modulestring, mandatory



Specify the API name of the module such as Leads, Accounts, Deals, etc,.


#### Input JSON Keys

- namestring, mandatory



Specify the name of the tag that you want to create.

- color\_codestring, optional



Specify the hex value of the color you want to add to the tag. The allowed color codes are "#F17574","#F48435","#E7A826","#A8C026","#63C57E","#1DB9B4","#57B1FD","#879BFC","#D297EE","#FD87BD","#969696","#658BA8","#B88562". If you do not include this key in the input, the color code will be set as null.


#### Sample Input

``` json
Copied {
    "tags": [\
        {\
            "name": "Tag3",\
            "color_code": "#F48435"\
        },\
        {\
            "name": "Tag4",\
            "color_code": "#F48435"\
        }\
    ]
}
```

#### Possible Errors

- MAPPING\_MISMATCHHTTP 400



Given tag present with different color already.

**Resolution:** The tag you are trying to add and color-code is already present and has a different color already mapped to it. Update the same tag with the new color.

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

**Resolution:** Client does not have ZohoCRM.settings.tags.CREATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to create tags

**Resolution:** The user does not have permission to create tags. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to create tags

**Resolution:** The user does not have the permission to create tags. Contact your system administrator.

- DUPLICATE\_DATAHTTP 400



duplicate data

**Resolution:** You have specified a duplicate value for one or more unique fields. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the unique fields.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** You have not specified one or more mandatory fields in the input. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the mandatory fields.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** 'module' parameter is missing in the request. Please specify the API name of the module. Refer to [Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to get valid module API names.

- INVALID\_DATAHTTP 400



- The color is not supported.
- The tag's name has exceeded 25 characters in length.
- The tag's name has one or more special characters <, >, or a comma.
- The tag's name has emojis.

**Resolutions:**

- You can add only one of the colors specified in the list of allowed colors.
- The tag's name must not exceed 25 characters in length.
- The tag's name must not contain these special characters: <, >, or a comma.
- You cannot have emojis in the tag name.

- LIMIT\_EXCEEDEDHTTP 400



You have already added 100 tags and are trying to add more, or you are trying to add more than 10 tags to a record

**Resolution:** You can only add a maximum of 100 tags to a module, and 10 tags to a record.


#### Sample Response

``` json
Copied{
    "tags": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "created_time": "2022-03-13T00:58:49+05:30",\
                "modified_time": "2022-03-13T00:58:49+05:30",\
                "modified_by": {\
                    "name": "Patricia Boyle",\
                    "id": "3652397000000186017"\
                },\
                "id": "3652397000007549004",\
                "created_by": {\
                    "name": "Patricia Boyle",\
                    "id": "3652397000000186017"\
                },\
                "color_code": "#F48435"\
            },\
            "message": "tags created successfully",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "created_time": "2022-03-13T00:58:49+05:30",\
                "modified_time": "2022-03-13T00:58:49+05:30",\
                "modified_by": {\
                    "name": "Patricia Boyle",\
                    "id": "3652397000000186017"\
                },\
                "id": "3652397000007549005",\
                "created_by": {\
                    "name": "Patricia Boyle",\
                    "id": "3652397000000186017"\
                },\
                "color_code": "#F48435"\
            },\
            "message": "tags created successfully",\
            "status": "success"\
        }\
    ]
}

```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-tag.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)