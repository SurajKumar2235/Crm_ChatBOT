
# Sign Mail Merge

#### Purpose

To send a mail merge document for signing and approval.

To use this API, you must initially access [the Merge and Sign dialogue](https://help.zoho.com/portal/en/kb/writer/writer-limitations/articles/prerequisites-for-merge-sign-and-sign-apis-in-writer) from the Writer UI once. Please note that you need to do this only once.

#### Endpoints

[POST /{module\_API\_name}/{record\_id}/actions/sign\_mail\_merge](https://www.zoho.com/crm/developer/docs/api/v7/sign-mail-merge.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_API\_name}/{record\_id}/actions/sign\_mail\_merge

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.mailmerge.CREATE,ZohoWriter.documentEditor.ALL,ZohoWriter.merge.ALL,ZohoSign.documents.ALL

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/554023000003128089/actions/sign_mail_merge"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST
```

##### Input JSON

- mail\_merge\_templateJSON object, mandatory

  - name string, mandatory



    The name of the mail merge template you want to use.
- file\_namestring, mandatory



The name of the file you want to send for signing and approval.

- sign\_in\_orderBoolean, optional



The value **true** indicates that the document will first be sent for approval and then for signing.

- signersJSON array, optional



The details of the users you want to sign the document.



- **recipient\_name**, _string, mandatory_ \- the name of the user who has to sign or approve the document.
- **action\_type**, _string, mandatory_ \- the type of action you want the user to perform. The possible values are **sign** to sign the document, and **approve** to approve the document.
- **recipient**, _JSON object, mandatory_
  - **value**, _string, mandatory_ \- the email ID of the user who has to sign or approve the document.

**Note**

- The values for the fields "recipient\_name", "recipient.value" will be taken from the mail merge template. If you want to override the values in the template, you must specify the values of these fields in the input body.

#### Sample Input

``` json
Copied{
    "sign_mail_merge": [\
        {\
            "mail_merge_template": {\
                "name": "mailmergename"\
            },\
            "file_name": "testdocument",\
            "sign_in_order": true,\
            "signers": [\
                {\
                    "recipient_name": "Smith",\
                    "action_type": "sign",\
                    "recipient": {\
                        "type": "email",\
                        "value": "smith@gmail.com"\
                    }\
                },\
                {\
                    "recipient_name": "John",\
                    "action_type": "approve",\
                    "recipient": {\
                        "type": "email",\
                        "value": "john@gmail.com"\
                    }\
                },\
                {\
                    "recipient_name": "John",\
                    "action_type": "approve",\
                    "recipient": {\
                        "type": "merge_field",\
                        "value": "${!Leads.Last_Name}"\
                    }\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- EXPECTED\_FIELD\_MISSINGHTTP 400



You have not specified the name in the "mail\_merge\_template" key.

**Resolution:** You must specify the name of the mail merge template in the "mail\_merge\_template" key.

- INVALID\_DATAHTTP 400



You have specified an incorrect name of the mail merge template.

**Resolution:** Provide the right name of the mail merge template.

- INVALID\_EMAILHTTP 400



You have specified an incorrect email address for the "recipient" field.

**Resolution:** The email ID must belong to only the org-approved CRM users or the current user.

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
    "message": "sign mail merge action initiated successfully",
    "status": "success"
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/sign-mail-merge.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)