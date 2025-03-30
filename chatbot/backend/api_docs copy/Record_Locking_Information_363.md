
# Update Record Locking Information

#### Purpose

Use the Update Record Locking Infromation API to modify locking information of locked records in different modules.

#### Endpoints

[PUT /{module\_API\_name}/{record\_id}/Locking\_Information\_\_s/{record\_locking\_id}](https://www.zoho.com/crm/developer/docs/api/v7/update-record-locking-info.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_API\_name}/{record\_id}/Locking\_Information\_\_s/{record\_locking\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.lockinginformation.Update

(and)

scope=ZohoCRM.modules.All (or) scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, tasks, cases, solutions, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices and custom

#### Possible operation types

All - Full access to the record

Update - Update records of the module

**Note**

- For custom modules, only those created by users will support record locking. Custom modules created through extensions, integrations, or other means are not supported.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/v6/Leads/5843104000000425565/Locking_Information__s/5843104000000804005"
-X PUT
-d "@updaterecordlock.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

##### Input JSON Keys

- Locked\_Reason\_\_s string,mandatory



Specify the reason the records are locked.


#### Sample Input

``` json
Copied{
    "data": [\
        {\
               "Locked_Reason__s": "deal  info updated"\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid.

**Resolution:** Specify a valid module API name.

- NOT\_ALLOWEDHTTP 403



Record is already locked.

**Resolution:** You can lock a record that is not already locked.

- INVALID\_REQUEST\_METHODHTTP 403



The http request method type is not a valid one.

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- NO\_PERMISSIONHTTP 403



Permission denied to customize record lock configurations. The user does not have permission.

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
            "message": "relation updated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-record-locking-info.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)