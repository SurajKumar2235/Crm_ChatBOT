
# Delete Global Picklist

#### Purpose

To delete a global picklist configured in your Zoho CRM account.

#### Endpoints

[DELETE /settings/global\_picklists/{global\_picklist\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-global-picklist.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/global\_picklists/{global\_picklist\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.global\_picklist.DELETE

(or)

scope=ZohoCRM.settings.global\_picklist.ALL

#### Supported modules

Leads, Contacts, Accounts, Campaigns, Cases, Invoices, Deals, Price Books, Products, Purchase Orders, Quotes, Sales Orders, Solutions, Vendors, Calls, Tasks, Events, Users, DealHistory, QuotedItems, OrderedItems, PurchaseItems, InvoicedItems, Visits, Services, Appointments, and Custom.

#### Parameter

- idsstring, optional



It represents the **unique ID** of the global picklist that you want to delete. Skip this parameter if you have specified the id in the request URL.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/global_picklists/2423488000000725001"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



- Given global picklist ID seems to be invalid

**Resolution:** Specify a valid global picklist ID.

- NOT\_ALLOWEDHTTP 400



- The provided global picklist ID is already scheduled for deletion
- Global picklists limit exceeded

**Resolutions:**

- The global picklist has already been scheduled for deletion. Please provide another valid global picklist ID.
- Reach out to our support team at support@zohocrm.com.

- INVALID\_REQUEST\_METHODHTTP 400



The https request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to delete a global picklist field. Create a valid token with required scopes. Refer to the scope section above.

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
    "global_picklists": [\
        {\
            "code": "SCHEDULED",\
            "details": {\
                "job_id": "111111000000201021"\
            },\
            "message": "global picklist delete scheduled successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-global-picklist.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)