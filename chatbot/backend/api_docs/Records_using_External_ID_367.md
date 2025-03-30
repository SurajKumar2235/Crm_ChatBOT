
# Insert Records using External ID

#### Purpose

To add new entities to a module using external ID. Here are a few scenarios.

- [Associating a lookup record through an external field](https://www.zoho.com/crm/developer/docs/api/v7/insert-records-ext.html#associate-lookup)
- [Creating an inventory module's record with external fields in the line items](https://www.zoho.com/crm/developer/docs/api/v7/insert-records-ext.html#inventory)
- [Inserting a subform lookup record through an external field in the associated module](https://www.zoho.com/crm/developer/docs/api/v7/insert-records-ext.html#subform-lookup)
- [Inserting an Event record and associating **What\_Id** through an external field](https://www.zoho.com/crm/developer/docs/api/v7/insert-records-ext.html#event-record)
- [Inserting an Event record and associating **What\_Id** and Participant through external fields](https://www.zoho.com/crm/developer/docs/api/v7/insert-records-ext.html#event-record-participant)

### Request Details

#### Request URL

https://www.zohoapis.com/crm/{version}/{module\_api\_name}

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

CREATE - Create records in the module

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/{base_module_API_name}"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: {module_API_name}.{external_field_API_name}"
-d "@sample.json"
```

##### Associating a lookup record through an external field

- In this example, _Contacts_ is the base module's API name where _Account\_Name_ is a lookup field's API name in the Contacts module. _External\_Account\_ID_ is the API name of the external field in the Accounts module. We will reference the external field's value in the Accounts module to create a record in the Contacts module.


**Note**

If you specify the value and the record ID of the external field for the lookup record, the system considers only the value of the external field when you give the X-EXTERNAL header. Without this header, the system considers only the record ID.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.Account_Name.External_Account_ID"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Last_Name": "ext contact 1",\
            "Account_Name": {\
                "External_Account_ID": "externalaccount1"\
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
                "Modified_Time": "2020-10-22T01:35:09-11:00",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                },\
                "Created_Time": "2020-10-22T01:35:09-11:00",\
                "id": "554023000001627036",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                }\
            },\
            "message": "record added",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

##### Creating an inventory module's record with external fields in the line items

- In this example, we will create a quote by using the external values in the Product\_Details section that comprises the associated product and the price book. So, _Quotes_ is the base module's API name, the API names of the external fields in the Products and Price Books modules are External\_Product\_ID and External\_Price\_book\_ID, respectively.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Quotes"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Quotes.Product_Details.Product_Name.External_Product_ID,Quotes.Product_Details.book.External_Price_book_ID"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "External_Quote_ID": "quote1",\
            "Subject": "Quote 1",\
            "Quoted_Items": [\
                {\
                    "Product_Name": {\
                        "External_Product_ID": "12345678900"\
                    },\
                    "book": {\
                        "External_Price_book_ID": "pricebook1"\
                    },\
                    "quantity": 100\
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
                "Modified_Time": "2019-12-12T23:35:47+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                },\
                "Created_Time": "2019-12-12T23:35:47+05:30",\
                "id": "111111000000133093",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                }\
            },\
            "message": "record added",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

##### Inserting a subform lookup record through an external field in the associated module

- In this example, _Subform\_External_ is the API name of the subform in the Contacts module. It has a look up field to the Deals module. The Deals module has an external field _External\_Deal\_ID_. We will reference this external field in the subform and insert a record in the Contacts module.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.Subform_External.Deal_Lookup.External_Deal_ID"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Last_Name": "Contact with a Subform",\
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
                "Modified_Time": "2019-12-12T23:35:47+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                },\
                "Created_Time": "2019-12-12T23:35:47+05:30",\
                "id": "111111000000134014",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                }\
            },\
            "message": "record added",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

##### Inserting an Event record and associating the What\_Id through an external field

In this example, _External\_Account\_ID_ is the API name of the external field in the Accounts module. _What\_Id_ in the Events module takes the Account's name as its value. We will reference this external field in the Accounts module to the What\_Id field and insert an event.

**Note**

- The **What\_Id** lookup can be _mapped to different modules_ and so while pointing to an external field from What\_Id lookup in the X-External header, you should use " **->Module Name.External field name**”  and not “. External field name”.
- Also, while pointing to any Multi module lookup in the X-External header , you should use “ **->Module Name.External field name**” **.**

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Events"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Events.What_Id->Accounts.External_Account_ID"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "se_module": "Accounts",\
            "What_Id": {\
                "External_Account_ID": "useraccount1"\
            },\
            "Event_Title": "Event Kaizen",\
            "Start_DateTime": "2020-05-10T10:10:10+05:30",\
            "End_DateTime": "2020-05-10T11:10:10+05:30"\
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
                "Modified_Time": "2019-12-12T23:35:47+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                },\
                "Created_Time": "2019-12-12T23:35:47+05:30",\
                "id": "111111000000137001",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                }\
            },\
            "message": "record added",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

##### Inserting an Event record and associating the What\_Id and Participant through external fields

- In this example, _External\_Account\_ID_ and _External\_Contact\_ID_ are the API names of the external fields in the Accounts and Contacts modules, respectively. _What\_Id_ in the Events module takes the Account's name as its value. "participant" is a JSON object in the Participants array. We will reference these external values and insert an event.


**Note**

- If you specify the value of the external field in the participant JSON object and the record ID of the external field in the Contacts module, the system considers only the value of the external field if you specify only the participant in the header.
- The **What\_Id** lookup can be mapped to different modules and so while pointing to an external field from What\_Id lookup in the X-External header, you should use " **->Module Name.External field name**”  and not “.External field name”.
- Also, while pointing to any Multi module lookup in the X-External header, you should use **“->Module Name.External field name**”.

#### Possible Errors

- DUPLICATE\_DATAHTTP 400



The external field contains duplicate data.

**Resolution:** Input unique data to the external field.

- INVALID\_DATAHTTP 400



The external ID of the lookup field or the Price Book is incorrect

**Resolution:** Specify the correct external ID. Refer to the "details" in the error response to know which external ID is incorrect.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Events"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Events.What_Id->Accounts.External_Account_ID, Events.Participants.participant->Contacts.External_Contact_ID"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "External_Event_ID": "Event Kaizen 1",\
            "Last_Name": "Contact 1",\
            "Participants": [\
                {\
                    "type": "contact",\
                    "participant": {\
                        "External_Contact_ID": "participant1"\
                    }\
                }\
            ],\
            "What_Id": {\
                "External_Account_ID": "useraccount1"\
            },\
            "$se_module": "Accounts",\
            "Event_Title": "Kaizen 1",\
            "Start_DateTime": "2020-05-10T10:10:10+05:30",\
            "End_DateTime": "2020-05-10T11:10:10+05:30"\
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
                "Modified_Time": "2019-12-12T23:35:47+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                },\
                "Created_Time": "2019-12-12T23:35:47+05:30",\
                "id": "111111000000139016",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                }\
            },\
            "message": "record added",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/insert-records-ext.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)