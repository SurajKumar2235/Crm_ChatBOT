
# Get Records Using External ID

#### Purpose

To fetch the records in a module using external IDs.

### Request Details

#### Request URL

https://www.zohoapis.com/crm/{version}/{module\_api\_name}

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Meetings, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom, Appointments, Services and Activities

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-EXTERNAL: {module\_API\_name}.{external\_field\_API\_name}

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, appointments, services and custom

#### Possible operation types

ALL - Full access to the record

READ - Get records from the module

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/{external_field_value}"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: {base_module_API_name}.{external_field_API_name}"
```

##### Fetching a record through the external field's value

- In this example, _Contacts_ is the base module's API name, _External\_Contact\_ID_ is the API name of the external field, and _externalcontact1_ is the value of the external field in this module.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/externalcontact1?fields=External_Contact_ID,Last_Name,First_Name,Full_Name,Account_Name,OrgExternal&per_page=2"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.External_Contact_ID"
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "First_Name": null,\
            "Full_Name": "Test Contact 1",\
            "Last_Name": "Test Contact 1",\
            "External_Contact_ID": "externalcontact1",\
            "Account_Name": {\
                "name": "Test Account1",\
                "id": "111111000000087057"\
            },\
            "id": "111111000000101004",\
            "OrgExternal": "orgcontact1"\
        }\
    ]
}
```

Show full

Show less

##### Fetching the records using the "ids" parameter

- In this example, _Contacts_ is the base module's API name, _External\_Contact\_ID_ is the API name of the external field. The "ids" parameter fetches the records with the external values _externalcontact1_ and _externalcontact2_.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts?ids=externalcontact1,externalcontact2&fields=External_Contact_ID,Last_Name,First_Name,Full_Name,Account_Name,OrgExternal&per_page=2"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.External_Contact_ID"
```

#### Possible Errors

- NO\_CONTENTHTTP 204



There is no data for the ID specified or there is no matching record in the given module.

**Resolution:** Create a record with the given external value.


**Note**

- You cannot fetch records with respect to the external field value set by another user.
- All parameters in the [Get List of Records](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html)(without external ID) are supported here.

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "First_Name": null,\
            "Full_Name": "Contact 2",\
            "Last_Name": "Contact 2",\
            "External_Contact_ID": "externalcontact2",\
            "Account_Name": {\
                "name": "Account 2",\
                "id": "111111000000101039"\
            },\
            "id": "111111000000101018",\
            "OrgExternal": "orgcontact2"\
        },\
        {\
            "First_Name": null,\
            "Full_Name": "Test Contact 1",\
            "Last_Name": "Test Contact 1",\
            "External_Contact_ID": "externalcontact1",\
            "Account_Name": {\
                "name": "Test Account1",\
                "id": "111111000000087057"\
            },\
            "id": "111111000000101004",\
            "OrgExternal": "orgcontact1"\
        }\
    ],
    "info": {
        "per_page": 2,
        "count": 2,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-records-ext.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)