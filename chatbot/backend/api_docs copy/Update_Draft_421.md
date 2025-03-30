
# Update Email Draft

#### Purpose

To update email drafts associated with a record. You can update up to 100 email drafts in a single API call.

#### Endpoints

[PUT /{module}/{record-id}/\_\_email\_drafts](https://www.zoho.com/crm/developer/docs/api/v7/update-draft.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module}/{record-id}/\_\_email\_drafts

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

ALL - Full access to modules

UPDATE - Update access to the specified module

**Note**

You cannot update the inventory details of an email draft.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/2309216000000488477/__email_drafts"
-X PUT
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@updatedrafts.json"
```

#### Input JSON Keys

- idstring, mandatory



The unique ID of the email draft you want to update.

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



The scheduling details for the email. Please note that this time should be set in the future.



  - timeDateTime, mandatory



    The schedule time for the draft.
- attachmentsJSON array, optional



The attachments for the email.



  - idString, mandatory



    The unique id of the attachment.

  - file\_nameString, mandatory



    The file name of the attachment.

#### Sample input

``` json
Copied{
   "__email_drafts":[\
      {\
          "id": "4f8efdcbaf23fd33c939217d4e14222d66b4d6744c35f027f42b1f303016c181",\
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
               "user_name":"user3",\
               "email":"user3@zylker.com"\
            }\
         ],\
         "subject":"Test Draft update",\
         "content":"this is the updated content",\
         "rich_text":true,\
         "template":{\
            "id":"2309216000000000083"\
         },\
         "schedule_details":{\
            "time":"2023-03-25T14:00:54+05:30",\
            "timezone":"ASIA/KOLKATA"\
         }\
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



The id given seems to be invalid

**Resolution:** Specify a valid Record ID in the request URL.

- MANDATORY\_NOT\_FOUNDHTTP 400



Required field not found

**Resolution:** You have not specified one or more of the mandatory keys in the input body. Specify all the mandatory keys. Refer to the [**Input JSON keys**](https://www.zoho.com/crm/developer/docs/api/v7/update-draft.html#input_json_key) sections to know more.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** Specify a valid module api name in the request URL.

- NOT\_ALLOWEDHTTP 403



The inventory\_details field is not allowed in update draft request.

**Resolution:** You cannot update the inventory details of an email draft using the Update Drafts API. Create a new draft with the required inventory details.


#### Sample response

``` json
Copied{
    "__email_drafts": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4f8efdcbaf23fd33c939217d4e14222d66b4d6744c35f027f42b1f303016c181"\
            },\
            "message": "Draft updated Successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-draft.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)