
# Search Records Using External ID

#### Purpose

To retrieve the records that match your search criteria using external fields.

### Request Details

#### Request URL

https://www.zohoapis.com/crm/{version}/{module\_api\_name}/search

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom, Notes, Appointments, Services and Activities

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-EXTERNAL: {module\_API\_name}.{external\_field\_API\_name}

#### Scope

scope=ZohoCRM.modules.all

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

(and)

scope=ZohoSearch.securesearch.READ

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, custom, notes, appointments, services and activities

#### Possible operation types

ALL - Full access to the record

READ - Get records from the module

##### Using the external value and the "in" operator in "criteria"

- **Parameter:** criteria=(External\_Contact\_ID:in:usercontact2,usercontact123)


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/search?criteria=(External_Contact_ID:in:usercontact2,usercontact123)&fields=External_Contact_ID,Email"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.External_Contact_ID"
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Email": "crm@external1.com",\
            "External_Contact_ID": "usercontact123",\
            "id": "111111000000146004"\
        },\
        {\
            "Email": "crm@external.com",\
            "External_Contact_ID": "usercontact2",\
            "id": "111111000000101018"\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 2,
        "page": 1,
        "more_records": false
    }
}
```

##### Using the external value and the "equals" operator in "criteria"

- **Parameter:** criteria=(External\_Contact\_ID:equals:usercontact123)


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/search?criteria=(External_Contact_ID:equals:usercontact2)&fields=External_Contact_ID,Email"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.External_Contact_ID"
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Email": "crm@external1.com",\
            "External_Contact_ID": "usercontact123",\
            "id": "111111000000146004"\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 1,
        "page": 1,
        "more_records": false
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/search-records-ext.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)