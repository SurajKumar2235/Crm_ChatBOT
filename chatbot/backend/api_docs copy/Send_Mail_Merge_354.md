
# Send Mail Merge

## Mail Merge

The Mail Merge function helps you to create customized documents such as forms, envelopes, letters, etc. Mail merge templates allow you to use CRM variables(merge fields) and create merged documents with the correct data from these variables. You can use these mail merge templates to send personalized emails, letters etc to other users without manually typing the information for every user. For more details, refer to [Managing Mail Merge Templates](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/customizing-templates/articles/mail-merge-templates#Mail_Merge_Limits_and_Purchases).

#### Purpose

Use the send mail merge API to use a mail merge template and send emails to users. You can also attach files either as inline images or separate attachments with the email through the API.

#### Endpoints

[POST /{module\_API\_name}/{record\_id}/actions/send\_mail\_merge](https://www.zoho.com/crm/developer/docs/api/v7/send-mail-merge.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_API\_name}/{record\_id}/actions/send\_mail\_merge

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.mailmerge.CREATE,ZohoWriter.documentEditor.ALL,ZohoWriter.merge.ALL,ZohoCRM.settings.emails.ALL

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/554023000003128089/actions/send_mail_merge"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST
```

##### Input JSON

- mail\_merge\_templateJSON object, mandatory

  - name string, mandatory



    The name of the mail merge template you want to use.
- from\_addressJSON object, optional



The email ID you want to use to send emails from. This email address must be the one of the org-verified email addresses or the current user's email ID.

- to\_addressJSON array, optional



The email ID you want to use to send emails to.

- cc\_emailJSON array, optional



The details of the email or the mail merge field you want to include in the email's cc. The keys are same as the ones in the "from\_address" JSON object.

- bcc\_emailJSON array, optional



The details of the email or the mail merge field you want to include in the email's bcc. The keys are same as the ones in the "from\_address" JSON object.

- subjectstring, optional



The subject line of the email.

- attachment\_namestring, optional



The name of the attachment you want to include in the email.

- typestring, mandatory when you want to send an attachment



The attachment type you want to include in the email. The possible values are **inline** to send the attachment as an inline image, and **attachment** to send the the file separately.


**Note**

- The values for "from\_address", "to\_address", "cc\_email", "bcc-email", and "subject" will be taken from the mail merge template. If you want to override the values in the template, you must specify the values of these fields in the input body.

#### Sample Input

``` json
Copied{
    "send_mail_merge": [\
        {\
            "mail_merge_template": {\
                "name": "mailmergename"\
            },\
            "from_address": {\
                "type": "email",\
                "value": "p.boyle@gmail.com"\
            },\
            "to_address": [\
                {\
                    "type": "email",\
                    "value": "smith@gmail.com"\
                },\
                {\
                    "type": "email",\
                    "value": "john@gmail.com"\
                }\
            ],\
            "subject": "Hi there",\
            "cc_email": [\
                {\
                    "type": "email",\
                    "value": "brie.c@gmail.com"\
                }\
            ],\
            "bcc_email": [\
                {\
                    "type": "email",\
                    "value": "ceo.zylker@gmail.com"\
                }\
            ],\
            "type": "attachment",\
            "attachment_name": "testdocument",\
            "message": "Big Deal"\
        }\
    ]
}
```

#### Possible Errors

- EXPECTED\_FIELD\_MISSINGHTTP 400



You have not specified the name in the "mail\_merge\_template" key.

**Resolution:** You must specify the name of the mail merge template in the "mail\_merge\_template" key.

- INVALID\_DATAHTTP 400



You have specified an incorrect name of the mail merge template.

**Resolution:** Provide the right name of the mail merge template.

- INVALID\_EMAILHTTP 400



You have specified an incorrect email address for one or more of the "from\_address", "to\_address", "cc\_email", and "bcc\_email" fields.

**Resolution:** The email IDs must belong to only the org-approved CRM users or the current user.

- DEPENDENT\_SERVICE\_ERRORHTTP 400



You are not authorized to use the email ID in the "from\_address".

**Resolution:** Contact your system administrator.

- INVALID\_DATAHTTP 400



You have specified an incorrect record ID in the URL.

**Resolution:** Provide the right record ID in the URL. Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the record ID.

- INVALID\_MODULEHTTP 400



The module name is invalid.

**Resolution:** Use the [Modules API](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html) to get the API name of the module.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified one or more mandatory keys in the request.

**Resolution:** Refer to the Input JSON section for the list of mandatory keys.

- INVALID\_REQUEST\_METHODHTTP 400



The HTTP request method is invalid.

**Resolution:** The HTTP request method for this API is POST.

- INTERNAL\_ERRORHTTP 500



Unhandled exception in server.

**Resolution:** Contact the support team at support@zohocrm.com.


#### Sample Response

``` json
Copied{
    "code": "SUCCESS",
    "details": {
        "report_link": "https://writer.zoho.com/report_link"
    },
    "message": "mail merge action initiated successfully",
    "status": "success"
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/send-mail-merge.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)