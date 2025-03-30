
# Update Blueprint Details

#### Purpose

To update a single transition at a time. An error is thrown if the record is not in transition, transition\_id is wrong, field\_value data type mismatches, or field validation fails.

#### Endpoints

[PUT /{module\_api\_name}/{record\_id}/actions/blueprint](https://www.zoho.com/crm/developer/docs/api/v7/update-blueprint.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/actions/blueprint

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom, Notes, and Activities

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, custom, notes, and activities

#### Possible operation types

ALL - Full access to records

WRITE - Edit records in the module

UPDATE - Update records in the module

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3652397000003931001/actions/blueprint"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@blueprint1.json"
-X PUT
```

``` deluge
CopieddataMap = Map();
dataMap.put("Notes", "Updated via blueprint");
blueprint1 = Map();
blueprint1.put("transition_id", "692969000000981130");
blueprint1.put("data", dataMap);
blueprintList = List();
blueprintList.add(blueprint1);
param = Map();
param.put("blueprint", blueprintList);
	response = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Leads/692969000000983046/actions/blueprint"\
	type: PUT\
	parameters: param.toString()\
	connection:"crm_oauth_connection"\
];
info response;
```

In the request, "@blueprint1.json" contains the sample input data.

**Note**

- In the Related List sample, the key "Tasks" is the name of the list related to the record used in the transition.
- The related list support for this API depends on the module of the record, which is used in the transition of the blueprint.
- In case the number of fields in the input does not meet the required number, the "message" in the response would be "transition saved partially".
- In a parallel transition, a transition can have multiple the parent transition gets completed automatically only when all its child transitions are completed. We will introduce this feature in the upcoming versions. Refer to [this announcement](https://help.zoho.com/portal/en/community/topic/parallel-transitions-widgets-support-and-more-a-heads-up-on-upcoming-blueprint-enhancements-3-11-2020) for more details.

#### Sample Input

``` json
CopiedSample Input: To upload attachments, notes, input data to multi-select user lookup, multi-select lookup, and widget to the blueprint
{
    "blueprint": [\
        {\
            "transition_id": "3652397000003921127",\
            "data": {\
                "Attachments": [\
                    {\
                        "$file_id": [\
                            "59cf260313b690xxx9d623a",\
                            "59cf260xxxx624d"\
                        ]\
                    },\
                    {\
                        "$link_url": "www.zoho.com"\
                    }\
                ],\
                "Phone": 8940372937,\
                "Notes": "Updated via blueprint",\
                "Listings": [\
                    {\
                        "Interested_Listings": {\
                            "id": "3652397000001978005"\
                        }\
                    },\
                    {\
                        "Interested_Listings": {\
                            "id": "3652397000001978016"\
                        }\
                    }\
                ],\
                "Multi_user": [\
                    {\
                        "Multi_user": {\
                            "name": "Patricia Boyle",\
                            "id": "3652397000000186017"\
                        }\
                    },\
                    {\
                        "Multi_user": {\
                            "id": "3652397000000281001"\
                        }\
                    }\
                ],\
                "widget": {\
                    "name": "widget",\
                    "id": "3652397000003937009"\
                }\
            },\
            "process_info": {\
                "escalation": {\
                    "days": 1,\
                    "status": "overdue"\
                }\
            },\
            "transitions": [\
                {\
                    "type": "manual",\
                    "next_transitions": [\
                        {\
                            "name": "Call Later",\
\
                            "id": "3652397000003921103",\
                            "type": "manual"\
                        },\
                        {\
                            "name": "Product Brief",\
\
                            "id": "3652397000003921135",\
                            "type": "manual"\
                        }\
                    ]\
                }\
            ]\
        }\
    ]
}

Sample Input: To handle parent module fields during transition
{
    "blueprint": [\
       {\
            "transition_id": "2000000031536",\
            "data": {\
                "Lookup_2": {\
                    "phone": "123458939",\
                    "id": "2000000048165"\
                }\
            }\
        }\
    ]
}

Sample Input: To update checklist information
{
    "blueprint": [\
       {\
            "transition_id": "1000000034304",\
            "data": {\
                "CheckLists": [\
                   {\
                        "list 1": true\
                    },\
                   {\
                        "list 2": false\
                    },\
                   {\
                        "list 3": true\
                    },\
                   {\
                        "list 4": true\
                    }\
                ]\
            }\
        }\
    ]
}

Sample Input: To update related list information
{
    "blueprint": [\
       {\
            "transition_id": "2000000031536",\
            "data": {\
                "Tasks": {\
                    "Subject": "Event"\
                }\
            }\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update records

**Resolution:** The user does not have permission to update blueprint data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update records

**Resolution:** The user does not have the permission to update blueprint data. Contact your system administrator.

- INVALID\_DATAHTTP 400



the id given seems to be invalid

**Resolution:** You have specified an incorrect record ID. Please specify a valid record ID. Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get valid record IDs.

- MANDATORY\_NOT\_FOUNDHTTP 400



mandatory param missing

**Resolution:** You have not specified one or more mandatory fields in the input. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the mandatory fields.


#### Sample Response

``` json
Copied{
    "code": "SUCCESS",
    "details": {},
    "message": "transition updated successfully",
    "status": "success"
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-blueprint.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)