
# Get Email Drafts

#### Purpose

To fetch email drafts associated with a record in your CRM account.

#### Endpoints

[GET /{module}/{record-id}/\_\_email\_drafts](https://www.zoho.com/crm/developer/docs/api/v7/get-drafts.html)

[GET /{module}/{record-id}/\_\_email\_drafts/{draft-id}](https://www.zoho.com/crm/developer/docs/api/v7/get-drafts.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module}/{record-id}/\_\_email\_drafts

**To fetch a specific draft:**

{api-domain}/crm/{version}/{module}/{record-id}/\_\_email\_drafts/{draft-id}

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

ALL - Full access to the module

GET - Get Module data

##### Parameters

- pageinteger, _optional_



To get the list of records from the respective pages. The default value is **1**.

**Possible values**: Positive integer values only.

- per\_pageinteger, _optional_



To get the list of records available per page. The default and the maximum possible value is **10**.

**Possible values**: Positive integer values only.


**Note**

- You can fetch up to 10 email drafts in a single API call. To fetch more drafts, use **per\_page** and **page** parameters.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/2309216000000488477/__email_drafts/4f8efdcbaf23fd33c939217d4e14222d6d7c4ad5575b2ba66956d9f097ebf644"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- schedule\_detailsJSON object



The scheduling details for the email



  - timeDateTime



    The schedule time for the draft.
- summarystring



Displays the first 250 characters of the email content.

- ccJSON array



The user name and email address to cc the email to.

- created\_timedatetime



The date and time at which the email draft was created.

- bccJSON array



The user name and email address to bcc the email to.

- attachmentsJSON array



The attachments for the email draft.



  - idString



    The unique of the attachment.

  - file\_nameString



    The file name of the attachment.

  - file\_sizeString



    The attachment size in megabytes.

  - service\_nameString



    The service through which the file is uploaded to the ZFS.
- subjectString



The subject of the email.

- contentString



The content of the email draft.

- modified\_timedatetime



The date and time at which the email draft was last modified.

- reply\_toemail address



The email address that you want the user would reply to after receiving the mail.

- rich\_textBoolean



Specifies whether the format of the email is rich text or not. The possible options are :

**true**:rich text

**false** : plain text

- inventory\_detailsJSON object, optional



Represents the details of the inventory template such as the template ID, paper type, and the view type.

- fromemail address



The **from address** for the email draft.

- idstring



The unique ID of the email draft.

- toJSON array



The user name and email address to which the email is drafted to be sent.


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

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** Specify a valid module api name in the request URL.


#### Sample response

``` json
Copied{
    "__email_drafts": [\
        {\
            "schedule_details": {\
                "time": "2023-11-30T18:40:00+05:30"\
            },\
            "template": null,\
            "summary": "This is the email content.",\
            "cc": [\
                {\
                    "user_name": "user2",\
                    "email": "user2@zylker.com"\
                }\
            ],\
            "created_time": "2023-11-09T14:45:25+05:30",\
            "bcc": [\
                {\
                    "user_name": "user4",\
                    "email": "user4email@zoho.com"\
                }\
            ],\
            "attachments": [\
                {\
                    "file_name": "attachment.txt",\
                    "service_name": "ZFSAttached",\
                    "id": "0b9e5596cdd8cafe6a5c09f78f095bd6434c863110a6d1e094285c6ebf9dd0d5db4eff3bbccadddbf58afe55b1dd7c71",\
                    "file_size": "8990"\
                }\
            ],\
            "subject": "Test Draft",\
            "content": "This is the email content.",\
            "email_opt_out": false,\
            "modified_time": "2023-11-09T14:45:25+05:30",\
            "reply_to": "pat.boyle@zylker.com",\
            "rich_text": true,\
            "inventory_details": null,\
            "from": "patricia.boyle@zylker.com",\
            "id": "4f8efdcbaf23fd33c939217d4e14222d6d1cb21e4a45914fb9ba0c31c3c47330",\
            "to": [\
                {\
                    "user_name": "user1",\
                    "email": "user1@zylker.com"\
                }\
            ]\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-drafts.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)