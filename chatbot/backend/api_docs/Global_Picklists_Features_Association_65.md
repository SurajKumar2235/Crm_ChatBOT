
# Get Global Picklists Features Association

#### Purpose

Get details of the features where a specific option of a global picklist is associated, like workflows or blueprints.

#### Endpoints

[GET /settings/global\_picklists/{global\_picklist\_id}/actions/pick\_list\_values\_associations](https://www.zoho.com/crm/developer/docs/api/v7/global-picklist-associations.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/global\_picklists/{global\_picklist\_id}/actions/pick\_list\_values\_associations

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.global\_picklist.READ

(or)

scope=ZohoCRM.settings.global\_picklist.ALL

#### Supported modules

Leads, Contacts, Accounts, Campaigns, Cases, Invoices, Deals, Price Books, Products, Purchase Orders, Quotes, Sales Orders, Solutions, Vendors, Calls, Tasks, Events, Users, DealHistory, QuotedItems, OrderedItems, PurchaseItems, InvoicedItems, Visits, Services, Appointments, and Custom.

#### Parameters

- picklist\_value\_idinteger, mandatory



Represents the unique ID of an option of the global picklist. Use this parameter to fetch the list of features the option is associated with.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/global_picklists/2423488000000492003/actions/pick_list_values_associations?picklist_value_id=2423488000000492041"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



Given ID seems to be invalid



**Resoutions:** Specify a valid ID in the URL.

- NOT\_ALLOWEDHTTP 400



Given global picklist in deletion progress



**Resoution:** The requested global picklist has already been scheduled for deletion. Specify a valid global picklist ID.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing



**Resoution:** Specify the mandatory **picklist\_value\_id** parameter.

- INVALID\_REQUEST\_METHODHTTP 400



The https request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to fetch global picklists feature associations. Generate a valid token with required scopes. Refer to the scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "pick_list_values_associations": [\
        {\
            "resources": [\
                {\
                    "name": "Advertisement",\
                    "details": [\
                        {\
                            "name": "Big Deal Rule",\
                            "id": "111113000000045665",\
                            "type": "Workflow"\
                        }\
                    ],\
                    "id": "111113000000071003"\
                },\
                {\
                    "name": "Test",\
                    "id": "111113000000064001"\
                }\
            ],\
            "type": "field_update"\
        },\
        {\
            "resources": [\
                {\
                    "name": "Another",\
                    "details": [\
                        {\
                            "name": "Qualify Leads through Call - V1",\
                            "id": "111113000000047921",\
                            "type": "Orchestration",\
                            "transition": {\
                                "name": "Create Lead",\
                                "id": "111113000000048457"\
                            }\
                        }\
                    ],\
                    "id": "111113000000072027"\
                }\
            ],\
            "type": "task"\
        },\
        .\
        .\
        .\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/global-picklist-associations.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)