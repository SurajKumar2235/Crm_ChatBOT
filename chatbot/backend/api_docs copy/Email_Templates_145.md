
# Email Templates

#### Purpose

To fetch the email templates in a module.

### Request Details

#### Request URL

**All** \- {api-domain}/crm/{version}/settings/email\_templates

**Specific** \- {api-domain}/crm/{version}/settings/email\_templates/{id}

#### Header

**Authorization**: Zoho-oauthtoken <access\_token>

#### Scope

scope=ZohoCRM.templates.email.READ

[GET /settings/email\_templates](https://www.zoho.com/crm/developer/docs/api/v7/email-templates.html)

[GET /settings/email\_templates/{id}](https://www.zoho.com/crm/developer/docs/api/v7/email-templates.html)

##### Parameters

- modulestring



The API name of the module you want to fetch email template from. Supported modules are:

Leads, Accounts, Contacts, Deals, Tasks, Events, Calls, Products, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Campaigns, Vendors, Cases, Solutions, and Custom.


**Note**

- The **content** key contains the HTML of the email template and is rendered in the response only when you fetch a specific email template.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/email_templates"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- created\_timestring



Represents the date and time at which the email template was created.

- attachmentsJSON array



Represents the attachments added in the template.

- subjectstring



Represents the subject of the email template.

- moduleJSON object



Represents the module with which the template is associated with.

- created\_byJSON object



Represents the name and ID of the user who created the email template.

- layoutJSON object



Represents the layout the template is associated with.

- modified\_timestring



Represents the date and time at which the email template was last modified.

- folderJSON object



Represents the name and unique ID of the template folder.

- last\_usage\_timestring



Represents the date and time at which the email template was last used.

- associatedboolean



Represents whether the template is associated or not.

- namestring



Represents the name of the email template.

- consent\_linkedboolean



Represents whether the consent form is linked with the template.

- modified\_byJSON object



Represents the name and ID of the user who last modified the email template.

- idstring



Represents the unique ID of the email template.

- editor\_modestring



Represents the mode in which the email template is created. The possible values are **gallery:** the template is chosen from the template gallery and is customized, **rich\_text**: a pre-designed custom template, **plain\_text**: the template is built from scratch.

- categorystring



Represents the type of the template. The possible values are **normal**, **draft**: the templates that are in draft state, **system\_templates**: the templates present in the system by default, **plugin\_templates**: the templates that are created and installed from the Zoho CRM extension, **marketplace\_templates**: the templates that are created and installed from the published plugins.

- last\_version\_statisticsJSON object



The statistics such as the number of emails that were opened, tracked, delivered, bounced etc., that used this template.

- favoriteboolean



Represents if the email template is marked as favorite.


#### Possible Errors

- BAD\_REQUESTHTTP 400



The request method specified is invalid.

**Resolution:** Specify the request method as GET.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



The token does not have the scope ZohoCRM.templates.email.READ.

**Resolution:** Create a token with the scope ZohoCRM.templates.email.READ.

- NO\_PERMISSIONHTTP 403



You do not have the permission to read the email templates.

**Resolution:** Contact your administrator.

- INVALID\_URL\_PATTERNHTTP 404



The request URL has syntactical errors.

**Resolution:** Correct the syntactical errors in the request URL.


#### Sample Response

``` json
Copied{
    "email_templates": [\
        {\
            "created_time": "2020-07-10T16:29:50+05:30",\
            "attachments": null,\
            "subject": "New contact created",\
            "module": {\
                "api_name": "Contacts",\
                "id": "3652397000000002179"\
            },\
            "last_version_statistics": {\
                "tracked": 1,\
                "delivered": 1,\
                "opened": 0,\
                "bounced": 0,\
                "sent": 1,\
                "clicked": 0\
            },\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "modified_time": "2020-07-10T16:30:26+05:30",\
            "folder": {\
                "name": "Public Email Templates",\
                "id": "3652397000000000077"\
            },\
            "last_usage_time": "2021-03-17T18:36:00+05:30",\
            "associated": false,\
            "name": "Contact created",\
            "consent_linked": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000002497001",\
            "editor_mode": "gallery",\
            "category": "normal",\
            "favorite": false\
        },\
        {\
            "created_time": "2019-07-17T10:56:33+05:30",\
            "attachments": null,\
            "subject": "Record(s) Deleted in CRM",\
            "module": {\
                "api_name": "Leads",\
                "id": "3652397000000002175"\
            },\
            "last_version_statistics": {\
                "tracked": 0,\
                "delivered": 0,\
                "opened": 0,\
                "bounced": 0,\
                "sent": 0,\
                "clicked": 0\
            },\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "modified_time": "2019-07-17T10:56:33+05:30",\
            "folder": {\
                "name": "Public Email Templates",\
                "id": "3652397000000000077"\
            },\
            "last_usage_time": "2022-10-26T11:55:45+05:30",\
            "associated": true,\
            "name": "Delete Records Notification",\
            "consent_linked": false,\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000000892003",\
            "editor_mode": "gallery",\
            "category": "normal",\
            "favorite": false\
        },\
        {\
            "created_time": "2018-11-14T15:30:13+05:30",\
            "attachments": null,\
            "subject": "Big Deal Alert",\
            "module": {\
                "api_name": "Deals",\
                "id": "3652397000000002181"\
            },\
            "last_version_statistics": {\
                "tracked": 1,\
                "delivered": 2,\
                "opened": 1,\
                "bounced": 0,\
                "sent": 4,\
                "clicked": 1\
            },\
            "created_by": null,\
            "modified_time": "2018-11-14T15:30:13+05:30",\
            "folder": {\
                "name": "Public Email Templates",\
                "id": "3652397000000000077"\
            },\
            "last_usage_time": "2022-11-21T15:12:14+05:30",\
            "associated": true,\
            "name": "Big Deal Alert",\
            "consent_linked": false,\
            "modified_by": null,\
            "id": "3652397000000000079",\
            "editor_mode": "rich_text",\
            "category": "system_templates",\
            "favorite": false\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 3,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/email-templates.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)