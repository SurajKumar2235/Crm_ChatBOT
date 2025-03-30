
# Update Share Permissions

#### Purpose

Using this API, you can:

- Update the sharing permissions of a record granted to users as Read-Write, Read-only, or grant full access.

- Revoke access given to users to a shared record.

- Update the access permission to the related lists of the record that was shared with the user.

- Share the record privately or publicly. When you share a record publicly, all the users in the org will have access to the shared record.


#### Endpoints

[PUT /{module\_api\_name}/{record\_id}/actions/share](https://www.zoho.com/crm/developer/docs/api/v7/update-share-permissions.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/actions/share

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Cases, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.share.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, cases, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, and custom.

#### Possible operation types

ALL - Full access to the record

UPDATE - Update the sharing permission

**Note**

- The system automatically revokes access to the record for the users who are not mentioned in the JSON request body. Therefore, give the ID of all the users with whom the record was shared, unless you want to revoke share permissions for them.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/4150868000001148347/actions/share"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
```

``` deluge
Copieduser1 = Map();
user1.put("user", {"id":"4150868000001174048"});
user1.put("share_related_records", true);
user1.put("permission", "full_access");
user1.put("type", "private");
user2 = Map();
user2.put("user", {"id":"4150868000001199001"});
user2.put("share_related_records", true);
user2.put("permission", "read_only");
user2.put("type", "private");

usersList = List();
usersList.add(user1);
usersList.add(user2);

params = Map();
params.put("share", usersList);

response = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/Leads/692969000000981055/actions/share"\
	type :PUT\
	parameters: params.toString()\
	connection:"crm_oauth_connection"\
];
info response;
```

Show full

Show less

In the request, "@input.json" contains the sample input data.

#### Request JSON

- shareJSON array, mandatory



Each JSON object represents the set of users, roles, or groups with whom you want to share the record.


#### share Properties

- shared\_withJSON object, mandatory



- **type**( _string, mandatory_) \- Represents whether you want to share the record with users, groups, or roles. The possible values are **users**, **groups**, and **roles**.
- **id**( _string, mandatory_) \- The ID of the user, group, or role you want to share the record with.

- share\_related\_recordsboolean, optional



Represents if you want to share the related records also with the user.

**Possible values:**

**true** \- Share related records along with the record.

**false** \- Do not share related records. This is the **default** value.

- permissionstring, optional



Represents the access permission you want to give the user for that record.

**Possible values:**

**full\_access**\- Allow the user full access to the record. This is the **default** value.

**read\_only** \- Allow the user to only view the record.

**read\_write** \- Allow the user to view and edit the record.

- typestring, mandatory



Represents if the record is shared publicly(to all the users in the org) or privately(to a specific user in the org). The possible values are **public** and **private**. Note that you cannot share a record publicly to a specific user.

- notifyboolean, optional



Represents whether you want to notify the user to whom you have shared the records.

**Possible values:**

**true** \- notifies the user.

**false** \- Does not notify the user.


#### Sample Input

``` json
Copied{
    "share": [\
        {\
            "share_related_records": true,\
            "permission": "read_only",\
            "type":"private",\
             "shared_with": {\
                   "id": "5545974000000492072",\
                   "type" : "users"\
              }\
        },\
        {\
            "share_related_records": true,\
            "permission": "read_only",\
            "type":"private",\
             "shared_with": {\
                   "id": "5545974000001170042",\
                   "type" : "users"\
              }\
        }\
    ],
    "notify": true
}
```

#### Possible Errors

- OAUTH\_SCOPE\_MISMATCHHTTP 401



invalid oauth scope to access this URL

**Resolution:** The client does not have the scope to ZohoCRM.share.{module\_name}.UPDATE

(or)

The module name given in the URL is either Events, Calls, Tasks or any Linking module.

(or)

The module name given in the URL is invalid.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one.

**Resolution:** The URL given has syntactical errors.

- INVALID\_DATAHTTP 400



ENTITY\_ID\_INVALID

**Resolution:** The record ID given in the URL is either invalid

(or)

does not belong to the module mentioned.

- INVALID\_DATAHTTP 400



Permission is invalid

**Resolution:** The value given in permission is not one of: full\_access, read\_only, or read\_write.

(or)

The user does not have permission to access that particular module.

- SHARE\_LIMIT\_EXCEEDEDHTTP 403



Cannot share a record to more than 10 users.

**Resolution:** The record you are trying to share has already been shared with 10 users.

- NO\_PERMISSIONHTTP 403



Permission denied to update records

**Resolution:** The user does not have permission to update the sharing permissions of a record. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update records

**Resolution:** The user does not have the permission to update the sharing permissions of a record. Contact your system administrator.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.


#### Sample Response

``` json
Copied{
    "share": [\
        {\
            "code": "SUCCESS",\
            "details": {},\
            "message": "record will be shared successfully",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {},\
            "message": "record will be shared successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-share-permissions.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)