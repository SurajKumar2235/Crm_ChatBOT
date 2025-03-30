
# Get Related Records Using External ID

#### Purpose

To get the related list records using external IDs.

### Request Details

#### Request URL

{api-omain}/crm/{version}/{module\_api\_name}/{external\_value}/{related\_list\_api\_name}

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

GET - Fetch related records from the module

#### Parameters

- fieldsstring, mandatory



Specify the API name of the field whose details you want to receive in the response.

- pageinteger, optional



To get the list of records from the respective pages. Default value for page is **1**.

**Possible values:** Positive Integer values only.

- per\_pageinteger, optional



To get the list of records available per page. The default and the maximum possible value is **200**.

**Possible values:** Positive Integer values only.


##### Fetching all related deals in the Contacts module

- In this example, _extcontact3_ is the value of the external field External\_Contact\_ID in the Contacts module. We will reference this field's value to fetch the deals associated to this contact.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/583472934/Deals?fields=Closing_Date,Stage,Account_Name"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Contacts.External_Contact_ID"
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Contact_Role": 11112748204747392,\
            "Stage": "Closed Won",\
            "Account_Name": {\
                "name": "Chapman",\
                "id": "4876876000001036013"\
            },\
            "id": "4876876000002095001",\
            "Closing_Date": "2022-08-09"\
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

##### Fetching a related record through the external field's value of the related record

- In this example, _externaldeal3_ is the value of the external field External\_Deal\_ID in the Deals module. We will reference this value to fetch this related deal from the contact whose external value is _extcontact3_.


#### Possible Errors

- INVALID\_DATAHTTP 400



You have specified an invalid external ID for the base module.

**Resolution:** Input the correct external ID.

- NO\_CONTENTHTTP 204



You have specified an invalid ID in the URL or in the "ids" parameter.

**Resolution:** Input valid IDs.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing.

**Resolution:** Specify the **fields** parameter in the request URL.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/extcontact3/Deals/externaldeal3"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "X-EXTERNAL: Deals.External_Deal_ID,Contacts.External_Contact_ID"
```

#### Sample Respose

``` json
Copied{
    "data": [\
        {\
            "Contact_Role": "111111000000026002",\
            "External_Deal_ID": "externaldeal3",\
            "id": "111111000000094028"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-related-records-ext.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)