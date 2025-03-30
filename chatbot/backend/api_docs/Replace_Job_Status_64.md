
# Get the Status of a Scheduled Replace Job for Global Picklist Options

#### Purpose

To  get the status of a scheduled picklist option replacement job initiated through the [replace picklist value](https://www.zoho.com/crm/developer/docs/api/v7/replace-global-picklist-options.html) API.

#### Endpoints

[GET /settings/global\_picklists/{global\_picklist\_id}/actions/replaced\_values](https://www.zoho.com/crm/developer/docs/api/v7/gpl-replace-status.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/global\_picklists/{global\_picklist\_id}/actions/replaced\_values

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.global\_picklist.READ

(or)

scope=ZohoCRM.settings.global\_picklist.ALL

#### Supported modules

Leads, Contacts, Accounts, Campaigns, Cases, Invoices, Deals, Price Books, Products, Purchase Orders, Quotes, Sales Orders, Solutions, Vendors, Calls, Tasks, Events, Users, DealHistory, QuotedItems, OrderedItems, PurchaseItems, InvoicedItems, Visits, Services, Appointments, and Custom.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/global_picklists/2423488000000725183/actions/replace_picklist_values"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

**Note**

If there is no replacement job scheduled, the system will return a **204 - NO\_CONTENT** response.

#### Possible Errors

- INVALID\_DATAHTTP 400



Given ID seems to be invalid



**Resoution:** Provide a valid ID.

- INVALID\_REQUEST\_METHODHTTP 400



The https request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to fetch the status of a scheduled replace job for global picklist options. Create a valid token with required scopes. Refer to the scope section above.

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
    "replaced_values": [\
        {\
            "display_value": "ABC",\
            "actual_value": "ABC"\
        }\
    ]
}
```

The above response shows which old option has been replaced using its actual and display values.

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/gpl-replace-status.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)