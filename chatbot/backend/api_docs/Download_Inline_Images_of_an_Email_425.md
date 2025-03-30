
# Download Inline Images of an Email

#### Purpose

To download the inline images from an email.

#### Endpoints

[GET /{module\_api\_name}/{record\_id}/Emails/actions/download\_inline\_images](https://www.zoho.com/crm/developer/docs/api/v7/download-inline-images.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/Emails/actions/download\_inline\_images

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

#### Parameters

- message\_idmandatory



The message ID you get in the response when you send an email. Refer to the "message\_id" key in the response of [Send Mail API](https://www.zoho.com/crm/developer/docs/api/v7/send-mail.html) or [Get Emails of a Record API](https://www.zoho.com/crm/developer/docs/api/v7/get-email-rel-list.html) to get the message ID.

- user\_idmandatory



The unique ID of the record owner whose email you want to retrieve. Use the [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to get the user's ID.

- idmandatory



The unique ID of the inline image sent in the email. Refer to the **img\_id** property in the "content" key of the response of [Get Emails of a Record API](https://www.zoho.com/crm/developer/docs/api/v7/get-email-rel-list.html) for this ID.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3652397000002379001/Emails/actions/download_inline_images?message_id=2cceaxxxx1d60b8&user_id=3652397000000281001&id=141207xxxxade84fe"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/download-inline-images.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)