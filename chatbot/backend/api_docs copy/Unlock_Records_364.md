
# Unlock Records

#### Purpose

To remove lock from locked records.

#### Endpoints

[DELETE /{module\_API\_name}/{record\_id}/Locking\_Information\_\_s/{record\_locking\_id}](https://www.zoho.com/crm/developer/docs/api/v7/unlock-records.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_API\_name}/{record\_id}/Locking\_Information\_\_s/{record\_locking\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.lockinginformation.Delete(and)

scope=ZohoCRM.modules.All (or) scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, tasks, cases, solutions, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices and custom

#### Possible operation types

All - Full access to the record

Delete - Delete records of the module

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/5843104000000425565/Locking_Information__s/5843104000000804005"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid.

**Resolution:** Specify a valid module API name.

- NOT\_ALLOWEDHTTP 403



Automatically locked records can not be unlocked manually.

- NO\_PERMISSIONHTTP 403



The current user does not have permission to unlock record.

**Resolution:** Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error.

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
  "data": [\
    {\
      "code": "SUCCESS",\
      "details": {\
        "id": "5843104000000804005"\
      },\
      "message": "relation removed",\
      "status": "success"\
    }\
  ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/unlock-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)