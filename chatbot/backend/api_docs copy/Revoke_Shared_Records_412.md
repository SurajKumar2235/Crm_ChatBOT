
# Revoke Shared Records

#### Purpose

To revoke access to a shared record that was shared to users.

#### Endpoints

[DELETE /{module\_api\_name}/{record\_id}/actions/share](https://www.zoho.com/crm/developer/docs/api/v7/revoke-shared-record.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/actions/share

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Cases, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.share.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, cases, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, and custom.

#### Possible operation types

ALL - Full access to the record

DELETE - To revoke access permissions

**Note**

- You can revoke only **one** shared record per API call.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/4150868000001148212/actions/share"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Contacts/4150868000001148212/actions/share"\
	type: DELETE\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Possible Errors

- OAUTH\_SCOPE\_MISMATCHHTTP 401



invalid oauth scope to access this URL

**Resolution:** The client does not have the scope to ZohoCRM.share.{module\_name}.DELETE

(or)

The module name given in the URL is either Events, Calls, Tasks or any Linking module.

(or)

The module name given in the URL is invalid.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one.

**Resolution:** The URL given has syntactical errors.

- INVALID\_DATAHTTP 400



ENTITY\_ID\_INVALID

**Resolution:** The record ID given in the URL is either invalid

(or)

does not belong to the module mentioned.

- BAD\_REQUESTHTTP 400



No sharing through this record is available to revoke.

**Resolution:** The record has not been shared with any user.

- NO\_PERMISSIONHTTP 403



Permission denied to delete records

**Resolution:** The user does not have permission to revoke access to a shared record that was shared to users. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to delete records

**Resolution:** The user does not have the permission to revoke access to a shared record that was shared to users. Contact your system administrator.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.


#### Sample Response

``` json
Copied{
    "share": {
        "code": "SUCCESS",
        "details": {
            "id": "4150868000001148212"
        },
        "message": "Sharing Revoked",
        "status": "success"
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/revoke-shared-record.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)