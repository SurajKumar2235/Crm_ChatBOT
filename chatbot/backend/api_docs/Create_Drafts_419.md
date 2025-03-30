
# Create Email Drafts

#### Purpose

To create email drafts.

The created draft will be saved in the Email related list of the corresponding record. You can create up to 100 email drafts in a single API call.

#### Endpoints

[POST /{module}/{record-id}/\_\_email\_drafts](https://www.zoho.com/crm/developer/docs/api/v7/create-drafts.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module}/{record-id}/\_\_email\_drafts

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

##### Supported modules

Leads, Contacts, Deals, Accounts, Sales Orders, Purchase Orders, Invoices, Quotes, Cases, and Custom.

#### Scope

scope = ZohoCRM.Modules.ALL

(or)

scope = ZohoCRM.Modules.{module\_name}.{operation\_type}

#### Possible Module Names

leads, accounts, contacts, deals, quotes, salesorders, purchaseorders, invoices, cases, and custom

#### Possible operation types

ALL - Full access to modules

CREATE - Create access for the module

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/2309216000000488477/__email_drafts"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@createdrafts.json"
```

#### Input JSON Keys

- reply\_toemail address, optional



The email address that you want the user to reply to after receiving the mail.

- fromemail address, mandatory



The email address from which you want to send the email.

- toJSON array, optional



The user name and email address to which you want to send an email. Include multiple JSON objects if you want to create the email draft for multiple users.

- ccJSON array, optional



The user name and email address that you want to cc when you send an email. Include multiple JSON objects if you want to cc multiple users.

- bccJSON array, optional



The user name and email address that you want to bcc when you send an email. Include multiple JSON objects if you want to bcc multiple users.

- rich\_textBoolean, mandatory



Mention whether the format of the email is rich text or plain text. The possible options are :

**true**: rich text

**false** : plain text

- subjectString, optional



The subject of the email

- contentString, optional



The email content in plain text or rich text format.

- schedule\_detailsJSON object, optional



The scheduling details for the email. Please note that created drafts will be available in the **drafts** section and not the **scheduled** section of the Email related list.



  - timeDateTime, mandatory if **schedule\_details** key is specified



    The scheduled time for the draft. Please note that this time should be set in the future.
- inventory\_detailsJSON object, optional



Represents the details of the inventory template such as the template ID, paper type, and the view type. Please note that this key is valid only for inverntory modules.



  - inventory\_templateString, mandatory if **inventory\_details** key is specified



    The unique ID of the inventory template you want to use in your email, and the name of the template.

  - paper\_typeString, optional



    The paper type for digital printing. The possible values are **default**, **A4**, and **us\_letter**. The default value is **A4**.

  - view\_typeString, optional



    The way you want to view the template in. The possible values are **portrait** and **landscape**. The default value is **portrait**.
- attachmentsJSON array, optional



The attachments for the email. You can uplpoad the files using [Files API](https://www.zoho.com/crm/developer/docs/api/v7/upload-files-to-zfs.html).



  - idString, mandatory if **attachments** key is specified



    The unique of the attachment.

  - file\_nameString, mandatory



    The file name of the attachment. Please note that this name will override the actual name of the attachment.

#### Sample Input

``` json
Copied{
   "__email_drafts":[\
      {\
         "reply_to":"pat.boyle@zylker.com",\
         "from":"patricia.boyle@zylker.com",\
         "to":[\
            {\
               "user_name":"user1",\
               "email":"user1@zylker.com"\
            }\
         ],\
         "cc":[\
            {\
               "user_name":"user2",\
               "email":"user2@zylker.com"\
            }\
         ],\
         "bcc":[\
            {\
               "user_name":"user4",\
               "email":"user4email@zoho.com"\
            }\
         ],\
         "subject":"Test Draft",\
         "content":"This is the email content.",\
         "rich_text":true,\
         "schedule_details":{\
            "time":"2023-11-30T18:40:00+05:30"\
         },\
\
         "attachments":[\
            {\
               "id":"0b9e5596cdd8cafe6a5c09f78f095bd6434c863110a6d1e094285c6ebf9dd0d5db4eff3bbccadddbf58afe55b1dd7c71",\
               "file_name":"attachment.txt"\
            }\
         ]\
      }\
   ]
}
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



- The related id given seems to be invalid

**Resolution:** Specify a valid Record ID in the request URL.
- The attachment id given seems to be invalid

**Resolution:** Specify a valid attachment ID in the request body.

- MANDATORY\_NOT\_FOUNDHTTP 400



Required field not found

**Resolution:** You have not specified one or more of the mandatory keys in the input body. Specify all the mandatory keys. Refer to the **Input JSON keys** sections to know more.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** Specify a valid module api name in the request URL.

- NOT\_ALLOWEDHTTP 400



Schedule time should not be past time

**Resolution:** Specify a future time for the **schedule\_details** key value.


#### Sample Response

``` json
Copied{
    "__email_drafts": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4f8efdcbaf23fd33c939217d4e14222d2b151e840926b794ac5cfa907b76bc12"\
            },\
            "message": "Draft created Successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-drafts.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)