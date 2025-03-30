
# Global Picklist Field Association

#### Purpose

To retrieve information on the fields, modules, and layouts where a global picklist is associated.

#### Endpoints

[GET /settings/global\_picklists/{global\_picklist\_id}/actions/associations](https://www.zoho.com/crm/developer/docs/api/v7/global-picklist-field-association.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/global\_picklists/{global\_picklist\_id}/actions/associations

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.global\_picklist.READ

(or)

scope=ZohoCRM.settings.global\_picklist.ALL

#### Supported modules

Leads, Contacts, Accounts, Campaigns, Cases, Invoices, Deals, Price Books, Products, Purchase Orders, Quotes, Sales Orders, Solutions, Vendors, Calls, Tasks, Events, Users, DealHistory, QuotedItems, OrderedItems, PurchaseItems, InvoicedItems, Visits, Services, Appointments, and Custom.

#### Parameters

- Pageinteger, optional



To get the list of records from the respective pages. Default value for page is 1.

**Possible values:** Positive Integer values only.

- per\_pageinteger, optional



To get the list of records available per page. The default and the maximum possible value is 200.

**Possible values:** Positive Integer values only.

- include\_inner\_detailsstring, optional



Specify whether additional details, such as **layout status** and **module plural label**, should be included in the API response. Possible values are:



- layout.statusstring, optional



To include the status of the layout in which the global picklist is used.

- module.plural\_labelstring, optional



To include the plural label of the module where the global picklist is used.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/global_picklists/2423488000000492003/actions/associations"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- fieldJSON object



It represents the field details with which the requested global picklist is associated.

- moduleJSON object



It represents the details about associated module.

- layoutsJSON object



It represents the details of the layouts within which the global picklist is used.


#### Possible Errors

- INVALID\_DATAHTTP 400



Given ID seems to be invalid



**Resoutions:** Specify a valid ID.

- INVALID\_REQUEST\_METHODHTTP 400



The https request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to fetch global picklist field associations. Create a valid token with the required scopes. Refer to the scope section above.

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
    "associations": [\
        {\
            "field": {\
                "api_name": "Pick_List_1",\
                "id": "2423488000000680001"\
            },\
            "module": {\
                "plural_label": "Leads",\
                "api_name": "Leads",\
                "id": "2423488000000000125"\
            },\
            "layouts": [\
                {\
                    "name": "Standard",\
                    "id": "2423488000000095055",\
                    "status": "active"\
                }\
            ]\
        },\
        {\
            "field": {\
                "api_name": "Pick_List_1",\
                "id": "2423488000000680069"\
            },\
            "module": {\
                "plural_label": "Contacts",\
                "api_name": "Contacts",\
                "id": "2423488000000000129"\
            },\
            "layouts": [\
                {\
                    "name": "Standard",\
                    "id": "2423488000000095059",\
                    "status": "active"\
                }\
            ]\
        }\
    ],
.
.
.
    "info": {
        "per_page": 200,
        "count": 2,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/global-picklist-field-association.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)