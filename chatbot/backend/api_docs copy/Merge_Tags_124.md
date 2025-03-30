
# Merge Tags

#### Purpose

To merge tags and put all the records under the two tags into a single tag.

#### Endpoints

[POST /settings/tags/{tag\_id}/actions/merge](https://www.zoho.com/crm/developer/docs/api/v7/merge-tags.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/tags/{tag\_id}/actions/merge

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
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/tags/2000000035058/actions/merge"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@mergetag.json"
```

``` deluge
Copiedtag1 = Map();
tag1.put("conflict_id", "692969000000995002");

tags_list = List();
tags_list.add(tag1);

param = Map();
param.put("tags", tags_list);

res = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/settings/tags/692969000000995001/actions/merge"\
	type :POST\
	parameters: param.toString()\
	connection:"crm_oauth_connection"\
];
info res;
```

Show full

Show less

In the input, @mergetag.json contains the sample input data.

#### Input JSON Keys

- conflict\_idstring, mandatory



Specify the unique ID of the tag which you want to merge.


#### Sample Input

``` json
Copied{
    "tags": [\
       {\
            "conflict_id": "2000000039012"\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.tags.CREATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to merge tags

**Resolution:** The user does not have permission to merge tags. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to merge tags

**Resolution:** The user does not have the permission to merge tags. Contact your system administrator.

- INVALID\_DATAHTTP 400



invalid data

**Resolution:** The input specified is incorrect. Specify a valid input

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** You have not specified one or more mandatory fields in the input. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the mandatory fields.


#### Sample Response

``` json
Copied{
    "tags": [\
       {\
            "code": "SUCCESS",\
            "message": "tags merged successfully",\
            "status": "success",\
            "details": {\
                "created_by": {\
                    "id": "2000000030874",\
                    "name": "Medical"\
                },\
                "created_time": "2017-03-24T11:08:23+05:30",\
                "id": "2000000088041",\
                "modified_by": {\
                    "id": "2000000030444",\
                    "name": "Chems"\
                },\
                "modified_time": "2017-03-24T11:08:23+05:30"\
            }\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/merge-tags.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)