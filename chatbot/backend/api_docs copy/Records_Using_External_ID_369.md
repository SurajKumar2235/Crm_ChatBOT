
# Delete Records Using External ID

#### Purpose

To delete the records in a module using external IDs.

### Request Details

#### Request URL

https://www.zohoapis.com/crm/{version}/{module\_api\_name}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-EXTERNAL: {module\_API\_name}.{external\_field\_API\_name}

#### Scope

scope=ZohoCRM.modules.all

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, deals, contacts, accounts, products, campaigns, services, appointments and pricebooks

#### Possible operation types

ALL - Full access to the records

WRITE - Edit records in the module

DELETE - Delete records from the module

##### Deleting a record using an external ID

- In this example, we will delete the record in the Contacts module with the external value _extcontact3_ in the external field "External\_Contact\_ID".


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/extcontact3"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.External_Contact_ID"
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "External_Contact_ID": "extcontact4",\
                "id": "111111000000110002"\
            },\
            "message": "record deleted",\
            "status": "success"\
        }\
    ]
}
```

##### Deleting the records using the "ids" parameter

- In this example, we have used the "ids" parameter with values as the values of the external field in the Contacts module.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts?ids=extcontact3,extcontact4"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.External_Contact_ID"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The value of the external field is invalid.

**Resolution:** Specify the correct external ID of the record.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "External_Contact_ID": "extcontact3",\
                "id": "111111000000101047"\
            },\
            "message": "record deleted",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "External_Contact_ID": "extcontact4",\
                "id": "111111000000101018"\
            },\
            "message": "record deleted",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-records-ext.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)