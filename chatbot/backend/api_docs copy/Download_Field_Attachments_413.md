
# Download Field Attachments

#### Purpose

To download the attachments from the file upload and image upload fields of a module.

#### Endpoints

[GET /{module\_api\_name}/{record\_ID}/actions/download\_fields\_attachment](https://www.zoho.com/crm/developer/docs/api/v7/download_field_attachments.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_ID}/actions/download\_fields\_attachment

##### Supported modules

Leads, Accounts, Contacts, Deals, Tasks, Meetings, Calls, Products, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Campaigns, Vendors, Cases, Solutions, and Custom

#### Header

**Authorization**: Zoho-oauthtoken <access\_token>

#### Scope

scope=ZohoCRM.modules.{module\_name}.READ

##### Parameters

- fields\_attachment\_idstring, mandatory



The unique ID of the attachment of either the file upload field or the image upload field in the module. You can obtain this ID using the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) for that specific record.


#### Possible Errors

- INVALID\_DATAHTTP 400



The ID of the record is invalid.

**Resolution:** Specify the correct record ID.

- NO\_PERMISSIONHTTP 403



You do not have permission to download the attachments of the record in this module.

**Resolution:** Contact your administrator.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/554023000001054001/actions/download_fields_attachment?fields_attachment_id=554023000001736007"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.03xxxxxxxxxxxxxxxxxa5317.dxxxxxxxxxxxxxxxxxfa"
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/download_field_attachments.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)