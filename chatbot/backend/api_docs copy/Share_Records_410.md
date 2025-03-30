
# Share Records

#### Purpose

To share a record with other users, groups, and roles in the organization.

#### Endpoints

[POST /{module\_api\_name}/{record\_id}/actions/share](https://www.zoho.com/crm/developer/docs/api/v7/share-record.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/actions/share

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Cases, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.share.{module\_name}.{operation\_type}

(or)

scope = ZohoCRM.share.all

#### Possible module names

leads, accounts, contacts, deals, campaigns, cases, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, and custom.

#### Possible operation types

ALL - Full access to the record

CREATE - Share records with other users in the organization

**Note**

- The records can be shared to other users in the organization only if certain conditions are met. For simplicity, let us assume that User A shares a record with User B. Now, user A can share the record successfully only if:
  - User B is a **confirmed** and **active** user.
  - User B does not have access to that particular record.
  - User B has access to that particular module. For instance, to share a contact, user B must have access to the Contacts module.
- You cannot share the records in Activities module and Linking module directly. They can be shared as related lists.
- The users who have profiles with **share** permission can share any records that they have access to, except the records that are shared to them. To check the same, go to Setup> Users and Control> Security Control> Choose the profile> Tool Permissions. Check if 'share' is enabled. It is enabled by default for Standard and Administrator Profiles.
- The details of the records that form many to many relationships (with multi-select lookup) cannot be shared.
- A record can be shared only with **10 users**, **5 groups**, and **5 roles**.
- Once the record gets shared successfully, the user who initiated the share operation can be notified via email.
- The user can update the shared records using the PUT method. To know more, refer to [Update Records](https://www.zoho.com/crm/developer/docs/api/v7/update-records.html).

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3652397000001970045/actions/share"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
```

``` deluge
Copieduser1 = Map();
user1.put("user", {"id":"3652397000001970045"});
user1.put("share_related_records", true);
user1.put("permission", "full_access");

user2 = Map();
user2.put("user", {"id":"4150868000001199001"});
user2.put("share_related_records", true);
user2.put("permission", "read_only");

usersList = List();
usersList.add(user1);
usersList.add(user2);

params = Map();
params.put("share", usersList);

response = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/Leads/692969000000981055/actions/share"\
	type :POST\
	parameters: params.toString()\
	connection:"crm_oauth_connection"\
];
info response;
```

In the request, "@input.json" contains the sample input data.

#### InputJSON Keys

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

- permissionstring, mandatory



Represents the access permission you want to give the user for that record.

**Possible values:**

**full\_access**\- Allow the user full access to the record. This is the **default** value.

**read\_only** \- Allow the user to only view the record.

**read\_write** \- Allow the user to view and edit the record.

- typestring, mandatory



Represents if the record is shared publicly(to all the users in the org) or privately(to a specific user in the org). The possible values are **public** and **private**. Note that when sharing a record privately _("type" : "private")_, the **share\_with** JSON object key is mandatory.

- notify\_shared\_membersboolean, optional



Specifies whether to send notifications to all members with whom the record is shared.

**Possible values:**

**true** \- Notifies the user.

**false** \- Does not notify the user.

**Default value:** false

- notify\_on\_completionboolean, optional



Indicates if an email notification should be sent to the owner once the record share action is completed..

**Possible values:**

**true** \- Notifies the owner.

**false** \- Does not notify the owner.

**Default value:** true


#### Sample Input

``` json
Copied{
    "share": [\
        {\
            "shared_with": {\
                "id": "5725767000002350003",\
                "type": "roles"\
            },\
            "share_related_records": false,\
            "permission": "full_access",\
            "type": "private"\
        },\
        {\
            "shared_with": {\
                "id": "5725767000002868044",\
                "type": "groups"\
            },\
            "share_related_records": false,\
            "permission": "full_access",\
            "type": "private"\
        },\
        {\
            "shared_with": {\
                "id": "5725767000002868058",\
                "type": "roles"\
            },\
            "share_related_records": false,\
            "permission": "full_access",\
            "type": "private"\
        },\
        {\
            "shared_with": {\
                "id": "5725767000002868072",\
                "type": "users"\
            },\
            "share_related_records": false,\
            "permission": "full_access",\
            "type": "private"\
        },\
        {\
            "shared_with": {\
                "id": "5725767000002868086",\
                "type": "groups"\
            },\
            "share_related_records": false,\
            "permission": "full_access",\
            "type": "private"\
        }\
\
    ],
    "notify_shared_members": false,
    "notify_on_completion": true
}
```

Show full

Show less

#### Possible Errors

- INVALID\_DATAHTTP 400



ENTITY\_ID\_INVALID

**Resolution:** The record ID given in the URL is either invalid

(or)

does not belong to the module mentioned.

- INVALID\_DATAHTTP 400



invalid data

**Resolution:** The value given in the **"permission"** key seems to be invalid. Specify a valid data. The supported values are : full\_access, read\_only, or read\_write.

- INVALID\_DATAHTTP 400



record is already visible to the user.

**Resolution:** The record is already accessible to the user. You can share the record only if the user cannot access it.

- INVALID\_DATAHTTP 400



cannot share to the user

**Resolution:** The record you are trying to share is already visible to the user.

- INVALID\_DATAHTTP 400



Either the value for "permission" or the "type" key is incorrect.

**Resolution:** The "json\_path" key in the response gives the details of the incorrect keys. Pass valid values for these keys.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to share records

**Resolution:** The user does not have the permission to share a record with other users in the organization. Contact your system administrator.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



For public sharing, more than one json object is given

**Resolution:** When you share a record and make it public, you must include only one JSON object in the input with the keys "type", "permission", and "share\_related\_records". You cannot make a record publicly available and share it to specific users.

- CANNOT\_PROCESSHTTP 400



Scheduler is running

**Resolution:** The record in the request has already been scheduled for sharing. Please try again later.

- MANDATORY\_NOT\_FOUNDHTTP 400



Mandatory fields missing

**Resolution:** One or more mandatory fields are missing. Specify all the mandatory fields in the input. Refer to the 'Input JSON Keys' section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



invalid oauth scope to access this URL

**Resolution:** The client does not have the scope to ZohoCRM.share.{module\_name}.CREATE

(or)

The module name given in the URL is either Events, Calls, Tasks or any Linking module.

(or)

The module name given in the URL is invalid.

- LIMIT\_EXCEEDEDHTTP 403



The record sharing limit has been reached

**Resolution:** Please share the record within the specified limits. You can share a record with up to **10 users**, **5 groups**, and **5 roles**.

- NOT\_ALLOWEDHTTP 403



Feeds is not enabled for this org

**Resolution:** You cannot notify the users when you have removed "Feeds" from "Organize Modules". Add "Feeds" to "Organize Modules" to notify users when you share a record.

- NO\_PERMISSIONHTTP 403



Permission denied to share records

**Resolution:** The user does not have permission to share a record with other users in the organization. Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one.

**Resolution:** The URL given has syntactical errors.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.


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
        },\
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
        },\
        {\
            "code": "SUCCESS",\
            "details": {},\
            "message": "record will be shared successfully",\
            "status": "success"\
        }\
\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/share-record.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)