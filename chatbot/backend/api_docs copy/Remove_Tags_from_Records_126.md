
# Remove Tags from Records

#### Purpose

To delete the tags associated with records.

#### Endpoints

[POST /{module\_api\_name}/actions/remove\_tags](https://www.zoho.com/crm/developer/docs/api/v7/remove-tags.html)

[POST /{module\_api\_name}/{record\_id}/actions/remove\_tags](https://www.zoho.com/crm/developer/docs/api/v7/remove-tags.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/actions/remove\_tags

**To remove tags from a specific record:**

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/actions/remove\_tags

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

#### Input JSON

- tagsJSON Object, mandatory



Specify the names of the tags you want to remove from the record.

- idsJSON Array, mandatory when removing tags from multiple records



Specify comma separated records IDs from which the tags must be removed.


#### Sample Request to Remove Multiple Tags from Multiple Records

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/actions/remove_tags"
-X POST
-d @input.json
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedtag1 = Map();
tag1.put("name","Prime");
tag2 = Map();
tag2.put("name","Attend First");
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
	url :"https://www.zohoapis.com/crm/v7/Leads/actions/remove_tags"\
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
            "name": "Prime"\
        },\
        {\
            "name": "Attend First"\
        }\
    ],
    "ids": [\
        "554023000000793002",\
        "554023000000792001"\
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
                "id": "554023000000793002",\
                "tags": [\
                    {\
                        "name": "Nurture",\
                        "id": "554023000002555018",\
                        "color_code": "#57B1FD"\
                    }\
                ]\
            },\
            "message": "tags updated successfully",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "554023000000792001",\
                "tags": [\
                    {\
                        "name": "Nurturing Lead",\
                        "id": "554023000002172011",\
                        "color_code": "#57B1FD"\
                    },\
                    {\
                        "name": "web",\
                        "id": "554023000001180007",\
                        "color_code": null\
                    }\
                ]\
            },\
            "message": "tags updated successfully",\
            "status": "success"\
        }\
    ],
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



Permission denied to remove tags

**Resolution:** The user does not have permission to remove tags from the records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to remove tags

**Resolution:** The user does not have the permission to remove tags from the records. Contact your system administrator.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.


#### Sample Request to Remove Tags from a Record

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/554023000000792001/actions/remove_tags"
-X POST
-d @input.json
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedtag1 = Map();
tag1.put("name","Prime");
tag2 = Map();
tag2.put("name","Attend First");
tags_list = List();
tags_list.add(tag1);
tags_list.add(tag2);
param = Map();
param.put("tags",tags_list);

res = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/Leads/554023000000792001/actions/remove_tags"\
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
            "name": "Prime"\
        },\
        {\
            "name": "Attend First"\
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
                "id": "554023000000792001",\
                "tags": [\
                    {\
                        "name": "web",\
                        "id": "554023000001180007"\
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

[Top](https://www.zoho.com/crm/developer/docs/api/v7/remove-tags.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)