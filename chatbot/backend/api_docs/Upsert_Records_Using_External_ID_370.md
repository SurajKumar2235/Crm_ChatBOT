
# Upsert Records Using External ID

#### Purpose

To update existing records or insert new records in a module through an external field.

### Request Details

#### Request URL

https://www.zohoapis.com/crm/{version}/{module\_api\_name}/upsert

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Cases, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Appointments, Services and Custom.

#### Possible operation types

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.all

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, cases, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, custom, appointments, services and notes

#### Possible operation types

ALL - Full access to the record

WRITE - Edit records in the module

CREATE - Create records in the module

##### Upserting a record when the external value is unique

- Let us consider an example of an upsert request in the Contacts module. When the external field's value is unique, and if the other duplicate fields are checked, the system inserts the contact.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/upsert"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Last_Name": "Boyle",\
            "External_Contact_ID": "Boyle1"\
        }\
    ]
}
```

##### Upserting a record through the external value

- When you pass the external value in the request, and if that external value exists in the record of a module, the system updates that record with the other details in the input. Otherwise, the system inserts a records in that module.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/upsert"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Last_Name": "Boyle P",\
            "External_Contact_ID": "Boyle1",\
            "Email": "p.boyle@abc.com"\
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
            "duplicate_field": "External_Contact_ID",\
            "action": "update",\
            "details": {\
                "Modified_Time": "2019-12-23T16:39:18+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "111111000000044700"\
                },\
                "Created_Time": "2019-12-23T16:39:18+05:30",\
                "id": "111111000000157039",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "111111000000044700"\
                }\
            },\
            "message": "record updated",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

##### Upserting the external field using the system-defined duplicate check field

- In this example, a new external value is passed to the external field _External\_Contact\_ID_ in the Contacts module. Now, the system checks for the system-defined duplicate check field "Email". If that email ID exists for a contact, the system updates that contact with the new value for the external field.


- **Duplicate check for Org-based external ID fields**

Consider there is an external field "External\_Campaign\_ID" in the Contacts module that holds the value of the Campaign in a third-party app. User1 creates a record in the contacts modules and sets the value of this external field as "Camp\_MailChimp\_1". Now, when user2 tries to create a record with the same value for the external field, the system throws the DUPLICATE\_DATA error.

- **Duplicate check for User-based external ID fields**

Consider there is an external field "External\_Contact\_ID" in the Contacts module. User1 creates a record with the value "Contact1" for this record. Now, when the same user performs an upsert operation referencing this external field, the system checks if there are any records created by user1 that contain the value "Contact1" for the external field. If there is a matching record, the system will update the record. If there is no matching record, the system creates one with the given data.

- You need not provide the X-EXTERNAL header for the upsert API, as the system considers the external field as unique and considers it for performing duplicate check.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/upsert"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Last_Name": "Boyle P",\
            "External_Contact_ID": "Boyle123",\
            "Email": "p.boyle@abc.com"\
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
            "duplicate_field": "Email",\
            "action": "update",\
            "details": {\
                "Modified_Time": "2019-12-23T16:39:18+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "111111000000044700"\
                },\
                "Created_Time": "2019-12-23T16:39:18+05:30",\
                "id": "111111000000157040",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "111111000000044700"\
                }\
            },\
            "message": "record updated",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/upsert-records-ext.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)