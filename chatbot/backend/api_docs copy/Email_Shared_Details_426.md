
# Get Email Shared Details

#### Purpose

To get the details of the users and the type with whom you can share the record's emails.

#### Endpoints

[GET /{module\_api\_name}/{record\_id}/\_\_emails\_sharing\_details](https://www.zoho.com/crm/developer/docs/api/v7/get-email-shared-details.html)

### Request Details

#### Request URL

{api\_domain}/crm/{version}/{module\_api\_name}/{record\_id}/\_\_emails\_sharing\_details

#### Supported modules

Leads, Accounts, Contacts, Deals, Quotes, Invoices, Sales Orders, Purchase Orders, and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.READ

or

scope=ZohoCRM.modules.{module\_name}.READ

and

scope=ZohoCRM.modules.emails.READ

#### Possible Module Names

leads, accounts, contacts, deals, quotes, invoices, salesorders, purchaseorders, and custom

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3652397000001790004/__emails_sharing_details"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON

- available\_typesJSON array



The types of users that can have access to the record's emails.

- share\_from\_usersJSON array



Each object contains the details such as the name, ID, and the email configuration of the users with whom this record's emails are shared with.


#### Possible Errors

- INVALID\_DATAHTTP 400



The record ID is invalid.

**Resolution:** Specify a valid ID of the lead, deal, contact, or account in the request URL.

- INVALID\_REQUEST\_METHODHTTP 400



The HTTP request method is invalid.

**Resolution:** Ensure that the HTTP request for this API is GET.

- INTERNAL\_ERRORHTTP 500



Unexpected and unhandled exception in the server.

**Resolution:** Contact the support team.


#### Sample Response

``` json
Copied"__emails_sharing_details": {
    "available_types": [\
        "emails_sent_from_crm",\
        "all_contacts_emails",\
        "all_imap_shared_users",\
        "all_emails"\
    ],
    "share_from_users": [\
        {\
            "id": "412463000001213019",\
            "name": "Will Grandon",\
            "_type": "pop"\
        },\
        {\
            "id": "412463000000867017",\
            "name": "boyle",\
            "_type": "imap"\
        }\
    ]
}
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-email-shared-details.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)