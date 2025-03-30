# Add Tags to Records

#### Purpose

To add tags to records.

#### Endpoints

[POST /{module\_api\_name}/actions/add\_tags](https://www.zoho.com/crm/developer/docs/api/v7/add-tags.html)

[POST {module\_api\_name}/{record\_id}/actions/add\_tags](https://www.zoho.com/crm/developer/docs/api/v7/add-tags.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/actions/add\_tags

**To add tags to a specific record:**

https://www.zohoapis.com/crm/v7/{module\_api\_name}/{record\_id}/actions/add\_tags

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom, and Activities

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, and custom

#### Possible operation types

ALL - Full access to the record

WRITE - Edit records in the module

CREATE - Create records in the module

#### Input JSON

- tagsJSON Object, mandatory



The "name", "id", and "color\_code" of the tag you want to add to the records. Refer to the [Get the List of Tags API](https://www.zoho.com/crm/developer/docs/api/v7/get-tag-list.html) for the available tags and their respective color codes. Note that the ID of the tag takes precedence over the name.

- over\_writeboolean, optional



Specify if the existing tags are to be overwritten. Default value is **false**.

- idsJSON Array, mandatory when adding tags to multiple records



Specify the unique IDs of the records. You can specify a maximum of 500 records IDs.


#### Sample Request to Add Multiple Tags to Multiple Records

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/actions/add_tags"
-X POST
-d @input.json
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedtag1 = Map();
tag1.put("name","Nurturing Lead");
tag1.put("color_code","#57B1FD");
tag2 = Map();
tag2.put("name","Attend First");
tag2.put("color_code","#E7A826");
tags_list = List();
tags_list.add(tag1);
tags_list.add(tag2);
param = Map();
param.put("tags",tags_list);
recordIDs = List();
recordIDs.add('554023000002365002');
recordIDs.add('554023000001736019');
param.put("ids",recordIDs);

res = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/Leads/actions/add_tags"\
	type :POST\
	parameters: param.toString()\
	connection:"zohooauth"\
];
```

Show full

Show less

#### Sample Input

``` json
Copied{
    "tags": [\
        {\
            "name": "Nurturing Lead",\
            "id": "4876876000001140124",\
            "color_code": null\
        },\
        {\
\
            "name": "Active",\
            "id": "4876876000001143001",\
            "color_code": "#F17574"\
        }\
    ],
    "ids": [\
        "4876876000003643731",\
        "4876876000003662003"\
    ]
}
```

Show full

Show less

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000003643731",\
                "tags": [\
                    {\
                        "name": "Nurturing Lead",\
                        "id": "4876876000001140124",\
                        "color_code": null\
                    },\
                    {\
                        "name": "Active",\
                        "id": "4876876000001143001",\
                        "color_code": "#F17574"\
                    }\
                ]\
            },\
            "message": "tags updated successfully",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000003662003",\
                "tags": [\
                    {\
                        "name": "Nurturing Lead",\
                        "id": "4876876000001140124",\
                        "color_code": null\
                    },\
                    {\
                        "name": "Active",\
                        "id": "4876876000001143001",\
                        "color_code": "#F17574"\
                    }\
                ]\
            },\
            "message": "tags updated successfully",\
            "status": "success"\
        }\
    ],
    "success_count": "2",
    "locked_count": "0"
}
```

Show full

Show less

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.WRITE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update records

**Resolution:** The user does not have permission to add tags to the records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to add tags

**Resolution:** The user does not have the permission to add tags to the records. Contact your system administrator.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- PATTERN\_NOT\_MATCHEDHTTP 400



Please check whether the input values are correct

**Resolution:** The value specified for one of the parameters is incorrect. Refer to parameters section above and specify valid parameter values.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.


#### Sample Request to Add Tags to a Record

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/4876876000003643731/actions/add_tags"
-X POST
-d @input.json
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedag1 = Map();
tag1.put("name","Nurturing Lead");
tag1.put("color_code","#57B1FD");
tag2 = Map();
tag2.put("name","Attend First");
tag2.put("color_code","#E7A826");
tags_list = List();
tags_list.add(tag1);
tags_list.add(tag2);
param = Map();
param.put("tags",tags_list);

res = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/Leads/554023000000846002/actions/add_tags"\
	type :POST\
	parameters: param.toString()\
	connection:"zohooauth"\
];
```

Show full

Show less

#### Sample Input

``` json
Copied{
    "tags": [\
        {\
            "name": "Nurturing Lead",\
            "id": "4876876000001140124",\
            "color_code": null\
        },\
        {\
\
            "name": "Active",\
            "id": "4876876000001143001",\
            "color_code": "#F17574"\
        }\
    ]
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000003643731",\
                "tags": [\
                    {\
                        "name": "Active",\
                        "id": "4876876000001143001",\
                        "color_code": "#F17574"\
                    },\
                    {\
                        "name": "Nurturing Lead",\
                        "id": "4876876000001140124",\
                        "color_code": null\
                    }\
                ]\
            },\
            "message": "tags updated successfully",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/add-tags.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)