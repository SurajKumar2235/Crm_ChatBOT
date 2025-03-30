
# Update Related Records Using External ID

#### Purpose

To update the related list records using external IDs.

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{external\_field\_API\_name/value}/{related\_list\_api\_name}

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

UPDATE - Update related records in the module

##### Associating a Contact and a Deal using their external IDs

- In this example, _extcontact3_ and _extdeal3_ are the values of the external fields _External\_Contact\_ID_ and _External\_Deal\_ID_ in the Contacts and Deals modules, respectively. We will reference these values to associate the contact with the deal.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/extcontact3/Deals"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.External_Contact_ID,Deals.External_Deal_ID"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "External_Deal_ID": "extdeal3",\
            "Contact_Role": "111111000000026002"\
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
                "External_Deal_ID": "extdeal3",\
                "id": "111111000000094028"\
            },\
            "message": "relation added",\
            "status": "success"\
        }\
    ]
}
```

##### Associating a Contact and a Deal using the contact's record ID and the deal's external ID

- In this example, _extdeal2_ is the value of the external field _External\_Deal\_ID_ in the Deals module. We will use this value to associate it with the contact with the said record ID.


**Note**

You can also associate a contact and deal with the contact's external value in the URL, and the deal's record ID in the input.

#### Possible Errors

- INVALID\_DATAHTTP 400



The ID of the external field is invalid.

**Resolution:** Specify the correct external ID.

- INVALID\_DATAHTTP 400



You have specified an invalid external ID for the base module.

**Resolution:** Specify the correct external ID.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have specified the external ID in the header for the related module but not in the request body.

**Resolution:** It is mandatory to include the external field in the request body when you specify in the header.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/111111000000085009/Deals"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Deals.External_Deal_ID"
-d "@sample.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Contact_Role": "111111000000026002",\
            "External_Deal_ID": "extdeal3"\
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
                "External_Deal_ID": "extdeal3",\
                "id": "111111000000094028"\
            },\
            "message": "relation added",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-related-records-ext.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)