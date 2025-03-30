
# Update Records Using External ID

#### Purpose

To update existing records in a module through an external field.

### Request Details

#### Request URL

https://www.zohoapis.com/crm/{version}/{module\_api\_name}/{external\_field\_value}

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom, Appointments, Services and Activities

#### Possible operation types

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-EXTERNAL: {module\_API\_name}.{external\_field\_API\_name}

#### Scope

scope=ZohoCRM.modules.all

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, custom, appointments, services and notes

#### Possible operation types

ALL - Full access to the record

WRITE - Edit records in the module

UPDATE - Update records in the module

##### Updating a record through the value of the external field in the module

- Let us consider an example of updating a record in the Contacts module. Instead of passing the record ID of the contact in Zoho CRM, you can pass the external field's value in that module and update the record.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/extcont1234"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.External_Contact_ID"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Last_Name": "Test Contact 1"\
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
                "Modified_Time": "2019-12-19T19:06:00+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "111111000000044700"\
                },\
                "Created_Time": "2019-12-13T22:07:07+05:30",\
                "External_Contact_ID": "extcont1234",\
                "id": "111111000000138036",\
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

##### Updating a record through the external value of a lookup record in that module

- In this example, Contacts is the base module and contains an account lookup field _Account\_Name_. To update a record in the Contacts module, you must specify the external field's API name and its value in the Accounts module, and the external field's API name and its value in the Contacts module.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.External_Contact_ID, Contacts.Account_Name.External_Account_ID"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "External_Contact_ID": "extcontact1",\
            "Account_Name": {\
                "External_Account_ID": "extaccount1"\
            }\
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
                "Modified_Time": "2019-12-19T19:09:48+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "111111000000044700"\
                },\
                "Created_Time": "2019-12-04T00:08:05+05:30",\
                "External_Contact_ID": "extcontact1",\
                "id": "111111000000101004",\
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

##### Updating an inventory module's record with external fields in the line items

- In this example, Quotes is the base module. To update the details in the Product\_Details section, specify the external field's API name and the value in the _product_ and _book_ JSON objects.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Quotes/quote1"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Quotes.Product_Details.product.External_Product_ID, Quotes.Product_Details.book.External_Price_book_ID"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Product_Details": [\
                {\
                    "id": "111111000000133071"\
                },\
                {\
                    "product": {\
                        "External_Product_ID": "12345678900"\
                    },\
                    "book": {\
                        "External_Pricebook_ID": "pricebook2"\
                    },\
                    "quantity": 20\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "Modified_Time": "2019-12-20T12:29:49+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "111111000000044700"\
                },\
                "Created_Time": "2019-12-12T23:32:49+05:30",\
                "External_Quote_ID": "quote1",\
                "id": "111111000000133069",\
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

##### Updating a subform lookup record through an external field in the associated module

- Specify the external field's API name and its value in the lookup field JSON object of the Subform.


#### Possible Errors

- INVALID\_DATAHTTP 400



The value of the external field is invalid.

**Resolution:** Specify the correct external value.

- INVALID\_DATAHTTP 400



The value of the external field is invalid for the lookup field.

**Resolution:** Specify the correct external value.

- INVALID\_DATAHTTP 400



The system expects product IDs in the input when you do not specify the external field header.

**Resolution:** Include the correct external header when you use external fields in your request.

- NOT\_ALLOWEDHTTP 400



You cannot update the external field using its own primary key in the request. For example, if extcontact1 is the value of the external field External\_Contact\_ID, then you cannot update the external field's value using itself (crm/v6/Contacts/extcontact1).

**Resolution:** Use another external field or CRM's primary key to update an external field.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/extcontact2"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.External_Contact_ID,Contacts.Subform_External.Deal_Lookup.External_Deal_ID"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Subform_External": [\
                {\
                    "Deal_Lookup": {\
                        "External_Deal_ID": "userdeal1"\
                    }\
                }\
            ]\
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
                "Modified_Time": "2019-12-20T12:30:59+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "111111000000044700"\
                },\
                "Created_Time": "2019-12-13T22:07:07+05:30",\
                "External_Contact_ID": "extcontact2",\
                "id": "111111000000138036",\
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

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-records-ext.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)