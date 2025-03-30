
# Record Locking Information APIs

Record Locking Information APIs allows you to lock records, unlock records, view locking information of locked records and edit locking information of locked records.

### GET Record Locking Information

##### Purpose

To retrieve the locking information details of locked records.

#### Endpoints

[GET /{module\_API\_name}/{record\_id}/Locking\_Information\_\_s](https://www.zoho.com/crm/developer/docs/api/v7/get-record-locking-info.html)

[GET /{module\_API\_name}/{record\_id}/Locking\_Information\_\_s/{record\_locking\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-record-locking-info.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_API\_name}/{record\_id}/Locking\_Information\_\_s

**To get specific record locking id:**

{api-domain}/crm/{version}/{module\_API\_name}/{record\_id}/Locking\_Information\_\_s/{record\_locking\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.lockinginformation.All (or) scope=ZohoCRM.modules.lockinginformation.Read

(and)

scope=ZohoCRM.modules.All (or) scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, tasks, cases, solutions, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices and custom

#### Possible operation types

All - Full access to the record

READ - Read records from the module

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/5843104000000725170/Locking_Information__s?fields=Locked_For__s,Locked_Reason__s,Lock_Source__s,Locked_Time__s,Locked_By__s,Record_Locking_Rule_Id__s,Record_Locking_Configuration_Id__s,Owner,Parent_Id"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X GET
```

##### Parameters

- fields string, mandatory when record locking id is not specified in the end point.



Specify field names required in the response. You can specify multiple field API names that are separated by comma.

**Possible values:**

Locked\_For\_\_s, Locked\_Reason\_\_s, Lock\_Source\_\_s, Locked\_Time\_\_s, Locked\_By\_\_s, Record\_Locking\_Rule\_Id\_\_s, Record\_Locking\_Configuration\_Id\_\_s, Owner, Parent\_Id


**Note**

- For custom modules, only those created by users will support record locking. Custom modules created through extensions, integrations, or other means are not supported.

#### Response JSON Keys

- Locked\_By\_\_sJSON object



Represents the details of the user who locked the record. For automatic record locking, this JSON object will be populated with null.



- namestring



Represents the name of the user who locked the record.

- idlong



Represents the ID of the user who locked the record.


- Locked\_For\_\_sJSON object



Represents the details of the locked record.



- moduleJSON object



Represents the details of the module of the locked record.



- api\_namestring



Represents the API name of the module of the locked record.

- idlong



Represents the ID of the module of the locked record.


- namestring



Represents the name of the locked record.

- idlong



Represents the ID of the locked record.


- Locked\_Reason\_\_sstring



Represents the reason the record is locked. For automatic record locking, this JSON object will be populated with null.

- Lock\_Source\_\_sstring



Indicates whether the record was manually locked or automatically locked.

**Possible values:** Manual, Automatic.

- Locked\_Time\_\_sstring



Represents the time when the record was locked.

- Record\_Locking\_Configuration\_Id\_\_slong



Represents the ID of the record locking configuration.

- Record\_Locking\_Rule\_Id\_\_slong



Represents the ID of the record locking configuration rule. For manual record locking, this JSON object will be populated with null.

- idlong



Represents the ID of locking information.


#### Possible Errors

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameters is missing.

**Resolution:** The "details" key in the response gives the missing param in the request. Ensure that you include the params marked "mandatory" in the "Parameters" section.

- NOT\_ALLOWEDHTTP 400



Required Record Locking Configuration is not present.

**Resolution:** Create record lock configuration in your org.

- INVALID\_DATAHTTP 400



The relation id given seems to be invalid.

**Resolution:** Provide valid module id.

- INVALID\_DATAHTTP 400



The related id given seems to be invalid.

**Resolution:** Provide valid locking information id.

- FEATURE\_NOT\_SUPPORTEDHTTP 400



Record Locking Configuration is not supported in your edition.

**Resolution:** Contact your administrator.

- NO\_PERMISSIONHTTP 403



Record Locking Configuration is not supported for the profile of the user.

**Resolution:** Contact your administrator.

- **INVALID\_REQUEST\_METHOD****HTTP 403**



The http request method type is not a valid one.

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- **INTERNAL\_ERROR****HTTP 500**



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact the support team.


#### Sample Response

``` json
Copied	{
    "data": [\
        {\
            "Locked_By__s": {\
                "name": "Patricia Boyle",\
                "id": "5843104000000424672"\
            },\
            "Locked_For__s": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "5843104000000002175"\
                },\
                "name": "Theola Frey (Sample)",\
                "id": "5843104000000425566"\
            },\
            "Locked_Reason__s": "deal in progress",\
            "Record_Locking_Configuration_Id__s": "5843104000000758004",\
            "Record_Locking_Rule_Id__s": null,\
            "$editable": true,\
            "id": "5843104000000804005",\
            "$sharing_permission": "full_access",\
            "Lock_Source__s": "Manual",\
            "Locked_Time__s": "2023-09-05T05:13:36-04:00"\
        }\
    ],
    "info": {
        "per_page": 200,
        "next_page_token": null,
        "count": 1,
        "page": 1,
        "previous_page_token": null,
        "page_token_expiry": null,
        "more_records": false
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-record-locking-info.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)