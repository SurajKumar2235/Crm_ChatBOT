
# Delete Email Drafts

#### Purpose

To delete an email draft from a record's Email related list.

#### Endpoints

[DELETE/{module}/{record-id}/\_\_email\_drafts/{draft\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-draft.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module}/{record-id}/\_\_email\_drafts/{draft\_id}

##### Supported modules

Leads, Contacts, Deals, Accounts, Sales Orders, Purchase Orders, Invoices, Quotes, Cases, and Custom.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope= ZohoCRM.Modules.ALL

(or)

scope=ZohoCRM.Modules.{module\_name}.{operation\_type}

#### Possible Module Names

leads, accounts, contacts, deals, quotes, salesorders, purchaseorders, invoices, cases, and custom

#### Possible operation types

ALL - Full access to modules

DELETE - Delete Module data

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/2309216000000488477/__email_drafts/4f8efdcbaf23fd33c939217d4e14222d66b4d6744c35f027f42b1f303016c181"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have the required OAUTH SCOPE. Create a new client with valid scope. Refer to scope section above for more details.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- INVALID\_DATAHTTP 400



The related id given seems to be invalid

**Resolution:** Specify a valid Record ID in the request URL.

- INVALID\_DATAHTTP 400



Draft not deleted

**Resolution:** Specify a valid draft ID in the request URL.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** Specify a valid module api name in the request URL.


``` json
Copied{
    "__email_drafts": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4f8efdcbaf23fd33c939217d4e14222d66b4d6744c35f027f42b1f303016c181"\
            },\
            "message": "Draft deleted Successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-draft.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)