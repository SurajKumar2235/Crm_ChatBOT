
# Delete Custom Fields

#### Purpose

To delete a custom field from a module in your Zoho CRM account.

#### Endpoints

[DELETE /settings/fields/{field\_id}?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/delete-custom-fields.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/fields/{field\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.fields.DELETE(or)

scope=ZohoCRM.settings.fields.ALL (or)

scope=ZohoCRM.settings.ALL

#### Supported modules

Leads, Contacts, Accounts, Campaigns, Cases, Invoices, Deals, Price Books, Products, Purchase Orders, Quotes, Sales Orders, Solutions, Vendors, Calls, Tasks, Events, Users, DealHistory, QuotedItems, OrderedItems, PurchaseItems, InvoicedItems, Visits, Services, Appointments, and Custom.

#### Parameter

- modulestring, mandatory



Specify the module from which you want to delete custom fields, such as Leads or Contacts. Use the [GET - Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to retrieve modules API names and IDs.


**Note**

You can delete custom fields, but not the system-defined fields.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/fields/111116000000063101?module=Leads"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The ID given seems to be ivalid

**Resolution:** Specify a valid field ID.

- NOT\_ALLOWEDHTTP 400



- The custom field has already used in other places
- Only the custom fields can be deleted

**Resolutions:**

- You cannot delete a custom field that has been used in other places, such as workflows, scoring rules, approval processes, review processes, and so on.
- You cannot delete system-defined fields. Please specify only valid custom fields.

- REQUIRED\_PARAM\_MISSINGHTTP 400



Required parameter is missing

**Resolution:** Please specify the **module** parameter and its corresponding value.

- INVALID\_DATAHTTP 400



The job\_id is invalid.

**Resolution:** Specify a valid job ID.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to delete custom fields. Create a new token with valid scope. Refer to scope section above.

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
    "fields": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111116000000063101"\
            },\
            "message": "field deleted",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-custom-fields.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)