
# Delete Related Records Using External ID

#### Purpose

To delete the related list records using external IDs.

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{external\_field\_value}/{related\_list\_api\_name}/{external\_field\_value}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

X-EXTERNAL: {module\_API\_name}.{external\_field\_API\_name}

#### Scope

scope=ZohoCRM.modules.all

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, deals, contacts, accounts, products, campaigns, appointments, services and pricebooks

#### Possible operation types

ALL - Full access to the related records

WRITE - Edit related records

DELETE - Delete related records from the module

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/extcontact3/Deals/extdeal3"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.External_Contact_ID"
```

##### De-linking a Contact and a Deal using their external IDs

- In this example, _extcontact3_ and _extdeal3_ are the values of the external fields _External\_Contact\_ID_ and _External\_Deal\_ID_ in the Contacts and Deals modules, respectively. we will reference these values to delink the deal from the contact.


#### Possible Errors

- INVALID\_DATAHTTP 400



You have specified either an incorrect external ID of the related record or the base module's record. The _details_ key in the response gives you the name of the external field whose ID is incorrect.

**Resolution:** Specify the correct external ID of the related record.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111111000000094040"\
            },\
            "message": "relation removed",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-related-records-ext.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)