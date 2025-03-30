
# Send Mail

#### Purpose

To send emails through an API.

[POST /{module\_api\_name}/{record\_id}/actions/send\_mail](https://www.zoho.com/crm/developer/docs/api/v7/send-mail.html)

### Request Details

#### Request URL

**All** \- {api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/actions/send\_mail

##### Supported modules

Leads, Contacts, Deals, Accounts, Sales Orders, Purchase Orders, Invoices, Quotes, Cases, Vendors, and Custom.

#### Header

**Authorization**: Zoho-oauthtoken <access\_token>

#### Scope

scope=ZohoCRM.send\_mail.{module\_name}.CREATE

(or) scope=ZohoCRM.send\_mail.all.CREATE

#### Possible Module Names

leads, accounts, contacts, deals, quotes, salesorders, purchaseorders, invoices, cases, and custom

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3652397000002181001/actions/send_mail"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
```

##### Request JSON

- fromJSON object, mandatory



The user name and email address from which you want to send an email.

- toJSON array, mandatory



The user name and email address to which you want to send an email. Include multiple JSON objects if you want to email multiple users.

- ccJSON array, optional



The user name and email address that you want to cc when you send an email. Include multiple JSON objects if you want to cc multiple users.

- bccJSON array, optional



The user name and email address that you want to bcc when you send an email. Include multiple JSON objects if you want to bcc multiple users.

- reply\_toJSON object, optional



The user name and email address that you want the user to reply to after receiving the mail.

- org\_emailBoolean, optional



The value true represents that the mail is sent from the organization's email address. Note that when you set this value to true, the mail is sent through Zoho CRM's server and not through the SMTP server that you have configured. The default value is false.

- in\_reply\_toJSON object, optional



Input this key only when you reply to an email. Note that when your mailbox is synced via IMAP or POP integration, all mail replies will form the 'Thread View' by default.



  - message\_idstring, mandatory



    It represents the previous mail's (the mail that you sent earlier) message\_ID.

  - ownerstring, optional



    Use this key to change new users to the mail by providing their unique ID.
- scheduled\_timeDateTime in ISO8601 format, optional



Input this key only when you want to schedule an email. The date and time must be in the ISO8601 format.

- subjectString, optional



The subject of the email.

- mail\_formatString, optional



The format of the email such as plain text or rich text. The value **html** indicates the rich text format and **text** indicates the plain text format.

- contentString, optional



The encrypted ID obtained when you uploaded a file to ZFS using the [Files API](https://www.zoho.com/crm/developer/docs/api/v7/upload-files-to-zfs.html). Include multiple JSON objects if you want to attach multiple files.

- templateJSON object, optional



The [unique ID](https://www.zoho.com/crm/developer/docs/api/v7/email-templates.html) of the template from which the subject, content, and attachments will be included in the email. If you specify the template ID, and include the keys "subject", "content", "attachments", the values in these keys will only be considered.


#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "from": {\
                "user_name": "Patricia Boyle",\
                "email": "p.boyle@zoho.com"\
            },\
            "to": [\
                {\
                    "user_name": "Jason Smith",\
                    "email": "j.smith@zoho.com"\
                }\
            ],\
            "cc": [\
                {\
                    "user_name": "user3",\
                    "email": "user3email@zoho.com"\
                }\
            ],\
            "bcc": [\
                {\
                    "user_name": "user4",\
                    "email": "user4email@zoho.com"\
                }\
            ],\
            "reply_to": {\
                "user_name": "user5",\
                "email": "user5email@zoho.com"\
            },\
            "org_email": false,\
            "in_reply_to": {\
                "message_id": "c7e44db11d67a68aec57814b5c9a6edf29c64701ed4dc3e5603a274071f846da4c55f352740772f45db0e2aaea68527b",\
                "owner": {\
                    "id": "2423488000000483001"\
                }\
            },\
            "scheduled_time": "2021-06-12T12:12:12+05:30",\
            "subject": "Testing Send Mail API",\
            "content": "<h3><span style=\"background-color: rgb(254, 255, 102)\">Mail is of rich text format</span></h3><h3><span style=\"background-color: rgb(254, 255, 102)\"><img src=\"https://www.zohoapis.com/crm/viewInLineImage?fileContent=2cceafa194d037b63f2000181dd818646fd5e5167a274098b625c35654a20ed2\"></span></h3><h3><span style=\"background-color: rgb(254, 255, 102)\">REGARDS,</span></h3><div><span style=\"background-color: rgb(254, 255, 102)\">AZ</span></div><div><span style=\"background-color: rgb(254, 255, 102)\">ADMIN</span></div> <div></div>",\
            "mail_format": "html",\
            "attachments": [\
                {\
                    "id": "2cceafa194d037b63f2000181dd81864b4812b1f8b0b4fe0949a982de89fa75a"\
                }\
            ],\
            "template": {\
                "id": "3652397000002497001"\
            }\
        }\
    ]
}
```

Show full

Show less

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "message_id": "2cceafa194d037b63f2000181dd8186486f1eb0360aee76d802b6d376dea22e2"\
            },\
            "message": "Your mail has been scheduled successfully.",\
            "status": "success"\
        }\
    ]
}
```

##### Request JSON to send an email to the inventory modules

For inventory modules (Quotes, Sales Orders, Purchase Orders, Invoices), the inventory templates will be sent as email attachments.

- inventory\_detailsJSON object, mandatory



Represents the details of the inventory template such as the template ID, paper type, and the view type.

- inventory\_templateJSON object, mandatory



The [unique ID of the inventory template](https://www.zoho.com/crm/developer/docs/api/v7/inventory_templates.html) you want to use in your email, and the name of the template.

- paper\_typeString, optional



The paper type for digital printing. The possible values are **default**, **A4**, and **us\_letter**. The default value is **A4**.

- view\_typeString, optional



The way you want to view the template in. The possible values are **portrait** and **landscape**. The default value is **portrait**.


#### Sample request to send an email from the inventory module

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Purchase_Orders/3652397000000491180/actions/send_mail"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "from": {\
                "user_name": "Patricia Boyle",\
                "email": "p.boyle@abc.com"\
            },\
            "to": [\
                {\
                    "user_name": "user1",\
                    "email": "user1@gmail.com"\
                }\
            ],\
            "inventory_details": {\
                "inventory_template": {\
                    "id": "3652397000000187009",\
                    "name": "CT Scan Machines.pdf"\
                },\
                "paper_type": "A4",\
                "view_type": "portrait"\
            }\
        }\
    ]
}
```

Show full

Show less

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "message_id": "2cceafa194d037b63f2000181dd8186468a4f140fd300509994fb12dd4c97e67"\
            },\
            "message": "Your mail has been sent successfully.",\
            "status": "success"\
        }\
    ]
}
```

##### Request JSON for GDPR-related data

Use the following keys when you have enabled GDPR compliance settings, and want to send an email asking for the user's consent or request data. Note that it is mandatory to send the consent form in the email's "content" key, when you ask for the lead's/contact's consent.

- consent\_emailBoolean, mandatory when you want to ask for the receiver's consent



The value **true** indicates that the mail is a consent mail. The default value is **false**.

- data\_subject\_requestJSON object, optional



The unique ID of the data subject request and the "type".

The "type" key takes one of the following values.



- **access** \- Represents that the Data Subject can view their personal data on sending an email with information about personal fields.
- **rectify** \- Represents that the Data Subject can rectify personal fields by sending a .CSV file containing personal information and updating changes manually.
- **export** \- Represents that the Data Subject will have a copy of their personal data in .CSV format, which can be used in other systems.

**Note**

- Emails are associated to record based on Entity ID and not by email addresses in to/cc/bcc.
- You can only send emails from one of the allowed ["from"](https://www.zoho.com/crm/developer/docs/api/v7/get-from-addresses-list.html) addresses.
- For details about the edition-wise limits on the number of emails you can send, refer to [Email Limits](https://help.zoho.com/portal/en/kb/crm/integrations/zoho/zoho-mail/articles/sending-and-receiving-mail#Email_Limits).
- The format of including an inline image in the "content" key is <img src="https://<base-url>/crm/viewInLineImage?fileContent={file id from upload inline images api}\\>
- You must enable compliance settings and data processing for the records before you can send them the consent form in an email.

#### Sample request to send GDPR-related data

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3652397000002181001/actions/send_mail"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
```

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "from": {\
                "user_name": "Patricia Boyle",\
                "email": "p.boyle@abc.com"\
            },\
            "to": [\
                {\
                    "user_name": "user1",\
                    "email": "user1email@zoho.com"\
                }\
            ],\
            "subject": "Mail subject",\
            "content": "<br><a href=\"${ConsentForm.en_US}\" id=\"ConsentForm\" class=\"en_US\" target=\"_blank\">Consent form link</a><br><br><br><br><br><h3><span style=\"background-color: rgb(254, 255, 102)\">REGARDS,</span></h3><div><span style=\"background-color: rgb(254, 255, 102)\">AZ</span></div><div><span style=\"background-color: rgb(254, 255, 102)\">ADMIN</span></div> <div></div>",\
            "consent_email": true,\
            "mail_format": "html",\
            "data_subject_request": {\
                "id": "482134000000568909",\
                "type": "access"\
            }\
        }\
    ]
}
```

Show full

Show less

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "message_id": "2cceafa194d037b63f2000181dd8186468a4f140fd300509994fb12dd4c97e67"\
            },\
            "message": "Your mail has been sent successfully.",\
            "status": "success"\
        }\
    ]
}
```

#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



Either the sender's or the recipient's email address is missing in the input.

**Resolution:** Use the "parent\_api\_name" key for the missing details in the input. For sender's email address, get the list of allowed "from" addresses through [this](https://www.zoho.com/crm/developer/docs/api/v7/get-from-addresses-list.html) API.

- LIMIT\_EXCEEDEDHTTP 400



You have exceeded the maximum limit of sending 100 emails per day.

**Resolution:** Send emails the next day or contact support@zohocrm.com to increase your limit.

- NOT\_ALLOWEDHTTP 400



This feature is not supported for your edition.

**Resolution:** Contact your administrator.

- NOT\_ALLOWEDHTTP 400



The intended receiver has not consented to receive your email.

**Resolution:** Per GDPR compliance, every lead/contact must grant their consent to receive emails. Send them the consent form and obtain their consent to send emails.

- NOT\_ALLOWEDHTTP 400



The intended receiver has opted to stop email communication.

**Resolution:** Per GDPR compliance, every lead/contact must grant their consent to receive emails. Send them the consent form and obtain their consent to send emails.

- NOT\_ALLOWEDHTTP 400



The record does not have either primary or secondary email addresses.

**Resolution:** The associated contact does not have an email address in the Deals module. Add either a primary, secondary, or custom email address in the Deals module to send emails.

- NOT\_ALLOWEDHTTP 400



Emails from either the record's email address or the recipient's email address have bounced and thus, blocked.

**Resolution:** Refer to the "details" key in the response to know which email address is blocked. Contact support@zohocrm.com.

- INVALID\_DATAHTTP 400



The record ID in the request is invalid.

**Resolution:** Provide a valid record ID.

- INVALID\_DATAHTTP 400



You cannot use this email address to send mails from.

**Resolution:** You can send emails only from the [list of allowed "from" addresses](https://www.zoho.com/crm/developer/docs/api/v7/get-from-addresses-list.html).

- INVALID\_DATAHTTP 400



Compliance settings are not enabled for the record.

**Resolution:** You must enable compliance settings and data processing for the record before you can send emails with the consent form.

- INVALID\_DATAHTTP 400



You have provided an incorrect encrypted ID for the attachment.

**Resolution:** Refer to the "details" key to know which key has the incorrect input.

- FILE\_SIZE\_EXCEEDSHTTP 400



The total size of the attachment has exceeded 10 MB.

**Resolution:** You can include multiple attachment in the email but the size of the attachments,in total, must not exceed 10 MB.

- CUSTOM\_ERRORHTTP 400



An error occurred while connecting to the SMTP server.

**Resolution:** Ensure that you give proper credentials in email configuration or login again.

- FEATURE\_NOT\_SUPPORTEDHTTP 400



Your edition does not support sending scheduled emails.

**Resolution:** This feature is not available in the trial and free editions. Please contact your administrator.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.

- NO\_PERMISSIONHTTP 403



You have enabled "Email Opt Out" for that record.

**Resolution:** Disable "Email Opt Out" to send emails.

- NO\_PERMISSIONHTTP 403



You have not confirmed your account.

**Resolution:** Confirm the registered account to send emails.

- NO\_PERMISSIONHTTP 403



You have not confirmed your email associated to your account.

**Resolution:** Confirm the registered email.


© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/send-mail.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)