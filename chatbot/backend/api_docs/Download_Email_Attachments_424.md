
# Download Email Attachments

#### Purpose

To download the attachments of an email.

#### Endpoints

[GET /{module\_api\_name}/{record\_id}/Emails/actions/download\_attachments](https://www.zoho.com/crm/developer/docs/api/v7/download-email-attachments.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/Emails/actions/download\_attachments

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



Represents the unique ID of the user who sent the email. Use the [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to retrieve the user's ID.

- idmandatory



The unique ID of the attachment you want to download. Refer to the **id** key in the **attachments** array of the [Get Emails of a record API](https://www.zoho.com/crm/developer/docs/api/v7/get-email-rel-list.html).

- namemandatory



The name of the attachment in the response of [Get Emails of a record API](https://www.zoho.com/crm/developer/docs/api/v7/get-email-rel-list.html).


#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified one or more mandatory parameters.

**Resolution:** Refer to the "details" key in the response to find out the missing parameter.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3652397000002379001/Emails/actions/download_attachments?message_id=2cceafxxx7c9d&user_id=3652397000000186017&id=72daxxxx1ce66&name=email_templates.png"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/download-email-attachments.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)